import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img2 from "../../img/img2.svg";
import { FormContainer, FormImage, FormQquestion, FaqStyle } from "../../style";

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
              <h2>Are you buying a house or a condo?</h2>
              <div class="inputGroup">
                <input id="radio1" name="radio" type="radio" />
                <label for="radio1">House</label>
              </div>
              <div class="inputGroup">
                <input id="radio2" name="radio" type="radio" />
                <label for="radio2">Condo</label>
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
