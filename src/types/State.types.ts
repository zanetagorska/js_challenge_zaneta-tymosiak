import { CartItem } from "./Cart.types"
import { Product } from "./Product.types"

export type RootState = {
  wishlist: string[];
  productList: Product[];
  cart: CartItem[];
}

export type WishlistState = {
  wishlist: string[];
}

export type ProductState = {
  productList: Product[];
}