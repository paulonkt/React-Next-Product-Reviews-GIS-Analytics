export type Review = {
  author: string;
  comment: string;
  rating: number;
};

export type Category = {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;
  priority?: boolean;
};

export type CategoryProps = {
  category: Category;
};

export type Product = {
  id: number;
  categoryId: number;
  slug: string;
  name: string;
  image: string;
  rating?: number;
  reviews?: number;
  priority?: boolean;
};

export type ProductProps = {
  product: Product;
};

export type RatingsMap = {
  [productId: number]: {
    rating: number;
    reviews: number;
  };
};