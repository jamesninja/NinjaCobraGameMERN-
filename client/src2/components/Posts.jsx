
import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';

function Posts(){
  const [data,setData] = useState([]);

  // similaire à "componentDidMount" et "componentDidUpdate"

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios( 'https://jsonplaceholder.typicode.com/posts',
    );
    setData(result.data);
    };
    fetchData();
  })

  return(
    <Fragment>
        <ul>
          {data.map(item =>(
                  <li key = {item.id}>
                      <p>{item.title} </p>
                      <p>{item.body} </p>
                  </li>
                 )
               )
           }
        </ul>
    </Fragment>
  )
}
export default Posts;
