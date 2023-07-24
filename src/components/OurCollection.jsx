import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function OurCollection() {
  return (
    <>
      <div className="collection-heading">
        <h1>Our New Collection</h1>
        <button className="allcoll">
          See All <ArrowRightAltIcon />
        </button>
      </div>
      <div className="collection-grid">
        <div className="collection-one">
          <button className="coll-btn">Hoodies</button>
        </div>
        <div className="collection-row">
          <div className="collection-two">
            <button className="coll-btn">Shorts</button>
          </div>

          <div className="collectionro">
            <div className="collection-three">
              <button className="coll-btn">T-shirt</button>
            </div>
            <div className="collection-four">
              <button className="coll-btn">T-shirt</button>
            </div>
          </div>
        </div>


      
      </div>
    </>
  );
}

export default OurCollection;
