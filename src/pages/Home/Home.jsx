import React , {useState} from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
    const[category, setCategory] = useState("All")
  return (<>
   <Header/>
   <ExploreMenu category ={category} setCategory = {setCategory}/>
   <FoodDisplay category = {category}/>
   </>
  )
}

export default Home