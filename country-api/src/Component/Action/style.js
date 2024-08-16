import styled from 'styled-components';

export const ContainerComponent = styled.div`
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#202d36' : '#fafafa')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    width: 100%;
    margin: auto;
    padding: 50px 10%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 1437px) {
        padding: 50px 5%;
    }

    @media (max-width: 450px) {
        display: block;
        padding: 30px 5%;
        padding-bottom: 50px;
    }
`
export const SearchComponent = styled.input`
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2b3743' : '#FFFFFF')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fafafa' : '#000')};
    padding: 20px 20px 20px 70px;
    width: 500px;
    border-radius: 5px;
    border: #2b3743;
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 1100px) {
        width: 350px;
    }
    @media (max-width: 800px) {
        width: 270px;
    }
    @media (max-width: 520px) {
        width: 220px;
        margin-bottom: 40px;
    }
    @media (max-width: 450px) {
        width: 100%;
        margin-bottom: 40px;
    }
`