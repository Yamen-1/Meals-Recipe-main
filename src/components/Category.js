import React, { useEffect, useState } from 'react'
import { Link, Route, Router, Routes, useParams } from 'react-router-dom';
import SingleMeal from './SingleMeal';

export default function Category({meals, setMeals, setSingleImage }) {

  let {name} = useParams()


  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+name;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        setMeals(json.meals)
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [name]);


  const lightStar = (rating, idMeal) =>{

      console.log("Active Light Stars");

      let newMeals = [...meals]
      let foundMeal = newMeals.find(m => m.idMeal === idMeal)
      foundMeal.rating = rating
      setMeals(newMeals)

  }
  

  return (


    <div className='Category'>
       <h1>Choose your {name} meal </h1>

        <div className='meal-card'>
        {meals.map((meal, ind)=>{
          return(
            <div key={ind+1} className='meal-body'>

              <h3> {(meal.strMeal.length > 20)? (meal.strMeal.slice(0,20))+'...': meal.strMeal} </h3>
                          

              <Link to={`/categories/${name}/${meal.strMeal}/`}> 

               <img src={meal.strMealThumb} alt="img" 
                    onClick={(e)=>{

                      // console.log(e.target.src);

                      setSingleImage(e.target.src)


                    }} />  

                <div className="vote-wrapper">

                  <div className='stars-container' onClick={(e) =>{
                    e.preventDefault()
                  }}>

                      {
                        [...Array(5).keys()].map( i =>{
                          return(
                            <>
                              <span class={(i+1 == meal.rating)?"fa fa-star active stars":"fa fa-star stars"} 
                              onClick={()=>lightStar(i+1, meal.idMeal)}
                              id={i+1} > {i+1} </span>
                              
                              {/* <i style={{color:"#ccc",zIndex:'10'}}> {i+1} </i> */}
                            </>
                          )
                        })
                      }
                  </div>

                </div> 
            
            <h4 > see more.. </h4> 
            </Link>
      

            </div>

          )

        })}
      </div>
    </div>
  )
}
