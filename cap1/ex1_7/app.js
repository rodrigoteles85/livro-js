const jantar = Number(prompt('Valor do jantar: '))
const taxa = jantar * 0.1
const total = jantar + taxa

alert(
  `Taxa garçom R$${taxa.toFixed(2)}\nTotal do jantar: R$${total.toFixed(2)}`
)
