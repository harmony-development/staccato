import React from "react";
import { TextField } from "@material-ui/core";

export interface IRegisterForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const _Register = (props: {
  registerForm: IRegisterForm;
  setRegisterForm: (form: IRegisterForm) => void;
}) => {
  const textFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRegisterForm({
      ...props.registerForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Email"
        fullWidth
        type="email"
        name="email"
        onChange={textFieldChange}
        value={props.registerForm.email}
      />
      <TextField
        variant="outlined"
        label="Username"
        fullWidth
        type="username"
        name="username"
        onChange={textFieldChange}
        value={props.registerForm.username}
      />
      <TextField
        variant="outlined"
        label="Password"
        fullWidth
        type="password"
        name="password"
        onChange={textFieldChange}
        value={props.registerForm.password}
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        fullWidth
        type="password"
        name="confirmPassword"
        onChange={textFieldChange}
        value={props.registerForm.confirmPassword}
      />
    </div>
  );
};

export const Register = React.memo(_Register);
