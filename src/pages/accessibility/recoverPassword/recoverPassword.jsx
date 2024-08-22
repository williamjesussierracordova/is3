import { Input, Button, PasswordInput } from '@mantine/core';
import healthcare from '../../../../public/assets/healthcare.webp';
import logoHealthcare from '../../../../public/assets/logo_healthcare.webp';
import '../login/login.css';

const Login = () => {
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
          <h1 className="login__form-title">Recover Password</h1>
          <p style={{fontSize:'11px'}}>Enter your email so we can send you a recovery code</p>
          <div className="login__form-container">
            <div className="login__form-inputs">
              <Input
                className="input"
                radius="xl"
                placeholder="Email adress"
                type='email'
              />
              <Button
                variant="light"
                color="rgba(252, 54, 255, 1)"
                size="md"
                radius="xl"
                fullWidth
              >
                Sent code
              </Button>
              <div className="login__form-links">
                <p>So you have an acount? <a href="/">Sign in</a></p>
                <p>Don't have an account? <a href="/register">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;