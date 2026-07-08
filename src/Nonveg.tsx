import React, { useState } from "react";
import "./Nonveg.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NonVeg() {
  interface NonVegItem {
    id: number;
    name: string;
    imageurl: string;
    price: number;
    description: string;
  }

  const nonVegItems: NonVegItem[] = [
    {
      id: 1,
      name: "Chicken",
      imageurl: "/images/chicken.jpeg",
      price: 200,
      description: "Fresh chicken",
    },
    {
      id: 2,
      name: "Mutton",
      imageurl: "/images/mutton.jpeg",
      price: 900,
      description: "Fresh mutton",
    },
    {
      id: 3,
      name: "Fish",
      imageurl: "/images/fish.jpeg",
      price: 500,
      description: "Fresh fish",
    },
    {
      id: 4,
      name: "Prawns",
      imageurl: "/images/prawns.jpeg",
      price: 800,
      description: "Fresh prawns",
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

  const ListItems = nonVegItems.map((nonveg) => (
    <li key={nonveg.id}>
      <h3>{nonveg.name}</h3>

      <img
        src={nonveg.imageurl}
        alt={nonveg.name}
        width={150}
        height={150}
      />

      <h4>Price: ₹{nonveg.price}/-</h4>

      <p>{nonveg.description}</p>

      <button onClick={() => addToCart(nonveg.id, nonveg.name)}>
        Add to Cart {cart[nonveg.id] ? `(${cart[nonveg.id]})` : ""}
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

      <h1>Welcome to the Non-Vegetarian Page</h1>

      <ol>{ListItems}</ol>
    </>
  );
}

export default NonVeg;