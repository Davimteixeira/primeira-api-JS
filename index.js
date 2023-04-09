const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas
app.post('/createitem', (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const flavor = req.body.flavor

    if (!name) {
        res.status(422).json({ message: 'O campo nome é obrigatório' })
    }

    if (!price) {
        res.status(422).json({ message: 'O campo preço é obrigatório' })
    }

    if (!flavor) {
        res.status(422).json({ message: 'O campo sabor é obrigatório' })
    }



    console.log(`produto:${name} / preço: ${price} / sabor: ${flavor}`)

    res.status(201).json({message: `o produto ${name}, o preço ${price} e o sabor ${flavor} foram adicionados com SUCESSO.`})
})

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Minha Primeira API do Back-end' })
})

app.listen(3000)