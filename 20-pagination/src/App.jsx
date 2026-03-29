import React, { useState, useEffect } from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="w-1/6 text-white">
      <img src={image} alt={title} />
      <span className="bg-white text-black font-bold text-center border border-black p-1 flex justify-center items-center">
        {title}
      </span>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 🔥 current page
  const itemsPerPage = 10; // 🔥 per page

  const fetchData = async () => {
    const data = await fetch(
      "https://dummyjson.com/products?limit=194"
    );
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 Pagination Logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentProducts = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return !products.length ? (
    <h1>No product found</h1>
  ) : (
    <div>
      <h1 className="font-bold text-4xl text-center text-orange-900 m-5 py-1.5">
        Learning Pagination
      </h1>

      {/* 🔥 Products */}
      <div className="flex flex-wrap gap-10 justify-around">
        {currentProducts.map((elem) => (
          <ProductCard
            key={elem.id}
            image={elem.thumbnail}
            title={elem.title}
          />
        ))}
      </div>

      {/* 🔥 Pagination Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-3 py-1 border ${
              currentPage === num + 1
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;