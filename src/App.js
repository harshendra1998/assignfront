import "./myapp.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import About from "./screens/about";
import Counter from "./screens/counter";
import Contact from "./screens/contact";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./component/sidebar";
import Navigation from "./component/navigation";
import {useEffect, useState} from 'react'
import Login from "./screens/login";

function App() {
  const [token, settoken] = useState('')

  useEffect(() => {
    const gottoken = localStorage.getItem('token')
    settoken(gottoken);
  }, [])

  return token ? (
    <Provider store={store}>
      <div className="bodyin">
        <Sidebar />
        <div className="navbody">
          <div className="header flexrow">
            <h1 className="flexfull" style={{textAlign: 'center'}}>Header</h1>
            <button className='button marginhorizontal' onClick={()=>{
              localStorage.removeItem("token"); window.location.href = '/'}}>LogOut</button>
          </div>
          <div>
          </div>
          <div style={{ flex: 1, backgroundColor: "pink" }}>
            <BrowserRouter>
            <Navigation />
              <Routes>
                <Route index element={<Counter />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </Provider>
  ):<Login />;
}

export default App;
