import React from "react";
import "./App.css";
import pic from "../Fishhh.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript ft NATHAN CHEN Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img src={pic} width="100" height="50" />
        </div>
    );
}

export default App;
