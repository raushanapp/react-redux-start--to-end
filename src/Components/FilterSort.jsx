import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
// import {useDispatch} from "react-redux"
// import { getBooks } from '../ReduxStore/firstStore/action.first';
function FilterSort() {
    // const dispatch = useDispatch()
    const [searchParams,setSearchParams] =useSearchParams()
    const initalCategoryFilter = searchParams.getAll("category");
    const initalSortBy =searchParams.getAll("sortBy");
    // console.log(urlCategory,urlSort)
    const [category,setCategory] = useState(initalCategoryFilter || [])
    const [sortBy,setSortBy] = useState(initalSortBy[0] || "")
    const handleCheckbox = (e)=>{
        const option = e.target.value
        // if options is already present then remove else add it
        let newCategoryOption =[...category];
        console.log("option:",newCategoryOption)
        if(newCategoryOption.includes(option)) {
            newCategoryOption.splice(newCategoryOption.indexOf(option),1)
        }
        else {
            newCategoryOption.push(option)
        }
        setCategory(newCategoryOption)
    }
    const handleSortBy = (e)=>{
        setSortBy(e.target.value)
       
    }
    // console.log(sortBy)
    useEffect(()=>{
       if(category || sortBy){
          let params ={};
          category && (params.category=category)
          sortBy && (params.sortBy=sortBy)
         setSearchParams(params)
       }

    },[category,setSearchParams,sortBy]);
     
    // useEffect(()=>{
    //     if(sortBy){
    //         let params = {
    //             category:searchParams.getAll("category"),
    //             sortBy
    //         }
           
    //         setSearchParams(params)
    //     }
    // },[searchParams,dispatch,setSearchParams,sortBy])
  return (
    <div>
        <h3>Filter</h3>
          <div>
              <div>
                 <input type="checkbox" value='Novel'
                  checked={category.includes("Novel")} 
                  onChange={handleCheckbox}
                  />
                 <label>Novel</label>
              </div>
              <div>
                 <input type="checkbox" value='Science'
                  checked={category.includes("Science")} 
                  onChange={handleCheckbox}
                  />
                 <label>Science</label>
              </div>
              <div>
                 <input type="checkbox" value='Programming'
                  checked={category.includes("Programming")} 
                  onChange={handleCheckbox}
                  />
                 <label>Programming</label>
              </div>
          </div>
        <h3>Sort</h3>
         <div onChange={handleSortBy}>
             <input type="radio" value='asc' name='sortBy'
             defaultChecked={sortBy==='asc'}
             />{" "} Ascending
             <input type="radio" value='desc' name='sortBy'
              defaultChecked={sortBy==='desc'}
             /> {" "}Descending
         </div>
    </div>
  )
}

export default FilterSort