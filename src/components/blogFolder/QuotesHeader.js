import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import quotes from "../../images/quotes.jpg";

import "../../index.css"


const  QuotesHeader = () => {
  

  const { t } = useTranslation();

 


 
  return (
    <div>
      
      <Link  to={'/quotes'} style={{textDecoration:"none"}}className="quotes">
           <div className="polaroid">
           <div className="polaroid-item">
           <h1 className="quotes_header">{t("title_q")}</h1>
           <img src={quotes} className="header-image" />
           </div>
           </div>
       </Link>
      
    </div>
  )
}

export default QuotesHeader