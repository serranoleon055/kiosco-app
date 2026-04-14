import type { CartItem } from "../types"

interface Props{
    cart: CartItem[];
    clearCart: () => void;
    removeFromCart: (id: number) => void;
}



export const Cart = ( {cart, clearCart, removeFromCart}: Props ) => {

    if(cart.length === 0){
        return (
            <div className="bg-white rounded-lg shadow p-4 sticky top-4" >
                <h2 className="text-lg font-bold text-gray-800 mb-4">🛒 Carrito</h2>
                <p className="text-gray-400 text-sm">El carrito esta vacio</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🛒 Carrito</h2>

            <div className="flex flex-col gap-2 mb-4">
                {
            
                    cart.map( (item) => (
                        <div key={item.id} className="flex justify-between text-sm" >

                            <span className="text-gray-700">{item.name} x{item.amount}</span>

                            <div className="flex items-center gap-2">
                                <span className="font-medium">${(item.price * item.amount).toLocaleString()}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 text-xs font-bold">
                                    x
                                </button>
                            </div>
                            
                        </div>
                    ) )

                }
            </div>
            
            <div className="border-t pt-3 mb-4">
                <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-green-600">
                        ${ cart.reduce( (total, item)=> total + (item.price * item.amount ) , 0 ).toLocaleString() }
                    </span>
                </div>
            </div>

            <button
                onClick={() => clearCart()} 
                className="w-full bg-red-500 text-white py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
            >
                Vaciar Carrito
            </button>


        </div>
    )
}
