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
            {/* <motion.div variants={fadeOutLeft} initial="hidden" animate="show"> */}

            <form className="form">
              <h2>Where do you plan to buy?</h2>

              <div className="row">
                <span>
                  <input
                    className="slide-up"
                    id="card"
                    type="text"
                    placeholder=" Enter your Address!"
                  />
                  <label for="card">Location</label>
                </span>
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
