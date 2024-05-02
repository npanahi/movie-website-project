import styled from "styled-components";

export const Style = styled.div`
  .movie-list-wrapper {
    .slider-container {
      .list {
        display: flex;
        gap: 10px;

        .backdrop-holder {
          padding: 0 5px;

          .image-wrapper {
            position: relative;
            max-width: 262px;
            min-height: 400px;
            img {
              min-height: 400px;
            }
            &:hover {
              .elipsis-icon {
                opacity: 1;
              }

              &::before {
                opacity: 1;
              }
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 15px;
              opacity: 0;
              transition: all 0.5s;
            }
            img {
              &:hover {
              }
              border-radius: 15px;
            }
            .elipsis-icon {
              &:hover {
                background-color: #0b84ff;
              }
              position: absolute;
              font-size: 30px;
              right: 5%;
              bottom: 2%;
              color: #fff;
              opacity: 0;
              transition: all 0.5s;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              text-align: center;
              .icon {
                vertical-align: baseline;
              }
              .popover {
                background-color: #2d2d2d;
              }
            }
            .vote-chart {
              position: absolute;
              border-radius: 50%;
              left: 5%;
              bottom: -3%;
              .circle {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                border: 1px solid #fff;
                background-color: rgba(0, 0, 0, 0.5);
                transition: all 0.5s;
                &:hover {
                  background-color: #000;
                }
                .vote-ave {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-weight: bold;
                  font-size: 1.2rem;
                  /* color: #1f1f1f; */
                  color: #fff;
                }
              }
            }
          }
        }
        .text-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 0 10px;
          .num {
            color: #999999;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 0.875;
            height: 100%;
            margin-bottom: 15px;
          }
          .title-genres {
            font-size: 1.4rem;
            line-height: 1.46667;
            font-weight: 400;
            letter-spacing: 0;
            .title {
              margin: 0;
              margin-top: 15px;
              color: #1f1f1f;
            }
            .genres {
              color: #707070;
              /* margin-top: 8px; */
              font-size: 1.2rem;
              /* line-height: 1.25; */
              /* font-weight: 400;
              letter-spacing: 0; */
              /* font-size: 12px; */
              line-height: 1.41667;
            }
            .release-date {
              font-size: 1.2rem;
              color: #707070;

              line-height: 1.41667;
            }
          }
        }
      }
    }
  }
`;
