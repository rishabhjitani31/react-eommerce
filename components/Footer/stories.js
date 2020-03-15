import { storiesOf } from "@storybook/react";
import Facebook from "~/icons/facebook.js";
import Instagram from "~/icons/instagram.js";
import Pinterest from "~/icons/pinterest.js";
import Twitter from "~/icons/twitter.js";
import Youtube from "~/icons/youtube.js";
import Footer from ".";

storiesOf("Footer", module).add("Desktop", () => (
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
));
