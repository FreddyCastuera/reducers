import { createContext,useReducer,useState } from "react";
//creamos un contexto
export const usersContext = createContext()

//ponemos toda la logica de estado de usuarios en el provedor de contexto
export const UsersContextProvider = ({children}) => {
    //logica para el manejo del formulario
    const initialUser = { name: "", lastName: "",telefono:""}
    const [user, setUser] = useState(initialUser);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const id = !!state.length ? state[state.length - 1].id + 1 : 0;
        setUser({ ...user, [name]: value ,id:id});
      };
  
    //logica para el manejo de la lista
    const initialState = []
    const reducer = (state,action) =>{
        switch(action.type){
            case 'addUser':
            setUser(initialUser)
            return [...state,action.user];
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
    {/*proveemos contexto*/}
    return (
        <usersContext.Provider value={
            {state,dispatch,user,handleChange}
        } >
        {children}
        </usersContext.Provider>
    )
}
