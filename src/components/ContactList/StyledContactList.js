import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: rgba(186, 144, 198, 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
`;

export const StyledItem = styled.li`
  background-color: #fdf4f5;
  border-radius: 3px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContact = styled.div`
  margin-right: 30px;
`;

export const StyledName = styled.span`
  margin-right: 1em;
`;
