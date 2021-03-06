import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingBodyContent.module.css";

import LandingIntro from "../LandingIntro";
import LandingPrograms from "../LandingPrograms";
import LandingOrganization from "../LandingOrganization";
import LandingPartners from "../LandingPartners";

export default class LandingBodyContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.LandingBodyContent}>
        <LandingIntro />
        <hr />
        <LandingPrograms />
        <hr />
        <LandingOrganization />
        <hr />
        <LandingPartners />
      </div>
    );
  }
}
