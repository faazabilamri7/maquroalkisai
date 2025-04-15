"use client";

import * as React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string;
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    { src, alt, fallbackSrc = "/placeholder.svg", className, ...props },
    ref
  ) => {
    const [imgSrc, setImgSrc] = React.useState<string | any>(src);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
      setImgSrc(src);
      setIsError(false);
    }, [src]);

    const handleError = () => {
      setIsError(true);
      setImgSrc(fallbackSrc);
    };

    return (
      <NextImage
        ref={ref as any}
        src={imgSrc}
        alt={alt}
        className={cn(isError && "placeholder-image", className)}
        onError={handleError}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
