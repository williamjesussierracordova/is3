import { Input, Button, PasswordInput } from '@mantine/core';
import healthcare from '../../../../public/assets/healthcare.webp';
import logoHealthcare from '../../../../public/assets/logo_healthcare.webp';
import '../login/login.css';

const Signup = () => {
  return (
    <div className="login">
      <div className="login__image">
        <img src={healthcare} alt="Healthcare" />
      </div>
      <div className="login__form">
        <div className="login__form-logo">
          <img src={logoHealthcare} alt="Healthcare Logo" />
        </div>
        <div className="login__form-body">
          <h1 className="login__form-title">Sign up</h1>
          <div className="login__form-container">
            <div className="login__form-inputs">
              <Input
                className="input"
                radius="xl"
                placeholder="Email adress"
                type='email'
              />
              <Input
                className="input"
                radius="xl"
                placeholder="Medical code"
              />
              <PasswordInput
                radius="xl"
                placeholder="Input password"
              />
              <Button
                variant="light"
                color="rgba(252, 54, 255, 1)"
                size="md"
                radius="xl"
                fullWidth
              >
                Sign up
              </Button>
              <div className="login__form-links">
                <p>Forgot your password? <a href="/recover_password">Click here</a></p>
                <p>Do you have an acount? <a href="/">Sign in</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;