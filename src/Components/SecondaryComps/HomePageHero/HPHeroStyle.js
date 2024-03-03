import styled from "styled-components";
export const Style = styled.div`
  .background-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 500px;
    margin: 0;
    padding: 0;
    .logo {
      width: 105px;
      height: 40px;
      position: absolute;
      top: 5%;
      left: 4.5%;
      img {
      }
    }

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
    font-size: 1.5rem;
    position: absolute;
    bottom: 10%;
    left: 4.5%;
    color: #fff;
    width: 60%;
    line-height: 1.2;

    .flex-box {
      width: 100%;
      height: 100%;
      gap: 10px;
      .title {
        font-size: 3rem;
        font-weight: 900;
        /* letter-spacing: 1px; */
      }
      .genres {
        font-weight: 700;
      }
    }
  }
`;
