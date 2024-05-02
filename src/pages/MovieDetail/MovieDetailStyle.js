import styled from "styled-components";
export const Style = styled.div`
  color: #333333;
  h2 {
    margin: 20px 0;
  }
  .movie-casts {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 30px;

    .casts {
      gap: 10px;
      margin-bottom: 60px;

      li {
        max-width: 150px;
        height: 200px;
        text-align: center;

        .cast-img {
          max-width: 100%;
          height: 100%;
          img {
            border-radius: 15px;
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
    max-height: 500px;
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
      margin: 0 auto;
      border-bottom: 1px solid #cccccc;
      padding: 30px;
      .author {
        gap: 40px;
        margin-bottom: 20px;
        .avatar {
          max-width: 100px;
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
    padding-bottom: 60px;

    .similars {
      display: flex;
      gap: 10px;
      li {
        max-width: 262px;
        max-height: 400px;

        img {
          transition: all 0.3s;
          &:hover {
            transform: translate3d(0, -2%, 0) scale(1.1);
          }
          border-radius: 15px;
        }
      }
    }
  }
  .movie-recommendations {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 60px;
    .recommendations {
      display: flex;
      gap: 10px;

      li {
        max-width: 262px;
        max-height: 400px;

        img {
          transition: all 0.3s;

          &:hover {
            transform: translate3d(0, -2%, 0) scale(1.1);
          }
          border-radius: 15px;
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
        border-radius: 15px;
      }
    }
  }
  .production-companies {
    padding: 40px 0;
    ul {
      justify-content: center;
      gap: 50px;
      /* padding-bottom: 40px; */
      align-items: center;
      .companies {
        .img-wrapper {
          margin-top: 5px;
          max-width: 100px;
          height: auto;
          img {
            box-shadow: 0 0 0;
          }
        }
        .text {
          font-size: 1.3rem;
        }
      }
    }
  }
  .title {
    font-size: 1.4rem;
    line-height: 1.33338;
    font-weight: 400;
    letter-spacing: 0;
    margin-top: 10px;
    padding: 0 10px;
  }
`;
