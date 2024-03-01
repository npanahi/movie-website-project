import styled from "styled-components";

export const Style = styled.div`
  .movie-list-wrapper {
    .slider-container {
      /* gap: 20px; */
      .list {
        display: flex;
        gap: 10px;

        .img-wrapper {
          padding: 0 5px;
          img {
            border-radius: 5px;
          }
        }
        .text-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
          .num {
            color: #999999;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 0.875;
            height: 100%;
          }
        }
      }
    }
  }
  /* .slider {
    .list {
      padding: 0 5px;
      border-radius: 10px;
      img {
        border-radius: 10px;
      }
    }
  }
  .genres {
    font-size: 12px;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: 0;
  } */
`;
