import { Header, Wrapper } from 'components/StyledApp';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Wrapper>
        <Header>Welcome to Phonebook!</Header>
      </Wrapper>
    </>
  );
}
