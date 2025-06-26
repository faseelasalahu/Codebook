
import './App.css';
import Footer  from './components/layouts/Footer';
import Header from './components/layouts/Header';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="App dark:bg-dark" >
      <>
      <Header/>
      <AllRoutes />
      <Footer/>
      </>
    </div>
  );
}

export default App;
