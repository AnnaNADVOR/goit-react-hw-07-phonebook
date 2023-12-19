import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}) => {
    try {
      const response = await contactsAPI.addContact(name,number);
      return response.data;
    } catch (error) {
      return;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    try {
      const deleteContact = await contactsAPI.deleteContact(contactId); 
      return deleteContact;
    } 
    catch (error) {
      return;
    }
  }
)