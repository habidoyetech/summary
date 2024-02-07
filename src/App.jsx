import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    let navigate = useNavigate()

    useEffect(() => {
        navigate("/login")
    }, [])
    

  return (
    <div></div>
  )
}

export default App