// import React from "react";
// import "./nonveg.css";

// function NonVeg() {
//   const nonvegitems = [
//     { id: 1, name: "Chicken Biryani", price: 260, imageurl: "/nonvegimages/chickenbiryani.jpg" },
//     { id: 2, name: "Chicken 65", price: 190, imageurl: "/nonvegimages/chicken65.jpg" },
//     { id: 3, name: "Mutton Biryani", price: 360, imageurl: "/nonvegimages/muttonbiryani.jpg" },
//     { id: 4, name: "Fish Fry", price: 240, imageurl: "/nonvegimages/fishfry.jpg" },
//     { id: 5, name: "Prawn Curry", price: 380, imageurl: "/nonvegimages/prawncurry.jpg" },
//     { id: 6, name: "Chicken Butter Masala", price: 320, imageurl: "/nonvegimages/chcken butter masala.jpg" },
//     { id: 7, name: "Crab Fry", price: 420, imageurl: "/nonvegimages/crab fry.jpg" },
//     { id: 8, name: "Chicken Lollipop", price: 280, imageurl: "/nonvegimages/chickenlollipop.jpg" },
//     { id: 9, name: "Chicken Tikka", price: 300, imageurl: "/nonvegimages/chickentikka.jpg" },
//     { id: 10, name: "Egg Biryani", price: 180, imageurl: "/nonvegimages/eggbriyani.jpg" },
//     { id: 11, name: "Fish Curry", price: 280, imageurl: "/nonvegimages/fishcurry.jpg" },
//     { id: 12, name: "Crabs", price: 350, imageurl: "/nonvegimages/crabs.jpg" },
//     { id: 13, name: "Mutton Soup", price: 220, imageurl: "/nonvegimages/muttonsoup.jpg" },
//     { id: 14, name: "Egg Curry", price: 170, imageurl: "/nonvegimages/eggcurry.jpg" },
//     { id: 15, name: "Prawns Biryani", price: 340, imageurl: "/nonvegimages/prawnsbriyani.jpg" },
//     { id: 16, name: "Korameenu Fish Curry", price: 360, imageurl: "/nonvegimages/korameenu fish curry.jpg" },
//     { id: 17, name: "Mutton Boti", price: 300, imageurl: "/nonvegimages/mutton boti.jpg" },
//     { id: 18, name: "Tandoori Chicken", price: 330, imageurl: "/nonvegimages/tondoriichicken.jpg" },
//     { id: 19, name: "Mutton Head Curry", price: 400, imageurl: "/nonvegimages/muttonhead.jpg" },
//     { id: 20, name: "Mutton Curry", price: 310, imageurl: "/nonvegimages/muttoncurry.jpg" }
//   ];

//   return (
//     <>
//     <h1 className="title">non-Veg Items 🍗</h1>
//     <div className="container">
//       {nonvegitems.map((product) => (
//         <div className="card" key={product.id}>
//           <img src={product.imageurl} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// }

// export default NonVeg;


import React, { useState } from "react";
import "./Nonveg.css";
import { useDispatch } from "react-redux";
import { addToNonvegCart } from "./nonvegSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NonVeg() {

  const dispatch = useDispatch();

  const nonvegitems = [

    {
      id: 1,
      name: "Chicken Biryani",
      price: 260,
      rating: 4.8,
      imageurl: "/nonvegimages/chickenbiryani.jpg",
      desc: "Aromatic chicken biryani cooked with rich spices.",
      discount: "25% OFF",
      oldPrice: 340,
    },

    {
      id: 2,
      name: "Chicken 65",
      price: 190,
      rating: 4.5,
      imageurl: "/nonvegimages/chicken65.jpg",
      desc: "Crispy spicy chicken starter loved by everyone.",
      discount: "18% OFF",
      oldPrice: 240,
    },

    {
      id: 3,
      name: "Mutton Biryani",
      price: 360,
      rating: 4.9,
      imageurl: "/nonvegimages/muttonbiryani.jpg",
      desc: "Royal dum biryani with juicy mutton pieces.",
      discount: "30% OFF",
      oldPrice: 480,
    },

    {
      id: 4,
      name: "Fish Fry",
      price: 240,
      rating: 4.3,
      imageurl: "/nonvegimages/fishfry.jpg",
      desc: "Golden fried fish with authentic masala coating.",
      discount: "15% OFF",
      oldPrice: 290,
    },

    {
      id: 5,
      name: "Prawn Curry",
      price: 380,
      rating: 4.7,
      imageurl: "/nonvegimages/prawncurry.jpg",
      desc: "Spicy prawn curry with coastal flavors.",
      discount: "22% OFF",
      oldPrice: 450,
    },

    {
      id: 6,
      name: "Chicken Butter Masala",
      price: 320,
      rating: 4.6,
      imageurl: "/nonvegimages/chcken butter masala.jpg",
      desc: "Creamy chicken curry with buttery richness.",
      discount: "20% OFF",
      oldPrice: 400,
    },

    {
      id: 7,
      name: "Crab Fry",
      price: 420,
      rating: 4.4,
      imageurl: "/nonvegimages/crab fry.jpg",
      desc: "Hot and spicy crab fry full of flavor.",
      discount: "24% OFF",
      oldPrice: 520,
    },

    {
      id: 8,
      name: "Chicken Lollipop",
      price: 280,
      rating: 4.5,
      imageurl: "/nonvegimages/chickenlollipop.jpg",
      desc: "Crispy chicken lollipops with spicy dip.",
      discount: "19% OFF",
      oldPrice: 350,
    },

    {
      id: 9,
      name: "Chicken Tikka",
      price: 300,
      rating: 4.8,
      imageurl: "/nonvegimages/chickentikka.jpg",
      desc: "Smoky grilled chicken tikka with spices.",
      discount: "26% OFF",
      oldPrice: 390,
    },

    {
      id: 10,
      name: "Egg Biryani",
      price: 180,
      rating: 4.2,
      imageurl: "/nonvegimages/eggbriyani.jpg",
      desc: "Flavorful egg biryani with aromatic rice.",
      discount: "14% OFF",
      oldPrice: 220,
    },

    {
      id: 11,
      name: "Fish Curry",
      price: 280,
      rating: 4.4,
      imageurl: "/nonvegimages/fishcurry.jpg",
      desc: "Tangy fish curry prepared in village style.",
      discount: "18% OFF",
      oldPrice: 340,
    },

    {
      id: 12,
      name: "Crabs",
      price: 350,
      rating: 4.3,
      imageurl: "/nonvegimages/crabs.jpg",
      desc: "Delicious crab masala with spicy taste.",
      discount: "20% OFF",
      oldPrice: 430,
    },

    {
      id: 13,
      name: "Mutton Soup",
      price: 220,
      rating: 4.1,
      imageurl: "/nonvegimages/muttonsoup.jpg",
      desc: "Healthy and spicy traditional mutton soup.",
      discount: "12% OFF",
      oldPrice: 260,
    },

    {
      id: 14,
      name: "Egg Curry",
      price: 170,
      rating: 4.2,
      imageurl: "/nonvegimages/eggcurry.jpg",
      desc: "Boiled eggs cooked in rich spicy gravy.",
      discount: "15% OFF",
      oldPrice: 210,
    },

    {
      id: 15,
      name: "Prawns Biryani",
      price: 340,
      rating: 4.7,
      imageurl: "/nonvegimages/prawnsbriyani.jpg",
      desc: "Special prawns dum biryani with spices.",
      discount: "28% OFF",
      oldPrice: 450,
    },

    {
      id: 16,
      name: "Korameenu Fish Curry",
      price: 360,
      rating: 4.5,
      imageurl: "/nonvegimages/korameenu fish curry.jpg",
      desc: "Andhra style korameenu fish curry recipe.",
      discount: "25% OFF",
      oldPrice: 470,
    },

    {
      id: 17,
      name: "Mutton Boti",
      price: 300,
      rating: 4.6,
      imageurl: "/nonvegimages/mutton boti.jpg",
      desc: "Tender spicy mutton boti cooked perfectly.",
      discount: "20% OFF",
      oldPrice: 390,
    },

    {
      id: 18,
      name: "Tandoori Chicken",
      price: 330,
      rating: 4.9,
      imageurl: "/nonvegimages/tondoriichicken.jpg",
      desc: "Charcoal grilled tandoori chicken special.",
      discount: "32% OFF",
      oldPrice: 480,
    },

    {
      id: 19,
      name: "Mutton Head Curry",
      price: 400,
      rating: 4.4,
      imageurl: "/nonvegimages/muttonhead.jpg",
      desc: "Traditional spicy mutton head curry.",
      discount: "23% OFF",
      oldPrice: 520,
    },

    {
      id: 20,
      name: "Mutton Curry",
      price: 310,
      rating: 4.7,
      imageurl: "/nonvegimages/muttoncurry.jpg",
      desc: "Rich mutton curry with authentic flavors.",
      discount: "27% OFF",
      oldPrice: 430,
    },

  ];

  const [search, setSearch] = useState("");

  const itemPerPage = 8;

  const filteredItems = nonvegitems.filter((item) =>
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

    <div className="nonveg-page">

      <ToastContainer position="top-right" autoClose={2000} />

      {/* HEADER */}

      <div className="nonveg-header">

        <h1 className="main-title">
        🥩 Delicious Non-Veg Paradise 🍖
          </h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search NonVeg items..."
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

        {currentItems.map((product) => (

          <div className="food-card" key={product.id}>

            {/* IMAGE */}

            <div className="img-box">

              <img
                src={product.imageurl}
                alt={product.name}
              />

              <span className="discount-tag">
                {product.discount}
              </span>

            </div>

            {/* BODY */}

            <div className="card-body">

              <h2 style={{color:"black"}}>{product.name}</h2>

              <div className="rating">
                ⭐⭐⭐⭐⭐ <span style={{color:"black"}}>({product.rating})</span>
              </div>

              <p style={{color:"black"}}>{product.desc}</p>

              <hr />

              <div className="bottom-section">

                <div>

                  <h3>₹{product.price}</h3>

                  <del>₹{product.oldPrice}</del>

                </div>

                <button
                  onClick={() => {

                    dispatch(addToNonvegCart(product));

                    toast.success(
                      `${product.name} added to cart successfully!`
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

export default NonVeg;