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
      font-size: 6rem;
      font-weight: 700;
    }
    p {
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 1.23;
    }
    .feature-logos {
      width: 100%;
      height: 16rem;
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
          width: 1rem;
        }
      }
      .iphone {
        margin-bottom: 100px;
        ul {
          align-items: end;
          justify-content: center;
          li {
            width: 20%;
            height: 10rem;
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
  .subcribe {
    background-color: #000;
    color: #fff;
    padding: 35px 0;
    .subcribe-wrapper {
      max-width: 96rem;
      align-items: center;
      margin: 0 auto;
      gap: 40px;
    }
    .img-wrapper {
      img {
        flex-basis: 20%;
        height: 3.8rem;
        min-width: 8rem;
        color: #fff;
      }
    }
    .text {
      font-size: 1.7rem;
      font-weight: 700;
      line-height: 1.23;
      color: #ebebeb;
    }
    .sub-btn {
      background: #fff;
      border: 0;
      height: 2.8rem;
      min-width: 80%;
      border-radius: 4px;
      margin: 6px 0;
      padding: 0 35px;
      font-size: 1.2rem;
    }
    .learn-more {
      font-size: 1.1rem;
    }
  }
`;
