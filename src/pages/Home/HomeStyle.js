import styled from "styled-components";
export const Style = styled.div`
  .featured-in {
    margin-bottom: 300px;
    .logo {
      svg {
      }
    }
    .title {
      font-size: 60px;
      font-weight: 700;
    }
    p {
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 1.23;
    }
    .feature-logos {
      width: 990px;
      height: 160px;
      margin: 0 auto;
      margin-top: 15px;
      margin-bottom: 80px;
      .sec-title {
        font-size: 42px;
        font-weight: 700;
      }
      .linked-text {
        color: #06c;
        font-size: 1.8rem;
        margin-right: 10px;
        a {
          &:hover {
            text-decoration: underline;
          }
        }
        svg {
          vertical-align: middle;
          width: 10px;
        }
      }
      .iphone {
        ul {
          align-items: end;
          justify-content: center;
          li {
            width: 20%;
            height: 100px;
            .caption {
              margin-top: 8px;
              font-size: 1.4rem;
              font-weight: 600;
              line-height: 1.28;
            }
          }
        }
      }
    }
  }
  /* .red {
    width: 100%;
    height: 200px;
    background: red;
  } */
`;
