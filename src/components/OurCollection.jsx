import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function OurCollection() {
  return (
    <>
      <div className="collection-heading">
        <h1 style={{fontWeight:800}}>Our New Collection</h1>
        <button className="allcoll">
          See All <ArrowRightAltIcon />
        </button>
      </div>
      <div className="collection-grid">
        <div className="collection-one">
          <button className="coll-one">Hoodies</button>
        </div>
        <div className="collection-row">
          <div className="collection-two">
            <button className="coll-two">Shorts</button>
          </div>

          <div className="collectionro">
            <div className="collection-three">
              <button className="coll-three">T-shirt</button>
            </div>
            <div className="collection-four">
              <button className="coll-four">T-shirt</button>
            </div>
          </div>
        </div>


      
      </div>
    </>
  );
}

export default OurCollection;
