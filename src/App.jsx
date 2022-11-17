
import './App.css'
import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Repositories } from './components/Repositories/repositories'


function App() {
 
  return (
    <div className="App">
      <Header />
      <Repositories/>     
      <Footer name=" Pati Rocha"/>  
    </div>
  )
}

export default App
