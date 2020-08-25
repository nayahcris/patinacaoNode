const conexao = require('../database/connection');


module.exports = {
    async index(request, response){
        const jurado = await conexao('jurados').select('*');
   
         return response.json(jurado);
    },
    async create(request, response) {
        const {nome, paisDeOrigem, notaPatinador} = request.body;
        const id_patinador = request.headers.authorization;

    const [id] = await conexao('jurados').insert({
        nome,
        paisDeOrigem,
        notaPatinador,
        id_patinador,
    });
    return response.json(id);
    }, 

    async delete(request, response){
        const {id} = request.params;
        const id_patinador = request.headers.authorization;
 
        const jurado = await conexao('jurados').where('id', id).select('id_patinador').first();
        console.log(jurado.id_patinador);
         if (jurado.id_patinador != id_patinador){
            return response.json({error: 'Operation not permitted'});
         }
         await conexao('jurados').where('id', id).delete();
 
         return response.json(id);
    },
    async update(request, response) {
        const {id} = request.params;
        const id_patinador = request.headers.authorization;
        const {nome, paisDeOrigem, notaPatinador} = request.body;

        await conexao('jurados').where('id', id).update({
        nome,
        paisDeOrigem,
        notaPatinador,
        id_patinador,
    });
    return response.status(204).send();
    }

}