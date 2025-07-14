



// -> Adicionar item ao carrinho
async function addItem(userCart,item){
    userCart.push(item)
}

// -> Calcular total do carrinho
async function calculateTotal(userCart){
    console.log("\nYour cart total is: " );
   const result= userCart.reduce((total,item) => total + item.subtotal(), 0);
   console.log(`$${result}`);
}
// -> Apagar item do carrinho
async function deleteItem(userCart,name){
   const deleteIndex = index - 1;
 if ( index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
 }
}
// -> Remover item do carrinho
async function removeItem(userCart,item) {
    const indexFound = userCart.findIndex((p)=> p.name === item.name);
 
    if (indexFound == -1) {
        console.log("Item not found in the car.");
        return;
    }

    if (userCart[indexFound].quantity > 1){
       userCart[indexFound].quantity -=1;
       return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
        }
 
}

async function displayCart(userCart) {
    console.log("Your cart list")
    userCart.forEach((item ,index) => {
        console.log(` ${index + 1}. ${item.name} - $${item.price} | ${item.quantity}x | Subtotal: $${item.subtotal()}`);
        
    });  
}

async function displayWishList(userCart) {
    console.log("Your WishList")
    userCart.forEach((item ,index) => {
        console.log(` ${index + 1}. ${item.name} - $${item.price}`);
        
    });  
}

export {
    addItem,   
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    displayWishList
}

