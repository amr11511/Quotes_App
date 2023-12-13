
var quotes = [
    {
        quote:"“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.”",
        author: "--Albus Dumbledore"
    },
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author: "--Oscar Wilde"
    },
    {
        quote: "“It is impossible to manufacture or imitate love”",
        author: "--Horace Slughorn"
    },
    {
        quote: "“Every human life is worth the same, and worth saving.”",
        author: "--Kingsley Shacklebolt"
    },
    {
        quote: "“Have a biscuit, Potter.”",
        author: "--Minerva McGonagall"
    },
    {
        quote: "“Happiness can be found even in the darkest of times, if one only remembers to turn on the light.”",
        author: "--Marilyn Monroe"
    },
    {
        quote: "“Socks are Dobbys favorite, favorite clothes, sir!”",
        author: "--Dobby"
    }
]
function displayQuot(){
    var arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("qouts").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}
