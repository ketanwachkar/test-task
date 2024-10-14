
import './App.css';
import { Checkbox } from './components/checkbox/Checkbox';
import { DataTable } from './components/dataTable/DataTable';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Checkbox/>
    <DataTable/>
    </div>
  );
}

export default App;
