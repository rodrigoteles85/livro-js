const preco = Number(prompt('Preço: R$'))
const valorVista = preco * 0.1 + preco
const valorPrazo = preco / 3

console.log(`Preço: R$${preco.toFixed(2)}`)
console.log(`À vista R$:${valorVista.toFixed(2)}`)
console.log(`Ou 3x de R$:${valorPrazo.toFixed(2)}`)
