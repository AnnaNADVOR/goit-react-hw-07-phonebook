import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }  
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.addContact(name,number);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const deleteContact = await contactsAPI.deleteContact(contactId); 
      return deleteContact;
    } 
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)