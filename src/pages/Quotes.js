import React, {useEffect}from 'react'
import { useTranslation, withTranslation } from "react-i18next";
import FactsHeader from '../components/blogFolder/FactsHeader';
import BlogContact from '../components/blogFolder/BlogContact';
import Search from '../components/blogFolder/Search';
import Categories from '../components/blogFolder/Categories';
import CounterViews from '../components/blogFolder/CounterViews';

import data from '../data/QuotesData'

import "../index.css";


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
              <div className="quotes_right">
                <Search />
                <Categories />
                <FactsHeader />
                <CounterViews />
              </div>
            </div>
          
        );
       

 
})

    
export default Quotes;