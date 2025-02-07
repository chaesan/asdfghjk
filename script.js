const messages = [
    "Are you suree?  ",
    "Oh dimo sureee??  ",
    "sure na sure na talaga?  ",
    "Please pooooo...  ",
    "Just think about it!",
    "If you say no, I will be really sad   ",
    "I will be very sad... ",
    "Look oh im sad na :(  ",
    "Ok fine, I will stop asking   ",
    "Just kidding, say yes please! ❤️ "
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Set the message text
    noButton.textContent = messages[messageIndex];
    
    // Create an img tag to display the GIF
    const gif = document.createElement('img');
    gif.src = 'https://media1.tenor.com/m/uF5vrR9-ui4AAAAd/hanni-hanni-pham.gif';
    gif.alt = 'https://media.tenor.com/JGF5p6FthDIAAAAj/newjeans.gif';  // Optional alt text for accessibility
    gif.style.width = '40px';  // Adjust the size of the GIF
    gif.style.height = 'auto';
    
    // Append the GIF next to the text on the noButton
    noButton.appendChild(gif);
    
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
