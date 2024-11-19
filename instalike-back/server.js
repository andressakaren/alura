import express from 'express';

const posts = [
    // um ojeto, q é um item dessa lista. Mock - ainda sao dados locais. arrey em memoria. 
    // cada pedido precisa de um registro, tipo um Identificador
    {
        id: 1,
        descicao: 'Um foto teste',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 2,
        descricao: 'Paisagem montanhosa',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 3,
        descricao: 'Cachorro brincando',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id:4,
        descricao: 'Comida deliciosa',
        imagem: 'https://placecats.com/millie/300/150',
    },
];

const app = express();
// vc vai devolver em json, converter a estrutura em json
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

// parametro q estamos recebendo. parametro da requisição.
app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

// criando uma interface. dados aqui com o front.
// cliente e servidor. usar só as informações q precisa

// mongodb - banco de dados. baseado em documentos. utilizar um recurso de nuvem. 