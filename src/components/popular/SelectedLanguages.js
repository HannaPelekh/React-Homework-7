import { memo } from "react";

const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python', 'Java'];

const SelectedLanguages = memo((props) => {     
    return (
     <ul className="languages">
        {languages.map((language, index) => {
            return (
                <li 
                    key={index}
                    className={!props.loading ? "clickable" : "disable"}   
                    style={language === props.selectedLanguage ? {color: '#d0021b'} : null}                                    
                    onClick={() => {
                        language !== props.selectedLanguage && 
                        props.onSelectedLanguage(language)
                    }}                                   
                >                    
                    {language}                    
                </li>
            )
        })}
      </ul>
    );
  });
  
  export default SelectedLanguages;
  


