import styled from "styled-components";

export const Style = styled.div`
  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .default {
    .now-palying {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      row-gap: 25px;
      margin-bottom: 150px;
      li {
        /* .title {
          font-size: 1.4rem;
          line-height: 1.46667;
          font-weight: 400;
          letter-spacing: 0;
          margin-top: 15px;
        } */
        .img-wrapper {
          img {
            border-radius: 20px;
            /* min-height: 400px; */
          }
        }
      }
    }
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    /* row-gap: 30px; */
    margin-bottom: 150px;
    li {
      /* h2 {
        &:hover {
          color: blue;
        }
        padding: 0 15px;
      } */
      .img-wrapper {
        border-radius: 20px;
        height: 400px;
        position: relative;
        &:hover {
          /* &::before {
            opacity: 1;
          } */
          /* img {
            transform: translate3d(0, -2%, 0) scale(1.1);
          } */
        }

        /* &::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          top: 0;
          left: 0;
          border-radius: 20px;
          opacity: 0;
          transition: all 1s;
        } */
        img {
          border-radius: 20px;
          transition: all 0.3s;
        }
      }
      /* font-size: 1.4rem; */
    }
  }

  .not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
