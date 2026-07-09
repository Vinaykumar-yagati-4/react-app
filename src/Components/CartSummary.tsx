type CartSummaryProps = {

    totalPrice: number;

    clearCart: () => void;

};

function CartSummary({

    totalPrice,

    clearCart

}: CartSummaryProps) {

    const deliveryCharge = totalPrice >= 100 ? 0 : 40;

    const discount = totalPrice >= 1000 ? 100 : 0;

    const grandTotal = totalPrice + deliveryCharge - discount;

    return (

        <div className="sticky bottom-5 bg-white rounded-3xl shadow-2xl p-8 mt-10">

            <h2 className="text-2xl font-bold mb-6">

                Bill Details

            </h2>

            <div className="space-y-3 text-lg">

                <div className="flex justify-between">

                    <span>Items Total</span>

                    <span>₹ {totalPrice}</span>

                </div>

                <div className="flex justify-between">

                    <span>Delivery Charge</span>

                    <span>

                        {

                            deliveryCharge === 0 ?

                                "FREE"

                                :

                                `₹ ${deliveryCharge}`

                        }

                    </span>

                </div>

                <div className="flex justify-between text-green-600">

                    <span>Discount</span>

                    <span>

                        - ₹ {discount}

                    </span>

                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">

                    <span>Grand Total</span>

                    <span>

                        ₹ {grandTotal}

                    </span>

                </div>

            </div>

            <div className="mt-8 flex gap-5">

                <button

                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"

                >

                    Proceed to Checkout

                </button>

                <button

                    onClick={() => {

                        if (

                            window.confirm(

                                "Clear entire cart?"

                            )

                        ) {

                            clearCart();

                        }

                    }}

                    className="bg-red-500 hover:bg-red-600 text-white px-8 rounded-xl"

                >

                    Clear Cart

                </button>

            </div>

        </div>

    );

}

export default CartSummary;