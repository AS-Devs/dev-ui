import css from 'styled-jsx/css';

export const typo = css.global`
  * {
    margin: 0;
    padding: 0;
  }
.txt-8--mini, .txt-12--small, .txt-14--caption, .txt-16--body, .txt-18--body_subtitle, .txt-20--body_title, .txt-24--subheader, .txt-32--title, .txt-36--headline, .txt-42--display, .txt-54--jumbo, .txt-64--mega {
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
  }
  .fw-900 {
    font-weight: 900;
  }
  .dark-grey {
    color: #6F6F6F;
  }
  .txt-8--mini {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.4px;
  }
  .txt-8--mini.bold {
    font-weight: 700;
  }
  
  .txt-12--small {
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.4px;
  }
  .txt-12--small.bold {
    font-weight: 700;
  }
  .txt-12--small.color-primary {
    color: #FFD200;
  }
  .txt-12--small.color-secondary {
    color: #007BFF;
  }
  .txt-12--small.lh-20 {
    line-height: 20px;
  }
  .txt-12--small.text-disabled {
    color: #ADADAD;
  }
  
  .txt-14--caption {
    font-size: 14px;
    line-height: 130%;
    color: #ADADAD;
  }
  .txt-14--caption.bold {
    font-weight: 700;
  }
  .txt-14--caption.color-black {
    color: #333;
  }
  
  .txt-16--body {
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    color: #6F6F6F;
  }
  .txt-16--body.bold {
    font-weight: 700;
  }
  .txt-16--body.color-black {
    color: #333;
  }
  
  .txt-18--body_subtitle {
    font-size: 18px;
    line-height: 130%;
    font-weight: 400;
    color: #6F6F6F;
  }
  .txt-18--body_subtitle.bold {
    font-weight: 700;
  }
  .txt-18--body_subtitle.color-black {
    color: #333;
  }
  .txt-18--body_subtitle.color-secondary {
    color: #007BFF;
  }
  
  .txt-20--body_title {
    font-size: 20px;
    line-height: 130%;
    font-weight: 400;
    color: #6F6F6F;
  }
  .txt-20--body_title.bold {
    font-weight: 700;
  }
  .txt-20--body_title.color-black {
    color: #333;
  }
  
  .txt-24--subheader {
    font-size: 24px;
    line-height: 130%;
  }
  .txt-24--subheader.bold {
    font-weight: 700;
  }
  .txt-24--subheader.color-black {
    color: #333;
  }
  
  .txt-32--title {
    font-size: 32px;
    line-height: 130%;
    font-weight: 700;
  }
  .txt-32--title.bold {
    font-weight: 800;
  }
  .txt-32--title.color-black {
    color: #333;
  }
  
  .txt-36--headline {
    font-size: 36px;
    line-height: 130%;
    font-weight: 700;
  }
  
  .txt-42--display {
    font-size: 42px;
    line-height: 130%;
    font-weight: 900;
  }
  
  .txt-54--jumbo {
    font-size: 54px;
    line-height: 130%;
    font-weight: 900;
  }
  
  .txt-64--mega {
    font-size: 64px;
    line-height: 130%;
    font-weight: 900;
  }

  .flex-row {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pointer {
    cursor: pointer;
  }
  
  .content-loading {
    overflow: hidden;
    position: relative;
  }
  .content-loading:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: #bbb;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    animation: placeHolderShimmer 1s linear infinite forwards;
    background-size: 950px 100%;
  }
 
  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 520px 0
    }
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }
  .lds-ring.small {
    width: 18px;
    height: 18px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 21px;
    height: 21px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  
`;
