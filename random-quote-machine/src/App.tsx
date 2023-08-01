import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
} 

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return "rgb(${red}, ${green}, ${blue}";
};

const transition = "all 1s";


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
  <div className="background" style={{ backgroundColor: randomColor, minHeight: "100vh", transition }}>
    <div id="quote-box">
      <div className="quote-content" style={{color: randomColor, transition }}>
        <h2 id="text">
        <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          {quote.quote}
        <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a 
        href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.%22%20Zig%20Ziglar"}
        id="tweet-quote"
        style={{
          backgroundColor: "#1DA1F2",
          marginRight: "10px",
          transition,
        }}
        >
          <FaTwitter color="white" />
        </a>
        <button 
        id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>
          change Quote
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
