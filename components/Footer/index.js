import React, { Fragment } from "react";
import { Link } from "~/lib/routes";

import {
  Buffer,
  Footer,
  FooterHeader,
  FooterContent,
  FooterBottom
} from "./styles";

function FooterWrapper(props) {
  const {
    showSocial,
    showFooterContent,
    showFooterLinks,
    showCopyright,
    socialLinks,
    footerContentLinks,
    footerLinks
  } = props;

  const perChunk = 4; // items per chunk
  const footerContentChunks = footerContentLinks.reduce(
    (resArr, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!resArr[chunkIndex]) {
        resArr[chunkIndex] = []; // start a new chunk
      }
      resArr[chunkIndex].push(item);
      return resArr;
    },
    []
  );
  return (
    <Fragment>
      <Buffer />
      <Footer>
        {showSocial && (
          <FooterHeader>
            {socialLinks.map((link, index) => {
              return (
                <Link href="" key={index}>
                  <a target="_blank">
                    <link.name className="icon" />
                  </a>
                </Link>
              );
            })}
          </FooterHeader>
        )}
        {showFooterContent && (
          <FooterContent>
            {footerContentChunks.map((contentLink, index) => {
              return (
                <ul className="link-block" key={contentLink[index].name}>
                  {contentLink.map(conLink => (
                    <li key={conLink.name}>
                      <Link href="">
                        <a>{conLink.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              );
            })}
          </FooterContent>
        )}
        {showFooterLinks && (
          <FooterBottom>
            <ul className="footer-link">
              {footerLinks.map(footLink => {
                return (
                  <Fragment key={footLink}>
                    <li>
                      <Link href="">
                        <a>{footLink}</a>
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
            {showCopyright && (
              <div className="copyright-txt">
                <p>©2019 rue21.com All Rights Reserved</p>
              </div>
            )}
          </FooterBottom>
        )}
      </Footer>
    </Fragment>
  );
}
export default FooterWrapper;
