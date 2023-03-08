import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
            <h4 className="text-black fw-semibold hero-title mt-3">ChatGPT</h4>
            </span>
            <span className="logo-lg">
            <h4 className="text-white fw-semibold hero-title mt-3">ChatGPT</h4>
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
            <h4 className="text-white fw-semibold hero-title mt-3">ChatGPT</h4>
            </span>
            <span className="logo-lg">
            <h4 className="text-white fw-semibold hero-title mt-3">ChatGPT</h4>
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
