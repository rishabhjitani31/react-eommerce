import React, { Component } from "react";
import { FilterStyle } from "./styles";
import DownIconFilter from "~/icons/down.js";
import Seekbar from "~/icons/seekbar.js";

class Filter extends Component {
  state = {
    colorVisible: true
  };

  onColorSectionClick = () => {
    this.setState({ colorVisible: !this.state.colorVisible });
  };
  render() {
    const { colorVisible = false } = this.state;
    const {
      heading = "",
      subHeading = "",
      filter1 = "",
      filter2 = "",
      filter3 = "",
      filter4 = "",
      filter5 = "",
      filter6 = "",
      startPrice = "",
      endPrice = ""
    } = this.props;
    return (
      <FilterStyle>
        <div className="main-filters">
          <div className="filters-heading">
            <h4>{heading}</h4>
            <span className="filters-reset">{subHeading}</span>
          </div>
          <div className="filters-group">
            <div className="filters-heading">
              <div className="filters-heading-text">{filter1}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className="filter-content" />
          </div>
          <div className="filters-group">
            <div className="filters-heading">
              <div className="filters-heading-text">{filter2}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className="filter-content" />
          </div>
          <div className="filters-group" onClick={this.onColorSectionClick}>
            <div className="filters-heading active">
              <div className="filters-heading-text">{filter3}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className={colorVisible ? "filter-content" : "hidden"}>
              <div className="filter-content-color">
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle active">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill " />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
                <div className="color-circle">
                  <span className="color-fill" />
                </div>
              </div>
            </div>
          </div>
          <div className="filters-group">
            <div className="filters-heading">
              <div className="filters-heading-text">{filter4}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className="filter-content" />
          </div>
          <div className="filters-group">
            <div className="filters-heading active">
              <div className="filters-heading-text">{filter5}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className="filter-content">
              <div className="filter-content-price">
                <div className="filter-price-row">
                  <div className="start-price">{startPrice}</div>
                  <div className="end-price">{endPrice}</div>
                </div>
                <div className="price-slider">
                  <div className="price-slider-bg">
                    <div className="price-range" />
                  </div>
                  <div className="price-selector-row">
                    <div className="price-selector-left price-selector">
                      <Seekbar className="img-src" />
                    </div>
                    <div className="price-selector-right price-selector">
                      <Seekbar className="img-src" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filters-group">
            <div className="filters-heading">
              <div className="filters-heading-text">{filter6}</div>
              <div className="filters-heading-image down">
                <DownIconFilter className="img-src" />
              </div>
            </div>
            <div className="filter-content" />
          </div>
        </div>
      </FilterStyle>
    );
  }
}

export default Filter;
