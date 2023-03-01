import { useEffect, useState } from "react";
import "./App.css";

const API = "https://type.fit/api/quotes";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) =>  res.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      <section>
        <button onClick={getNewQuote} className="btn">
          New Quote
        </button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
        </h3>
        <i className="author">
          - {quote?.author !== null ? quote?.author : "Unknow"}
        </i>
      </section>
    </div>
  );
}

export default App;
