import styled from "styled-components";

export const ConuntryComponent = styled.div`
    width: 100%;
    height: 390px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #FFF;
    margin-bottom: 50px;
    .Country-img{
        width: 100%;
        height: 180px;
        overflow: hidden;
        display: flex;
        align-items: center;
        img{
        max-width: 100%;
        height: auto;
        object-fit: contain;
        }
    }
   
`

export const CountryInformation = styled.div`
    width: 100%;
    padding: 30px 0px 30px 25px;
    h3{
        height: 40px;
        margin-bottom: 20px;
    }
    p{
        padding: 5px 0;
    }
`