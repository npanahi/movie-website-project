import styled from "styled-components";
export const Style = styled.div`
  .hero-wrapper {
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

        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 5%,
          rgba(0, 0, 0, 0.3) 15%,
          transparent 30%,
          transparent 0%,
          rgba(0, 0, 0, 0.8) 83%,
          rgba(0, 0, 0) 95%
        );
      }
      .logo {
        width: 105px;
        height: 40px;
        position: absolute;
        top: 5%;
        left: 5.2%;
        img {
        }
      }
    }
    .content {
      margin: 0 auto;
      height: auto;
      font-size: 1.5rem;
      bottom: 10%;
      color: #fff;
      position: absolute;
      width: 100%;

      .text-wrapper {
        font-size: 1.4rem;
        line-height: 1.33338;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;

        .flex-box {
          width: 100%;
          height: 100%;
          gap: 10px;
          .genres,
          .release_date,
          .time-generator {
            font-weight: 800;
            font-size: 1.3rem;
            line-height: 1.19;
          }
          .genres,
          .release_date,
          .time-generator,
          .actores {
            /* color: rgba(255, 255, 255, 0.5); */
          }
        }
      }
    }
  }
  b {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }
  .overview {
  }
`;
// rgba(255, 255, 255, 0.64)
