import React,{useEffect, useState} from "react";
import { useTranslation } from "react-i18next";




function CounterViews() {
  const { t } = useTranslation();
  const [totalCount, setTotalCount] = useState(0);

  const getCount = async () => {
    const response = await fetch(
      "https://api.countapi.xyz/update/biketrace/bikeblog/?amount=1"
    );
    const count = await response.json();

    return count.value
  };

  useEffect(async () => {
  
    setTotalCount(await getCount())
   
    
  }, []);

  return (
    <div id="views">
      <h1 className="views_header">{t("title_views")}</h1>
      <div className="views_card">
        <h2 className="view_number">{t("total_views")}:</h2>
        <h2 id="count"> {totalCount}</h2>
      </div>
    </div>
  );
}

export default CounterViews;
