import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import SelectedLanguages from "./SelectedLanguages";
import { fetchPopularRepos } from "../../api";
import RepoGrid from "./RepoGrid";
import Loader from "../General/loader/loader";

import './popular.css';

const Popular = () => {  
    const initialState = {        
        repos:[],
        loading: true
    }  
    const [state, setState] = useState(initialState)
    const [searchParams, setSearchParams] = useSearchParams({selectedLanguage: 'All'})
    const selectedLanguage = searchParams.get("selectedLanguage") 
      
    useEffect(() => {         
        fetchPopularRepos(selectedLanguage)
          .then((r) => {setState({
            loading: false, repos: r})})  
    }, [selectedLanguage]);
    
    const onSelectedLanguage = (language) => {  
        setState({...state, loading: true}) 
        setSearchParams ({selectedLanguage: language}) 
    }
    
    return (
        <div className="popular-container">
            <SelectedLanguages
                selectedLanguage={selectedLanguage}
                onSelectedLanguage = {onSelectedLanguage}
                loading = {state.loading}
                />
            {state.loading ? <Loader/> : <RepoGrid repos={state.repos}/>}
        </div>
    );    
}
export default Popular;
   