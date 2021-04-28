import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img9 from "../../img/img9.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img9} alt="img" />
      <h3>Minima in quam</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        quibusdaadipisci quos dicta sit.
      </p>
    </div>
  );
};

export default Faq;

const Image = styled.img`
  width: 100%;
`;
