import styled from 'styled-components';

export const StyleDiv = styled.div`
    height: 100px;
    width: 100%;
`

export const StyleHeader = styled.div`
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2b3743' : '#fff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    margin: auto;
    padding: 20px 10%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    h1{
        font-size: 30px;
    }
    h3{
        cursor: pointer;
    }
    span{
        margin-left: 10px;
    }
    @media (max-width: 1437px) {
        padding: 20px 5%;
        h1{
            padding-top: 10px;
            text-align: center;
        }
    }
    @media (max-width: 450px){
        h1{
            font-size: 20px;
        }
        h3{
            font-size: 18px;
            span{
                margin-left: 5px;
            }
        }
    }
`
export const StyleDarkMode = styled.div`
    padding: 10px 0;
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
`;
export const Background = styled.div`
    background-color: #F2F2F2;
`

