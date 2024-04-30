import axios from "axios";

axios.defaults.baseURL = "https://65fc102814650eb2100b6d31.mockapi.io";

export async function fetchContacts() {
    const { data } = await axios.get("/contacts");
    return data; 
}

export async function addContact(name,number) {
    const response = await axios.post("/contacts", {name, number});
    return response; 
}

export async function deleteContact(contactId) {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data; 
}