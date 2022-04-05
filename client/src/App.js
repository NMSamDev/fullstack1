import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]); 
  useEffect(() => {
	axios.get('http://localhost:3001/posts').then((response)=> {
	  setListOfPosts(response.data);
	})
  }, [])

  return (
	<div className="App">
	  {listOfPosts.map((value, key) => {
		return (
			<div className='post'> 
				<div className='title' key={key}> {value.title} </div>
				<div className='body' key={key}> {value.postText} </div>
				<div className='footer' key={key}> {value.username} </div>
		  	</div>
		)
	  })}
	  
	</div>
  );
}

export default App;