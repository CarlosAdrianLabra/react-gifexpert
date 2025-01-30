import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
 
    const [ categories, setCategories ] = useState([ 'Solo leveling']);

    const onAddCategory = (NewCategory) => {
        if( categories.includes(NewCategory)) return;
        //categories.push(NewCategory)
        setCategories([NewCategory,...categories])
    }

  return (
    <>
    
    <h1>GiftExpertApp</h1>

    <AddCategory
     //setCategories={setCategories}
     onNewCategory = { (value) => onAddCategory(value) }
     />

   
        {
            categories.map( category => (
                    <GifGrid key={category} category={category}/>
            ))
        
        }

   
    
    </>
  )
}
