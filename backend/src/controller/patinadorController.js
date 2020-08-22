const conexao = require('../database/connection');
const { update } = require('../database/connection');


module.exports = {
    async index(request, response){
        const patinadores = await conexao('patinadores').select('*');
   
       return response.json(patinadores);
    },
    async create(request, response) {
        const {nome, paisDeOrigem, mediaNotas} = request.body;

    const [id] = await conexao('patinadores').insert({
        nome,
        paisDeOrigem,
        mediaNotas,
    });
    return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
         await conexao('patinadores').where('id', id).delete();
 
         return response.status(204).send();
    },
    async update(request, response) {
        const {id} = request.params;
        const {nome, paisDeOrigem, mediaNotas} = request.body;

        await conexao('patinadores').where('id', id).update({
        nome,
        paisDeOrigem,
        mediaNotas,
    });
    return response.status(204).send();
    }
}