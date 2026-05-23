

// import React, { useState } from "react";
// import "./Veg.css";
// import { addtoCart } from "./cartSlice";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// function Veg() {
//   const dispatch=useDispatch();
//   const vegitems = [
//     { id: 1, name: "Paneer Butter Masala", price: 220, imageurl: "/vegimages/paneermasala.jpg" },
//     { id: 2, name: "Veg Fried Rice", price: 100, imageurl: "/vegimages/friedrice.jpg" },
//     { id: 3, name: "Veg Biryani", price: 250, imageurl: "/vegimages/briyani.jpg" },
//     { id: 4, name: "Noodles", price: 150, imageurl: "/vegimages/noodles.jpg" },
//     { id: 5, name: "Chana Masala", price: 160, imageurl: "/vegimages/chanamasala.jpg" },
//     { id: 6, name: "Samosa", price: 60, imageurl: "/vegimages/somosa.jpg" },
//     { id: 7, name: "Aloo Gobi", price: 140, imageurl: "/vegimages/aloogobi.jpg" },
//     { id: 8, name: "Palak Paneer", price: 210, imageurl: "/vegimages/Palak Paneer.jpg" },
//     { id: 9, name: "Mushroom Masala", price: 190, imageurl: "/vegimages/Mushroom Masala.jpg" },
//     { id: 10, name: "Dal Tadka", price: 150, imageurl: "/vegimages/Dal Tadka.jpg" },
//     { id: 11, name: "Jeera Rice", price: 110, imageurl: "/vegimages/Jeera Rice.jpg" },
//     { id: 12, name: "Veg Manchurian", price: 180, imageurl: "/vegimages/Veg Manchurian.jpg" },
//     { id: 13, name: "Paneer Tikka", price: 260, imageurl: "/vegimages/Paneer Tikka.jpg" },
//     { id: 14, name: "Mix Veg Curry", price: 170, imageurl: "/vegimages/Mix Veg Curry.jpg" },
//     { id: 15, name: "Rajma Masala", price: 160, imageurl: "/vegimages/Rajma Masala.jpg" },
//     { id: 16, name: "Veg Pulao", price: 140, imageurl: "/vegimages/Veg Pulao.jpg" },
//     { id: 17, name: "Masala Dosa", price: 90, imageurl: "/vegimages/Masala Dosa.jpg" },
//     { id: 18, name: "Idli Sambar", price: 80, imageurl: "/vegimages/Idli Sambar.jpg" },
//     { id: 19, name: "Veg Spring Rolls", price: 150, imageurl: "/vegimages/Veg Spring Rolls.jpg" },
//     { id: 20, name: "Gobi Manchurian", price: 170, imageurl: "/vegimages/Gobi Manchurian.jpg" }
//   ];

//   const itemPerPage = 8;
//   const totalPages = Math.ceil(vegitems.length / itemPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemPerPage;
//   const currentItems = vegitems.slice(startIndex, startIndex + itemPerPage);
// // toast.success('Product added to cart successfully!')
//   return (
    
//     <div>
//        <ToastContainer position="top-right" autoClose={2000} />
//       <div>
// 		{/* <button onClick={() => toast("Wow Ratan so easy!")}>Order Now</button> */}
// 	</div>
//       <h1 className="title" style={{ color: "pink" }}>Veg Items 🥕</h1>

//       {/* CARDS */}
//       <div className="card-container">
//         {currentItems.map((product) => (
//           <div className="food-card" key={product.id}>
//             <img src={product.imageurl} alt={product.name} />
//             <div className="card-body">
//               <h3>{product.name}</h3>
//               <p className="price">₹{product.price}</p>
//            <button onClick={() => {dispatch(addtoCart(product));
//             	toast.success(`Product ${product.name} added to cart successfully!`);
//            }}>Add to Cart </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* PAGINATION */}
//       <div className="pagination">
//         <button
//           className="page-btn"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           ⬅ Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           className="page-btn"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next ➡
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Veg;




















// import React, { useState } from "react";
// import "./Veg.css";
// import { addtoCart } from "./cartSlice";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Veg() {

//   const dispatch = useDispatch();

//   const vegitems = [
//     {
//       id: 1,
//       name: "Paneer Butter Masala",
//       price: 220,
//       rating: 4.8,
//       imageurl: "/vegimages/paneermasala.jpg",
//       desc: "Rich creamy paneer curry with butter masala flavor.",
//       discount: "25% OFF",
//       oldPrice: 300,
//     },

//     {
//       id: 2,
//       name: "Veg Fried Rice",
//       price: 100,
//       rating: 4.2,
//       imageurl: "/vegimages/friedrice.jpg",
//       desc: "Hot and spicy fried rice loaded with veggies.",
//       discount: "18% OFF",
//       oldPrice: 130,
//     },

//     {
//       id: 3,
//       name: "Veg Biryani",
//       price: 250,
//       rating: 4.7,
//       imageurl: "/vegimages/briyani.jpg",
//       desc: "Aromatic biryani cooked with fresh vegetables.",
//       discount: "32% OFF",
//       oldPrice: 360,
//     },

//     {
//       id: 4,
//       name: "Noodles",
//       price: 150,
//       rating: 4.0,
//       imageurl: "/vegimages/noodles.jpg",
//       desc: "Street-style noodles tossed in tasty sauces.",
//       discount: "20% OFF",
//       oldPrice: 190,
//     },

//     {
//       id: 5,
//       name: "Chana Masala",
//       price: 160,
//       rating: 4.5,
//       imageurl: "/vegimages/chanamasala.jpg",
//       desc: "Traditional spicy chickpea curry full of flavor.",
//       discount: "15% OFF",
//       oldPrice: 190,
//     },

//     {
//       id: 6,
//       name: "Samosa",
//       price: 60,
//       rating: 4.1,
//       imageurl: "/vegimages/somosa.jpg",
//       desc: "Crispy samosas stuffed with spicy potato filling.",
//       discount: "10% OFF",
//       oldPrice: 75,
//     },

//     {
//       id: 7,
//       name: "Aloo Gobi",
//       price: 140,
//       rating: 4.3,
//       imageurl: "/vegimages/aloogobi.jpg",
//       desc: "Classic potato and cauliflower Indian curry.",
//       discount: "14% OFF",
//       oldPrice: 170,
//     },

//     {
//       id: 8,
//       name: "Palak Paneer",
//       price: 210,
//       rating: 4.6,
//       imageurl: "/vegimages/Palak Paneer.jpg",
//       desc: "Paneer cubes cooked in creamy spinach gravy.",
//       discount: "22% OFF",
//       oldPrice: 280,
//     },

//     {
//       id: 9,
//       name: "Mushroom Masala",
//       price: 190,
//       rating: 4.4,
//       imageurl: "/vegimages/Mushroom Masala.jpg",
//       desc: "Spicy mushroom curry with rich masala taste.",
//       discount: "19% OFF",
//       oldPrice: 240,
//     },

//     {
//       id: 10,
//       name: "Dal Tadka",
//       price: 150,
//       rating: 4.2,
//       imageurl: "/vegimages/Dal Tadka.jpg",
//       desc: "Comforting yellow dal with spicy tadka.",
//       discount: "12% OFF",
//       oldPrice: 180,
//     },

//     {
//       id: 11,
//       name: "Jeera Rice",
//       price: 110,
//       rating: 4.0,
//       imageurl: "/vegimages/Jeera Rice.jpg",
//       desc: "Fragrant basmati rice flavored with cumin.",
//       discount: "16% OFF",
//       oldPrice: 140,
//     },

//     {
//       id: 12,
//       name: "Veg Manchurian",
//       price: 180,
//       rating: 4.5,
//       imageurl: "/vegimages/Veg Manchurian.jpg",
//       desc: "Crispy veg balls tossed in spicy sauce.",
//       discount: "24% OFF",
//       oldPrice: 240,
//     },

//     {
//       id: 13,
//       name: "Paneer Tikka",
//       price: 260,
//       rating: 4.9,
//       imageurl: "/vegimages/Paneer Tikka.jpg",
//       desc: "Smoky grilled paneer cubes with spices.",
//       discount: "30% OFF",
//       oldPrice: 370,
//     },

//     {
//       id: 14,
//       name: "Mix Veg Curry",
//       price: 170,
//       rating: 4.1,
//       imageurl: "/vegimages/Mix Veg Curry.jpg",
//       desc: "Healthy mixed vegetable curry with spices.",
//       discount: "20% OFF",
//       oldPrice: 220,
//     },

//     {
//       id: 15,
//       name: "Rajma Masala",
//       price: 160,
//       rating: 4.3,
//       imageurl: "/vegimages/Rajma Masala.jpg",
//       desc: "Punjabi rajma curry cooked with rich gravy.",
//       discount: "18% OFF",
//       oldPrice: 210,
//     },

//     {
//       id: 16,
//       name: "Veg Pulao",
//       price: 140,
//       rating: 4.0,
//       imageurl: "/vegimages/Veg Pulao.jpg",
//       desc: "Light and flavorful vegetable pulao rice.",
//       discount: "15% OFF",
//       oldPrice: 170,
//     },

//     {
//       id: 17,
//       name: "Masala Dosa",
//       price: 90,
//       rating: 4.7,
//       imageurl: "/vegimages/Masala Dosa.jpg",
//       desc: "Golden crispy dosa with potato masala.",
//       discount: "21% OFF",
//       oldPrice: 120,
//     },

//     {
//       id: 18,
//       name: "Idli Sambar",
//       price: 80,
//       rating: 4.2,
//       imageurl: "/vegimages/Idli Sambar.jpg",
//       desc: "Soft idlis served with tasty sambar.",
//       discount: "12% OFF",
//       oldPrice: 100,
//     },

//     {
//       id: 19,
//       name: "Veg Spring Rolls",
//       price: 150,
//       rating: 4.4,
//       imageurl: "/vegimages/Veg Spring Rolls.jpg",
//       desc: "Crunchy rolls stuffed with vegetables.",
//       discount: "17% OFF",
//       oldPrice: 190,
//     },

//     {
//       id: 20,
//       name: "Gobi Manchurian",
//       price: 170,
//       rating: 4.6,
//       imageurl: "/vegimages/Gobi Manchurian.jpg",
//       desc: "Crispy cauliflower tossed in spicy sauce.",
//       discount: "26% OFF",
//       oldPrice: 240,
//     },
//   ];

//   const [search, setSearch] = useState("");

//   const filteredItems = vegitems.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="veg-page">

//       <ToastContainer position="top-right" autoClose={2000} />

//       {/* HEADER */}

//       <div className="veg-header">

//         <h1 className="main-title">
//           🥗 Delicious veg Food
//         </h1>

//         {/* SEARCH */}

//         <div className="search-sort">

//           <input
//             type="text"
//             placeholder="🔍 Search Veg items..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//         </div>

//       </div>

//       {/* CARDS */}

//       <div className="card-container">

//         {filteredItems.map((product) => (

//           <div className="food-card" key={product.id}>

//             {/* IMAGE */}

//             <div className="img-box">

//               <img
//                 src={product.imageurl}
//                 alt={product.name}
//               />

//               <span className="discount-tag">
//                 {product.discount}
//               </span>

//             </div>

//             {/* BODY */}

//             <div className="card-body">

//               <h2>{product.name}</h2>

//               <div className="rating">
//                 ⭐⭐⭐⭐⭐ <span>({product.rating})</span>
//               </div>

//               <p>{product.desc}</p>

//               <hr />

//               <div className="bottom-section">

//                 <div>
//                   <h3>₹{product.price}</h3>

//                   <del>₹{product.oldPrice}</del>
//                 </div>

//                 <button
//                   onClick={() => {

//                     dispatch(addtoCart(product));

//                     toast.success(
//                       `${product.name} added to cart successfully!`
//                     );
//                   }}
//                 >
//                   Add to Cart
//                 </button>

//               </div>

//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Veg;













import React, { useState } from "react";
import "./Veg.css";
import { addtoCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Veg() {

  const dispatch = useDispatch();

  const vegitems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 220,
      rating: 4.8,
      imageurl: "/vegimages/paneermasala.jpg",
      desc: "Rich creamy paneer curry with butter masala flavor.",
      discount: "25% OFF",
      oldPrice: 300,
    },

    {
      id: 2,
      name: "Veg Fried Rice",
      price: 100,
      rating: 4.2,
      imageurl: "/vegimages/friedrice.jpg",
      desc: "Hot and spicy fried rice loaded with veggies.",
      discount: "18% OFF",
      oldPrice: 130,
    },

    {
      id: 3,
      name: "Veg Biryani",
      price: 250,
      rating: 4.7,
      imageurl: "/vegimages/briyani.jpg",
      desc: "Aromatic biryani cooked with fresh vegetables.",
      discount: "32% OFF",
      oldPrice: 360,
    },

    {
      id: 4,
      name: "Noodles",
      price: 150,
      rating: 4.0,
      imageurl: "/vegimages/noodles.jpg",
      desc: "Street-style noodles tossed in tasty sauces.",
      discount: "20% OFF",
      oldPrice: 190,
    },

    {
      id: 5,
      name: "Chana Masala",
      price: 160,
      rating: 4.5,
      imageurl: "/vegimages/chanamasala.jpg",
      desc: "Traditional spicy chickpea curry full of flavor.",
      discount: "15% OFF",
      oldPrice: 190,
    },

    {
      id: 6,
      name: "Samosa",
      price: 60,
      rating: 4.1,
      imageurl: "/vegimages/somosa.jpg",
      desc: "Crispy samosas stuffed with spicy potato filling.",
      discount: "10% OFF",
      oldPrice: 75,
    },

    {
      id: 7,
      name: "Aloo Gobi",
      price: 140,
      rating: 4.3,
      imageurl: "/vegimages/aloogobi.jpg",
      desc: "Classic potato and cauliflower Indian curry.",
      discount: "14% OFF",
      oldPrice: 170,
    },

    {
      id: 8,
      name: "Palak Paneer",
      price: 210,
      rating: 4.6,
      imageurl: "/vegimages/Palak Paneer.jpg",
      desc: "Paneer cubes cooked in creamy spinach gravy.",
      discount: "22% OFF",
      oldPrice: 280,
    },

    {
      id: 9,
      name: "Mushroom Masala",
      price: 190,
      rating: 4.4,
      imageurl: "/vegimages/Mushroom Masala.jpg",
      desc: "Spicy mushroom curry with rich masala taste.",
      discount: "19% OFF",
      oldPrice: 240,
    },

    {
      id: 10,
      name: "Dal Tadka",
      price: 150,
      rating: 4.2,
      imageurl: "/vegimages/Dal Tadka.jpg",
      desc: "Comforting yellow dal with spicy tadka.",
      discount: "12% OFF",
      oldPrice: 180,
    },

    {
      id: 11,
      name: "Jeera Rice",
      price: 110,
      rating: 4.0,
      imageurl: "/vegimages/Jeera Rice.jpg",
      desc: "Fragrant basmati rice flavored with cumin.",
      discount: "16% OFF",
      oldPrice: 140,
    },

    {
      id: 12,
      name: "Veg Manchurian",
      price: 180,
      rating: 4.5,
      imageurl: "/vegimages/Veg Manchurian.jpg",
      desc: "Crispy veg balls tossed in spicy sauce.",
      discount: "24% OFF",
      oldPrice: 240,
    },

    {
      id: 13,
      name: "Paneer Tikka",
      price: 260,
      rating: 4.9,
      imageurl: "/vegimages/Paneer Tikka.jpg",
      desc: "Smoky grilled paneer cubes with spices.",
      discount: "30% OFF",
      oldPrice: 370,
    },

    {
      id: 14,
      name: "Mix Veg Curry",
      price: 170,
      rating: 4.1,
      imageurl: "/vegimages/Mix Veg Curry.jpg",
      desc: "Healthy mixed vegetable curry with spices.",
      discount: "20% OFF",
      oldPrice: 220,
    },

    {
      id: 15,
      name: "Rajma Masala",
      price: 160,
      rating: 4.3,
      imageurl: "/vegimages/Rajma Masala.jpg",
      desc: "Punjabi rajma curry cooked with rich gravy.",
      discount: "18% OFF",
      oldPrice: 210,
    },

    {
      id: 16,
      name: "Veg Pulao",
      price: 140,
      rating: 4.0,
      imageurl: "/vegimages/Veg Pulao.jpg",
      desc: "Light and flavorful vegetable pulao rice.",
      discount: "15% OFF",
      oldPrice: 170,
    },

    {
      id: 17,
      name: "Masala Dosa",
      price: 90,
      rating: 4.7,
      imageurl: "/vegimages/Masala Dosa.jpg",
      desc: "Golden crispy dosa with potato masala.",
      discount: "21% OFF",
      oldPrice: 120,
    },

    {
      id: 18,
      name: "Idli Sambar",
      price: 80,
      rating: 4.2,
      imageurl: "/vegimages/Idli Sambar.jpg",
      desc: "Soft idlis served with tasty sambar.",
      discount: "12% OFF",
      oldPrice: 100,
    },

    {
      id: 19,
      name: "Veg Spring Rolls",
      price: 150,
      rating: 4.4,
      imageurl: "/vegimages/Veg Spring Rolls.jpg",
      desc: "Crunchy rolls stuffed with vegetables.",
      discount: "17% OFF",
      oldPrice: 190,
    },

    {
      id: 20,
      name: "Gobi Manchurian",
      price: 170,
      rating: 4.6,
      imageurl: "/vegimages/Gobi Manchurian.jpg",
      desc: "Crispy cauliflower tossed in spicy sauce.",
      discount: "26% OFF",
      oldPrice: 240,
    },
  ];

  /* SEARCH */

  const [search, setSearch] = useState("");

  /* PAGINATION */

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  /* FILTER */

  const filteredItems = vegitems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  /* PAGINATION LOGIC */

  const totalPages = Math.ceil(
    filteredItems.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="veg-page">

      <ToastContainer position="top-right" autoClose={2000} />

      {/* HEADER */}

      <div className="veg-header">

        <h1 className="main-title">
          🥗 Delicious Veg Food
        </h1>

        <div className="search-sort">

          <input
            type="text"
            placeholder="🔍 Search Veg items..."
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

                    dispatch(addtoCart(product));

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
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
        -
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
        +
        </button>

      </div>

    </div>
  );
}

export default Veg;