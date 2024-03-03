import styled from "styled-components";
export const Style = styled.div`
  .movies-wrapper {
    margin: 50px 0;
    .movies {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;
      li {
        .img-wrapper {
          img {
            min-height: 400px;
          }
        }
      }
    }
  }
`;
