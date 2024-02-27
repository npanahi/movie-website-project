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
    font-size: 1.3rem;
    position: absolute;
    bottom: 10%;
    left: 2%;
    color: #fff;
    width: 60%;
    .flex-box {
      width: 100%;
      height: 100%;
      gap: 10px;
    }
  }
.hero-box{
  ul {
    background-color: yellow;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

  /* IN THE END */
  overflow: hidden;
}
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 1s;
  }
  img {
    width: 100%;
    height: 100%;
  }

}
  
`;
