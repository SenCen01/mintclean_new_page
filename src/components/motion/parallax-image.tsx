"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  wrapperClassName?: string;
  range?: number;
};

export function ParallaxImage({
  wrapperClassName,
  range = 60,
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={wrapperClassName}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and supplied via the spread */}
        <Image {...imageProps} fill />
      </motion.div>
    </div>
  );
}
