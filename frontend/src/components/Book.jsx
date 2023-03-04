import React from 'react'

function Book() {
    return (
        <article className='book'>
            <img src='https://picsum.photos/200/300' alt='cover' />
            <div className='before'>
                <div>
                    <button className='btn viewpdf'>View PDF</button>
                    <button className='btn buy'>Buy Book</button>
                </div>
                <span className='bookdescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat justo fermentum ultrices finibus. Praesent varius mauris non nisl tempor, lacinia laoreet orci posuere. Praesent mattis bibendum tortor eget rutrum. Duis molestie ultricies cursus. Phasellus eget nisi tortor. Quisque vel pulvinar leo, ac maximus sem. Ut consectetur, nisl nec pharetra iaculis, justo libero facilisis justo, vel vulputate justo diam semper enim.</span>
                <h2>Book Name</h2>
            </div>
        </article>
    )
}

export default Book