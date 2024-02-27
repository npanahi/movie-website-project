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
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
      height: auto;
      font-size: 1.5rem;
      bottom: 10%;
      left: 3%;
      color: #fff;
      position: absolute;

      .text-wrapper {
        /* width: 100%;
      font-size: 1.3rem;
      bottom: 10%;
      left: 2%;
      color: #fff; */
        .flex-box {
          width: 100%;
          height: 100%;
          gap: 10px;
        }
      }
    }
  }
`;
