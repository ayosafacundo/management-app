import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation, useSearchParams } from 'react-router-dom';

interface TagContainerInput {
  tags: string[]
}

interface Params extends URLSearchParams {
  genre?: string;
  title?: string;
}

interface EventParams extends EventTarget {
  dataset?: {
    id?: string
  }
}

function TagContainer({ tags }: TagContainerInput): React.ReactElement {
  const { state } = useLocation();
  const [searchBar, setSearchBar] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const SetterSearchParams = (params: URLSearchParams) => {
    setSearchParams({ ...params }, { state });
  }

  const clickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    e.preventDefault();
    const params: Params = searchParams;
    const a: EventParams = e.target;
    params.genre = a.dataset?.id;
    SetterSearchParams(params);

  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    const params: Params = searchParams;
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
        {tags.map((e: string, i: number) => <li key={i} onClick={clickHandler} data-id={e}>{e}</li>)}
      </ul>
    </aside>
  )
}

export default TagContainer