import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    let navigate = useNavigate()

    useEffect(() => {
        navigate("/login")
    }, [navigate])
    

  return (
    <div></div>
  )
}

export default App