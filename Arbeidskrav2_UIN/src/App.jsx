import { useState } from 'react'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/list.scss'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm />
      <ShoppingList />
    </main>
  )
}

export default App
