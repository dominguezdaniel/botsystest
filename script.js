// Get elements from the HTML document
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const messageArea = document.querySelector("#messageArea");

// Function to send user message to the backend and get a response
async function sendMessage(message) {
    try {
        // Send a POST request to the backend API
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        // Parse the response
        const data = await response.json();
        
        // Return the AI response from the API
        return data.reply;
    } catch (error) {
        console.error('Error sending message:', error);
        return "I'm having trouble connecting right now. Please try again.";
    }
}

// Function to add a message bubble to the chat area
function addMessageToChat(message, messageType) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(messageType);
    messageDiv.textContent = message;
    messageArea.appendChild(messageDiv);
    messageArea.scrollTop = messageArea.scrollHeight; // Auto-scroll to the bottom
}

// Event listener for submitting the chat form
chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();  // Prevent form from refreshing the page
    
    const userMessage = chatInput.value;
    if (!userMessage) return;  // Exit if input is empty
    
    // Add user's message to the chat area
    addMessageToChat(userMessage, "user-message");

    // Clear the input field after sending
    chatInput.value = "";

    // Get the AI response and display it
    const aiMessage = await sendMessage(userMessage);
    addMessageToChat(aiMessage, "bot-message");
});
