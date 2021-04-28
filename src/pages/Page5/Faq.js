import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img5 from "../../img/img5.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img5} alt="img" />
      <h3>Adipisicing elit.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima in quam
        quibusdaadipisci quos dicta sit.
      </p>
    </div>
  );
};

export default Faq;

const Image = styled.img`
  width: 100%;
`;
