export type Category = {
  id: string;
  known: number;
  name: string;
  product: number;
  url: string;
};

export type Product = {
  id: string;
  product_name: string;
  categories: string;
  nutrition_grades: string;
  image_url: string;
};
