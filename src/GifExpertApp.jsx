import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'one punch'] );

    const onAddCategory = () => {
        // Golang
        setCategories( ["Golang", ...categories ])
    }

    console.log(categories);

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory />

        {/* Listado */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { 
            categories.map( category => {
                return <li key={ category }>{ category }</li>
            })
            }
        </ol>
            {/* GifItem */}
    </>
  )
}
