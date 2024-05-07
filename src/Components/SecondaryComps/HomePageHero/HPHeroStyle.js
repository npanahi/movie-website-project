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
      left: 5.2%;
      img {
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 2%,
        rgba(0, 0, 0, 0.3) 15%,
        transparent 30%,
        transparent 0%,
        rgba(20, 20, 20) 83%,
        rgba(20, 20, 20) 95%
      );
      width: 100%;
      height: 100%;
      /* z-index: -1; */
    }
  }
  .text-wrapper {
    padding: 0 10px;
    font-size: 1.7rem;
    position: absolute;
    bottom: 10%;
    left: 4.5%;
    color: #fff;
    width: 60%;

    .flex-box {
      width: 100%;
      height: 100%;
      gap: 10px;
      .title {
        font-size: 3rem;
        /* line-height: 1.33338; */
        letter-spacing: 1;
        margin: 0;
      }
      .overview {
        font-size: 1.4rem;
        margin-bottom: 10px;
        line-height: 1.33338;
      }
      .genres {
        font-weight: 700;
        /* margin-bottom: 10px; */
        width: 50%;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
