import ContactForm from "../PhoneBook/ContactForm/ContactForm";
import ContactList from "../PhoneBook/ContactList/ContactList";
import Filter from "../PhoneBook/Filter/Filter";
import { useEffect } from "react";
import { getError, getIsLoading } from "../../redux/selectors";
import Loader from "components/Loader/Loader";

import {
  Container,
  MainTitle,
  SecondaryTitle,
  Titleparth,
  Message,
} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations";


export default function App() {
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const loader = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Container>
      <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
      <ContactForm/>
      <SecondaryTitle>Contacts</SecondaryTitle>       
      <Filter />
      {loader && !error && <Loader />}
      {error && <Message>Something went wrong.</Message>}
      <ContactList />
    </Container>
  )
}
