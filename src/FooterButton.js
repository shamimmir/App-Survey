import React from "react";
import styled from "styled-components";

const FooterButton = () => {
  return (
    <Test>
      <div class="container">
        <div class="left-side">
          <div class="card">
            <div class="card-line"></div>
            <div class="buttons"></div>
          </div>
          <div class="post">
            <div class="post-line"></div>
            <div class="screen">
              <div class="dollar">$</div>
            </div>
            <div class="numbers"></div>
            <div class="numbers-line2"></div>
          </div>
        </div>
        <div class="right-side">
          <div class="new">New Transaction</div>

          <svg
            class="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 451.846 451.847"
          >
            <path
              d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
              data-original="#000000"
              class="active-path"
              data-old_color="#000000"
              fill="#cfcfcf"
            />
          </svg>
        </div>
      </div>
    </Test>
  );
};

export default FooterButton;

const Test = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");

  :root {
    --background: #33837e;
    --left-side: #5de2a3;
    --card: #c7ffbc;
    --card-line: #80ea69;
    --button-color-3: #26850e;
    --button-color-2: #379e1f;
    --button-color-1: #56be3e;
    --post: #dddde0;
    --numbers: #838183;
    --numbers-2: #aaa9ab;
    --post-line: #757375;
    --post-line2: #545354;
    --dollar: #4b953b;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    background: var(--background);
  }

  .container {
    background-color: #ffffff;
    display: flex;
    width: 460px;
    height: 120px;
    position: relative;
    border-radius: 6px;
    transition: 0.3s ease-in-out;

    &:before {
      width: 200vw;
      position: absolute;
      top: 0;
      left: -100vw;
      height: 100%;
      content: "";
    }

    &:hover {
      transform: scale(1.03);
      width: 220px;

      .left-side {
        width: 100%;
      }
    }
  }

  .left-side {
    background-color: var(--left-side);
    width: 130px;
    height: 120px;
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    flex-shrink: 0;
    overflow: hidden;
  }

  .right-side {
    width: calc(100% - 130px);
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
    &:hover {
      background-color: #f9f7f9;
    }
  }

  .arrow {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  .new {
    font-size: 23px;
    font-family: "Lexend Deca", sans-serif;
    margin-left: 20px;
  }

  .card {
    width: 70px;
    height: 46px;
    background-color: var(--card);
    border-radius: 6px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
    -moz-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
    -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  }

  .card-line {
    width: 65px;
    height: 13px;
    background-color: var(--card-line);
    border-radius: 2px;
    margin-top: 7px;
  }

  @media only screen and (max-width: 480px) {
    .container {
      transform: scale(0.7);
      &:hover {
        transform: scale(0.74);
      }
    }
    .new {
      font-size: 18px;
    }
  }

  .buttons {
    width: 8px;
    height: 8px;
    background-color: var(--button-color-2);
    box-shadow: 0 -10px 0 0 var(--button-color-3),
      0 10px 0 0 var(--button-color-1);
    border-radius: 50%;
    margin-top: 5px;
    transform: rotate(90deg);
    margin: 10px 0 0 -30px;
  }

  .container:hover .card {
    animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
  }

  .container:hover .post {
    animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }

  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-70px) rotate(90deg);
      transform: translateY(-70px) rotate(90deg);
    }
    60% {
      -webkit-transform: translateY(-70px) rotate(90deg);
      transform: translateY(-70px) rotate(90deg);
    }
    100% {
      -webkit-transform: translateY(-8px) rotate(90deg);
      transform: translateY(-8px) rotate(90deg);
    }
  }

  .post {
    width: 63px;
    height: 75px;
    background-color: var(--post);
    position: absolute;
    z-index: 11;
    bottom: 10px;
    top: 120px;
    border-radius: 6px;
    overflow: hidden;
  }

  .post-line {
    width: 47px;
    height: 9px;
    background-color: var(--post-line2);
    position: absolute;
    border-radius: 0px 0px 3px 3px;
    right: 8px;
    top: 8px;
    &:before {
      content: "";
      position: absolute;
      width: 47px;
      height: 9px;
      background-color: var(--post-line);
      top: -8px;
    }
  }

  .screen {
    width: 47px;
    height: 23px;
    background-color: #ffffff;
    position: absolute;
    top: 22px;
    right: 8px;
    border-radius: 3px;
  }

  .numbers {
    width: 12px;
    height: 12px;
    background-color: var(--numbers);
    box-shadow: 0 -18px 0 0 var(--numbers), 0 18px 0 0 var(--numbers);
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 25px;
    top: 52px;
  }

  .numbers-line2 {
    width: 12px;
    height: 12px;
    background-color: var(--numbers-2);
    box-shadow: 0 -18px 0 0 var(--numbers-2), 0 18px 0 0 var(--numbers-2);
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 25px;
    top: 68px;
  }

  @keyframes slide-post {
    50% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px);
    }
  }

  .dollar {
    position: absolute;
    font-size: 16px;
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    left: 0;
    top: 0;
    color: var(--dollar);
    text-align: center;
  }

  .container:hover .dollar {
    animation: fade-in-fwd 0.3s 1s backwards;
  }

  @keyframes fade-in-fwd {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
