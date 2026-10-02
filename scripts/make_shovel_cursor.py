import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SCALE = 4          # supersample factor for crisp anti-aliasing
PAD = 96            # generous padding so rotation never clips
CANVAS = 180
W = H = (CANVAS + PAD * 2) * SCALE // 1
FINAL = 72           # final cursor size

def s(v):
    return int(round(v * SCALE))

def linear_gradient(size, c0, c1, angle_deg):
    """RGBA image, gradient from c0 (start) to c1 (end) along angle_deg. Vectorized."""
    w, h = size
    ramp = np.tile(np.linspace(0, 255, w, dtype=np.uint8), (h, 1))
    grad = Image.fromarray(ramp, mode="L").rotate(angle_deg, expand=False, resample=Image.BICUBIC)
    t = np.asarray(grad, dtype=np.float32) / 255.0
    out = np.empty((h, w, 4), dtype=np.uint8)
    for i in range(3):
        out[..., i] = (c0[i] + (c1[i] - c0[i]) * t).astype(np.uint8)
    out[..., 3] = 255
    return Image.fromarray(out, mode="RGBA")

def polygon_mask(size, points):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).polygon(points, fill=255)
    return m

def ellipse_mask(size, box):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).ellipse(box, fill=255)
    return m

canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cx = W // 2

# ---- Design geometry (unrotated, handle up, blade/scoop facing down) ----
# all in "design units" (pre-SCALE), relative to a local origin; we place
# the whole assembly centered horizontally, starting PAD below the top.
grip_cy = s(PAD + 14)
grip_r = s(11)
shaft_top = (cx, s(PAD + 24))
shaft_bottom = (cx - s(6), s(PAD + 92))
blade_top_l = (cx - s(14), s(PAD + 86))
blade_top_r = (cx + s(10), s(PAD + 86))
blade_bot_l = (cx - s(26), s(PAD + 122))
blade_bot_r = (cx + s(22), s(PAD + 122))
blade_tip = (cx - s(4), s(PAD + 134))  # the digging tip / hotspot point

# =========================================================
# 1) DROP SHADOW — blurred dark silhouette, offset down-right
# =========================================================
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
offset = (s(5), s(7))

def off(p):
    return (p[0] + offset[0], p[1] + offset[1])

sd.line([off(shaft_top), off(shaft_bottom)], fill=(0, 0, 0, 160), width=s(9))
sd.ellipse(
    [cx - grip_r + offset[0], grip_cy - grip_r + offset[1],
     cx + grip_r + offset[0], grip_cy + grip_r + offset[1]],
    fill=(0, 0, 0, 160),
)
sd.polygon(
    [off(blade_top_l), off(blade_top_r), off(blade_bot_r), off(blade_tip), off(blade_bot_l)],
    fill=(0, 0, 0, 170),
)
shadow = shadow.filter(ImageFilter.GaussianBlur(s(5)))
canvas.alpha_composite(shadow)

# =========================================================
# 2) WHITE OUTLINE — thick silhouette underneath for contrast
# =========================================================
outline = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(outline)
od.line([shaft_top, shaft_bottom], fill=(255, 255, 255, 255), width=s(13))
od.ellipse(
    [cx - grip_r - s(3), grip_cy - grip_r - s(3), cx + grip_r + s(3), grip_cy + grip_r + s(3)],
    fill=(255, 255, 255, 255),
)
blade_outline_pts = [
    (blade_top_l[0] - s(4), blade_top_l[1] - s(2)),
    (blade_top_r[0] + s(4), blade_top_r[1] - s(2)),
    (blade_bot_r[0] + s(4), blade_bot_r[1]),
    (blade_tip[0], blade_tip[1] + s(4)),
    (blade_bot_l[0] - s(4), blade_bot_l[1]),
]
od.polygon(blade_outline_pts, fill=(255, 255, 255, 255))
canvas.alpha_composite(outline)

# =========================================================
# 3) HANDLE / SHAFT — wood gradient, light highlight stripe
# =========================================================
shaft_grad = linear_gradient((W, H), (143, 94, 56, 255), (72, 45, 26, 255), 60)
shaft_mask_img = Image.new("L", (W, H), 0)
ImageDraw.Draw(shaft_mask_img).line([shaft_top, shaft_bottom], fill=255, width=s(7))
shaft_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shaft_layer.paste(shaft_grad, (0, 0), shaft_mask_img)
canvas.alpha_composite(shaft_layer)

# thin highlight along one edge of the shaft
hl_mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(hl_mask).line(
    [(shaft_top[0] - s(2), shaft_top[1]), (shaft_bottom[0] - s(2), shaft_bottom[1])],
    fill=255, width=s(1.6),
)
hl_layer = Image.new("RGBA", (W, H), (255, 224, 178, 160))
canvas.paste(hl_layer, (0, 0), hl_mask)

# =========================================================
# 4) D-GRIP — dark metal/rubber ring
# =========================================================
grip_outer = ellipse_mask(
    (W, H), [cx - grip_r, grip_cy - grip_r, cx + grip_r, grip_cy + grip_r]
)
grip_inner = ellipse_mask(
    (W, H),
    [cx - grip_r + s(4), grip_cy - grip_r + s(4), cx + grip_r - s(4), grip_cy + grip_r - s(4)],
)
import PIL.ImageChops as ImageChops
grip_ring_mask = ImageChops.subtract(grip_outer, grip_inner)
grip_grad = linear_gradient((W, H), (70, 70, 74, 255), (24, 24, 26, 255), 45)
grip_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
grip_layer.paste(grip_grad, (0, 0), grip_ring_mask)
canvas.alpha_composite(grip_layer)

# =========================================================
# 5) BLADE — steel gradient + lip shading + rivets
# =========================================================
blade_pts = [blade_top_l, blade_top_r, blade_bot_r, blade_tip, blade_bot_l]
blade_mask = polygon_mask((W, H), blade_pts)
blade_grad = linear_gradient((W, H), (224, 231, 235, 255), (134, 150, 158, 255), 115)
blade_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
blade_layer.paste(blade_grad, (0, 0), blade_mask)
canvas.alpha_composite(blade_layer)

# darker lower lip (the digging edge) for depth
lip_pts = [
    (blade_bot_l[0] + s(3), blade_bot_l[1] - s(3)),
    (blade_bot_r[0] - s(3), blade_bot_r[1] - s(3)),
    (blade_tip[0], blade_tip[1]),
]
lip_mask = polygon_mask((W, H), lip_pts)
lip_layer = Image.new("RGBA", (W, H), (96, 110, 118, 255))
canvas.paste(lip_layer, (0, 0), ImageChops.multiply(lip_mask, blade_mask))

# blade outline stroke for crisp edge definition
ImageDraw.Draw(canvas).polygon(blade_pts, outline=(70, 84, 92, 255), width=s(1.6))

# a soft diagonal glint/highlight on the blade
glint = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glint)
gd.polygon(
    [
        (blade_top_l[0] + s(4), blade_top_l[1] + s(3)),
        (blade_top_l[0] + s(10), blade_top_l[1] + s(3)),
        (blade_tip[0] + s(4), blade_tip[1] - s(6)),
        (blade_tip[0] - s(2), blade_tip[1] - s(6)),
    ],
    fill=(255, 255, 255, 110),
)
glint = glint.filter(ImageFilter.GaussianBlur(s(2)))
glint_masked = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glint_masked.paste(glint, (0, 0), blade_mask)
canvas.alpha_composite(glint_masked)

# two small rivets where the blade meets the shaft (nice tiny detail)
for dx in (-s(6), s(6)):
    rx, ry = cx + dx, blade_top_l[1] + s(2)
    ImageDraw.Draw(canvas).ellipse(
        [rx - s(2), ry - s(2), rx + s(2), ry + s(2)], fill=(60, 70, 76, 255)
    )

# =========================================================
# 6) SNOW — a little scooped pile sitting in the blade, for charm
# =========================================================
snow_pts = [
    (blade_top_l[0] + s(6), blade_top_l[1] + s(10)),
    (blade_top_r[0] - s(4), blade_top_r[1] + s(10)),
    (cx + s(4), blade_top_l[1] + s(24)),
    (cx - s(14), blade_top_l[1] + s(22)),
]
snow_mask = polygon_mask((W, H), snow_pts)
snow_mask_clipped = ImageChops.multiply(snow_mask, blade_mask)
snow_grad = linear_gradient((W, H), (255, 255, 255, 255), (214, 232, 238, 255), 90)
snow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
snow_layer.paste(snow_grad, (0, 0), snow_mask_clipped)
canvas.alpha_composite(snow_layer)
# tiny white outline around the snow clump's front edge so it reads as separate from the blade
ImageDraw.Draw(canvas).line([snow_pts[3], snow_pts[0]], fill=(255, 255, 255, 230), width=s(1))

# =========================================================
# Rotate slightly for a dynamic "mid-scoop" angle, keeping it facing down
# =========================================================
TILT_DEG = 14
rotated = canvas.rotate(TILT_DEG, resample=Image.BICUBIC, expand=False, center=(cx, grip_cy))

def rotate_point(p, angle_deg, center):
    a = math.radians(-angle_deg)  # PIL rotates CCW for positive angle on-screen (y-down); match visually
    cx0, cy0 = center
    x, y = p[0] - cx0, p[1] - cy0
    xr = x * math.cos(a) - y * math.sin(a)
    yr = x * math.sin(a) + y * math.cos(a)
    return (xr + cx0, yr + cy0)

tip_rot = rotate_point(blade_tip, TILT_DEG, (cx, grip_cy))

# crop a square around the shape, then downscale to FINAL
crop_half = s(100)
left = cx - crop_half
top = grip_cy - s(30)
cropped = rotated.crop((left, top, left + crop_half * 2, top + crop_half * 2))
final = cropped.resize((FINAL, FINAL), Image.LANCZOS)

hotspot_x = (tip_rot[0] - left) * FINAL / (crop_half * 2)
hotspot_y = (tip_rot[1] - top) * FINAL / (crop_half * 2)

final.save("shovel-cursor.png")
print("saved", final.size, "hotspot ~", round(hotspot_x), round(hotspot_y))
