import styled from "styled-components";
export const Style = styled.div`
  .categories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 20px;
    /* border-bottom: 1px solid #cccccc; */
    /* padding-bottom: 25px; */
    li {
      cursor: pointer;
      h2 {
        &:hover {
          color: blue;
        }
        padding: 0 10px;
      }
      .img-wrapper {
        img {
          border-radius: 20px;
        }
      }
      /* font-size: 1.4rem; */
    }
  }
`;
