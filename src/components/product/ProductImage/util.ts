export function getImageSource(src?: string) {
  if (!src) {
    return "/images/product-placeholder.webp";
  }

  return src;
}
