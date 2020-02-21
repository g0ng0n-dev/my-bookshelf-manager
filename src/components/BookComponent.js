import React from 'react';
import '../App.css';

function BookComponent({book, handleBookShelfChange}) {
    return(
        <div className="book">
            <div className="book-top">
            {book.imageLinks ?
                <div className="book-cover"
                     style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                     }}
                ></div>
                : <div className="book-cover"
                    style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url()`,
                    }}
                />}
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : 'none'} onChange={event => handleBookShelfChange(event, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>)
}

export default BookComponent;
