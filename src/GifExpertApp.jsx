import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'Vue' ] );

    const onAddCategory = ( onNewCategory ) => {
        setCategories( [onNewCategory, ...categories ])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        {/* Listado */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
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
