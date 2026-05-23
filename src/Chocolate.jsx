
// import React from "react";
// import "./Chocolate.css";

// function Chocolate() {
//   const chocolateItems = [
//     { id: 1, name: "Chocolate Bar", price: 70, imageurl: "/chocolate/bar.jpg" },
//     { id: 2, name: "Chocolate Brownie", price: 120, imageurl: "/chocolate/browine.jpg" },
//     { id: 3, name: "Chocolate Ice Cream", price: 100, imageurl: "/chocolate/icecream.jpg" },
//     { id: 4, name: "Chocolate Milkshake", price: 130, imageurl: "/chocolate/milkshake.jpg" },
//     { id: 5, name: "Chocolate Donut", price: 90, imageurl: "/chocolate/donut.jpg" },
//     { id: 6, name: "Chocolate Muffin", price: 110, imageurl: "/chocolate/muffin.jpg" },
//     { id: 7, name: "Chocolate Pastry", price: 140, imageurl: "/chocolate/pastry.jpg" },
//     { id: 8, name: "Chocolate Cookies", price: 80, imageurl: "/chocolate/cookies.jpg" },
//     { id: 9, name: "Chocolate Truffle", price: 160, imageurl: "/chocolate/truffle.jpg" },
//     { id: 10, name: "Chocolate Lava Cake", price: 170, imageurl: "/chocolate/lavacake.jpg" },
//     { id: 11, name: "Chocolate Fudge", price: 150, imageurl: "/chocolate/fudge.jpg" },
//     { id: 12, name: "Chocolate Pancakes", price: 140, imageurl: "/chocolate/pancakes.jpg" },
//     { id: 13, name: "Chocolate Waffles", price: 160, imageurl: "/chocolate/waffles.jpg" },
//     { id: 14, name: "Chocolate Pudding", price: 120, imageurl: "/chocolate/pudding.jpg" },
//     { id: 15, name: "Chocolate Cupcake", price: 100, imageurl: "/chocolate/cupcake.jpg" },
//     { id: 16, name: "Chocolate Tart", price: 180, imageurl: "/chocolate/tart.jpg" },
//     { id: 17, name: "Chocolate Smoothie", price: 130, imageurl: "/chocolate/smoothie.jpg" },
//     { id: 18, name: "Chocolate Cheesecake", price: 190, imageurl: "/chocolate/cheesecake.jpg" },
//     { id: 19, name: "Chocolate Roll", price: 150, imageurl: "/chocolate/roll.jpg" },
//     { id: 20, name: "Chocolate Cake", price: 150, imageurl: "/chocolate/cake.jpg" }
//   ];

//   return (
//     <div>
//       <h1 className="title">Chocolates 🍫</h1>

//       <div className="card-container">
//         {chocolateItems.map((item) => (
//           <div className="food-card" key={item.id}>
//             <img src={item.imageurl} alt={item.name} />

//             <div className="card-body">
//               <h3>{item.name}</h3>
//               <p className="price">₹{item.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Chocolate;











import React, { useState } from "react";
import "./Chocolate.css";
import { useDispatch } from "react-redux";
import { addToChocolateCart } from "./chocolateSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Chocolate() {

  const dispatch = useDispatch();

  const chocolateItems = [

    {
      id: 1,
      name: "Chocolate Bar",
      price: 70,
      rating: 4.5,
      imageurl: "/chocolate/bar.jpg",
      desc: "Rich creamy chocolate bar with smooth texture.",
      discount: "10% OFF",
      oldPrice: 90,
    },

    {
      id: 2,
      name: "Chocolate Brownie",
      price: 120,
      rating: 4.8,
      imageurl: "/chocolate/browine.jpg",
      desc: "Soft gooey brownie loaded with chocolate flavor.",
      discount: "18% OFF",
      oldPrice: 150,
    },

    {
      id: 3,
      name: "Chocolate Ice Cream",
      price: 100,
      rating: 4.6,
      imageurl: "/chocolate/icecream.jpg",
      desc: "Cold creamy chocolate ice cream delight.",
      discount: "15% OFF",
      oldPrice: 130,
    },

    {
      id: 4,
      name: "Chocolate Milkshake",
      price: 130,
      rating: 4.7,
      imageurl: "/chocolate/milkshake.jpg",
      desc: "Thick chocolate milkshake topped with cream.",
      discount: "20% OFF",
      oldPrice: 170,
    },

    {
      id: 5,
      name: "Chocolate Donut",
      price: 90,
      rating: 4.4,
      imageurl: "/chocolate/donut.jpg",
      desc: "Soft donut coated with rich chocolate glaze.",
      discount: "12% OFF",
      oldPrice: 110,
    },

    {
      id: 6,
      name: "Chocolate Muffin",
      price: 110,
      rating: 4.5,
      imageurl: "/chocolate/muffin.jpg",
      desc: "Freshly baked muffin with chocolate chips.",
      discount: "16% OFF",
      oldPrice: 140,
    },

    {
      id: 7,
      name: "Chocolate Pastry",
      price: 140,
      rating: 4.9,
      imageurl: "/chocolate/pastry.jpg",
      desc: "Creamy layered pastry full of chocolate taste.",
      discount: "22% OFF",
      oldPrice: 190,
    },

    {
      id: 8,
      name: "Chocolate Cookies",
      price: 80,
      rating: 4.3,
      imageurl: "/chocolate/cookies.jpg",
      desc: "Crunchy cookies loaded with chocolate chunks.",
      discount: "10% OFF",
      oldPrice: 100,
    },

    {
      id: 9,
      name: "Chocolate Truffle",
      price: 160,
      rating: 4.8,
      imageurl: "/chocolate/truffle.jpg",
      desc: "Luxury chocolate truffle with rich cocoa.",
      discount: "25% OFF",
      oldPrice: 220,
    },

    {
      id: 10,
      name: "Chocolate Lava Cake",
      price: 170,
      rating: 4.9,
      imageurl: "/chocolate/lavacake.jpg",
      desc: "Warm lava cake with melting chocolate center.",
      discount: "28% OFF",
      oldPrice: 240,
    },

    {
      id: 11,
      name: "Chocolate Fudge",
      price: 150,
      rating: 4.6,
      imageurl: "/chocolate/fudge.jpg",
      desc: "Soft rich fudge with deep chocolate flavor.",
      discount: "20% OFF",
      oldPrice: 190,
    },

    {
      id: 12,
      name: "Chocolate Pancakes",
      price: 140,
      rating: 4.5,
      imageurl: "/chocolate/pancakes.jpg",
      desc: "Fluffy pancakes drizzled with chocolate syrup.",
      discount: "18% OFF",
      oldPrice: 180,
    },

    {
      id: 13,
      name: "Chocolate Waffles",
      price: 160,
      rating: 4.7,
      imageurl: "/chocolate/waffles.jpg",
      desc: "Crispy waffles topped with chocolate sauce.",
      discount: "24% OFF",
      oldPrice: 220,
    },

    {
      id: 14,
      name: "Chocolate Pudding",
      price: 120,
      rating: 4.4,
      imageurl: "/chocolate/pudding.jpg",
      desc: "Smooth pudding with silky chocolate texture.",
      discount: "15% OFF",
      oldPrice: 150,
    },

    {
      id: 15,
      name: "Chocolate Cupcake",
      price: 100,
      rating: 4.5,
      imageurl: "/chocolate/cupcake.jpg",
      desc: "Moist cupcake topped with chocolate frosting.",
      discount: "14% OFF",
      oldPrice: 130,
    },

    {
      id: 16,
      name: "Chocolate Tart",
      price: 180,
      rating: 4.8,
      imageurl: "/chocolate/tart.jpg",
      desc: "Crunchy tart filled with rich chocolate cream.",
      discount: "26% OFF",
      oldPrice: 250,
    },

    {
      id: 17,
      name: "Chocolate Smoothie",
      price: 130,
      rating: 4.4,
      imageurl: "/chocolate/smoothie.jpg",
      desc: "Refreshing chocolate smoothie with creamy taste.",
      discount: "16% OFF",
      oldPrice: 160,
    },

    {
      id: 18,
      name: "Chocolate Cheesecake",
      price: 190,
      rating: 4.9,
      imageurl: "/chocolate/cheesecake.jpg",
      desc: "Creamy cheesecake blended with rich chocolate.",
      discount: "30% OFF",
      oldPrice: 270,
    },

    {
      id: 19,
      name: "Chocolate Roll",
      price: 150,
      rating: 4.6,
      imageurl: "/chocolate/roll.jpg",
      desc: "Soft chocolate swiss roll with cream filling.",
      discount: "20% OFF",
      oldPrice: 190,
    },

    {
      id: 20,
      name: "Chocolate Cake",
      price: 150,
      rating: 4.8,
      imageurl: "/chocolate/cake.jpg",
      desc: "Delicious layered chocolate cake for celebrations.",
      discount: "25% OFF",
      oldPrice: 210,
    },

  ];

  const [search, setSearch] = useState("");

  const itemPerPage = 8;

  const filteredItems = chocolateItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;

  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemPerPage
  );

  return (

    <div className="chocolate-page">

      <ToastContainer position="top-right" autoClose={2000} />

      {/* HEADER */}

      <div className="chocolate-header">

        <h1 className="main-title">
          🍫 Sweet Chocolate Heaven
        </h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search Chocolate items..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

        </div>

      </div>

      {/* CARDS */}

      <div className="card-container">

        {currentItems.map((item) => (

          <div className="food-card" key={item.id}>

            {/* IMAGE */}

            <div className="img-box">

              <img
                src={item.imageurl}
                alt={item.name}
              />

              <span className="discount-tag">
                {item.discount}
              </span>

            </div>

            {/* BODY */}

            <div className="card-body">

              <h2 style={{color:"black"}}>{item.name}</h2>

              <div className="rating">
                ⭐⭐⭐⭐⭐ <span style={{color:"black"}}>({item.rating})</span>
              </div>

              <p style={{color:"black"}}>{item.desc}</p>

              <hr />

              <div className="bottom-section">

                <div>

                  <h3>₹{item.price}</h3>

                  <del>₹{item.oldPrice}</del>

                </div>

                <button
                  onClick={() => {

                    dispatch(addToChocolateCart(item));

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
          className="page-btn prev-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          -
        </button>

        {Array.from({ length: totalPages }, (_, index) => (

          <button
            key={index}
            className={`page-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>

        ))}

        <button
          className="page-btn next-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          +
        </button>

      </div>

    </div>
  );
}

export default Chocolate;