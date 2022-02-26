export default interface Technology {
  id: number;
  title: string;
  description: string;
  imagePaths: {
    landscape: string;
    portrait: string;
  };
}