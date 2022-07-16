import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    
    const [counter, setCounter] = useState(10);

    useEffect( () => {
        getGifs(category)
    }, [ ])
    

  return (
    <>
      <h3> {category} </h3>
      <p> { counter } </p>
      <button onClick={ () => setCounter( counter + 1 ) }>+1</button>
      <button onClick={ () => setCounter(prev => prev - 1) }>-1</button>
    </>
  );
};
