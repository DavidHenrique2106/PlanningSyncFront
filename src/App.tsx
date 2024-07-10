import "./App.css";
import Sidebar from "./components/Sidebar";
import Pedidos from "./components/routes/Faturamento/Pedidos"

function App() {
  return (
    <div className="App">
      <div className="SideComponente">
        <Sidebar />
      </div>

      <div 
      className="FazerPedido"
      style={{textAlign: 'center', 
        position: 'relative',
        top: '200px'
      }}>
      <Pedidos/>
      </div>
    </div>
  );
}

export default App;
