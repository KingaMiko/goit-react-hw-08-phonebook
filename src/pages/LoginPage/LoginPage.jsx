import { Header, Wrapper } from 'components/StyledApp';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>
      <Wrapper>
        <Header>Login</Header>
        <LoginForm />
      </Wrapper>
    </>
  );
}
