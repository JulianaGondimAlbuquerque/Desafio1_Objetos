const Cart = require('./cart.json')
//  console.log(Cart);

// 1. calcular a quantidade de produtos no objeto cart.
// 2. somar o valor total do cart.
// 3. imprimir o nome de cada produto no cart.

let qtd = 0;
let valorTotalCart=0;
let valorTotal =(value)=> Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(value);
let array = Cart.items;
let novoArray =[];



function mapCart(){
    let mapCart = array.map((sapato, index)=>{
        let multiplica = sapato.quantity*sapato.price;
        valorTotalCart+= multiplica;

        let objeto = {titulo: sapato.title, quantidade: sapato.quantity};
        novoArray.push(objeto);

        qtd += sapato.quantity;
    
        console.log(`Produto ${index+1} - ${sapato.title}`)
    });

    console.log(`Há ${qtd} produtos dentro do meu carrinho, ${novoArray[0].quantidade} ${novoArray[0].titulo} e ${novoArray[1].quantidade} ${novoArray[1].titulo}.`)
    console.log(`O valor total da minha compra é ${valorTotal(valorTotalCart)}.`);   
}

mapCart();