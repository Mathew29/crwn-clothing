import React from "react";

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection";

const CollectionPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
