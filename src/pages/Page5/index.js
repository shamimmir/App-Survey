import React, { Component, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img from "../../img/025-payment-method.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  FaqStyle,
  ImageF,
} from "../../style";
import { fadeOut, fadeIn, pageVariants, pageTransition } from "../../animation";

import Faq from "./Faq";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  setShow() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <FormContainer>
        <motion.div
          variants={pageVariants}
          initial="in"
          animate="out"
          transition={pageTransition}
        >
          <FormImage>
            {/* <motion.div variants={fadeOutLeft} initial="hidden" animate="show"> */}

            <form className="form">
              <h2>
                <ImageF>
                  <motion.img
                    initial={{ y: "-20vw" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 3,
                      type: "spring",
                      stiffness: 20,
                    }}
                    src={img}
                  />
                  Do you have any outstanding balances?
                </ImageF>
              </h2>

              <div className="toggle-radio">
                <span>Credit Cards:</span>
                <input type="radio" name="rdo" id="yes" checked />
                <input type="radio" name="rdo" id="no" />
                <div style={{ marginTop: "4rem" }} className="switch">
                  <label for="yes">Yes</label>
                  <label for="no">No</label>
                  <span></span>
                </div>
              </div>
            </form>

            {/* </motion.div> */}
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
