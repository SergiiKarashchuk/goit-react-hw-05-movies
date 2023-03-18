import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px;
`;

export const MovieInfo = styled.div`
  gap: 15px;
  display: flex;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid 1px black;
  border-radius: 5px;
  padding: 10px;
  & ul {
    display: flex;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  list-style: none;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: solid 1px black;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: tomato;
    transform: scale(1.1);
  }
`;
