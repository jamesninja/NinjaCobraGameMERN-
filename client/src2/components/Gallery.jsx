import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';
import NavBar from './NavBar';

function Gallery(){
  const [data,setData] = useState([]);

  // similaire à "componentDidMount" et "componentDidUpdate"

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios( 'https://jsonplaceholder.typicode.com/photos',
    );
    setData(result.data);
    };
    fetchData();
  })

  return(
    <Fragment className="to-picture">
     <NavBar/>
        <ul>
          {data.slice(0, 8).map(item =>(
                  <div key = {item.id}>
                      { <img src={item.thumbnailUrl} alt={item.title}/>}
                  </div>
                 )
               )
           }
        </ul>
    </Fragment>
  )
}
export default Gallery;





