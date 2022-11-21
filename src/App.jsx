
import './App.css'
import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Repositories } from './components/Repositories/repositories'
import { Section } from './components/Section/section'


function App() {
 
  return (
    <div className="App">
      <Header />
      <Section />
      <Repositories/>     
      <Footer name=" Pati Rocha"/>  
    </div>
  )
}
export default App
