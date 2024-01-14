import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <Header />
      <Footer />
    </>
  )
}

export default App
