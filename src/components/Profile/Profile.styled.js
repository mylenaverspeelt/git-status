import styled from "styled-components";


//wrapper geral da seção do perfil
export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
margin-top: 1rem;
flex-wrap: wrap;

@media(max-width: 800px){
    align-items: center;
    justify-content: center;
}
`

export const WrapperImage = styled.img`
border-radius: 50%;
width: 15rem;
margin: 0.8rem;
`

//wrapper geral do quadro de infos
export const WrapperInfo = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
height: 16rem;
margin-left: 0.8rem;


h1{
    font-size: 2rem;
    font-weight: bold;
}
h3{
    font-size: 1.1rem;
    font-weight: bold;
}
h4{
    font-size: 1.1rem;
    font-weight: bold;
}
`

export const WrapperInfoItem = styled.div`
display: flex;
align-items: center;
margin-top: 0.8rem;
font-weight: 500;

h3{
    margin-right: 0.2rem;
}

a{
    color: #3182ce;
    font-weight: bold;

}
`

export const WrapperStatusCount = styled.div`
display: flex;

div{
    margin-right: 0.8rem;
    text-align: center;
}
`
