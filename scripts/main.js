const quotes = [
  {
    author: "Douglas Adams",
    quote:
      "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
  },
  {
    author: "Robert Frost",
    quote:
      "Two roads diverged in a wood, and I-I took the one less traveled by, and that has made all the difference.",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "Failure is the condiment that gives success its flavor.",
    author: "Truman Capote",
  },
];

const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const tweetButton = document.querySelector("#tweet-quote");

function getNewQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomNum];

  quoteText.innerHTML = quote.quote;
  quoteAuthor.innerHTML = `- ${quote.author}`;

  const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
    '"' + quote.quote + '" ' + quoteAuthor
  )}`;
  tweetButton.setAttribute("href", tweet);
}

window.addEventListener("load", (event) => {
  getNewQuote();
});

newQuoteButton.addEventListener("click", (event) => {
  getNewQuote();
});
