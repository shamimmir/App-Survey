import React, { Component } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";

import { FormContainer, FormImage, FaqStyle, ImageF } from "../../style";

import img from "../../img/020-office.svg";

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
            <form class="form">
              <h2>
                <ImageF>
                  <motion.img
                    style={{ paddingRight: "10px" }}
                    initial={{ x: "0vw" }}
                    animate={{ x: "-1vw", rotate: 1 }}
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
                  Are you buying a house or a condo?
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
                class="inputGroup"
              >
                <input id="radio1" name="radio" type="radio" />
                <label for="radio1">House</label>
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
                <label for="radio2">Condo</label>
              </motion.div>
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
