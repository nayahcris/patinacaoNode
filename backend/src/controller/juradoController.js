const conexao = require('../database/connection');


module.exports = {
    async index(request, response){
        const jurado = await conexao('jurados').select('*');
   
         return response.json(jurado);
    },
    async create(request, response) {
        const {nome, paisDeOrigem, notaPatinador, patinador} = request.body;

    const [id] = await conexao('jurados').insert({
        nome,
        paisDeOrigem,
        notaPatinador,
        patinador,
    });
    return response.json(id);
    }
}