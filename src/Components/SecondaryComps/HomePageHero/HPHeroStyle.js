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
        rgba(0, 0, 0, 0.8) 83%,
        rgba(0, 0, 0) 95%
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
        margin-bottom: 5px;
        line-height: 1.33338;
      }
      .genres {
        font-weight: 700;
        margin-bottom: 10px;
        width: 50%;
      }
    }
  }
`;
/* to bottom,
        rgba(0, 0, 0, 0.7) 1%,
        rgba(0, 0, 0, 0.3) 5%,
        transparent 30%,
        transparent 70%,
        rgba(0, 0, 0, 0.3) 95%,
        rgba(0, 0, 0, 0.7) 99% */
