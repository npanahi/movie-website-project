import styled from "styled-components";
export const Style = styled.div`
  .background-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 500px;
    margin: 0;
    padding: 0;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .text-wrapper {
    padding: 0 10px;
    font-size: 1.3rem;
    position: absolute;
    bottom: 10%;
    left: 4.5%;
    color: #fff;
    width: 60%;
    .flex-box {
      width: 100%;
      height: 100%;
      gap: 10px;
    }
  }
`;
