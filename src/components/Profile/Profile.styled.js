import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
border: 1px solid red;
`


export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
border: 1px solid black;

div{
    margin: 0.8rem;
    text-align: center;
}`
export const WrapperUsername = styled.div`
display: flex;
align-items: center;
margin-top: 0.8rem;
border: 1px solid green;
h3{
    margin-right: 0.2rem;
}
a{
    color: blue;
    font-weight: bold;
    font-size: 1.2rem;
}
`
export const WrapperInfoUser = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
height: 20rem;
margin-left: 0.8rem;
border: 1px solid orange;
h1{
    font-size: 2.4rem;
    font-weight: bold;
}
h3{
    font-size: 1.2rem;
    font-weight: bold;
}
h4{
    font-size: 1rem;
    font-weight: bold;
}

`
export const WrapperImage = styled.img`
border-radius: 50%;
width: 15rem;
margin: 0.8rem;
border: 1px solid yellow;
`