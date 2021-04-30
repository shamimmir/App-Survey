import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";

import img from "../../img/014-startup.svg";

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
                  Where do you plan to buy?
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
                    placeholder=" Enter your Address!"
                  />
                  <label for="card">Location</label>
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
    return <></>;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  page: Page,
  tips: PageTips,
};
