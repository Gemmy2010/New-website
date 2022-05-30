import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import facts from "../images/facts.jpg";
import styled from "styled-components";

import "../index.css";

const FactsHeader = () => {
  const { t } = useTranslation();

  return (
     <Link  to={'/facts'} style={{textDecoration:"none"}}className="facts">
           <div className="polaroid">
           <div className="polaroid-item">
           <h1 className="facts_header">{t("title_facts")}</h1>
           <img src={facts} className="header-image" />
           </div>
           </div>
       </Link>
     
    
  );
};

export default FactsHeader;
