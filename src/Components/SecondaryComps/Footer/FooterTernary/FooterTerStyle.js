import styled from "styled-components";
export const Style = styled.div`
  .footer {
    background-color: #f5f5f7;
    padding-bottom: 21px;
    .footer-wrapper {
      color: #888888;
      font-size: 1.1rem;
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
              font-size: 2rem;
            }
          }

          li {
            position: relative;
            &::before {
              width: 0.8rem;
              height: 1.8rem;
              background-size: 0.8rem 1.8rem;
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
