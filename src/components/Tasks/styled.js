import styled from "styled-components";

export const Container = styled.div`
    background-color: #e1e1e6;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
        background: transparent;
        border: 0;
        color: black;
        line-height: 0;
        border-radius: 2px;
    }

    :hover button {
        color: red;
    }

`;

export const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 1.2em;

   input{
        all: unset;
         border: 1px solid black;
       margin-right: 30px;
       height: 25px;
       width: 25px;
       border-radius: 2px;
    }
    input:checked{

        background-color: #00875f;
    }

`;