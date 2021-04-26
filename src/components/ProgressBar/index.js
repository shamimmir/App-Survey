import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

function DrawStep(props) {
  let { title = null, className, step = 0 } = props;
  return (
    <motion.li className={className || null} data-step={step}>
      {title}
    </motion.li>
  );
}

export default class ProgressBar extends React.Component {
  render() {
    let { items = [], itemsSelected = 0 } = this.props,
      itemCount = items.length;
    let steps = items.map((item, index) => {
      let cls = [];
      if (index < itemsSelected) cls.push("is-active");
      if (index === itemsSelected) cls.push("is-complete");
      if (itemCount - index === 1) cls.push("progress__last");
      return (
        <DrawStep
          className={cls.join(" ")}
          title={item.title}
          step={index + 1}
        />
      );
    });

    return <ol className="Progressbar">{steps}</ol>;
  }
}

// import './style.css';
// <ol className='ProgressBar'>
//    <li className={'active'}>Step 1</li>
//    <li className={'active'}>Step 2</li>
//    <li>Step 3</li>
//    <li>Step 4</li>
//    <li>Step 5</li>
//    <li>Step 6</li>
//    <li>Step 7</li>
//    <li>Step 8</li>
// </ol >
