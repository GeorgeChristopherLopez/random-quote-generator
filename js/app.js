document.body.innerHTML += `
<div class="container">
<div class="quote-container">
<h4 class="quote">"Look at all those chickens..."</h4>
<p class="author">Abraham Lincoln</p>
</div>
<div class="buttons">
<button class="timerON">Start Interval</button>
<button class="showNewBtn">Show another quote</button>
<button class="timerOFF">Stop interval</button>
</div>
</div>
`;

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let showNewBtn = document.querySelector(".showNewBtn");
let timerON = document.querySelector(".timerON");
let timerOFF = document.querySelector(".timerOFF");
let quoteTimer;
let colorTimer;

let colors = ["pink", "blue","red","green","purple","yellow", "orange","indigo"];
let quotes = [
    {
        quote: "Programming isn't about what you know; it's about what you can figure out",
        author: "Chris Pine",
        catergory: "programming"
    },
    {
        quote: "The computer was born to solve problems that did not exist before",
        author: "Bill Gates",
        catergory: "computers"
    },
    {
        quote: "All parts should go together without forcing.  You must remember that the parts you are reassembling were disassembled by you.  Therefore, if you can�t get them together again, there must be a reason.  By all means, do not use a hammer.",
        author: "IBM Manual, 1925",
        catergory: "computers"
    },
    {
        quote: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie",
        catergory: "programming"
    },
    {
        quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
        author: "Joyce Wheeler",
        catergory: "programming"
    },
    {
        quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
        author: "Andrew Hunt",
        catergory: "programming"
    },
    {
        quote: "Testing leads to failure, and failure leads to understanding.",
        author: "Burt Rutan",
        catergory: "programming"
    },
    {
        quote: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs",
        catergory: "programming"
    },
    {
        quote: "The most damaging phrase in the language is.. it's always been done this way",
        author: "Grace Hopper",
        catergory: "programming"
    },
    {
        quote: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
        author: "Bjarne Stroustrup",
        catergory: "programming languages"
    },
    {
        quote: "I wanted to make money so I could buy a better computer to play better video games - nothing like saving the world.",
        author: "Elon Musk",
        catergory: "computers"
    },
    {
        quote: "Part of what made the Macintosh great was that the people working on it were musicians and poets and artists and zoologists and historians who also happened to be the best computer scientists in the world.",
        author: "Steve Jobs",
        catergory: "computers"
    },
        {
        quote: "It should be mandatory that you understand computer science",
        author: "will.i.am",
        catergory: "computers"
    },
    {
        quote: "Ninety percent of video game AI really is pretty damn bad. I think that's actually why it's so much fun to shoot things. Because the AI is so bad and the characters are so annoying.",
        author: "Matthew Perry",
        catergory: "Artifical Intelligence"
    },
    {
        quote: "With artificial intelligence, we are summoning the demon.You know all those stories where there's the guy with the pentagram and the holy water, and he's like, yeah, he's sure he can control the demon? Doesn't work out.",
        author: "Elon Musk",
        catergory: "Artificial intelligence"
    },
    {
        quote: "We're at a point now where we've built AI tools to detect when terrorists are trying to spread content, and 99 percent of the terrorist content that we take down, our systems flag before any human sees them or flags them for us.",
        author: "Mark Zuckerber",
        catergory: "Artifical Intelligence"
    }




];

let randomQuote = () => {
    let rng = Math.floor(Math.random() * quotes.length);
    author.innerHTML = quotes[rng].author;
    quote.innerHTML = quotes[rng].quote;
    quote.innerHTML += quotes[rng].catergory;
};

let randomColor = () => {
    let rng = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[rng];
    };

let timer =() => {
    quoteTimer = setInterval(randomQuote, 3000);
    colorTimer = setInterval(randomColor, 3000);

};
let clearTimer = () => {
    clearInterval(quoteTimer);
    clearInterval(colorTimer);
};


showNewBtn.addEventListener('click', e => {
    randomColor();
    randomQuote();
});

timerON.addEventListener('click', e => {
    timer();
});

timerOFF.addEventListener('click', e => {
    clearTimer();
})

