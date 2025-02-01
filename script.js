const quotes = [
    {qt:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do."},
    {qt:"Dreams don’t work unless you do."},
    {qt: "Small disciplines repeated with consistency every day lead to great achievements over time."},
    {qt:"Do not whine... Do not complain. Work harder. Spend more time alone."},
    {qt:"Programs must be written for people to read, and only incidentally for machines to execute."},
    {qt: "Success doesn’t come from what you do occasionally, it comes from what you do consistently."},
    {qt: "First, solve the problem. Then, write the code."},
    {qt:"Simplicity is the soul of efficiency."},
    {qt: "The secret of your future is hidden in your daily routine."},
    {qt: "The best error message is the one that never shows up."},
    {qt: "Programming isn't about what you know; it's about what you can figure out."},
    {qt: "Code is like humor. When you have to explain it, it’s bad."},
    {qt: "The best thing about a boolean is even if you are wrong, you are only off by a bit."},
    {qt: "Controlling complexity is the essence of computer programming."},
    {qt: "Code is the poetry of a machine age, where every line tells a story of logic and imagination."},
    {qt: "The beauty of programming lies in the elegant dance of logic and creativity"},
    {qt: "A coders's journey is a novel of challenges, with syntax as the language of truimph."},
    {qt: "Coding is like planting seeds. With time and effort, you'll see amazing things grow."},
    {qt: "Every bug you fix is a victory. Keep going, you're doing great!"},
    {qt: "Hardwork today brings success tomorrow."},
    {qt: "Risking is better than regrating."},
    {qt: "Be the best version of yourself."},
    {qt: "If you will never try, you will never know"},
    {qt: "Reset, Refocus, Readjust, As many times as you need to. Just nerver give up!"},
    {qt: "Motivation gets you started, but consistency keeps you going."}
];

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length); //quotes.length refers to the total number of quotes in the quotes array. 
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${quote.qt}"`; //quote.qt refers to an object selected from the quotes array.

}
const quotebtn = document.getElementById("quotebtn");
quotebtn.addEventListener("click", () => {
    generateQuote();
});


