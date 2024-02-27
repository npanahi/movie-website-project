import styled from "styled-components";
export const Style = styled.div`
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
  .review-wrapper {
    align-items: center;
    margin: 40px auto;
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
    }
  }
  .movie-similar {
    .similars {
      display: flex;
      gap: 10px;
      margin-bottom: 40px;
      li {
        width: 20%;
      }
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    margin-bottom: 40px;
  }
`;
