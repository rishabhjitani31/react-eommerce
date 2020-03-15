// Hero: component with background image and title and option for 2 button links.
import React from "react";
import { toPropTypes, toDefaultProps } from "lib/xpm/to-prop-types";
import descriptor from "./descriptor";
import Button from "~/components/Button";
import HeroImage from "~/static/images/hero-img.jpg";
import { StyledHeroContainer } from "./styles";

Hero.propTypes = toPropTypes(descriptor);
Hero.defaultProps = toDefaultProps(descriptor);

function Hero(props) {
  const {
    title,
    subTitle,
    informationText,
    button1Text,
    button2Text,
    contentColor = "black"
  } = props;

  return (
    <StyledHeroContainer color={contentColor}>
      <div className="hero-banner">
        <div className="hero-banner-content">
          <div className="sub-title">{informationText}</div>
          <h1 className="h1">
            {title}
            <br />
            {subTitle}
          </h1>
          <Button color="transparent">{button1Text}</Button>
          <a href="#" className="hero-link">
            {button2Text}
          </a>
        </div>
        <div className="hero-overlay" />
        <img className="hero-image" src={HeroImage} alt="" />
      </div>
    </StyledHeroContainer>
  );
}
export default Hero;
