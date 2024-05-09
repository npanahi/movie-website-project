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
            max-width: 26.2rem;
            min-height: 40rem;
            img {
              min-height: 40rem;
              @media (max-width: 700px) {
                max-height: 20rem;
              }
              @media (max-width: 500px) {
                max-height: 10rem;
              }
            }
            .img-back {
              position: relative;
              max-width: 26.2rem;
              min-height: 40rem;

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
            }
            &:hover {
              .elipsis-icon {
                opacity: 1;
              }

              .img-back {
                &::before {
                  opacity: 1;
                }
              }
            }

            img {
              &:hover {
              }
              border-radius: 15px;
            }
            .elipsis-icon {
              position: relative;

              &:hover {
                background-color: #0b84ff;
              }
              position: absolute;
              font-size: 3rem;
              right: 5%;
              bottom: 2%;
              color: #fff;
              opacity: 0;
              transition: all 0.5s;
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              text-align: center;
              .icon {
                vertical-align: baseline;
              }
              .popover {
                background-color: #2d2d2d;
              }
              .elip-text {
                position: absolute;
                right: 0;
                bottom: 120%;
                transition: all 0.5s;
                &:hover {
                  background-color: #fff;
                  border-radius: 5px;
                }
                .elip-container {
                  width: 12rem;
                  height: 3rem;
                  background-color: rgba(255, 255, 255, 0.8);
                  border: 1px solid #fff;
                  border-radius: 5px;
                  align-items: center;
                  justify-content: space-between;
                  padding: 10px 5px;
                  transition: all 0.5s;

                  .content {
                    color: #707070;
                    font-size: 1.1rem;
                    margin: 0;
                  }
                  .share-icon {
                    width: 2rem;
                    height: 4rem;
                    svg {
                      width: 1.5rem;
                      height: 1.5rem;
                    }
                  }
                }
              }
            }
            .vote-chart {
              position: absolute;
              border-radius: 50%;
              left: 5%;
              bottom: -3%;
              .circle {
                width: 4.5rem;
                height: 4.5rem;
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
            font-size: 4rem;
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
              font-size: 1.2rem;
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
