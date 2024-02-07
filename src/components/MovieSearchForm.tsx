import { useState, ChangeEvent, FormEvent } from "react";
interface IMovieSearchFormProps{
    search: (text: string)=>void;
}

export const MovieSearchForm = (props: IMovieSearchFormProps) => {

        const [userTextSearch, setUserTextSearch] = useState("");
        
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setUserTextSearch(e.target.value);
        };
        
        const handleSubmit = (e: FormEvent) => {
        e.preventDefault
        props.search(userTextSearch);
        };

        return <>
        <form onSubmit={handleSubmit}> 
            <input value={userTextSearch} onChange={handleChange}/>
            <button>Sök</button>
        </form>
            </>
}