import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
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

  const handleSave = (e) => {
    e.preventDefault();

    // Validação do nome completo (mínimo de duas palavras)
    if (!/^\s*([A-Za-z]{2,}\s)+[A-Za-z]{2,}\s*$/.test(name)) {
      alert('Por favor, insira o nome completo.');
      return;
    }

    // Validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    // Validação do telefone
    if (phone.replace(/[\s()-]/g, '').length < 10) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }

    // Preparar o objeto de contato atualizado com o ID existente
    const updatedContact = {
      id: contact.id,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    onSave(updatedContact);
    onClose();
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <h2>Editar Contato</h2>
        <S.Form onSubmit={handleSave}>
          <S.Input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <S.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          >
            {(inputProps) => <S.Input {...inputProps} type="tel" placeholder="Telefone" />}
          </InputMask>
          <S.Button type="submit">Salvar</S.Button>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
