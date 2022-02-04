import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryData from "./CategoryData.json";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    // navigate("/shop?category=")
  }

  useLayoutEffect(() => {
    for (const data of CategoryData) {
      document.getElementById("cate").style.backgroundImage = "url(../../Assets/img/tops.jpg)"
    }
  }, []);
  

  return (
    <>
      <h1 className="heading">Categories</h1>
      <div className="cat-div">
        {CategoryData.map((cat, key) => (
          <div className="cat-box" id="cate" key={key}>
            <h1>{cat.text}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
