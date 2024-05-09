import styled from "styled-components";
export const Style = styled.div`
  .hero-wrapper {
    .background-wrapper {
      position: relative;
      width: 100%;
      height: 100vh;
      min-height: 50rem;
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
          rgba(20, 20, 20) 83%,
          rgba(20, 20, 20) 95%
        );
      }
      .logo {
        width: 10.5rem;
        height: 4rem;
        position: absolute;
        top: 5%;
        left: 5.2%;
      }
    }
    .content {
      margin: 0 auto;
      height: auto;
      font-size: 1.6rem;
      bottom: 10%;
      color: #fff;
      position: absolute;
      width: 100%;

      .text-wrapper {
        font-size: 1.5rem;
        line-height: 1.33338;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;

        .reting {
          position: relative;
          width: 3.2rem;
          height: 3.2rem;
          border: 2px dashed #909095;
          border-radius: 50%;
          color: #909095;

          .rating-text {
            position: absolute;
            font-size: 0.9rem;
            font-weight: 800;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
          }
        }
        .genres,
        .release_date,
        .time-generator {
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.19;
          color: #909095;
        }
      }
    }
  }
  b {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }

  .badge {
    max-width: 28rem;
    max-height: 3.1rem;
  }
  .actores {
    flex-grow: 2;
  }
`;
