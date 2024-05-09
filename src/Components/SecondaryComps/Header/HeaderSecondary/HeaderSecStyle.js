import styled from "styled-components";
export const Style = styled.div`
  .header {
    color: #dadada;
    background-color: #454545;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    line-height: 1;
    .nav-list {
      li:hover {
        color: #fff;
        transition: color 0.3s;
        img:hover {
          transition: all 0.3s;
          fill: #fff;
        }
      }
      .icon {
        font-size: 1.4rem;
      }
    }
  }
`;
