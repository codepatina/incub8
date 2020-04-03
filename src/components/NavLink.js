import React from "react";
import { Link } from "@reach/router";

const Navlink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "navbar-item uk-navbar-item uk-text-capitalize" : "navbar-item uk-navbar-item uk-text-capitalize"
      };
    }}
  />
);

export default Navlink;
