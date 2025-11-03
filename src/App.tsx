import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Landing } from './pages/Landing'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
