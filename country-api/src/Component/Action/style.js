import styled from 'styled-components';
export const ContainerComponent = styled.div`
    width: 80%;
    margin: auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1437px) {
    width: 90%;
  }
`
export const SearchComponent = styled.input`
    border: none;
    padding: 20px 20px 20px 70px;
    width: 450px;
    border-radius: 5px;
    outline: 1px solid #f2f2f2;
`