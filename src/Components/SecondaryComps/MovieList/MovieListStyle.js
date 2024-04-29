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
          }
          .title-genres {
            .title {
              margin: 0;
              margin-top: 15px;
            }
            .genres {
              /* margin-top: 8px; */
              font-size: 1.2rem;
              line-height: 1.25;
              font-weight: 400;
              letter-spacing: 0;
            }
          }
        }
      }
    }
  }
`;
