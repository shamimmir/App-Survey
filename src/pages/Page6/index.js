import React, { Component } from "react";
import { motion } from "framer-motion";

import img from "../../img/019-online-shop-1.svg";
import { FormContainer, FormImage, FaqStyle, ImageF } from "../../style";
import { pageVariants, pageTransition } from "../../animation";

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
                  <motion.img
                    style={{ paddingRight: "10px" }}
                    initial={{ y: "0" }}
                    animate={{ y: "1vw", rotate: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 1.5,
                      duration: 3,
                      type: "Tween",
                      stiffness: 20,
                    }}
                    src={img}
                  />
                  Do you have any outstanding balances?
                </ImageF>
              </h2>
              <p>Line of Credit:</p>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                class="inputGroup"
              >
                <input id="radio1" name="radio" type="radio" />
                <label for="radio1">Yes</label>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.7,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                class="inputGroup"
              >
                <input id="radio2" name="radio" type="radio" />
                <label for="radio2">No</label>
              </motion.div>
              {/* <div className="toggle-radio">
                <span> Line of Credit:</span>
                <input type="radio" name="rdo" id="yes" checked />
                <input type="radio" name="rdo" id="no" />
                <div style={{ marginTop: "4rem" }} className="switch">
                  <label for="yes">Yes</label>
                  <label for="no">No</label>
                  <span></span>
                </div>
              </div> */}
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
