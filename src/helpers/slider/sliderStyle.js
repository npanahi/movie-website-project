import styled from "styled-components";
export const Style = styled.div`
  .slider {
    display: flex;
    padding: 0 20px;
    transition: all 1s;
    .slide {
      transition-property: background-color;
      transition-duration: 0.1s;
      transition-timing-function: ease-in;
    }
  }
`;
