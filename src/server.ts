import express from 'express';

const app = express();

/*
    * GET = Buscas
    * POST = Criação
    * PUT = Alteração
    * DELETE = Deletar
    * PATCH = Alterar uma informação específica
*/

app.get('/', (req, res) => {
    // return res.send('Hello, NLW05!')
    return res.json({
        message: 'Hello, NLW05!',
        messageTest: "Hello human!"
    })
})

app.post('/', (req, res) => {
    return res.json({
        message: "Saved User"
    })
})



app.listen(3000, () => console.log(`Server is running on port 3000`));