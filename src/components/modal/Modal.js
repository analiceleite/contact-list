import React, { useState, useEffect } from 'react';
import * as S from './Style';

const Modal = ({ isOpen, onClose, onSave, contact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
  }, [contact]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ name, email, phone });
    onClose();
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <h2>Edit Contact</h2>
        <S.Form>
          <S.Input 
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.Input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input 
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <S.Button onClick={handleSave}>Save</S.Button>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
