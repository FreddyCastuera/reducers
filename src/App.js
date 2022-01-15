//import "./styles.css";
//import Button from "./Button";
import Input from './components/Input'
import List from './components/List'
import ButtonDeleteAll from "./components/DeleteAllButtons";
import AddUser from "./components/AddUser";
import FormContanier from './components/FormContanier';
import { UsersContextProvider } from "./contexts/usersContext";
import styled from 'styled-components';

const Container = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
`;
export default function App() {
  return (
    <UsersContextProvider>
      <Container>
        <FormContanier >
          <Input name='name' type='text' />
          <Input name='lastName' type='text' />
          <Input name='telefono' type='text' />
          <AddUser />
        </FormContanier>
        <List />
        <ButtonDeleteAll/>
      </Container>
    </UsersContextProvider>
  );
}
