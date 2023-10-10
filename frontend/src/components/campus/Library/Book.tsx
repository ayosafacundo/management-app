import React from 'react';

interface BookInput {
  title: string
  description: string
  cover: string
  author: string
  language: string
  pdfurl: string
  buyurl: string
}

function Book({ title, description, cover, author, language, pdfurl, buyurl }: BookInput): React.ReactElement {
  return (
    <article className='book'>
      {cover ? (
        <img className="cover" src={cover} alt={`${title} cover.`} />
      ) : (
        <div className='cover'>
          <p className='title'>{title}</p>
        </div>
      )}
      <div className='before'>
        <div>
          <button className='btn viewpdf' disabled={pdfurl ? true : false}>View PDF</button>
          <button className='btn buy' disabled={buyurl ? true : false}>Buy Book</button>
        </div>
        <span className='bookdescription'>{description ? description : `Author: ${author}\n\n Language: ${language}`}</span>
        <h2>{title}</h2>
      </div>
    </article>
  )
}

export default Book