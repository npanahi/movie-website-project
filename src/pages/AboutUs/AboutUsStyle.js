import styled from "styled-components";
export const Style = styled.div`
  /* Global */
  .linked-text {
    color: #06c;
    font-size: 1.8rem;
    margin-top: 34px;
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
  /* Description */
  .description {
    .description-wrapper {
      max-width: 70%;
      margin: 30px auto 0;
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
        height: 50px;
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
          font-size: 18px;
        }
        &:hover {
          border: 1px solid #d2d2d7;
        }
      }
    }

    .people {
      max-width: 980px;
      max-height: 356px;
      margin: 40px 0 95px 5px;
    }
    p {
      font-size: 2.4rem;
      line-height: 1.25em;
      margin-bottom: 40px;
      margin-top: 24px;
      text-align: center;
      font-weight: 600;
    }
    .product-list {
      ul {
        li {
          text-align: center;
          img {
            width: 100px;
            height: 100px;
          }
          div {
            margin-top: 33px;
            display: block;
            color: #1d1d1f;
            font-size: 18px;
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
    .title {
      text-align: center;
      h1 {
        font-size: 52px;
        line-height: 65px;
        padding-bottom: 32px;
        margin: 0;
      }
      p {
        font-size: 22px;
        padding-bottom: 34px;
        margin: 0;
        font-weight: 400;
      }
    }
    .tips {
      .img-wrapper {
        width: 130px;
        height: 130px;
      }
    }
  }
`;
