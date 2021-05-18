import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleSubmit(event) {
        props.onAdd(note);
        event.preventDefault();
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
                <textarea name="content" onChange={handleChange} placeholder="Take a note..." value={note.content} rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
