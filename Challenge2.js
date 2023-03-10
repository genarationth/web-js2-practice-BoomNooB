// ### Challenge 2: Create an information card

// Create a card holding 3 pieces of information about a person, such as Name, Location, and Hobby.<br>
// Each piece of information should be a variable.<br>
// Display the card with the information in the correct place.<br>
// Example: “Hi, my name is John. I live in South Africa and enjoy drinking homemade wine.”<br>

const infoCard = (name, location,hobby) => {
    return `Hi, my name is ${name}. I live in ${location} and enjoy ${hobby}.`;
};

console.log(infoCard('Boom','Thailand','Drinking crafted beer'));