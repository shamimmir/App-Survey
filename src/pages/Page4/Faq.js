import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../animation";
import styled from "styled-components";
import img4 from "../../img/img4.svg";
import {
  FormContainer,
  FormImage,
  FormQquestion,
  ImageSideBar,
} from "../../style";

const Faq = () => {
  return (
    <div>
      <ImageSideBar src={img4} alt="img" />
      <h3> sit amet consectetur</h3>

      <p>
        Adipisicing elit. Minima in quam quibusdam! Repellat cupiditate illum
        sed adipisci quos dicta sit. Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default Faq;

const Image = styled.img`
  width: 100%;
`;
