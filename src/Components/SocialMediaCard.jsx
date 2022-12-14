import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import "./components.css"


const SocialMediaCard = ({item}) => {

    const {socialMedia,userName,followers,todaysCount} = item

    let icon = ""

    if(socialMedia === "facebook"){
      icon = faFacebook
    }else if (socialMedia === "twitter"){
      icon = faTwitter
    }else if (socialMedia === "instagram"){
      icon = faInstagram
    }else {
      icon = faYoutube
    }
    
    // For convert the large numbers to into readable format
    const newFollowers = followers.toString().length > 4 ? `${followers.toString().substring(0,2)}k` : followers

  return (
        <div className={`social-media-card ${socialMedia}-card`}>
            <p className="userName"><FontAwesomeIcon icon={icon} className={`icon ${socialMedia}-icon`} />  {userName}</p>
            <h2 className="followers-number">{newFollowers}</h2>
            <p className="followers-text">FOLLOWERS</p>
            <p className={`${todaysCount >  0 ? "positive" : "negative"}-growth`}>{todaysCount} Today</p> 
        </div>
  )
}

export default SocialMediaCard
