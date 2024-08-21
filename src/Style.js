import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Header = styled.header`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 10; 
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #007bff;
  margin: 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  height: calc(100vh - 80px); 
`;

export const FormContainer = styled.div`
  flex: 0 1 auto;
  padding: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid #ddd;
`;

export const ListContainer = styled.div`
  flex: 1 1 auto;
  padding: 20px;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Footer = styled.footer`
  color: black;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
`;
