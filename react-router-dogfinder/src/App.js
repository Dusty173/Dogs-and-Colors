import { useEffect } from 'react';
import './App.css';
import axios from "axios";
import RouteList from './RouteList';
import NavBar from './Navbar';


function App() {
  const [dogs, setDogs] = useState({
    data: null, 
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs(){
      const res = await axios.get("http://localhost:5001/dogs")
      setDogs({
        data: res.data,
        isLoading: false
      })
    }
    loadDogs()
  })

  if(dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Dogs!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data}/>
        <div>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;