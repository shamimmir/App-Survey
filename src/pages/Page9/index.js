import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img9 from "../../img/img9.svg";
import { FormContainer, FormImage, FormQquestion } from "../../style";

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
            <img src={img9} alt="img" />
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
    return <div>Page 1 Tips</div>;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  page: Page,
  tips: PageTips,
};
