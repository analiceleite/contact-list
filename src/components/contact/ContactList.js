import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../../redux/contactsSlice';
import Modal from '../modal/Modal';
import * as S from './Style';

const ContactList = () => {
  const [filter, setFilter] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.email.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter)
  );

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleSave = (updatedContact) => {
    dispatch(editContact({
      id: selectedContact.id,
      updatedContact
    }));
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div>
      <S.FilterInput
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredContacts.length === 0 ? (
        <S.NotFound>No contacts found.</S.NotFound>
      ) : (
        <S.List>
          {filteredContacts.map((contact) => (
            <S.ListItem key={contact.id}>
              <div>
                {contact.name} - {contact.email} - {contact.phone}
              </div>
              <div>
                <S.Button onClick={() => handleEditClick(contact)}>Edit</S.Button>
                <S.DeleteButton onClick={() => dispatch(removeContact(contact.id))}>
                  Remove
                </S.DeleteButton>
              </div>
            </S.ListItem>
          ))}
        </S.List>
      )}
      {selectedContact && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSave} 
          contact={selectedContact}
        />
      )}
    </div>
  );
};

export default ContactList;
