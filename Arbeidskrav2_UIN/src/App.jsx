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
      quantity: 2
    },
    {
      id: 1,
      title: "Egg",
      quantity: 1
    }
  ]

  const [shoppingList, setShoppingList] = useState(shoppingItems)
  const [product, setProduct] = useState({title: "", quantity: ""})

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm product={product} setProduct={setProduct} setShoppingList={setShoppingList}/>
      <ShoppingList shoppingItems={shoppingList} setShoppingList={setShoppingList}/>
    </main>
  )
}

export default App
