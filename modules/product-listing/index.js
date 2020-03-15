import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import Sort from "~/components/Sort";
import PlpView from "~/components/PlpListingView";
import Filter from "~/components/Filter";
import Denim from "~/components/Denim";
import BreadCrumb from "~/components/BreadCrumb";

import Button from "~/components/Button";
import Category from "~/static/images/image-category.jpg";

import { INITIAL_CLICK } from "./actions";

import { InstantSearch, Hits, Highlight } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { algoliaClient } from "../../general-config";

import { StyledPLP } from "./styles";

const searchClient = algoliasearch(algoliaClient.appId, algoliaClient.apiKey);

const data = [
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    imgSrc: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  }
];

const list = [
  {
    name: "Popularity",
    key: 1,
    active: false
  },
  {
    name: "Price: low to high",
    key: 2,
    active: false
  },
  {
    name: "Price: high to low",
    key: 3,
    active: false
  },
  {
    name: "Newest first",
    key: 4,
    active: false
  }
];

const breadCrumbList = [
  {
    name: "Home",
    key: 1
  },
  {
    name: "Guys",
    key: 2
  },
  {
    name: "Bottoms",
    key: 3
  },
  {
    name: "Guys Jeans",
    key: 4
  }
];

function Hit(props) {
  return (
    <Denim
      imgSrc={<Highlight attribute="image" hit={props.hit} />}
      title={<Highlight attribute="title" hit={props.hit} />}
      price={<Highlight attribute="price" hit={props.hit} />}
      description={<Highlight attribute="description" hit={props.hit} />}
      size={<Highlight attribute="size" hit={props.hit} />}
      variants={[]}
    />
  );
}

class PLPView extends React.Component {
  state = {};

  render() {
    return (
      <StyledPLP>
        <div className="horizontal-view">
          <div className="filter">
            <Filter
              heading="Filters (2)"
              subHeading="Reset"
              filter1="Shop by category"
              filter2="Related"
              filter3="Color"
              filter4="Size"
              filter5="Price"
              filter6="Deals"
              startPrice="$25"
              endPrice="$125"
            />
            <div className="button">
              <Button color="secondary">Apply Changes</Button>
            </div>
          </div>
          <div className="main-contant-rightside">
            <BreadCrumb>{breadCrumbList}</BreadCrumb>
            <Sort data={list} />
            <PlpView data={data} list={list} />
            {/* <InstantSearch
              searchClient={searchClient}
              indexName="baileysSearch"
            >
              <Hits hitComponent={Hit} />
            </InstantSearch> */}
          </div>
        </div>
      </StyledPLP>
    );
  }
}

PLPView.propTypes = {
  homeData: PropTypes.boolean,
  clickData: PropTypes.array,
  onButtonClick: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(INITIAL_CLICK.onButtonClickAction())
});

const mapStateToProps = state => {
  return {
    homeData: state.home.initialClick,
    clickData: state.home.clickData
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PLPView);
