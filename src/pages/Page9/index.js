import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img1 from "../../img/img1-1.jpeg";
import { FormContainer, FormImage, FormQquestion, FaqStyle } from "../../style";
import {
  fadeOut,
  fadeIn,
  pageVariants,
  pageTransition,
  fadeOutLeft,
} from "../../animation";

import Faq from "./Faq";

class Page extends Component {
  render() {
    return (
      <FormContainer
        style={{
          backgroundImage: `url("img1")`,
        }}
      >
        <motion.div
          variants={pageVariants}
          initial="in"
          animate="out"
          transition={pageTransition}
        >
          <FormImage>
            <form className="form">
              <h2>Do you know your credit score?</h2>
              <h3>Score</h3>
              <div className="toggle-radio">
                <input type="radio" name="rdo" id="yes" checked />
                <input type="radio" name="rdo" id="no" />
                <div className="switch">
                  <label for="yes">Yes</label>
                  <label for="no">No</label>
                  <span></span>
                </div>
              </div>
            </form>
          </FormImage>
        </motion.div>
      </FormContainer>
    );
  }
}

class PageTips extends Component {
  render() {
    return (
      <FaqStyle>
        <Faq />
      </FaqStyle>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  page: Page,
  tips: PageTips,
};
