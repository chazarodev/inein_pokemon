import { PokemonProvider } from '../context/PokemonProvider'
import Header from '../components/Header'
import PokemonData from '../components/PokemonData'
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
