import React, { useState } from 'react'

function App() {
    const [id, setId] = useState('')
    const [data, setData] = useState(null)

    const handleClick = async () => {
        try {
            const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)).json()
            setData(data)
        } catch (err) {
            console.log(err.message)
        }
    }
    function checkResponse(data) {
        if (data) {
            console.log(data)
            return <div className='App'>{data.title}</div>;
        } else {
            return null;
        }

    }

    return (
        <div>
            <input className='album_id' required="required" placeholder='Enter an ID' value={id} onChange={e => setId(e.target.value)} />

            <button type="submit" onClick={handleClick} >Search</button>
            {checkResponse(data)}
        </div>
    )

}

export default App;




