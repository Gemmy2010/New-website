import React, {useEffect}from 'react'
import { useTranslation, withTranslation } from "react-i18next";
import QuotesHeader from "../components/blogFolder/QuotesHeader";
import Search from '../components/blogFolder/Search';
import BlogContact from '../components/blogFolder/BlogContact'
import Categories from '../components/blogFolder/Categories';
import CounterViews from '../components/blogFolder/CounterViews';
import data from '../data/FactsData'

import "../index.css";



const  Facts = withTranslation()(({i18n}) => {
    useEffect(() => {
  window.scrollTo(0, 0)
}, []);

  
    const { t } = useTranslation();
    
    const currentLanguage = i18n.language;

        return (
          <>
            <div className="facts_info">
              <div className="facts_left">
                <div className="facts_container">
                <h1 className="data-heading">{t("title_facts")}</h1>
                {data.map((fact, id) => (
                  <p key={id}>
                    {id + 1}.{" "}
                    {currentLanguage === "en"
                      ? fact.text
                      : fact.text_translation}
                  </p>
                ))}
                </div>
                <div>
                  <BlogContact />
                </div>
              </div>
            
              <div className="facts_right">
               <div>
                 <Search />
                 <Categories />
                 <QuotesHeader />
                 <CounterViews />
               </div>
              </div>
            </div>
          </>
        );
       

 
})

    
export default Facts;