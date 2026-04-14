import type { Product } from "../types";

interface Props{
    producto: Product;
    addToCart: (product: Product) => void;
}

export const ProductCard = ( {producto, addToCart}: Props ) => {
    
    const {name, brand, category, price, stock} = producto;


    return(
        <div className={ ` bg-white rounded-lg shadow p-4 flex flex-col gap-2 ${stock === 0 ? 'opacity-50' : ''} ` } >
            <div>
                <h2 className="font-semibold text-gray-800" >{name}</h2>
                <p className="text-xs text-gray-400">{brand} . {category}</p>
            </div>

            
            <p className="text-lg font-bold text-green-600">${price.toLocaleString()} </p>
            <p className="text-sm text-gray-500"> Stock: {stock} </p>

            <button 
                disabled={stock === 0} 
                onClick={() => addToCart(producto)} 
                className="mt-auto bg-blue-600 text-white py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            > 
                {stock === 0 ? "Sin Stock" : "Agregar al Carrito"} 
            </button>


        </div>
    );
}
