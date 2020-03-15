import React, { Component } from "react";
import Denim from "~/components/Denim";
import { PlpListingStyle } from "./styles";

class PlpListingView extends Component {
  render() {
    const { data = [] } = this.props;
    return (
      <PlpListingStyle>
        <div className="psl-listing">
          {data.map((val, index) => {
            return (
              <Denim
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                price={val.price}
                description={val.description}
                size={val.size}
                variants={val.variants}
              />
            );
          })}
        </div>
        <div className="mobileview-filter-block">
          <div className="filter-text">
            Filters <span>(2)</span>
          </div>
          <div className="gridview-icon listview-icon" />
          <div className="sort-text">Sort by</div>
        </div>
      </PlpListingStyle>
    );
  }
}

export default PlpListingView;
