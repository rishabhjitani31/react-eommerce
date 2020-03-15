import React, { Component } from "react";
import { Link } from "~/lib/routes";
import BagNoItem from "~/icons/bag-no-item.js";
import Rightarrow from "~/icons/arrow-right.js";
import MenuIcon from "~/icons/menu-icon.js";
import CloseIcon from "~/icons/close-icon.js";
import ArrowUrl from "~/icons/arrow-drop-down.js";
import WishList from "~/icons/wishlist-no-item.js";
import SearchUrl from "~/icons/search.js";
import { Header } from "./styles";

export default class HeaderWrapper extends Component {
  state = {
    visible: false
  };
  onSiderOpen = val => {
    this.setState({
      visible: val
    });
  };
  render() {
    const { logoBrand, subMenu, flagUrl, navImage } = this.props;
    const { visible } = this.state;

    return (
      <Header>
        <div className="main-header">
          <div className="left-part">
            <div className="country-select">
              <img className="flag-us" src={flagUrl} />
              <ArrowUrl className="ic24_arrow_drop_down" />
            </div>

            <div className="mobile-menu">
              <div
                className={visible ? "deactive" : ""}
                onClick={() => {
                  this.onSiderOpen(true);
                }}
              >
                <div className="menuIcon">
                  <MenuIcon />
                </div>
              </div>
              <div
                className={
                  visible
                    ? "mobile-menu-wrapper"
                    : "mobile-menu-wrapper deactive"
                }
              >
                <div className="mobile-menu-wrapper-Inner">
                  <div className="mobile-header-toppart">
                    <div
                      onClick={() => {
                        this.onSiderOpen(false);
                      }}
                      className="cross-icon"
                    >
                      <CloseIcon />
                    </div>
                    <div className="signup-text">Login/Signup</div>
                  </div>
                  <div className="menu-part-container">
                    <a href="#" className="menu-item">
                      <div className="item-text active">Home</div>
                    </a>
                    {subMenu.map(val => {
                      return (
                        <a href="#" key={val.key} className="menu-item">
                          <div className="item-text">{val.name}</div>
                          <div className="right-arrow">
                            <Rightarrow />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mobile-bottom">
                    <div className="menu-part-container">
                      <a href="#" className="menu-item">
                        <div className="item-text">Track my order</div>
                      </a>
                    </div>
                    <div className="menu-part-container">
                      <a href="#" className="menu-item">
                        <div className="item-text">Change Region</div>
                        <div className="right-arrow">
                          <img src={flagUrl} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="Menu_Overly" />
              </div>
            </div>

            <div className="search-box">
              <SearchUrl className="Shape" />
              <input placeholder="search your style" className="search-text" />
            </div>
          </div>
          <div className="logo-part">
            <a href="#">
              <img className="logo-brand-1024" src={logoBrand} />
            </a>
          </div>
          <div className="right-part">
            <a href="#" className="btn-login">
              Login/SignUp
            </a>
            <a href="#" className="hc-button">
              <WishList className="ic24_wishlist_noitem" />
            </a>
            <a href="#" className="hc-button">
              <BagNoItem className="ic24_bag_noitem" />
            </a>
          </div>
        </div>
        <div className="sub-header">
          <ul className="main-navigation-ul">
            {subMenu.map(val => {
              return (
                <li key={val.key} className="main-navigation-list">
                  <a href="#" className="main-navigation-link">
                    {val.name}
                  </a>
                  <div className="sub-menu">
                    <div className="sub-menu-content">
                      {/* single-block-loop */}
                      {val.children.map(type => {
                        return (
                          <div key={type.key} className="sub-menu-single-blk">
                            <div className="single-blk-title">{type.name}</div>
                            <ul className="single-blk_ul">
                              {type.value.map(value => {
                                return (
                                  <li
                                    className="single-blk_list"
                                    key={value.name}
                                  >
                                    <Link route="product-listing">
                                      <a className="single-blk_link">
                                        {value.name}
                                      </a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="sub-menu-img">
                      <img className="sub-menu-image" src={navImage} alt="" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Header>
    );
  }
}
