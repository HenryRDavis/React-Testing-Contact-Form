import React from "react";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("testing contact form", () => {
  const { getByTestId } = render(<ContactForm />);

  const User = {
    tName: "Donwg",
    tLastname: "Dug",
    tEmail: "mm@email.com",
    tMessage: "This is my final message, goodbye",
  };

  const firstName = getByTestId('first name');
  const lastName = getByTestId('last name');
  const email =  getByTestId('email');
  const message = getByTestId('message'); 
  const submit = getByTestId('submit'); 

  fireEvent.change(firstName, {target:{value:User.tName}})
  fireEvent.change(lastName, { target: 'lastName' }) 
  fireEvent.change(email, {target:'email'})
  fireEvent.change(message, { target: 'Message' }) 
  fireEvent.click(submit, { target: 'submit' }) 
  //remember that you are having to " await" the response of the button. 

});