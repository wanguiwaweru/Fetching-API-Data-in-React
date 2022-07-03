import './App.css';
import React, {useEffect,useState} from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1`)
            const newData = await response.json()
            setData(newData)
        };

        fetchData();
    }, [])

    if (data) {
        console.log(data)
        return <div className='App'>{data.title}</div>;
    } else {
        return null;
    }
    
}

export default App;




