import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img3 from "../../img/img3.svg";
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
              <h2>Do you plan to rent out your house?</h2>
              <div class="inputGroup">
                <input id="radio1" name="radio" type="radio" />
                <label for="radio1">No</label>
              </div>
              <div class="inputGroup">
                <input id="radio2" name="radio" type="radio" />
                <label for="radio2">Basement</label>
              </div>

              <div class="inputGroup">
                <input id="radio3" name="radio" type="radio" />
                <label for="radio3">Entire House</label>
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
