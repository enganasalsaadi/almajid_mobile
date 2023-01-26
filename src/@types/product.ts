export interface productItem {
  product_id: number;
  title: string;
  description: string;
  price: number;
}

export type ProductContextType = {
  ifInWishList: (product: productItem) => boolean;
  addRemoveFromWishList: (product: productItem) => void;
};
