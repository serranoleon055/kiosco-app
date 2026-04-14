import { useState } from 'react';
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart';
import { products } from './data/product';
import { useCart } from './hooks/useCart';


const categories = [ ...new Set( products.map( (item) => item.category ) ) ];


function App(){

    
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const filteredProducts = selectedCategory === 'Todas' ? products : products.filter( (item) => item.category === selectedCategory );


    const { cart, addToCart, removeFromCart, clearCart } = useCart();  


    

    return (
        <div className=' min-h-screen bg-gray-100 '>

            <header className='bg-white shadow-sm p-4 mb-6 ' >
                <h1 className='text-2xl font-bold text-gray-800' >🏪 Kiosco App</h1>
            </header>

            <main className='max-w-6xl mx-auto px-4 flex gap-6' >

                <div className="flex-1">
                    <div className="flex gap-2 mb-4">
                        {['Todas', ...categories].map( (cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                                        ${selectedCategory === cat 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <ProductList addToCart={addToCart} products={filteredProducts} />
                </div>

                <div className='w-80 shrink-0 ' >
                    <Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} />
                </div>

            </main>

            
            
        </div>
    )
}

export default App;