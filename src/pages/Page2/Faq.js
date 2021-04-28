import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img2 from "../../img/img2.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img2} alt="img" />
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima in quam
        quibusdaadipisci quos dicta sit.
      </p>

      <p>
        Adipisicing elit. Minima in quam quibusdam! Repellat cupiditate illum
        sed adipisci quos dicta sit.
      </p>
    </div>
  );
};

export default Faq;

const Image = styled.img`
  width: 100%;
`;
