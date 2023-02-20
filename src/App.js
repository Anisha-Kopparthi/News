import React,{useState} from 'react';
import axios from 'axios';
const App = () => {
  const [data,setData]=useState([])
  const getNews=()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2316199ec2e54346ae9cf17fef45c423")
    .then((response)=>{
      setData(response.data.articles)
    })
  }
  return (
    <div>
      <div className='container'>
        <button className='btn btn-primary' onClick={getNews}>
          Fetch News
        </button>
      </div>
      <div className='container'>
        <div className='row'>
         {
          data.map((value)=>{
            return(
              <div className='col'>
              <div className="card" style={{width: "18rem"}}>
                <img src={value.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                             <a href=" "  className="btn btn-primary">News</a>
                   </div>
                </div>
              </div>
            );
            })
         }
         </div>
      </div>
    </div>
  );
};

export default App; 
