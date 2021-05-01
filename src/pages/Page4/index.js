import React, { Component } from "react";
import { motion } from "framer-motion";

import { FormContainer, FormImage, FaqStyle, ImageF } from "../../style";
import { pageVariants, pageTransition } from "../../animation";

import Faq from "./Faq";

import img from "../../img/022-money.svg";

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
                  How much is your down payment?
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
                    autoComplete="off"
                    className="slide-up"
                    id="card"
                    type="number"
                    placeholder=" Enter your Number!"
                  />
                  <label for="card">Down Payment</label>
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
