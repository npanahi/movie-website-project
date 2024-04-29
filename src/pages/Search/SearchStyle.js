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
      gap: 40px;
      row-gap: 25px;
      margin-bottom: 150px;
      li {
        h2 {
          &:hover {
            color: blue;
          }
          padding: 0 15px;
        }
        .img-wrapper {
          img {
            border-radius: 20px;
            min-height: 400px;
          }
        }
      }
    }
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    row-gap: 30px;
    margin-bottom: 150px;
    li {
      h2 {
        &:hover {
          color: blue;
        }
        padding: 0 15px;
      }
      .img-wrapper {
        border-radius: 20px;
        height: 400px;
        img {
          border-radius: 20px;
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
