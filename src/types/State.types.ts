import { CartItem } from "./Cart.types"
import { Product } from "./Product.types"

export interface WishlistState {
  wishlist: string[];
}

export interface ProductState {
  productList: Product[];
}

export interface CartState {
  cart: CartItem[];
};

export interface RootState extends WishlistState, ProductState, CartState {}
