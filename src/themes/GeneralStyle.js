import { createGlobalStyle } from "styled-components";

export const GeneralStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  overflow-x: hidden;
}

* , *:after , *:before {
    box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:#e6e6e6;
  color: #333333;
}
ul , ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
    color: inherit;
}


p {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
}
.container-full {
  width: 100%;
  margin: 0 auto;
}
.hero-container {
  max-width: 1600px;
  margin: 0 auto;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding:0 10px;
}
.sec-container{
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 22px;
}

.bg-y {
  background-color: yellow;
}
.center-text {
  text-align: center;
}
.uppercase {
  text-transform: uppercase;
}
.i-b {
  display: inline-block;
}
.pointer {
  cursor: pointer;
}
.vertical-middle {
  vertical-align: middle;
}

.c-f {
  color: #fff;
}
.c-0 {
  color: #000;
}
.c-g {
  color: #767676;
}
.ov {
  overflow: hidden;
}
/*//////////////// linked-text  ////////////////// */

.linked-text {
    color: #06c;
    font-size: 1.8rem;
    margin-top: 34px;
    margin-right: 10px;
    a {
      &:hover {
        text-decoration: underline;
      }
    }
    .chev-r {
      vertical-align: middle;
      font-size: 1.2rem;
    }
  }
/*//////////////// border ////////////////// */

.border {
  border: 1px solid #393939;
}
.border-x {
  border-right: 1px solid #393939;
  border-left: 1px solid #393939;
}
.border-y {
  border-top: 1px solid #393939;
  border-bottom: 1px solid #393939;
}
/*/ ////////////// flex ////////////////// */
.align-center {
  align-items: center;
}
.align-start {
  align-items: flex-start;
}
.align-baseline {
  align-items: baseline;
}
.align-end {
  align-items: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}
.flex-x {
  display: flex;
}
.flex-y {
  display: flex;
  flex-direction: column;
}
.flex-w {
  flex-wrap: wrap;
}
.flex-nw {
  flex-wrap: nowrap;
}
.grow-1 {
  flex-grow: 1;
}
.grow-2 {
  flex-grow: 2;
}
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
/* ************* */
/* gap  */
/* ************* */

.gap-5 {
  gap: 5px;
}
.gap-10 {
  gap: 10px;
}
.gap-15 {
  gap: 15px;
}
.gap-20 {
  gap: 20px;
}
.gap-25 {
  gap: 25px;
}
.gap-30 {
  gap: 30px;
}
.gap-35 {
  gap: 35px;
}
.gap-40 {
  gap: 40px;
}
.gap-45 {
  gap: 45px;
}
.gap-50 {
  gap: 50px;
}
.gap-60 {
  gap: 50px;
}
.gap-100 {
  gap: 100px;
}
/*/ /////// padding - margin /////////*/

/* ************* */
/* padding  */
/* ************* */
.p-0 {
  padding: 0;
}
.p-10 {
  padding: 10px;
}
.p-15 {
  padding: 15px;
}
.p-20 {
  padding: 20px;
}
.p-25 {
  padding: 25px;
}
.p-50 {
  padding: 50px;
}
.p-80 {
  padding: 80px;
}
.p-100 {
  padding: 100px;
}
/* ************* */
/* padding-y  */
.p-y-10 {
  padding: 10px 0;
}
.p-y-20 {
  padding: 20px 0;
}
.p-y-50 {
  padding: 50px 0;
}
.p-y-60 {
  padding: 60px 0;
}
.p-y-160 {
  padding: 160px 0;
}
.p-y-1050 {
  padding: 10px 0 50px 0;
}
/* ************* */
/* padding-t  */

.p-t-160 {
  padding-top: 160px;
}
.p-t-10 {
  padding-top: 10px;
}
.p-t-100 {
  padding-top: 100px;
}
/* ************* */
/* padding-b  */
.p-b-30 {
  padding-bottom: 30px;
}
.p-b-160 {
  padding-bottom: 160px;
}
/* ************* */
/* padding-x  */
.p-x-20 {
  padding: 0 20px;
}

.p-x-10 {
  padding: 0 10px;
}
.p-x-25 {
  padding: 0 25px;
}

/* ************* */
/* padding-x-y */
.p-10-25 {
  padding: 10px 25px;
}

/* ************* */
/* margin  */
/* ************* */
.m-0 {
  margin: 0;
}
.m-auto {
  margin: 0 auto;
}
/* ************* */
/* margin-top  */
.m-t-5 {
  margin-top: 5px;
}
.m-t-10 {
  margin-top: 10px;
}
.m-t-15 {
  margin-top: 15px;
}
.m-t-20 {
  margin-top: 20px;
}
.m-t-30 {
  margin-top: 30px;
}
.m-t-40 {
  margin-top: 40px;
}
.m-t-50 {
  margin-top: 50px;
}
.m-t-60 {
  margin-top: 60px;
}
.m-t-80 {
  margin-top: 80px;
}
.m-t-100 {
  margin-top: 100px;
}
/* ************* */
/* margin-y  */

.m-y-10 {
  margin: 10px 0;
}
.m-y-15 {
  margin: 15px 0;
}
.m-y-20 {
  margin: 20px 0;
}
.m-y-25 {
  margin: 25px 0;
}
.m-y-30 {
  margin: 30px 0;
}
.m-y-35 {
  margin: 35px 0;
}
.m-y-40 {
  margin: 50px 0;
}
.m-y-50 {
  margin: 50px 0;
}
.m-y-60 {
  margin: 60px 0;
}
.m-y-100 {
  margin: 100px 0;
}
/* ************* */
/* margin-bottom  */

.m-b-5 {
  margin-bottom: 5px;
}
.m-b-10 {
  margin-bottom: 10px;
}
.m-b-20 {
  margin-bottom: 20px;
}
.m-b-25 {
  margin-bottom: 25px;
}
.m-b-30 {
  margin-bottom: 30px;
}
.m-b-40 {
  margin-bottom: 40px;
}
.m-b-50 {
  margin-bottom: 50px;
}
.m-b-60 {
  margin-bottom: 60px;
}
/* ************* */
/* margin-left  */
.m-l-5 {
  margin-left: 5px;
}
.m-l-10 {
  margin-left: 10px;
}
.m-l-15 {
  margin-left: 15px;
}
/* ************* */
/* margin-right  */

.m-r-5 {
  margin-right:5px;
}
.m-r-10 {
  margin-right:10px;
}
.m-r-15 {
  margin-right:15px;
}





/*/ ///////////// position ///////////////*/
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.z-3 {
  z-index: 3;
}
.z-2 {
  z-index: 2;
}
.z-1 {
  z-index: 1;
}


/* /////////////// Shadow ///////////// */
.shadow {
  box-shadow: 0 4px 7px rgba(0,0,0,.25);

}

/* /////////////// numbers ///////////// */




`;
