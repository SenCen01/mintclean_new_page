export function escapeHtml(value: string | undefined | null): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function firstName(fullName: string | undefined | null): string {
  const trimmed = String(fullName ?? "").trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0];
}

export function capitalize(value: string | undefined | null): string {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mintclean-web.vercel.app";

export const logoUrl = `${siteUrl}/images/MintClean_White.png`;

export const EMAIL_COLORS = {
  brandDark: "#0b1f1c",
  paper: "#f4f7f6",
  ink: "#111827",
  ash: "#5b6b68",
  hair: "#dfe7e5",
  primary: "#06a678",
  primaryBright: "#0cc28f",
} as const;
