import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    button.remover {
        background-color: #ff0000;     
        border: none;             
        color: white;                      
        border-radius: 8px;               
        padding: 8px 16px;                 
        cursor: pointer;                   
        font-size: 14px;
        font-weight: bold;
        transition: background-color 0.2s ease;
    }

    .remover:hover {
        background-color: #fa7474ff;    
        color: #ffffff;                      
    }

    .botaoRepo {
        font-family: 'Roboto', sans-serif;
        display: inline-block;
        background-color: #0400ffff;     
        border: none;
        text-decoration: none;
        color: white;                      
        border-radius: 8px;               
        padding: 8px 16px;                 
        cursor: pointer;                   
        font-size: 14px;
        font-weight: bold;
        transition: background-color 0.2s ease;
    }

    .botaoRepo:hover {
        background-color: #6f65f7ff;    
        color: #ffffff;                      
    }


`