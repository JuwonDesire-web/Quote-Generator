// Array of 30+ motivational quotes from Nigerian and USA motivational speakers
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs (USA)"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill (USA)"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Tony Robbins (USA)"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Les Brown (USA)"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Roy T. Bennett (USA)"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Denzel Washington (USA)"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Grant Cardone (USA)"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Eric Thomas (USA)"
    },
    {
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "David Goggins (USA)"
    },
    {
        text: "Wake up with determination. Go to bed with satisfaction.",
        author: "Mel Robbins (USA)"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean McCabe (USA)"
    },
    {
        text: "Little things make big days.",
        author: "John C. Maxwell (USA)"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela (South Africa/USA)"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain (USA)"
    },
    {
        text: "Don't wait for opportunity. Create it.",
        author: "George Bernard Shaw (USA)"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb (USA)"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis (USA)"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins (USA)"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein (USA)"
    },
    {
        text: "Your attitude determines your direction.",
        author: "Zig Ziglar (USA)"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill (USA)"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt (USA)"
    },
    {
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar (USA)"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt (USA)"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney (USA)"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers (USA)"
    },
    {
        text: "You learn more from failure than from success. Don't let it stop you.",
        author: "Richard Branson (UK/USA)"
    },
    {
        text: "If you want to fly, give up everything that weighs you down.",
        author: "Buddha (USA)"
    },
    {
        text: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson (USA)"
    },
    {
        text: "Your only limit is your mind.",
        author: "Napoleon Hill (USA)"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett (USA)"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson (USA)"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll (USA)"
    },
    {
        text: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg (USA)"
    },
    {
        text: "Your life does not get better by chance, it gets better by change.",
        author: "Jim Rohn (USA)"
    },
    {
        text: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston (USA)"
    },
    {
        text: "The only way to predict the future is to create it.",
        author: "Peter Drucker (USA)"
    },
    {
        text: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou (USA)"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu (USA)"
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett (USA)"
    },
    {
        text: "It's not about ideas. It's about making ideas happen.",
        author: "Scott Belsky (USA)"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln (USA)"
    },
    {
        text: "Your potential is endless. Go do what you were created to do.",
        author: "Joel Osteen (USA)"
    },
    {
        text: "The only thing standing between you and your goal is the story you keep telling yourself.",
        author: "Jordan Belfort (USA)"
    },
    {
        text: "You are the master of your destiny. You can influence, direct and control your own environment.",
        author: "Napoleon Hill (USA)"
    },
    {
        text: "Success is a state of mind. If you want success, start thinking of yourself as a success.",
        author: "Joyce Brothers (USA)"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt (USA)"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy (USA)"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi (India/USA)"
    },
    {
        text: "Believe in yourself! Have faith in your abilities!",
        author: "Norman Vincent Peale (USA)"
    }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Add fade-out effect
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
        
        // Add fade-in effect
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

// Event listener for the button
newQuoteBtn.addEventListener('click', generateRandomQuote);

// Generate initial quote on page load
document.addEventListener('DOMContentLoaded', () => {
    generateRandomQuote();
});

// Add keyboard support (spacebar or enter to generate new quote)
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        generateRandomQuote();
    }
});
