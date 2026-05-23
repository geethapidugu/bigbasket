import React, { useState } from "react";
import "./Jucies.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Juices() {

  const dispatch = useDispatch();
const juiceItems = [

  {
    id: 1,
    name: "Apple Juice",
    price: 70,
    rating: 4.5,
    desc: "Fresh apple juice loaded with vitamins and natural sweetness.",
    imageurl:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },

  {
    id: 2,
    name: "Banana Juice",
    price: 50,
    rating: 4.2,
    desc: "Creamy banana juice blended with rich fruity flavor.",
    imageurl:
      "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
  },

  {
    id: 3,
    name: "Cucumber Juice",
    price: 60,
    rating: 4.3,
    desc: "Cool cucumber juice that refreshes your body instantly.",
    imageurl:
      "https://images.pexels.com/photos/6544143/pexels-photo-6544143.jpeg",
  },

  {
    id: 4,
    name: "Grape Juice",
    price: 45,
    rating: 4.1,
    desc: "Sweet grape juice packed with antioxidants and freshness.",
    imageurl:
      "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg",
  },

  {
    id: 5,
    name: "Kiwi Juice",
    price: 65,
    rating: 4.4,
    desc: "Tangy kiwi juice with refreshing tropical taste.",
    imageurl:
      "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg",
  },

  {
    id: 6,
    name: "Lemon Juice",
    price: 30,
    rating: 4.0,
    desc: "Refreshing lemon juice with chilled citrus flavor.",
    imageurl:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },

  {
    id: 7,
    name: "Orange Juice",
    price: 35,
    rating: 4.6,
    desc: "Fresh orange juice full of vitamin C goodness.",
    imageurl:
      "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg",
  },

  {
    id: 8,
    name: "Pineapple Juice",
    price: 69,
    rating: 4.5,
    desc: "Tropical pineapple juice with juicy fruity flavor.",
    imageurl:
      "https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg",
  },

  {
    id: 9,
    name: "Mango Juice",
    price: 80,
    rating: 4.8,
    desc: "Delicious mango juice made from ripe mangoes.",
    imageurl:
      "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
  },

  {
    id: 10,
    name: "Watermelon Juice",
    price: 55,
    rating: 4.2,
    desc: "Chilled watermelon juice perfect for summer refreshment.",
    imageurl:
      "https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg",
  },

  {
    id: 11,
    name: "Strawberry Juice",
    price: 90,
    rating: 4.7,
    desc: "Sweet strawberry juice with creamy berry taste.",
    imageurl:
      "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg",
  },

  {
    id: 12,
    name: "Papaya Juice",
    price: 65,
    rating: 4.1,
    desc: "Healthy papaya juice rich in nutrients and flavor.",
    imageurl:
      "https://images.pexels.com/photos/5946633/pexels-photo-5946633.jpeg",
  },

  {
    id: 13,
    name: "Mosambi Juice",
    price: 40,
    rating: 4.0,
    desc: "Fresh sweet lime juice with natural cooling taste.",
    imageurl:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },

  {
    id: 14,
    name: "Blueberry Juice",
    price: 95,
    rating: 4.6,
    desc: "Blueberry juice loaded with rich berry flavor.",
    imageurl:
      "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg",
  },

  {
    id: 15,
    name: "Pomegranate Juice",
    price: 85,
    rating: 4.7,
    desc: "Healthy pomegranate juice rich in antioxidants.",
    imageurl:
      "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg",
  },

  {
    id: 16,
    name: "Avocado Juice",
    price: 100,
    rating: 4.5,
    desc: "Creamy avocado juice blended to perfection.",
    imageurl:
      "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
  },

  {
    id: 17,
    name: "Cherry Juice",
    price: 75,
    rating: 4.3,
    desc: "Sweet cherry juice with refreshing fruity taste.",
    imageurl:
      "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg",
  },

  {
    id: 18,
    name: "Lychee Juice",
    price: 88,
    rating: 4.4,
    desc: "Exotic lychee juice with tropical sweetness.",
    imageurl:
      "https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg",
  },

  {
    id: 19,
    name: "Coconut Juice",
    price: 50,
    rating: 4.2,
    desc: "Natural coconut juice with instant freshness.",
    imageurl:
      "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
  },

  {
    id: 20,
    name: "Mixed Fruit Juice",
    price: 110,
    rating: 4.9,
    desc: "Combination of fresh fruits blended into one drink.",
    imageurl:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
  },

];

  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    juiceItems.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentItems = juiceItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (

    <div className="juice-page">

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <h1 className="juice-title">
        🥤 Fresh & Healthy Juices
      </h1>

      <p className="juice-subtitle">
        Refresh Your Day With Natural Fruit Flavors 🍊
      </p>

      {/* CARDS */}

      <div className="juice-container">

        {currentItems.map((item) => (

          <div className="juice-card" key={item.id}>

            <div className="juice-img-box">

              <img
                src={item.imageurl}
                alt={item.name}
              />

            </div>

            <div className="juice-body">

              <h2>{item.name}</h2>

              <div className="juice-rating">
                ⭐⭐⭐⭐⭐
                <span> ({item.rating})</span>
              </div>

              <div className="juice-bottom">

                <h3>₹{item.price}</h3>

                <button
                  onClick={() => {

                    toast.success(
                      `${item.name} added to cart successfully!`
                    );

                  }}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          ⬅
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (

            <button
              key={index}
              className={`page-btn ${
                currentPage === index + 1
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentPage(index + 1)
              }
            >
              {index + 1}
            </button>

          )
        )}

        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          ➡
        </button>

      </div>

    </div>

  );
}

export default Juices;