export interface Product{
    id:number;
    name: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
}


export interface CartItem{
    id: number;
    name: string
    price: number;
    amount: number;
}