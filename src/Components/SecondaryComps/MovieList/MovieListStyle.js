import styled from "styled-components";

export const Style = styled.div`
  .movie-list-wrapper {
    ul {
      /* background-color: yellow; */
      display: flex;
      gap: 10px;
      /* padding: 0 20px; */
      padding-bottom: 30px;
      border-bottom: 1px solid #d9d9d9;
      li {
        .img-wrapper {
          /* width: 303px;
        height: 171px; */
          /* border-radius: 10px; */
          height: 171px;
          img {
            border-radius: 5px;
            /* height: auto; */
          }
        }
      }
    }
  }
`;
