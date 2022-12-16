import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import {BrowserRouter as Router,Routes, Route, Link, useParams} from "react-router-dom"
import Category from './components/Category'
import Navigation from './components/Navigation'
import SingleMeal from './components/SingleMeal'

import "./css/App.scss"


export default function App() {


  const [categories, setCategories] = useState([])

  const [meals, setMeals] = useState([])

  const [singleImage, setSingleImage] = useState("")


  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        // setCategories(json.meals.map(meal=> meal.strCategory ))
        setCategories(json.meals)

        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [])

  // const [name, setName] = useState(categories.map(e => <h1> {e.strCategory} </h1>))

  // const [ example, setExample ] = useState('')

  // const btnSubmit = () =>{

  //   console.log('Submit BUTTON CLICK');
  //   console.log(example);
  // }

  return (
    <Router>
      <div className='App'>
      
        <Navigation />
         
          <Routes>
            <Route path={"/"} element={

                    <div className='Home'>
                   
                    </div>                
                } />

            <Route path={"/categories/"} element={

              <>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>

                <ul className='meals-cards'>
                  
                    {categories.map((cat, ind) => {

                      return <li key={ind+1}
                      className='meals-item'> 
                      <Link to={"/categories/"+cat.strCategory} > {cat.strCategory} </Link> </li>
                    })} 

                </ul>
              </>
              } />

              <Route path={'/categories/:name'} element={<Category meals={meals} setMeals={setMeals} setSingleImage={setSingleImage} />} />

              <Route path={`/categories/:name/:selectedMeal/`} 
              
                  element={
                    <>
                      <SingleMeal categories={categories} meals={meals} singleImage={singleImage}/>
                    </>
                  } />

              <Route path='/' element={'About'} />
          </Routes>
      </div>
    </Router>
  )
}

