import { createContext, useContext } from 'react'

const ContextStatus = createContext()

function useStatus() {
    return useContext(ContextStatus)
}

function ContextProvider() {



    return 
}