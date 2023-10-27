import './App.css';
import { Route, Routes } from 'react-router-dom';
import TrangChu from './pages/trang_chu';


import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<TrangChu/>}/>
      </Routes>
    </Provider>
    </>
  );
}

export default App;