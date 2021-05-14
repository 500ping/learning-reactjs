import React, {useState} from "react";

function App() {
    const [, setTime] = useState(0);
    let currentTime = new Date().toLocaleTimeString();

    function getCurrentTime() {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    };
    
    setInterval(getCurrentTime, 1000);

    return (
        <div className="container">
            <h1>{currentTime}</h1>
        </div>
    );
};

export default App;
