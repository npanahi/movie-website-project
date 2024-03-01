import styled from "styled-components";
export const Style = styled.div`
  color: #333333;
  .movie-casts {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 30px;

    .casts {
      gap: 10px;
      margin-bottom: 60px;

      li {
        width: 150px;
        height: 200px;
        text-align: center;

        .cast-img {
          width: 100%;
          height: 100%;
          img {
            border-radius: 10px;
          }
        }
        .cast-name {
          font-size: 1.4rem;
          margin-top: 20px;
          font-weight: 500;
        }
        .character {
          font-size: 1.1rem;
          text-align: center;
          margin-top: 5px;
        }
      }
    }
  }
  .movie-reviews {
    overflow: scroll;
    width: 100%;
    height: 500px;
    margin-bottom: 100px;
    position: relative;
    .review-title {
      text-align: start;
      margin-top: 50px;
      position: sticky;
      top: 10%;
      left: 0;
    }
    .review-wrapper {
      align-items: center;
      margin: 40px auto;
      margin-top: 60px;
      border-bottom: 1px solid #cccccc;
      padding: 30px;
      .author {
        gap: 40px;
        margin-bottom: 20px;
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          img {
            border-radius: 50%;
          }
        }
        .text {
          h2 {
            font-size: 2rem;
            margin-bottom: 5px;
          }
        }
        .caption {
          font-size: 1.2rem;
          margin: 0;
        }
      }
      .content {
        font-size: 1.3rem;
        line-height: 1.4;
      }
    }
  }
  .movie-similar {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 50px;

    .similars {
      display: flex;
      gap: 10px;

      li {
        width: 20%;
        height: 171px;

        img {
          border-radius: 10px;
        }
        .title {
          font-size: 1.3rem;
          line-height: 1.46667;
          font-weight: 600;
          letter-spacing: 0;
          margin-top: 10px;
        }
      }
    }
  }
  .movie-gallery {
    margin-top: 20px;
    border-bottom: 1px solid #cccccc;

    .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;
      margin-bottom: 40px;
      img {
        border-radius: 10px;
      }
    }
  }

  ul {
    /* background-color: yellow; */
    /* display: flex;
    gap: 10px;
    padding: 0 20px; */
    /* padding-bottom: 30px; */
    /* border-bottom: 1px solid #d9d9d9; */
  }
`;
