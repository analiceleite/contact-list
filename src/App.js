import React from 'react';
import ContactList from './components/contact/ContactList';
import AddContactForm from './components/form/AddContactForm';
import * as S from './Style';

const App = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>ContactManager</S.Logo>
      </S.Header>
      <S.MainContent>
        <S.FormContainer>
          <S.Title>Add Contact</S.Title>
          <AddContactForm />
        </S.FormContainer>
        <S.ListContainer>
          <S.Title>Contact List</S.Title>
          <ContactList />
        </S.ListContainer>
      </S.MainContent>
      <S.Footer>
        <p>&copy; {new Date().getFullYear()} ContactManager. All rights reserved.</p>
      </S.Footer>
    </S.Container>
  );
};

export default App;
