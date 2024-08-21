import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { addContact } from '../../redux/contactsSlice';
import * as S from './Style';

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação do nome completo (mínimo de duas palavras)
        if (!/^\w+\s+\w+/.test(name)) {
            alert('Please enter your full name.');
            return;
        }

        // Validação simples de e-mail
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Gerar um ID único
        const id = Date.now();
        dispatch(addContact({ id, name, email, phone }));
        
        // Limpar os campos do formulário
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <S.Input
                type="email"
                placeholder="Email"
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
                {() => <S.Input placeholder="Phone" type="tel" />}
            </InputMask>
            <S.Button type="submit">Add Contact</S.Button>
        </S.Form>
    );
};

export default AddContactForm;
