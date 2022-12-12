import React from 'react';
import routes from './routes';
import './App.css';
import { useRoutes } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import Sidbar from './components/sidebar/Sidbar';


function App() {

 let router = useRoutes(routes)

  return (
    <>
         <TopBar />
         <div className='container'>
             <Sidbar />
             {router}
         </div>
    </>
  );
}

export default App;
