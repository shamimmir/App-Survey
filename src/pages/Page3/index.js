import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";

import {
  FormContainer,
  FormImage,
  FormQquestion,
  FaqStyle,
  ImageF,
} from "../../style";
import Faq from "./Faq";

import img from "../../img/042-clipboard.svg";

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
                  Do you plan to rent out your house?
                </ImageF>
              </h2>

              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                class="inputGroup"
              >
                <input id="radio1" name="radio" type="radio" />
                <label for="radio1">No</label>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.4,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                class="inputGroup"
              >
                <input id="radio2" name="radio" type="radio" />
                <label for="radio2">Basement</label>
              </motion.div>

              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 1.6,
                  duration: 3,
                  type: "spring",
                  stiffness: 40,
                }}
                class="inputGroup"
              >
                <input id="radio3" name="radio" type="radio" />
                <label for="radio3">Entire House</label>
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
