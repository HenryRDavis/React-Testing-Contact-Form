import React from "react";
import { render, fireEvent, getByTestId, act } from "@testing-library/react";
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

  fireEvent.change(firstName, {target:{value: User.firstName}});
  fireEvent.change(lastName, {target:{value: User.lastName}});
  fireEvent.change(email, {target:{value: User.email}});
  fireEvent.change(message, {target:{value: User.message}});

  act(() => {
    fireEvent.click(submit);
    })

  findByText(JSON.stringify(User));
})