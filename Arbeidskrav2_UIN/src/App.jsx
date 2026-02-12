import { use, useState } from 'react'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/list.scss'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'



function App() {

  const shoppingItems = [
    {
      id: 0,
      title: "Melk",
      quantity: 2,
      isCompleted: true
    },
    {
      id: 1,
      title: "Egg",
      quantity: 1,
      isCompleted: false
    }
  ]

  const [shoppingList, setShoppingList] = useState(shoppingItems)
  const [product, setProduct] = useState({title: "", quantity: ""})

  //funksjon for å endre antall varer i lista
  const updateQuantity = (id, newQuantity) => {
    setShoppingList((prevList) =>
      prevList.map((item) => item.id === id ? {...item, quantity: newQuantity} : item)
    )
  }

  //funksjon for å endre avkrysning
  const toggleComplete = (id) => {
    setShoppingList((prevList) =>
      prevList.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item) //!item.isCompleted : gjør d motsatte av det det er nå
    )
  }

console.log(shoppingList)
  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm product={product} setProduct={setProduct} setShoppingList={setShoppingList}/>
      <ShoppingList shoppingItems={shoppingList} setShoppingList={setShoppingList} updateQuantity={updateQuantity} toggleComplete={toggleComplete}/>
    </main>
  )
}

export default App
