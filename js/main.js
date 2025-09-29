/***********************      Start Method To generate Roundom number the get the quote from array      ***********************/
function GenerateQuote() {
  GenerateRandomNumber();
  document.getElementById("newQuote").innerHTML = quoteList[number].Quote;
  document.getElementById("newAuther").innerHTML = quoteList[number].Auther;
}
/***********************      Start Method To generate Roundom number the get the quote from array      ***********************/

/***********************       Start Method Generate Roundom Number (0-10) and avoid doublicate number twice      ***********************/
var number;
function GenerateRandomNumber() {
  var newNumber;
  do {
    newNumber = Math.round(Math.random() * 10);
  } while (newNumber === number);
  number = newNumber;
  return number;
}
/***********************        End Method Generate Roundom Number (0-10) and avoid doublicate number twice      ***********************/

/***********************      Start quote array of Object       ***********************/
var quoteList = [
  {
    Quote: "Be yourself; everyone else is already taken.",
    Auther: "Oscar Wilde",
  },
  {
    Quote: "So many books, so little time.",
    Auther: "Frank Zappa",
  },
  {
    Quote:
      "Two things are infinite: the universe and human stupidity;\n and I'm not sure about the universe.",
    Auther: "Albert Einstein",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Auther: "Marcus Tullius Cicero",
  },
  {
    Quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    Auther: "Dr. Seuss",
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Auther: "Mae West",
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    Auther: "Mahatma Gandhi",
  },
  {
    Quote: "If you tell the truth, you don't have to remember anything.",
    Auther: "Mark Twain",
  },
  {
    Quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    Auther: "Oscar Wilde",
  },
  {
    Quote:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    Auther: "William Shakespeare",
  },
  {
    Quote: "Life is what happens to us while we are making other plans.",
    Auther: "Allen Saunders",
  },
];
/***********************       End quote array of Object        ***********************/
