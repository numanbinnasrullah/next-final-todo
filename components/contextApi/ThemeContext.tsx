import { createContext, useState } from "react";

export const ThemeContext =  createContext('')

const ThemeContextProvider = (props) => {
    const todoText = useState('')
    const todos = useState([])
    const id = useState([])
    const isModel = useState(false)
    const oldItem = useState('')
    const doneFilter = useState([])
    const completeTask = useState([])
    return(
        <ThemeContext.Provider value={[todoText,todos,isModel,oldItem,id,doneFilter,completeTask]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;