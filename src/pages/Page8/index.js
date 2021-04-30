import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";

import {
  FormContainer,
  FormImage,
  FormQquestion,
  FaqStyle,
  ImageF,
} from "../../style";
import { fadeOut, fadeIn, pageVariants, pageTransition } from "../../animation";

import img from "../../img/023-money-bag.svg";
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
                  What is your gross annual household income, before taxes?
                </ImageF>
              </h2>

              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                className="row"
              >
                <span>
                  <input
                    className="slide-up"
                    id="card"
                    type="text"
                    placeholder=" Enter your Number!"
                  />
                  <label for="card">Gross Income</label>
                </span>
              </motion.div>
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
