
import './App.css';
import Footer  from './components/layouts/Footer';
import Header from './components/layouts/Header';
import AllRoutes from './routes/AllRoutes';


export  const App = () => {
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

