import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Book from '../components/Book';
import Chip from '../components/Chip';
import BookContainer from '../components/containers/BookContainer';
import TagContainer from '../components/containers/TagContainer';

function Library() {

    /*
    const Navigate = useNavigate();
    const [params, setParams] = useState({});
    */
    const BookTags = ["Philosophy", "Science", "History", "Encyclopedia", "Business", "Hobbies", "Self", "Sports", "Travel"]

    const clickHandler = (e) => {
        console.log(e.target)
    }

    return (
        <main id="library">
            <header>
                <h2>Claymore Library</h2>
                <Chip icon={<AiOutlineShoppingCart />} innertext="Shopping Cart" />
            </header>
            <TagContainer>
                <ul>
                    {BookTags.map((e, i) => <li key={i} onClick={clickHandler}>{e}</li>)}
                </ul>
            </TagContainer>
            <BookContainer>
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </BookContainer>
            <aside className='shopping_list'>
                <h3>Shopping list</h3>
            </aside>
        </main>
    )
}

export default Library