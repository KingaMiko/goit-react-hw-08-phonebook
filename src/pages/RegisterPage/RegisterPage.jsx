import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Header, Wrapper } from 'components/StyledApp';
import { Helmet } from 'react-helmet';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title> Registration</title>
      </Helmet>
      <Wrapper>
        <Header>Registration</Header>
        <RegisterForm />
      </Wrapper>
    </div>
  );
}
