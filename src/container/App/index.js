import React, { Component } from "react";
import ReactLoading from "react-loading";
import Logo from "../../components/Logo";
import ProgressBar from "../../components/ProgressBar";
import Pages from "../../pages";
import "./App.css";
import styled from "styled-components";
import { BackGround } from "../../style";
import FooterButton from "../../FooterButton";

import Background from "../../img/img1.svg";

import { motion, AnimatePresence } from "framer-motion";
import { fadeOut, fadeIn, pageVariants, pageTransition } from "../../animation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isInitial: true,
      page: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.pageLoaded();
    }, 3000);
    // setTimeout(() => { this.pageTrx1() }, 3000);
  }

  pageTrx1() {
    console.log("pageTrx1");
    this.setState({
      isInitial: false,
    });
  }

  pageLoaded() {
    console.log("pageLoaded");
    this.setState({
      isLoading: false,
    });
  }

  pageLoading(props) {
    let { isInitial } = this.state,
      cls = ["page-loader"];

    if (!isInitial) {
      cls.push("loaded");
    }

    return (
      <motion.div className={cls.join(" ")}>
        <div className="logo">
          <Logo />
        </div>
        <ReactLoading type={"bars"} color={"3555"} />
      </motion.div>
    );
  }

  View(index, type) {
    let pageCount = Pages.length - 1,
      currIndex = index >= pageCount ? pageCount : index <= 0 ? 0 : index,
      currPage = Pages[currIndex];
    return type === 1 ? currPage.pageComponent : currPage.pageHint;
  }

  Header() {
    return (
      <header>
        <div className="logo">
          <Logo />
        </div>
      </header>
    );
  }

  ButtonNextPrev() {
    let { page } = this.state,
      pageCount = Pages.length,
      switchPage = (val) => {
        return () => {
          let currPage = page + val;
          if (currPage >= pageCount) currPage = pageCount;
          if (currPage <= 0) currPage = 0;
          this.setState({
            page: currPage,
          });
        };
      };

    return (
      <div className="Container">
        <button className="previous-btn" onClick={switchPage(-1)}>
          Prev
        </button>
        <button className="next-btn" onClick={switchPage(1)}>
          Next
        </button>
      </div>
    );
  }

  Footer() {
    let { page } = this.state;

    return (
      <footer>
        <div className="progress">
          <ProgressBar items={Pages} itemsSelected={page} />
        </div>
      </footer>
    );
  }

  MainContent() {
    let { page } = this.state,
      View = this.View.bind(this),
      CurrView = View(page, 1),
      CurrTip = View(page, 2);

    return (
      <div className="Content">
        <main>
          <BackGround>
            <CurrView />
          </BackGround>
        </main>
      </div>
    );
  }

  render() {
    let { isLoading } = this.state,
      PageLoading = this.pageLoading.bind(this),
      Header = this.Header.bind(this),
      ButtonNextPrev = this.ButtonNextPrev.bind(this),
      Footer = this.Footer.bind(this),
      MainContent = this.MainContent.bind(this);

    console.log("UITEMS", Pages);

    return (
      <div className="App">
        {isLoading ? (
          <motion.div variants={fadeOut} initial="hidden" animate="show">
            <PageLoading />
          </motion.div>
        ) : (
          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="AppContainer"
          >
            <Header />

            <MainContent style={{ backgroundImage: `url(${Background})` }} />
            <ButtonNextPrev />
            <Footer />
          </motion.section>
        )}
      </div>
    );
  }
}
