import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import qs from "querystring";
import App, { Container } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import GlobalStoryStyles from "~/styles/globalStyles";
import baseTheme from "~/styles/theme";
import createStore from "~/store";
import Subscribe from "~/components/Subscribe";
import Footer from "~/components/Footer";
import Banner from "~/components/Banner";
import Header from "~/components/Header";
import { subMenu } from "~/components/Header/stories";
import landingBanner from "~/static/images/landing-banner.png";
import landingBannerMobile from "~/static/images/landing-banner-mobile.png";
import Facebook from "~/icons/facebook.js";
import Instagram from "~/icons/instagram.js";
import Pinterest from "~/icons/pinterest.js";
import Twitter from "~/icons/twitter.js";
import Youtube from "~/icons/youtube.js";
import flagUrl from "~/static/images/country-flag.png";
import logoBrand from "~/static/images/logo-brand-1024.png";
import navImage from "~/static/images/image-category.jpg";

const loadXpmEmbed = appComponent =>
  dynamic(import("../lib/xpm/embed")).then(load => load.default(appComponent));

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},

      theme: baseTheme

      // ...xpmProps
    };
  }

  async componentDidMount() {
    // If an embed session starts, ensure that it is kept active
    // via sessionStorage, even if url changes.
    const query = qs.parse(window.location.search.substring(1));
    const embed = query.XPM_EMBED || window.sessionStorage.XPM_EMBED;
    if (embed === "true") {
      window.sessionStorage.XPM_EMBED = 1;
      this.removeXpmListeners = loadXpmEmbed(this);
    } else if (embed === "false") {
      window.sessionStorage.removeItem("XPM_EMBED");
    }
  }

  componentWillUnmount() {
    if (this.removeXpmListeners) this.removeXpmLIsteners();
  }

  componentDidCatch(error, errorInfo) {
    // TODO: send error report here
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, theme, store } = this.props;

    return (
      <Container>
        <GlobalStoryStyles />
        <Provider store={store}>
          <Head>
            <title>Fabric powered e-comm website</title>
            <meta
              name="description"
              content="Fabric powered e-commerce website"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <ThemeProvider theme={theme}>
            <GlobalStoryStyles />
            <Fragment>
              <Header
                flagUrl={flagUrl}
                logoBrand={logoBrand}
                subMenu={subMenu}
                navImage={navImage}
              />

              <div className="app_wrapper">
                <Component {...pageProps} />
              </div>
              <Banner
                imageUrl={landingBanner}
                imageUrlMobile={landingBannerMobile}
              />
              <Subscribe
                showIcon
                title="Email / Sign Up"
                metaTitle={"Stay up to date on the best deals & latest trends!"}
              />
              <Footer
                showSocial
                showFooterContent
                showFooterLinks
                showCopyright
                socialLinks={[
                  { name: Facebook },
                  { name: Twitter },
                  { name: Pinterest },
                  { name: Instagram },
                  { name: Youtube }
                ]}
                footerContentLinks={[
                  { name: "866-573-4783" },
                  { name: "contact us" },
                  { name: "report a site issue" },
                  { name: "find a store" },
                  { name: "track my order" },
                  { name: "my account" },
                  { name: "shipping & returns" },
                  { name: "faqs" },
                  { name: "gift cards" },
                  { name: "coupon disclaimer" },
                  { name: "careers" },
                  { name: "rue21 blog" }
                ]}
                footerLinks={[
                  "terms of use",
                  "about us",
                  "privacy policy",
                  "social responsibilty",
                  "sitemap"
                ]}
              />
            </Fragment>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
