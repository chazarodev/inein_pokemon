import { PokemonProvider } from '../context/PokemonProvider'
import PokemonData from '../components/PokemonData'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/normalize.css'
import '../styles/global.css'

function App() {
  
  return (
    <PokemonProvider>
      <Header />
      <PokemonData />
      <Footer />
    </PokemonProvider>
  )
}

export default App
