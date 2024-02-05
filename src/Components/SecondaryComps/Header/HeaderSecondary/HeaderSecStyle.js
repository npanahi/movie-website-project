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
        font-size: 14px;
      }
    }
  }
  .sticky-header {
    border-bottom: 1px solid #d6d6d6;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    .text {
      font-size: 2.1rem;
      font-weight: 600;
      padding: 14px 0;
    }
    ul {
      li:hover {
        color: #0171e3;
      }
    }
  }
`;
