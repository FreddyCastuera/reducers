//import "./styles.css";
//import Button from "./Button";
import { useState,useReducer } from "react";
export default function App() {
  //const [users, setUsers] = useState([]);
  const initialUser = { name: "", lastName: ""}
  const [user, setUser] = useState(initialUser);

  const initialState = []
  const reducer = (state,action) =>{
    switch(action.type){
      case 'addUser':
        setUser(initialUser)
        return [...state,user];
      case 'deleteUser':
        const id = action.id
        const filtered = state.filter((item) => item.id !== parseInt(id));
        return [...filtered]
      case 'deleteAll':
        return []
      default:
        return state
    }
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //alert(JSON.stringify(user))
    
  //   setUsers([...users, user]);
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    const id = !!state.length ? state[state.length - 1].id + 1 : 0;
    setUser({ ...user, [name]: value ,id:id});
  };
  // const handleDelete = (event) => {
  //   const {id} = event.target
  //   const filtered = users.filter((item) => item.id !== parseInt(id));
  //   setUsers(filtered);
  // };
  //const handleDeleteAll = () => setState([])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form
        onSubmit={(e)=>{e.preventDefault();dispatch({type:'addUser'}) }}
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%"
        }}
      >
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="lastName">lastname</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <ul style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%"
        }}>
      {!!state.length && 
        state.map(({ id, name, lastName }) => (
          <li key={id} id={id} style={{display:'flex',flexDirection:'row'}}>
            <p>{`${name} ${lastName}`}</p>
            <button id={id} style={{padding:'5px 10px'}} onClick={()=>dispatch({type:'deleteUser',id:id})}>eliminar</button>
          </li>
        ))}
      </ul>
      <button style={{margin:'10px auto',width:'25%',display:'block' }} onClick={()=>dispatch({type:'deleteAll'})} >eliminar todos</button>
    </div>
  );
}
