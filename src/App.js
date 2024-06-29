import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Background from './pages/Background';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ='/' element={<Background/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
