import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";

function App() {
    const [quote, setQuote] = useState({
        anime: null,
        character: null,
        quote: null
    });

    useEffect(() => {
        async function fetchQuote() {
            await fetch("https://animechan.vercel.app/api/random")
            .then(response => response.json())
            .then(quote => setQuote(quote))
        }
        fetchQuote();
    }, [])

    const generateNewQuote = () => {
        async function fetchQuote() {
            const response = await fetch("https://animechan.vercel.app/api/random");
            const json = await response.json();
            setQuote(json);
        }
        fetchQuote();
    }

    return (
        <div className="App">
            <Quote anime={quote?.anime} character={quote?.character} quote={quote?.quote} />
            <button onClick={generateNewQuote}>Generate new quote</button>
        </div>
    );
}

export default App;
