import ReactApp  from "./components/reactsApp";
import Demo  from "./components/demo";
import '../src/components/css/style.css';

function App() {
  return (
    <div className="main-content">
      <h1 className="main-heading">Weather App Demo</h1>
      <ReactApp/>
      <Demo/>
    </div>
    
  );
}

export default App;
