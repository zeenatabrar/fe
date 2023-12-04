// ContactManagement.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 10px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #4caf50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  button {
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 3px;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const ContactManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    label: 'work',
  });
  const [contacts, setContacts] = useState([]);
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddContact = async () => {
    if (editMode) {

    } else {
      setContacts([...contacts, formData]);

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        label: 'work',
      });
      setShowForm(false);

      try {
        const response = await fetch('https://tan-lovely-cape-buffalo.cyclic.app/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Data submitted successfully.');
        } else {
          console.error('Failed to submit data:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting data:', error.message);
      }
    }
  };

  const handleEditContact = (index) => {
  };

  const handleDeleteContact = (index) => {
  };

  return (
    <Container>
      <Title>Contact Management Page</Title>
      {!showForm && (
        <Button onClick={() => setShowForm(true)}>Add Contact</Button>
      )}

      {showForm && (
        <Form>
          <label>
            Full Name:
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Email:
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Phone Number:
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Label:
            <Select name="label" value={formData.label} onChange={handleInputChange}>
              <option value="work">Work</option>
              <option value="school">School</option>
              <option value="friends">Friends</option>
              <option value="family">Family</option>
            </Select>
          </label>
          <br />

          <Button type="button" onClick={handleAddContact}>
            {editMode ? 'Update' : 'Submit'}
          </Button>
        </Form>
      )}

      {contacts.length > 0 && (
        <div>
          <Title>Contact Details</Title>
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Label</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.fullName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.label}</td>
                  <td>
                    <Button onClick={() => handleEditContact(index)}>Edit</Button>
                  </td>
                  <td>
                    <Button onClick={() => handleDeleteContact(index)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>

    
  );
};

export default ContactManagement;