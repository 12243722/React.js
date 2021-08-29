import styled from 'styled-components';

const TarBarStyle = styled.div`
    height: 44px;
    display: flex;
    border-bottom: 1px solid #ccc;
    .city {
      width: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      width: 240px;
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
       align-items: center;
      }
      .active {
        color: #e54847;
      }
    }
    .icon {
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`

export {
  TarBarStyle
}