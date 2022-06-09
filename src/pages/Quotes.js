import React, {useEffect}from 'react'
import { useTranslation, withTranslation } from "react-i18next";
import FactsHeader from '../components/FactsHeader';
import BlogContact from '../components/BlogContact';
import Search from '../components/Search';
import Categories from '../components/Categories';
import "../index.css"
import data from '../assets/QuotesData'


const  Quotes = withTranslation()(({i18n}) => {
    useEffect(() => {
  window.scrollTo(0, 0)
  }, []);

  
    const { t } = useTranslation();
    
    const currentLanguage = i18n.language;

        return (
          
            <div className="quotes_info">
              <div className="quotes_left">
                <div className="quotes_container">
                  <h1 className="data-heading">{t("title_q")}</h1>
                  {data.map((quote, id) => (
                    <p key={id}>
                      {id + 1}.{" "}
                      {currentLanguage === "en"
                        ? quote.text
                        : quote.text_translation}
                    </p>
                  ))}
                </div>
                <div>
                  <BlogContact />
                </div>
              </div>
<<<<<<< HEAD
              <div className="quotes_right">
=======
              <div className="quotes-right">
>>>>>>> 5d508a45e2a7fa43f941a758a9947f61ab85b344
                <Search />
                <Categories />
                <FactsHeader />
              </div>
            </div>
          
        );
       

 
})

    
export default Quotes;