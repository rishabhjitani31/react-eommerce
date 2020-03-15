import React from "react";
import Head from "next/head";

import HomeView from "~/modules/home";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeView />
  </div>
);

export default Home;
