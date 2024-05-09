import styled from "styled-components";
export const Style = styled.div`
  background-color: black;
  color: #8d8d92;
  padding: 10px;
  font-size: 1.4rem;
  min-height: 4.4rem;

  .logo {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.47;
  }
  .search {
    .search-header__search-icon {
      top: 50%;
      left: 3%;
      transform: translateY(-60%);
      color: #fff;
    }
    input {
      width: 15rem;
      color: #fff;
      &::placeholder {
        color: #8d8d92;
        font-size: 1.6rem;
      }
      padding: 5px 0;
      padding-left: 25px;
      background-color: black;
      border: 0.5px solid #fff;
      border-radius: 3px;
    }
    .nav-header__auth-avatar {
      margin-left: 14px;
      vertical-align: middle;
    }
  }
  .NavLink {
    &:hover {
      font-size: 2rem;
    }
  }
`;
