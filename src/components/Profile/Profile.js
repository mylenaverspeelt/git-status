import React from "react";
import * as S from './Profile.styled'

function Profile(){
    return(
        <S.Wrapper>
        <S.WrapperImage
          src="https://avatars.githubusercontent.com/u/87767125?v=4"
          alt="Avatar of user"
        />
        <S.WrapperInfoUser>
        <div>
        <h1>Mylena Verspeelt</h1>
        <S.WrapperUsername>
        <h3>Username:</h3>
        <a href="https://github.com/mylenaverspeelt" target="_blank" rel="noreferrer">mylenaverspeelt</a>
        </S.WrapperUsername>
        </div>
     <S.WrapperStatusCount>
        <div>
          <h4>Followers</h4>
          <span>4</span>
        </div>
        <div>
          <h4>Following</h4>
          <span>4</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>4</span>
        </div>
        </S.WrapperStatusCount>
        </S.WrapperInfoUser>
      </S.Wrapper>
    )
}

export default Profile