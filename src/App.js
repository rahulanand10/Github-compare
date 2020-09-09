import React,{useEffect,useState} from 'react';
import {Form} from 'semantic-ui-react';
import './App.css';
import Cards from './Cards'
let id=1
let x=[]
function App() {
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState('')
  
  // useEffect(() => {
  //   fetch('https://api.github.com/users/example')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setData(data)
  //   })
  // }, [])
 
  const setData=({name,followers,following,public_repos,avatar_url}) => {
    x.push({id,name,followers,following,public_repos,avatar_url})
    x.sort(function(a,b){
      return b.followers-a.followers
    })
    x.forEach((s)=>{
      s.id=x.indexOf(s)+1
    })
    console.log(x);
    id+=1
}

const handleSearch=(e)=>{
  setUserInput(e.target.value)
}
const handleSubmit=()=>{
  fetch(`https://api.github.com/users/${userInput}`)
  .then(res=>res.json())
  .then(data=>{
    if (data.message){
      alert('Not found') 
    }
    else{
      setData(data);
    }
    setUserInput('');

  })
}
  return (
    <div>
      <div className="navbar">Github Search</div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Github User' value={userInput} onChange={handleSearch} required/>
            <Form.Button content='Search'/>
          </Form.Group>
        </Form>
      </div>
      {error ? (<h1>Not Found</h1>):(
        <div className='card'>
        {x.map((val)=>{
          if (true){
          return(
            <Cards
              avatar={val.avatar_url}
              name={val.name}
              id={val.id}
                followers={val.followers}
                repos={val.public_repos}
                following={val.following}
              />
        )}
        })}
      
        </div>
      )}
      
    </div>
  );
}

export default App;
