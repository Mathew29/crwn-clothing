import React from "react";

import collectionItem from "../../components/collection-item/collection-item";

import "./category";

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
