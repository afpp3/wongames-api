/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { PropTypes } from "prop-types";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef

  return (
    <Wrapper>
      <div className="poweredBy">
        <a
          href="https://github.com/afpp3"
          target="_blank"
          rel="noopener noreferrer"
        >
          André Felippe
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
