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
          rgba(0, 0, 0, 0.7) 1%,
          rgba(0, 0, 0, 0.3) 10%,
          transparent 30%,
          transparent 0%,
          rgba(0, 0, 0, 0.5) 83%,
          rgba(0, 0, 0, 0.7) 90%
        );
      }
    }
    .content {
      margin: 0 auto;
      height: auto;
      font-size: 1.5rem;
      bottom: 10%;
      /* left: 3%; */
      color: #fff;
      position: absolute;
      width: 100%;

      .text-wrapper {
        /* width: 100%;
      font-size: 1.3rem;
      bottom: 10%;
      left: 2%; */
        .flex-box {
          width: 100%;
          height: 100%;
          gap: 10px;
          .genres,
          .release_date,
          .time-generator,
          .actores {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
`;
