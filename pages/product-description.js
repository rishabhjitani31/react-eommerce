import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import ProductDescription from "~/modules/product-description";
import { PRODUCT_DESCRIPTION } from "~/modules/product-description/actions";
import { noop } from "../utils";

const ProductDescriptionView = ({ product }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ProductDescription product={product} />
  </div>
);

ProductDescriptionView.getInitialProps = ({ store, isServer }) => {
  store.dispatch(PRODUCT_DESCRIPTION.getProductDescription());
  return {};
};

ProductDescriptionView.propTypes = {
  product: PropTypes.object,
  getProductDescription: PropTypes.func
};

ProductDescriptionView.defaultProps = {
  product: {},
  getProductDescription: noop
};

const mapDispatchToProps = dispatch => ({
  getProductDescription: dispatch(PRODUCT_DESCRIPTION.getProductDescription())
});

const mapStateToProps = state => ({
  product: state.productDescription.product
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ProductDescriptionView);
