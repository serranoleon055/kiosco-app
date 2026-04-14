import type { Product } from "../types";
import { ProductCard } from "./ProductCard"

interface Props{
    addToCart: (product: Product) => void;
    products: Product[];
}


export const ProductList = ( { addToCart, products }: Props ) => {
    return (
        <div className="grid grid-cols-3 gap-4" >
            {
                products.map( (product) =>(
                    <ProductCard  producto={product} key={product.id} addToCart={addToCart} />
                ) )
            }
        </div>

    )

}
