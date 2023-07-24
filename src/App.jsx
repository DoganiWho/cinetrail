import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CombinedContextProvider from './context/index'
import HomePage from './pages/HomePage/HomePage'
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import MyFavorites from './pages/MyFavorites/MyFavorites';





function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL
  const serverUrl=import.meta.env.VITE_SERVER_URL;


  return (
    
      <BrowserRouter>
      <CombinedContextProvider>
      <Header apiKey={apiKey} baseUrl={baseUrl} />
      <Routes>
        <Route path="/" element={<HomePage apiKey={apiKey} baseUrl={baseUrl} />}/>
        <Route path="/moviedetails/:movieid" element={<MovieDetails serverUrl={serverUrl} baseUrl={baseUrl} apiKey={apiKey}/>}/>
        <Route path="/myfavorites" element={<MyFavorites serverUrl={serverUrl} baseUrl={baseUrl} apiKey={apiKey}/>}/>
        <Route path="/signup" element={<SignUp serverUrl={serverUrl}/>}/>
        <Route path="/signin" element={<SignIn serverUrl={serverUrl}/>}/>
   
       
      
      </Routes>
      </CombinedContextProvider>
      </BrowserRouter>
       
   
  )
}

export default App
