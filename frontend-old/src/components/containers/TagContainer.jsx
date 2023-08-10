import React, { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

function TagContainer({ tags }) {

    const { state } = useLocation();
    const [searchBar, setSearchBar] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({});

    const SetterSearchParams = (params) => {
        setSearchParams({ ...params }, { state });
    }

    const clickHandler = (e) => {
        e.preventDefault();
        let params = searchParams;
        params.genre = e.target.dataset.id;
        SetterSearchParams(params);

    }

    const submitHandler = (e) => {
        e.preventDefault();
        let params = searchParams;
        params.title = searchBar;
        SetterSearchParams(params);
    }

    return (
        <aside className='tags'>
            <h3>Search Bar</h3>
            <div className='form'>
                <input type='text' value={searchBar} className='input' placeholder='Book Title' onChange={e => setSearchBar(e.target.value)} />
                <button onClick={submitHandler}><AiOutlineSearch /></button>
            </div>
            <h5>Tags</h5>
            <ul>
                {tags.map((e, i) => <li key={i} onClick={clickHandler} data-id={e}>{e}</li>)}
            </ul>
        </aside>
    )
}

export default TagContainer