import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import * as S from './Style'; // Certifique-se de que os estilos estão atualizados

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gerar um ID único. Dependendo da sua estratégia, você pode usar um pacote específico ou uma função diferente.
        const id = Date.now(); // Alternativa: use uma biblioteca como uuid
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
            <S.Input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <S.Button type="submit">Add Contact</S.Button>
        </S.Form>
    );
};

export default AddContactForm;
