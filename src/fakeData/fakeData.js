const fakeData = [
    
{   id: 1, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/wJYL4v1/breakfast1.png',
    price: 6.99
},
{   id: 2, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/b2qrykY/breakfast2.png',
    price: 9.99
},
{   id: 3, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/Cw9x2Fy/breakfast3.png',
    price: 7.99
},
{   id: 4, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/b2qrykY/breakfast2.png',
    price: 6.99
},
{   id: 5, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 11.99
},
{   id: 6, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Breakfast',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 8.99
},
{   id: 7, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 10.99
},
{   id: 8, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/2s8nqsS/lunch2.png',
    price: 6.99
},
{   id: 9, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 10, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 11, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 12, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Lunch',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 13, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 14, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 15, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/gTXyGC0/dinner3.png',
    price: 6.99
},
{   id: 16, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 17, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/SJswMfk/breakfast5.png',
    price: 6.99
},
{   id: 18, 
    name: 'Bagel and cream cheese', 
    brief: 'How we dream about our future',
    category: 'Dinner',
    description: 'There are many ways to describe food. How is the taste of a lemon different from a roast? What is the difference between spicy and hot? Here is a list of common adjectives to describe food with example sentences.',
    img:'https://i.ibb.co/wz1LkR9/dinner6.png',
    price: 6.99
},
]

export default fakeData;