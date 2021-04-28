import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img3 from "../../img/img3.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img3} alt="img" />
      <h3>Minima in quam.</h3>
      <p>Adipisicing elit. Minima in quam quibusdaadipisci quos dicta sit.</p>

      <p>Repellat cupiditate illum sed adipisci quos dicta sit.</p>
    </div>
  );
};

export default Faq;
