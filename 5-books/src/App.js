import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = (id, newtitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, title: newtitle};
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBook = [...books, 
            {id: Math.round(Math.random() * 9999), title: title}
        ];
        setBooks(updatedBook);
        console.log('need to add book with: ', title);
    };

    return <div className="app">
        <h1>Reading List</h1>
                <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
                <BookCreate onCreate={createBook} />
           </div>
}

export default App;