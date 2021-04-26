import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img1 from "../../img/img1.svg";
import { FormContainer, FormImage, FormQquestion, FaqStyle } from "../../style";

import { stylesFaq, config, dataFaq } from "./Faq";
import Faq from "react-faq-component";

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
            <img src={img1} alt="img" />
          </FormImage>
          <FormQquestion>
            <div className="row">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing:</span>
              <span>
                <input
                  className="slide-up"
                  id="card"
                  type="text"
                  placeholder="Enter A Number!"
                />
                <label for="card">Credit Card</label>
              </span>
            </div>
          </FormQquestion>
        </motion.div>
      </FormContainer>
    );
  }
}

class PageTips extends Component {
  render() {
    return (
      <FaqStyle>
        <Faq
          style={{ paddingRight: 20 }}
          data={dataFaq}
          styles={stylesFaq}
          config={config}
        />
      </FaqStyle>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  page: Page,
  tips: PageTips,
};
