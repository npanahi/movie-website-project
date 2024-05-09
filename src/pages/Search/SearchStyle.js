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
      @media (max-width: 650px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: 400px) {
        grid-template-columns: repeat(3, 1fr);
      }
      li {
        .img-wrapper {
          position: relative;

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 15px;
            opacity: 0;
            transition: opacity 0.5s;
          }
          &:hover {
            &::before {
              opacity: 1;
            }
            .icon-wrapper {
              opacity: 1;
            }
          }
          img {
            min-height: 40rem;
            border-radius: 15px;
            @media (max-width: 400px) {
              min-height: 20rem;
            }
          }
          .icon-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            color: #fff;
            font-size: 4rem;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.5s;

            .play-icon {
              transition: color 0.5s;
              &:hover {
                color: #0b84ff;
              }
            }
          }
        }
      }
    }
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin-bottom: 150px;
    @media (max-width: 650px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    li {
      .img-wrapper {
        position: relative;
        height: 40rem;
        border-radius: 15px;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.5s;
        }
        &:hover {
          &::before {
            opacity: 1;
          }
          .icon-wrapper {
            opacity: 1;
          }
        }
        img {
          max-height: 40rem;
          border-radius: 15px;
          @media (max-width: 400px) {
            min-height: 20rem;
          }
        }
        .icon-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          color: #fff;
          font-size: 4rem;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.5s;

          .play-icon {
            transition: color 0.5s;
            &:hover {
              color: #0b84ff;
            }
          }
        }
      }

      .title {
        font-size: 1.5rem;
        padding: 0 10px;
        margin-top: 15px;
        font-size: 1.2rem;
        color: #1f1f1f;
        line-height: 1.46667;
        font-weight: 600;
        letter-spacing: 0;
      }
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
