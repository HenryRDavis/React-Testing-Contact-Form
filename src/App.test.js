import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("testing contact form", () => {
  const { getByPlaceholderText, getByText} = render(<ContactForm />);

  const User = {
    tName: "Donwg",
    tLastname: "Dug",
    tEmail: "mm@email.com",
    tMessage: "This is my final message, goodbye",
  };

  const firstName = getByPlaceholderText("Edd");
  const lastName = getByText('Last Name*');
  const email =  getByText('Email*');
  const message = getByText('Message'); 

  fireEvent.change(firstName, {target:{value:User.tName}})
  fireEvent.change(lastName, { target: 'lastName' }) 
  fireEvent.change(email, {target:'email'})
  fireEvent.change(message, { target: 'Message' }) 
  //remember that you are having to " await" the response of the button. 

});