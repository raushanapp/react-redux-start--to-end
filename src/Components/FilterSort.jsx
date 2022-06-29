import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
function FilterSort() {
    const [searchParams,setSearchParams] =useSearchParams()
    const urlCategory = searchParams.getAll("category");
    const urlSort =searchParams.get('sortBy');
    console.log(urlCategory,urlSort)
    const [category,setCategory] = useState(urlCategory||[])
    const [sortBy,setSortBy] = useState(urlSort||'')
    const handleCheckbox = (e)=>{
        const option = e.target.value
        // if options is already present then remove else add it
        const newCategory =[...category];
        if(newCategory.includes(option)) {
            newCategory.slice(newCategory.indexOf(option,1))
        }
        else {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }
    const handleSortBy = (e)=>{
        setSortBy(e.target.value)
    }
    // console.log(sortBy)
    useEffect(()=>{
       if(category){
         setSearchParams({category:category})
       }

    },[category,setSearchParams]);
     
    useEffect(()=>{
        if(sortBy){
            let params = {
                category:searchParams.getAll("category"),
                sortBy
            }
            setSearchParams(params)
        }
    },[setSearchParams,searchParams,sortBy])
  return (
    <div>
        <h3>Filter</h3>
          <div>
              <div>
                 <input type="checkbox" value='Novel'
                  onChange={handleCheckbox}
                 defaultChecked={category.includes("Novel")} />
                 <label>Novel</label>
              </div>
              <div>
                 <input type="checkbox" value='Science'
                  onChange={handleCheckbox}
                 defaultChecked={category.includes("Science")} />
                 <label>Science</label>
              </div>
              <div>
                 <input type="checkbox" value='Programming'
                  onChange={handleCheckbox}
                 defaultChecked={category.includes("Programming")} />
                 <label>Programming</label>
              </div>
          </div>
        <h3>Sort</h3>
         <div onChange={handleSortBy}>
             <input type="radio" value='asc' name='sortBy'
             defaultChecked={sortBy==='asc'}
             /> Ascending
             <input type="radio" value='desc' name='sortBy'
              defaultChecked={sortBy==='desc'}
             /> Descending
         </div>
    </div>
  )
}

export default FilterSort