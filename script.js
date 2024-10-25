// Elements and constants
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatContainer = document.querySelector("#chatContainer");
const chatToggle = document.querySelector("#chatToggle");
const messageArea = document.querySelector("#messageArea");

// Toggle chat visibility
chatToggle.addEventListener("click", () => {
    chatContainer.style.display = chatContainer.style.display === 'none' || !chatContainer.style.display ? 'flex' : 'none';
});

// Event listener for form submit
chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const userMessage = chatInput.value;
    if (!userMessage) return;

    // Display user message in chat
    addMessageToChat(userMessage, "user-message");

    // Clear the input field
    chatInput.value = "";

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
        const aiMessage = "Sorry, I couldn't find any information in the documentation about that. Expect answer to be less accurate.";
        addMessageToChat(aiMessage, "bot-message");
    }, 1000);
});

// Function to add messages to chat container with bubble styling
function addMessageToChat(message, messageType) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(messageType);

    // Display the message without sender labels
    messageDiv.innerHTML = `${message}`;
    
    messageArea.appendChild(messageDiv);
    messageArea.scrollTop = messageArea.scrollHeight; // Scroll to the bottom
}
