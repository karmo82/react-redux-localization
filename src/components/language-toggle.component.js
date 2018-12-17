import React from "react";
import { withLocalize } from "react-localize-redux";

const LanguageToggleComponent = ({ languages, activeLanguage, setActiveLanguage }) => (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Languages</a>
            <div className="dropdown-menu" >
                {languages.map(lang => (
                <a className="dropdown-item" key={lang.code} href="#" onClick={() => setActiveLanguage(lang.code)}>
                    {lang.name}                  
                </a>
                ))}
            </div>
        </li>
            
  
);

export default withLocalize(LanguageToggleComponent);