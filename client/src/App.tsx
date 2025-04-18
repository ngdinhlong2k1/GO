import {Container, Stack } from '@chakra-ui/react'
import Navbar from './components/ui/Navbar'
import TodoList from './components/ui/TodoList'
import TodoForm from './components/ui/TodoForm'

export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api/" : "/api";


function App() {

  return (
    <Stack h="100vh"> 
      <Navbar/>
      <Container>
        <TodoForm/>
        <TodoList/>
      </Container>
    </Stack>
  )
}

export default App
