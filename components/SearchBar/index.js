import React, { Component } from "react";
import QuickJump from "~/icons/quick-jump.js";
import HistoryIcon from "~/icons/history.js";
import CloseSearch from "~/icons/close-icon.js";
import SearchDemoImage from "~/static/images/group-copy.png";
import Slider from "~/components/FixedCountSlider";

import { StyledSearchbarContainer } from "./styles";

const items = [
  {
    name: "The best short in the world"
  },
  {
    name: "The longest pants in the world"
  },
  {
    name: "The wettest rain coat ever"
  },
  {
    name: "A croacking frog"
  },
  {
    name: "A bell for your door"
  },
  {
    name: "Coffee beans for your morning tea"
  }
];

const mocks = items.map(item => (
  <div
    style={{
      width: "64px",

      padding: "0"
    }}
  >
    <img src={SearchDemoImage} alt="" />
  </div>
));
const mocksMedium = items.map(item => (
  <div
    style={{
      width: "140px",
      padding: "0"
    }}
  >
    <div className="">
      <div className="search-slider-item-name">Guys Jeans</div>
      <img src={SearchDemoImage} alt="" />
    </div>
  </div>
));

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isFocused: false
    };
  }

  handleInput = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleFocus = () => {
    this.setState({
      isFocused: true
    });
  };

  render() {
    return (
      <StyledSearchbarContainer>
        <div className="search-drawer">
          <div className="search-drawer-header">
            <div className="search-drawer-close">
              <CloseSearch />
            </div>
            <input type="text" placeholder="Enter Text Here" />
            <div className="search-drawer-clear">Clear</div>
          </div>

          <div className="search-list">
            <ul className="search-list-ui">
              <li className="search-list-item">
                <a href="#" className="search-list-link">
                  men’s jeans
                </a>
                <span className="search-list-import-icon">
                  <img src={QuickJump} alt="" />
                </span>
              </li>
              <li className="search-list-item">
                <a href="#" className="search-list-link">
                  <span className="search-list-history-icon">
                    <HistoryIcon />
                  </span>
                  men’s jeans
                </a>
                <span className="search-list-import-icon">
                  <img src={QuickJump} alt="" />
                </span>
              </li>
              <li className="search-list-item">
                <a href="#" className="search-list-link">
                  <span className="search-list-history-icon">
                    <HistoryIcon />
                  </span>
                  jeans jacket
                </a>
                <span className="search-list-import-icon">
                  <img src={QuickJump} alt="" />
                </span>
              </li>
            </ul>
          </div>
          <div className="search-slider-wrap">
            <div className="search-cat-title">in Trending</div>
            <div className="search-slider search-slider-small">
              <Slider
                children={mocks}
                pageSize={4}
                hasArrows={false}
                sliderHeight={64}
              />
            </div>
          </div>

          <div className="search-slider-wrap">
            <div className="search-cat-title">in Categories</div>
            <div className="search-slider search-slider-medium">
              <Slider
                children={mocksMedium}
                pageSize={2}
                hasArrows
                sliderHeight={160}
              />
            </div>
          </div>
        </div>
      </StyledSearchbarContainer>
    );
  }
}

export default Searchbar;
