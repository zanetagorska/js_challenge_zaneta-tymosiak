import { CartItem } from "./Cart.types"
import { ProductType } from "./Product.types"

export type RootState = {
  wishlist: string[];
  productList: ProductType[];
  cart: CartItem[];
}

export type WishlistState = {
  wishlist: string[];
}
