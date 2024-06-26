import styled from "styled-components";
export const Style = styled.div`
  background-color: #fff;
  /* Global */
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
  /* stiky header */
  .sticky-header {
    border-bottom: 1px solid #d6d6d6;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 100;
    .text {
      font-size: 2.1rem;
      font-weight: 600;
      padding: 14px 0;
    }
    ul {
      li:hover {
        color: #0171e3;
      }
    }
  }
  /* Description */

  .description {
    .description-wrapper {
      max-width: 70%;
      margin: 3rem auto 0;
      h1 {
        font-size: 5.1rem;
        font-weight: 600;
        color: #1d1d1f;
      }
      p {
        font-size: 2.4rem;
        line-height: 1.25em;
        margin-bottom: 40px;
        margin-top: 24px;
        text-align: center;
      }
      .input {
        width: 90%;
        height: 5rem;
        border-radius: 0;
        font-size: 1.5rem;
        font-weight: 200;
        font-family: inherit;
        line-height: 1.94444rem;
        border-radius: 4px;
        transition: 0.3s ease-out;
        .icon {
          color: #d2d2d7;
          margin-right: 15px;
        }

        &:placeholder {
          color: #757575;
          font-size: 1.8rem;
        }
        &:hover {
          border: 1px solid #d2d2d7;
        }
      }
    }

    .people {
      max-width: 98rem;
      max-height: 35.6rem;
      margin: 40px 0 95px 5px;
    }
    p {
      font-size: 2.4rem;
      line-height: 1.25em;
      margin-bottom: 4rem;
      margin-top: 2.4rem;
      text-align: center;
      font-weight: 600;
    }
    .product-list {
      ul {
        li {
          text-align: center;
          img {
            width: 10rem;
            height: 10rem;
          }
          div {
            margin-top: 3.3rem;
            display: block;
            color: #1d1d1f;
            font-size: 1.8rem;
            word-break: break-word;
          }
        }
      }
    }
  }
  .load-more {
    border-top: 1px solid #d2d2d7;
    border-bottom: 1px solid #d2d2d7;
    margin: 40px 0;
    font-size: 1.8rem;
    padding: 20px 0;

    a {
      color: #06c;
      &.plus {
        color: #757575;
      }
    }
  }
  /* selected-tips */
  .selected-tips {
    .tips-wrapper {
      max-width: 60rem;
      margin: 0 auto;

      .title {
        text-align: center;
        h1 {
          font-size: 5.1rem;
          line-height: 6.5rem;
          padding-bottom: 32px;
          margin: 0;
        }
        p {
          font-size: 2.2rem;
          padding-bottom: 34px;
          margin: 0;
          font-weight: 400;
        }
      }
      .tips {
        min-width: 44rem;
        align-items: flex-start;
        justify-content: center;
        margin: 60px 0;
        .img-wrapper {
          min-width: 13rem;
          height: 13rem;
        }
        .text-wrapper {
          margin-left: 54px;
          h2 {
            font-size: 2.2rem;
            line-height: 2.6rem;
          }
          p {
            font-size: 1.8rem;
            line-height: 2.4rem;
            margin-bottom: 15px;
            font-weight: 400;
          }
          .author-box {
            .author {
              font-size: 1.8rem;
              font-weight: 600;
              color: #1d1d1f;
              padding-right: 16px;
              border-right: 1px solid #d2d2d7;
            }
            .level {
              color: #757575;
              font-size: 1.2rem;
              line-height: 1.33337;
              font-weight: 400;
              letter-spacing: -0.01em;
              margin-left: 16px;
              .lvl-img {
                width: 1.9rem;
                height: 1.9rem;
              }
            }
          }
        }
      }
    }
  }

  .guide {
    .title {
      margin-bottom: 70px;
      text-align: center;
      .img-wrapper {
        width: 9.6rem;
        height: 8.5rem;
        margin: 0 auto;
      }
      h1 {
        font-size: 5.1rem;
        line-height: 6.5rem;
        padding-bottom: 3.2rem;
        margin: 0;
      }
    }

    .guide-box {
      background-color: #f5f5f7;
      padding: 4rem;
      text-align: center;
      margin-bottom: 3rem;
      ul {
        align-items: center;

        li {
          padding: 0 10px;
          .img-wrapper {
            width: 4.5rem;
            height: 4.5rem;
            margin: 0 auto;
          }
          .text-wrapper {
            font-size: 1.9rem;
            margin-top: 2rem;
            font-weight: 600;
            color: #1d1d1f;
          }
        }
        li:nth-child(2) {
          border-left: 1px solid #d2d2d7;
          border-right: 1px solid #d2d2d7;
        }
      }
    }
  }
`;
