import styled from "styled-components";
export const Style = styled.div`
  .details {
    width: 100%;
    height: auto;
    background-color: #f3f3f3;
    border-top: 1px solid #cccccc;
    padding: 20px 0;
    .overview-box {
      background-color: #ccc;
      border-radius: 15px;
      padding: 10px 20px 20px 20px;
      .over-wrapper {
        .movie-title {
        }
        .movie-genre {
          font-size: 1.2rem;
          font-weight: 400;
          padding-bottom: 10px;
        }
        .over-caption {
          font-size: 1.3rem;
        }
      }
    }
    .info {
      margin-top: 30px;
      border-top: 1px solid #cccccc;
      .title-wrapper {
        .list {
          .sec-title {
            font-weight: 700;
            font-size: 1.3rem;
          }
          .text {
            margin-top: 5px;
            font-size: 1.2rem;
          }
          .badge {
            max-width: 22px;
            height: auto;
          }
        }
      }
    }
  }
  .imdb {
    img {
      max-width: 50px;
      height: auto;
    }
  }
`;
