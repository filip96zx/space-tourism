export default interface Crew {
  id: number;
  role: string;
  name: string;
  description: string;
  imagePaths: {
    webp: string;
    png: string;
  };
}