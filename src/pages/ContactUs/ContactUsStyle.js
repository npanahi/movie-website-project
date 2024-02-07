import styled from "styled-components";
export const Style = styled.div`
  /* Global */

  .linked-text {
    color: #06c;
    font-size: 1.7rem;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    margin-top: 14px;

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
  .card {
    justify-content: space-around;
    li {
      .img-wrapper {
        width: 75px;
        height: 75px;
      }
      .text {
        margin-top: 20px;
        .title {
          font-size: 2.4rem;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: 0.009em;
        }
        p {
          font-size: 1.8rem;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          color: #1d1d1f;
        }
      }
    }
  }
  /* local */
  .suppport {
    h1 {
      text-align: center;
      font-size: 64px;
      line-height: 1.0625;
      font-weight: 600;
      letter-spacing: -0.009em;
    }
    ul {
      li {
        /* padding: 0 50px; */
        text-align: center;
        .img-wrapper {
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }
      }
    }
  }
  .content-block {
    margin-top: 68px;
    .single-content {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      .img-wrapper {
        width: 288px;
        height: 183px;
        margin: 0 auto;
      }
      .text {
        margin-top: 20px;
        .title {
          font-size: 2.4rem;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: 0.009em;
        }
        p {
          font-size: 1.8rem;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          color: #1d1d1f;
        }
      }
    }
  }
  .search {
    margin-top: 68px;
    h1 {
      text-align: center;
      font-size: 4rem;
      line-height: 1.0625;
      font-weight: 600;
      letter-spacing: -0.009em;
      margin-bottom: 54px;
    }
    .input {
      margin-bottom: 50px;
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
    ul {
      margin-bottom: 80px;
      li {
        padding: 10px;
      }
    }
  }
  .footer {
    background-color: #f5f5f7;
    padding-bottom: 21px;
    .footer-wrapper {
      color: #888888;
      font-size: 11px;
      line-height: 1.36364;
      font-weight: 400;
      a {
        &:hover {
          text-decoration: underline;
          color: #333;
        }
        color: #646464;
      }
      .text {
        border-bottom: 1px solid #d6d6d6;
        padding: 17px 0 11px;
      }
      .bread-crumb-box {
        border-bottom: 1px solid #d6d6d6;
        padding-bottom: 20px;

        .bread-crumb-list {
          padding-top: 20px;
          .apple-logo {
            a {
              &:hover {
                color: #333;
              }
              font-size: 20px;
            }
          }

          li {
            position: relative;
            &::before {
              width: 8px;
              height: 18px;
              background-size: 8px 18px;
              background-repeat: no-repeat;
              background-image: url(https://www.apple.com/ac/globalfooter/3/de_DE/assets/ac-footer/breadcrumbs/separator/icon_large.svg);
              margin-right: 11px;
              content: "";
              display: inline-block;
              vertical-align: middle;
              margin-top: -1px;
            }
            a {
              font-size: 1.2rem;
            }
          }
          li:first-child {
            a {
              text-decoration: none;
            }
            &::before {
              display: none;
            }
          }
        }
        p {
          a {
            color: #0070c9;
          }
        }
        .directory-clmn {
          font-size: 1.2rem;
          h4 {
            color: #1d1d1f;
          }
        }
      }

      .copy-right {
        font-size: 1.2rem;
        line-height: 1.36364;
        font-weight: 400;
        margin-top: 5px;

        ul {
          li {
            border-right: 1px solid #d6d6d6;
            padding: 0 10px;
          }
        }
        li:last-child {
          border-right: none;
        }
        a {
          &:hover {
            color: #0070c9;
          }
        }
      }
    }
  }
`;
