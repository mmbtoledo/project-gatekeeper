import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = email === "admin@gmail.com" && password === "1234";
    onLogin(success);
  };

  return (
    <Card>
      <h2>Project Gatekeeper Login</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Login" />
      </form>
    </Card>
  );
};

export default LoginForm;
