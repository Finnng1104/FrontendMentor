import styled from "styled-components";

export const ConuntryComponent = styled.div`
    width: 100%;
    height: 390px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 50px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2A3743' : '#fafafa')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    .Country-img {
        width: 100%;
        height: 180px;
        overflow: hidden;
        display: flex;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    &:hover {
        transform: translateY(-10px);  /* Kéo dài lên trên */
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);  /* Thêm hiệu ứng đổ bóng */
    }
`;

export const CountryInformation = styled.div`
    width: 100%;
    padding: 30px 5px 30px 20px;
    h2{
        height: 40px;
        margin-bottom: 20px;
    }
    p{
        padding: 5px 0;
    }
`