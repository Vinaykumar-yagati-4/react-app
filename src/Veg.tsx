import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: string;
  name: string;
  maxRetailPrice: number;
  status: string;
}

interface ProductResponse {
  success: boolean;
  message: string;
  code: number;
  data: Product;
}

interface VegItem {
  id: number;
  name: string;
  imageurl: string;
  price: number;
  description: string;
}

function Veg() {
  const [productResponse, setProductResponse] =
    useState<ProductResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/6a3b8701e4823e6d38dfd527")
      .then((res) => res.json())
      .then((data) => setProductResponse(data))
      .catch((error) =>
        console.error("Error fetching product:", error)
      );
  }, []);

  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Tomato",
      imageurl: "/images/tomato.jpeg",
      price: 30,
      description: "Fresh tomatoes",
    },
    {
      id: 2,
      name: "Carrot",
      imageurl: "/images/carrot.jpeg",
      price: 50,
      description: "Fresh carrots",
    },
    {
      id: 3,
      name: "Onion",
      imageurl: "/images/onion.jpeg",
      price: 135,
      description: "Fresh onions",
    },
    {
      id: 4,
      name: "Brinjal",
      imageurl: "/images/brinjal.jpeg",
      price: 60,
      description: "Fresh Brinjal",
    },
  ];

  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (id: number, name: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));

    toast.success(`${name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const ListItems = vegItems.map((veg) => (
    <li
      key={veg.id}
      className="bg-white rounded-xl shadow-lg p-4 text-center"
    >
      <h3 className="text-xl font-bold mb-3">{veg.name}</h3>

      <img
        src={veg.imageurl}
        alt={veg.name}
        className="w-40 h-40 mx-auto rounded-lg"
      />

      <h4 className="text-green-600 text-lg mt-3">
        Price: ₹{veg.price}/-
      </h4>

      <p className="text-gray-600 my-3">{veg.description}</p>

      <button
        onClick={() => addToCart(veg.id, veg.name)}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        Add to Cart {cart[veg.id] ? `(${cart[veg.id]})` : ""}
      </button>
    </li>
  ));

  return (
    <div className="bg-orange-50 min-h-screen p-6">
      {/* Toast Container */}
      <ToastContainer />

      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Welcome to the Vegetarian Page
      </h1>

      {productResponse && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Product From API
          </h2>

          <p>
            <strong>Id:</strong> {productResponse.data.id}
          </p>

          <p>
            <strong>Name:</strong> {productResponse.data.name}
          </p>

          <p>
            <strong>Price:</strong> ₹
            {productResponse.data.maxRetailPrice}
          </p>

          <p>
            <strong>Status:</strong> {productResponse.data.status}
          </p>
        </div>
      )}

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ListItems}
      </ol>
    </div>
  );
}

export default Veg;