// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;}
// // Library array to store books
// const library = [];
// // Function to add a book to the library
// function addBook(book) {
//     library.push(book);}
// // Function to list all books in the library using a 'for...of' loop
// function listBooks() {
//     console.log("Listing original books:");
//     let count = 1;
//     for (const book of library) {
//         console.log(`book ${count++}: ${book.title}, by ${book.author}, published in ${book.year}`);
//     }}
// // Test case: Add books to the library
// addBook(new Book("1984", "George Orwell", 1949));
// addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
// addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
// // List all the books in the library
// listBooks();
// // Clone a book using Object.assign() and modify the clone
// let clonedBook = Object.assign({}, library[1]);  // Cloning "The Hobbit"
// clonedBook.title = "The Lord of the Rings";      // Modify the title of the clone
// // Display the cloned and modified book
// console.log("Cloned and modified book:");
// console.log(`${clonedBook.title}, by ${clonedBook.author}, published in ${clonedBook.year}`);

const { add, property } = require("lodash");





// function createItem(name, price, quantity) {
//     return {
//         name: name,
//         price: price,
//         quantity: quantity    };}
// // Array to store items in the cart
// const cart = [];
// // Function to add an item to the cart
// function addItem(item) {
//     cart.push(item);}
// // Function to list all items using 'for...in' loop
// function listItems() {
//     console.log("Item details:");
//     for (const item of cart) {
//         for (const property in item) {
//             console.log(`${property}: ${item[property]}`);
//         }
//         console.log("");  // Add an empty line between items for better readability
//           }}
// // Function to calculate total cost using 'for...of' loop
// function calculateTotal() {
//     let total = 0;
//     for (const item of cart) {
//         total += item.price * item.quantity;}
//     console.log(`Total cost of items in the cart: ${total}`);}
// // Test case: Add items to the cart and display them
// addItem(createItem("Laptop", 1200, 1));
// addItem(createItem("Phone", 800, 2));
// // List all items in the cart
// listItems();
// // Calculate and display total cost
// calculateTotal();






// function Book(title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }
// const library=[]
// function addBook(book){
//     library.push(book)
// }
//  function listBooks(){
//     console.log("Listing Original Books")
//     let count=1
//      for(const book of library){
//         console.log(`book ${count++}: ${book.title}, by ${book.author}, published in ${book.year} `)
//      }
//  }

//  addBook(new Book("1984", "George Orwell", 1949))
//  addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937))
//  addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960))

//  listBooks();
//  let  clonedBook=Object.assign({},library[1])
//    clonedBook.title="The Lord of the Rings";

//    console.log("Cloned and modified book:")
//    console.log(`${clonedBook.title} ,by ${clonedBook.author} ,published in ${clonedBook.year}`)


// Constructor function to create 'Book' objects
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Library array to store books
// const library = [];

// // Function to add a book to the library
// function addBook(book) {
//     library.push(book);
// }

// // Function to list all books in the library using a 'for...of' loop
// function listBooks() {
//     console.log("Listing original books:");
//     let count = 1;
//     for (const book of library) {
//         console.log(`book ${count++}: ${book.title}, by ${book.author}, published in ${book.year}`);
//     }
// }

// // Test case: Add books to the library
// addBook(new Book("1984", "George Orwell", 1949));
// addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
// addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

// // List all the books in the library
// listBooks();

// // Clone a book using Object.assign() and modify the clone
// let clonedBook = Object.assign({}, library[1]);  // Cloning "The Hobbit"
// clonedBook.title = "The Lord of the Rings";      // Modify the title of the clone

// // Display the cloned and modified book
// console.log("Cloned and modified book:");
// console.log(`${clonedBook.title}, by ${clonedBook.author}, published in ${clonedBook.year}`);




// function Book(title,author,year){
//       this.title=title;
//       this.author=author;
//       this.year=year
// }
// library=[]
// function addBook(book){
//     library.push(book)
// }
//  function listBooks(){
//     console.log("listing original books")
//      let count=1
//      for(const book of library){
//         console.log(`book ${count++}: ${book.title} by ${book.author} published in ${book.year}`)
//      }

//  }
//   addBook(new Book("1984", "George Orwell", 1949))
//   addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937))
//   addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960))

//   listBooks()
//   let clonedBook=Object.assign({},library[1])
//    clonedBook.title="The Lord of the Rings"
//     console.log("Cloned and modified book")
//     console.log(` ${clonedBook.title} by ${clonedBook.author} published in ${clonedBook.year}`)



 function createItem(name,price,quantity){
    return{
    name,
    price,
    quantity}
 }
 const cart=[]
  function addItem(item){
    cart.push(item)
  }
   function listItems(){
    console.log("Item Details")
    for(const item of cart){
        for(const property in item)
        console.log(`${property}: ${item[property]}`)
    } 
    console.log("")
   }
   function calculateTotal(){
    let total=0
    for(const item of cart){
        total+=item.price*item.quantity
    }
    console.log(`total cost of item in the cart is ${total}`)
   }
   addItem(createItem("Laptop", 1200, 1))
   addItem(createItem("Phone", 800, 2))
   listItems();
   calculateTotal();



















