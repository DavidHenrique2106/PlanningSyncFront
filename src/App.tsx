import './App.css'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  return (
    <>
    <div className="App">
      <h1 style={{textAlign: 'center'}}>
        <Header/>
      </h1>
      <main style={{textAlign: 'center'}}>
        <Form/>
      </main>
      <footer>
      </footer>
    </div>
    </>
  )
}

export default App
