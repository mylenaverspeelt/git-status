import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0.4rem;
align-items: center;

input{
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    width:100%;
    height: 2.7rem;
    padding: 0.8rem;
    font-weight: 500;
}

button{
    background-color: #ccc;
    padding: 0.8rem  1.6rem ;
    margin: 0 0.8rem;
    border-radius: 0.8rem;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: rgba(49, 130, 206, 0.3);

    

    &:hover{
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        background-color: rgba(49, 130, 206, 1);
        color: white;
    }
}
`;
