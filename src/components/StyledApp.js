import styled from 'styled-components';

export const StyledAllContacts = styled.div`
  margin-bottom: 10px;
`;

export const StyledTitleContacts = styled.h2`
  margin-top: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  max-width: 500px;
  width: auto;
  min-height: 500px;
  margin: 50px auto;
  background: white;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  background-color: rgba(232, 160, 191, 0.7);
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Header = styled.h1`
  margin: 30px;
  text-align: center;
  font-size: 25px;
`;
