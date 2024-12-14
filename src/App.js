import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        </Routes>
      </BrowserRouter> */}
      <Navbar></Navbar>
    </div>
  );
}

export default App;
