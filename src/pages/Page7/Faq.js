import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img7 from "../../img/img7.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img7} alt="img" />
      <h3>Quos dicta sit</h3>

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
