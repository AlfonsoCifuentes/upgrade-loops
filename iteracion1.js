// Iteración #1: Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (y=0; y<products.length; y++){
    if (products[y].includes("Camiseta") == true){
        console.log (products[y])
    }
}