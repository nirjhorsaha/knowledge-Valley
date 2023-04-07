import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import HomePage from './Components/HomePage/HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App ">
      <Header></Header>
      <HomePage></HomePage>
      <Blog></Blog>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
