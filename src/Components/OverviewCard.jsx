import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./components.css"

const OverviewCard = ({item}) => {

  const {statOf,socialMedia,todaysCount,growthPercentage} = item

  let icon

  if(socialMedia === "facebook"){
     icon = faFacebook
  }else if (socialMedia === "instagram"){
    icon = faInstagram
  }else if (socialMedia === "twitter"){
    icon = faTwitter
  }else {
    icon = faYoutube
  }



  return (
      <div className="overview-card">
          <div className="overview-card-div">
              <p className="statOf">{statOf}</p>
              <FontAwesomeIcon icon={icon} className="icon" />
          </div>
          <div className="overview-card-div">
             <p className="todaysCount">{todaysCount > 4 ? `${todaysCount.toString().substring(0,2)}k` : todaysCount }</p>
             <p className={`${growthPercentage > 0 ? "positive" : "negative"}-growth`}>{growthPercentage}%</p>
          </div>
      </div>
  )
}

export default OverviewCard
