import styled from "styled-components";
export const Style = styled.div`
  color: #333333;
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
      width: 100%;
      height: 160px;
      margin: 0 auto;
      margin-top: 15px;
      /* margin-bottom: 80px; */
      .sec-title {
        font-size: 4.2rem;
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
        margin-bottom: 100px;
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
  .accordions {
    padding: 0 250px;
  }
  .footer {
    margin-top: 900px;
  }
  .movie-list {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
  }
  .middle-poster {
    padding: 30px 0;
    border-bottom: 1px solid #cccccc;
    cursor: pointer;

    img {
      border-radius: 20px;
    }
  }
`;
