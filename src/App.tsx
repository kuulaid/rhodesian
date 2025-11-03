import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to Rhodesian</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
