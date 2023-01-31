import { useState } from 'react';
import './App.css';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
/****************************
 * Function:
 * When you click on "random" button it generates quotes.
 * when you click on author it shows all the quotes by that author.
 * */

const quotes = [
  {
    id: '1',
    quote: 'The only sin is ignorance',
    source: 'Christopher Marlowe',
  },
  {
    id: '2',
    quote:
      'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
    source: 'Demosthenes',
  },
  {
    id: '3',
    quote:
      'A lie can travel halfway around the world while the truth is putting on its shoes',
    source: 'Mark Twain',
  },
  {
    id: '4',
    quote: 'Books are the liberated spirits of men.',
    source: 'Mark Twain',
  },
  {
    id: '5',
    quote: 'All speech is vain and empty unless it be accompanied by action.',
    source: 'Demosthenes',
  },
  {
    id: '6',
    quote: 'Always obey your parents when they are present.',
    source: 'Mark Twain',
  },
  {
    id: '7',
    quote: 'Who ever loved that loved not at first sight?.',
    source: 'Christopher Marlowe',
  },
];

function App() {
  const [randomQuote, setRandomQuote] = useState(quotes[0].quote);
  const [randomQuoteAuthor, setRandomQuoteAuthor] = useState(quotes[0].source);
  const [authorAllQuotes, setAuthorAllQuotes] = useState(false);

  const randomQuoteGenerator = () => {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(random.quote);
    setRandomQuote(random.quote);
    setRandomQuoteAuthor(random.source);
  };
  const setAuthorQuotesEnable = () => {
    setAuthorAllQuotes(true);
  };
  const setAuthorQuotesDisable = () => {
    setAuthorAllQuotes(false);
  };
  return (
    <div className="App">
      {!authorAllQuotes && (
        <div>
          <button className="random-button" onClick={randomQuoteGenerator}>
            random{' '}
            <div className="icon-refresh">
              <HiOutlineRefresh />
            </div>
          </button>
          <div className="quote-text">
            <p>{randomQuote}</p>
          </div>

          <button className="author-button" onClick={setAuthorQuotesEnable}>
            <p>
              {randomQuoteAuthor}
              <div className="span-icon-right">
                <FaArrowRight />
              </div>
            </p>
          </button>
        </div>
      )}
      {authorAllQuotes && (
        <button className="author-button" onClick={setAuthorQuotesDisable}>
          <div className="span-icon-left">
            <FaArrowLeft />
          </div>
          {randomQuoteAuthor}
        </button>
      )}

      {authorAllQuotes &&
        quotes
          .filter((quote) => quote.source === randomQuoteAuthor)
          .map((filteredquote, index) => (
            <li key={index}>
              <div className="quote-text">
                <p>{filteredquote.quote}</p>
              </div>
            </li>
          ))}
    </div>
  );
}

export default App;
