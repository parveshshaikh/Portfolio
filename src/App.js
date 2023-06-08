import { Route, Routes } from 'react-router';
import './App.css';
import {Home,Header,About, Projects} from './Compont';
function App() {
  return (
    <div className='dark:bg-gray-900'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Projects/>}/>
      </Routes>
   
      
      
    </div>
  );
}

export default App;
