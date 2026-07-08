import React, { useState } from "react";
import "./Dairy.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dairy() {
  interface DairyItem {
    id: number;
    name: string;
    imageurl: string;
    price: number;
    description: string;
  }

  const dairyItems: DairyItem[] = [
    {
      id: 1,
      name: "Milk",
      imageurl: "/images/milk.jpeg",
      price: 50,
      description: "Fresh milk",
    },
    {
      id: 2,
      name: "Cheese",
      imageurl: "/images/cheese.jpeg",
      price: 200,
      description: "Fresh cheese",
    },
    {
      id: 3,
      name: "Buttermilk",
      imageurl: "/images/buttermilk.jpeg",
      price: 100,
      description: "Fresh buttermilk",
    },
    {
      id: 4,
      name: "Curd",
      imageurl: "/images/curd.jpeg",
      price: 80,
      description: "Fresh curd",
    },
    {
      id: 5,
      name: "Paneer",
      imageurl: "/images/paneer.jpeg",
      price: 250,
      description: "Fresh paneer",
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

  const ListItems = dairyItems.map((dairy) => (
    <li key={dairy.id}>
      <h3>{dairy.name}</h3>

      <img
        src={dairy.imageurl}
        alt={dairy.name}
        width={150}
        height={150}
      />

      <h4>Price: ₹{dairy.price}/-</h4>

      <p>{dairy.description}</p>

      <button onClick={() => addToCart(dairy.id, dairy.name)}>
        Add to Cart {cart[dairy.id] ? `(${cart[dairy.id]})` : ""}
      </button>

      <hr />
    </li>
  ));

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <h1>Welcome to the Dairy Page</h1>

      <ol>{ListItems}</ol>
    </>
  );
}

export default Dairy;