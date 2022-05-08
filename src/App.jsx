import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/imgs/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Tour from './pages/Tour/Tour';

const App = () => {
  AOS.init({
    duration: 800,
    offset: 150,
  });

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tours-peru/:id/:slug" element={<Tour />} />
        <Route path="/cart" element={<h1 style={{ marginTop: '100px' }}>Cart</h1>} />
        <Route path="/account" element={<h1 style={{ marginTop: '100px' }}>Acount</h1>}>
          <Route path="sign-in" element={<h1 style={{ marginTop: '100px' }}>Sign In</h1>} />
          <Route path="sign-up" element={<h1 style={{ marginTop: '100px' }}>Sign Up</h1>} />
        </Route>
        <Route path="/admin-panel" element={<h1 style={{ marginTop: '100px' }}>Admin Panel</h1>} />
        <Route
          path="*"
          element={(
            <>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit
                    {' '}
                    <code>src/App.js</code>
                    {' '}
                    and save to reload.
                  </p>
                  <a
                    className="App-link btn-primary"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit
                    {' '}
                    <code>src/App.js</code>
                    {' '}
                    and save to reload.
                  </p>
                  <a
                    className="App-link btn-primary"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            </>
        )}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
