import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img8 from "../../img/img8.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img8} alt="img" />
      <h3>Repellat cupiditate illum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima in quam
        quibusdaadipisci quos dicta sit.
      </p>

      <p>Sed adipisci quos dicta sit.</p>
    </div>
  );
};

export default Faq;

const Image = styled.img`
  width: 100%;
`;
