import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";

import img from "../../img/019-online-shop-1.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  FaqStyle,
  ImageF,
} from "../../style";
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
              <h2>
                <ImageF>
                  <img src={img} />
                  Do you have any outstanding balances?
                </ImageF>
              </h2>

              <div className="toggle-radio">
                <span> Line of Credit:</span>
                <input type="radio" name="rdo" id="yes" checked />
                <input type="radio" name="rdo" id="no" />
                <div style={{ marginTop: "4rem" }} className="switch">
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
