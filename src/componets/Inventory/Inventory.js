import React, { useEffect, useState } from "react";
import "./Inventory.css";
import Product from "./Product/Product";

const Inventory = () => {
  const [pageCount, setPagecount] = useState(0);
  const [page, setPage] = useState(0);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/data?page=${page}&size=6`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const counts = data.count;
        const page = Math.ceil(counts / 6);
        setPagecount(page);
      });
  }, []);
  console.log(pageCount);
  return (
    <div className="mt-5">
      <h2>Inventory</h2>
      <hr />
      <div className="mt-3 py-3">
        <div className="row g-2">
          {products.slice(0, 6).map((pro) => (
            <Product key={pro._id} p={pro}></Product>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        {[...Array(pageCount).keys()].map((n) => (
          <button
            className={
              page === n
                ? "bg-info me-2 rounded-3"
                : " me-2 rounded-3"
            }
            onClick={() => setPage(n)}
            key={n}
          >
            {n + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
