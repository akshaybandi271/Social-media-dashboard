import "./components.css"
import { followersData,overviewTodayData } from "../data"
import SocialMediaCard from "./SocialMediaCard"
import OverviewCard from "./OverviewCard"

const Main = () => {

   

  return (
     <main>


     <section className="social-media-container">
         { followersData.map((item,index) => {
               return <SocialMediaCard item={item} key={index}/>
         })} 
      </section>

         <h2 className="overview-heading">Overview Today</h2>
      <section className="overview-container">
            {overviewTodayData.map((item,index) => {
            return <OverviewCard item ={item} key={index}/>
         })}
      </section>

     

     </main>
  )
}

export default Main
