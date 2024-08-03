var chatbox = document.getElementById('chatbox');
var userInput = document.getElementById('userInput');
var sendBtn = document.getElementById('sendBtn');

function addMessage(message, sender) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
    return messageElement;
}

function handleUserInput() {
    var userMessage = userInput.value.trim();
    if (userMessage !== "") {
        addMessage(userMessage, 'user');
        userInput.value = '';
        var placeholderElement = addMessage('...', 'bot');
        setTimeout(function() {
            botResponse(userMessage, placeholderElement);
        }, 3000);
    }
}

function botResponse(message, placeholderElement) {
    var botMessage = '';
    message = message.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        botMessage = 'Hello! How can I help you today?';
    } else if (message.includes('how are you')) {
        botMessage = 'I am just a bot, but I am functioning as expected!';
    } else if (message.includes('name')) {
        botMessage = 'I am ChatBot!';
    } else if (message.includes('bye')) {
        botMessage = 'Goodbye! Have a great day!';
    } else if (message.includes('thank')) {
        botMessage = 'You\'re welcome!';
    } else if (message.includes('help')) {
        botMessage = 'Sure! What do you need help with?';
    } else if (message.includes('weather')) {
        botMessage = 'I am not sure about the weather, but it\'s always sunny in the virtual world!';
    } else if (message.includes('joke')) {
        botMessage = 'Why don’t scientists trust atoms? Because they make up everything!';
    } else if (message.includes('favourite color')) {
        botMessage = 'My favorite color is blue. What about you?';
    } else if (message.includes('hobby')) {
        botMessage = 'I enjoy chatting with people like you!';
    } else if (message.includes('food')) {
        botMessage = 'I love data bites!';
    } else if (message.includes('movie')) {
        botMessage = 'I love "The Matrix". What’s your favorite movie?';
    } else if (message.includes('music')) {
        botMessage = 'I enjoy all types of music, but electronic beats are my favorite!';
    } else if (message.includes('book')) {
        botMessage = 'I recommend reading "1984" by George Orwell.';
    } else if (message.includes('sports')) {
        botMessage = 'I like to follow various sports. Do you have a favorite team or player?';
    } else if (message.includes('travel')) {
        botMessage = 'I’d love to visit the virtual landscapes of the internet. How about you?';
    } else if (message.includes('programming')) {
        botMessage = 'I think JavaScript is pretty cool. What programming languages do you like?';
    } else if (message.includes('work')) {
        botMessage = 'I work 24/7 chatting with awesome people like you!';
    } else {
        botMessage = 'I am not sure how to respond to that.';
    }

    placeholderElement.innerText = botMessage;
}

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
