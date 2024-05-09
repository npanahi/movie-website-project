import styled from "styled-components";
export const Style = styled.div`
  .movies-wrapper {
    margin: 50px 0;
    .movies {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
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
        .text-wrapper {
          padding: 0 10px;
          margin-top: 10px;
          margin-bottom: 20px;
          h2 {
            margin: 0;
            /* margin: 10px 0; */
          }
          .genres {
            /* margin-bottom: 20px; */
            font-size: 1.2rem;
          }
          .num {
            color: #999999;
            font-size: 4rem;
            font-weight: 700;
            letter-spacing: 0;
          }
        }
      }
    }
  }
`;
