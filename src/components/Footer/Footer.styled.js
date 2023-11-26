import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: #fff; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: orange;
  font-size: 18px;
  font-weight: 600;

  transition: color 0.5s linear, text-decoration 0.3s ease-in;

  &:hover,
  &:active {
    color: red;
  }
`;
