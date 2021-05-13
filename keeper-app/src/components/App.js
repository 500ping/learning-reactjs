import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes'

function App() {
    return (
        <div>
            <Header />
            {notes.map( (vals, index) => (
                <Note 
                    key={index}
                    title={vals.title}
                    content={vals.content}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;