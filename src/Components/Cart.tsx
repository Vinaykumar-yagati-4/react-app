import { useContext } from "react";
import { CartContext } from "../contextapi/CartContext";

function Cart() {

    const { cart} = useContext(CartContext);

    return (

        <div className="p-5">

            <h1 className="text-3xl font-bold mb-5">
                🛒 Cart ({cart.length})
            </h1>

            {

                cart.length === 0 ?

                    <h2>Cart is Empty</h2>

                    :

                    cart.map((product: any) => (

                        <div
                            key={product.id}
                            className="border rounded p-4 mb-3 flex items-center gap-5"
                        >

                            <img
                                src={product.imageurl}
                                width="100"
                                alt={product.name}
                            />

                            <div>

                                <h2>{product.name}</h2>

                                <h3>₹ {product.price}</h3>

                                <h4>Qty : {product.quantity}</h4>

                            </div>

                        </div>

                    ))

            }

        </div>

    );

}

export default Cart;