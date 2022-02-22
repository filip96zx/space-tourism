export default interface Destination {
  id: number;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
  imagePaths: {
    webp: string;
    png: string;
  };
}