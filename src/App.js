import React from 'react'
import i18next from "i18next"
import "./index.css"
import { useTranslation } from 'react-i18next'


export default function App() {

  const { t } = useTranslation()

  const handleClick = (lang) => {
    i18next.changeLanguage(lang)
  }

  return (
   <>


    <div className='buttons'>
    <button className='buto'   onClick={() => handleClick("eng")}>English</button>
   <button className='buto'  onClick={() => handleClick("ru")}>Russian</button>
   <button className='buto'   onClick={() => handleClick("uz")}>Uzbek</button>
    </div>
    
    
    <h1 className='soz'>{t("text.text_paragraf")}</h1>
   </>
  )
}
