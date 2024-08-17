// style.js
import styled from 'styled-components';

export const CountryDetailContainer = styled.div`
  padding: 20px 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#202d36' : '#fafafa')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border-radius: 8px;
  button{
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2A3743' : '#fafafa')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    border: ${({ isDarkMode }) => (isDarkMode ? 'none' : '#000')};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .ant-btn{
    border-radius: 0;
  }
  .img{
    width: 45%;
    height: 400px;
    text-align: center;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
  }
  .content{
    width: 45%;
    h1 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 2em;
  }
    .countryInformation{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        p {
            margin: 10px 0;
            font-size: 16px;
            line-height: 1.5;
        }
    }
  }
    @media (max-width: 1437px){
        padding: 20px 5%;
    }
    @media (max-width: 1050px){
        display: block;
        .img{
            width: 100%;
            padding: 0 15%;
            text-align: center;
            img{
                object-fit: cover;
            }
        }
        .content{
            width: 100%;
            padding: 0 15%;
        }
    }
    @media (max-width: 900px){
        display: block;
        .img{
            width: 100%;
            padding: 0 8%;
            text-align: center;
            img{
                object-fit: cover;
            }
        }
        .content{
            width: 100%;
            padding: 0 8%;
        }
    }
    @media (max-width: 640px){
        .img{
            width: 100%;
            height: 300px;
            padding: 0;
            text-align: center;
            img{
                object-fit: cover;
            }
        }
        .content{
            width: 100%;
            padding: 0;
        }
    }
    @media (max-width: 500px){
        .countryInformation{
            flex-direction: column;
        }
    }
`;

export const ShowNotification = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 20px 0;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#202d36' : '#fafafa')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    span{
        font-size: 40px;
    }
`   