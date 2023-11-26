import { useRef, useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";

interface LazyImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  borderRadius: string;
}
const LazyImage = ({
  src,
  alt,
  width,
  height,
  borderRadius,
}: LazyImageProps) => {
  const imageRef = useRef(null);
  const [url, setUrl] = useState(`/Placeholder.png`);

  const [isInViewport, setInViewport] = useState(false);
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isInViewport) {
      setInViewport(true);
      setUrl(src);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [imageRef, options]);

  return (
    <Image
      src={url}
      ref={imageRef}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default LazyImage;
