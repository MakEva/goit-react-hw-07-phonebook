import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://65dc5ec0e7edadead7ebc496.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactInstance.get('/');
  console.log(data);
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactInstance.delete(`/${id}`);
  return data;
};
