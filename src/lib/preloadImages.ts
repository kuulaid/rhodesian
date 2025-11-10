export function preloadImages(urls: string[]) {
  urls.forEach(src => {
    const img = new Image();
    img.src = src; 
  });
}
