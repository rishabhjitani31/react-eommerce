import React from "react";
import Head from "next/head";

import PLPView from "~/modules/product-listing";

const PLP = () => (
  <div>
    <Head>
      <title>PLP</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
      />
    </Head>
    <PLPView />
  </div>
);

export default PLP;
