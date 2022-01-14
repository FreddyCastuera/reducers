//import "./styles.css";
//import Button from "./Button";
import Input from './components/Input'
import List from './components/List'
import ButtonDeleteAll from "./components/DeleteAllButtons";
import AddUser from "./components/AddUser";
import { UsersContextProvider } from "./contexts/usersContext";
export default function App() {
  return (
    <UsersContextProvider>
    <div className="App">
      <form onSubmit={(e)=>{e.preventDefault()}} >
        <Input name='name' type='text' />
        <Input name='lastName' type='text' />
        <Input name='telefono' type='text' />
        <AddUser />
      </form>
      <List />
      <ButtonDeleteAll/>
    </div>
    </UsersContextProvider>
  );
}
