import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [ search, setSearch ] = useState('')

  let imgLink = 'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  
  const posts = [
    {
      img: imgLink,
      songName: 'han bhai',
      artistName: 'kya hai bhai',
    },
    {
      img: imgLink,
      songName: 'han bhai',
      artistName: 'kya hai bhai',
    },
  ]
  
  // const getReq = async () => {
    //   const response = await fetch(`https://api.spotify.com/v1/tracks/${search}`);
    //   response.json().then((res) => setId(res.data.users));
    // };

    // https://open.spotify.com/track/3sqrvkNC6IPTIXvvbx9Arw?si=b99a70435d7a4302
    
    const handleChange = e => {
      setSearch(e.target.value)
      
      // const urlId = (id.split("/"))[4].substring(0,22)  
    }
    
    let id  = search
    let sm = id.split("/")[4]
    let sm2 = sm.split('?')
    console.log(sm2)
    console.log(search);
    

  return (
    <div className="App">
      <input value={search} onChange={handleChange} />
      <button type='submit'>Post</button>

      <Post posts={posts} />
    </div>
  );
}

export default App;
