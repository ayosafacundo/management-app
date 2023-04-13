import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Book from '../components/Book';
import Chip from '../components/Chip';
import BookContainer from '../components/containers/BookContainer';
import TagContainer from '../components/containers/TagContainer';
import bookdata from '../books.json';
import { useSearchParams } from 'react-router-dom';

function Library() {
    const [searchParams] = useSearchParams();
    const currentParams = useRef(Object.fromEntries([...searchParams]));


    const books = () => {
        let ret = []
        let filteredBooks = bookdata;
        if (currentParams.current.genre) {
            filteredBooks = bookdata.filter((e) => {
                return e.genre ? e.genre.includes(currentParams.current.genre) : false;
            })
        } else if (currentParams.current.title) {
            filteredBooks = bookdata.filter((e) => {
                return e.title ? e.title.includes(currentParams.current.title) : false;
            })
        }
        for (let i = 0; i < Math.min(20, filteredBooks.length); i++) {
            ret.push(<Book key={i} title={filteredBooks[i].title} description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a pass"} cover={undefined} author={filteredBooks[i].author} language={filteredBooks[i].language} pdfurl={undefined} buyurl={undefined} />)
        }
        return ret
    }
    const [bookList, setBooks] = useState(books());

    useEffect(() => {
        currentParams.current = Object.fromEntries([...searchParams]);
        setBooks(books());
    }, [searchParams])



    const BookTags = ["Philosophy", "Science", "History", "Encyclopedia", "Business", "Hobbies", "Self", "Sports", "Travel"]


    return (
        <main id="library">
            <header>
                <h2>Claymore Library</h2>
                <Chip icon={<AiOutlineShoppingCart />} innertext="Shopping Cart" />
            </header>
            <TagContainer tags={BookTags} />
            <BookContainer>
                {bookList.length >= 1 ? bookList : (
                    <p>No Book with that title and/or genre available</p>
                )}
            </BookContainer>
            <aside className='shopping_list'>
                <h3>Shopping list</h3>
            </aside>
        </main>
    )
}

export default Library