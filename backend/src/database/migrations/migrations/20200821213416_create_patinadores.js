
exports.up = function(knex) {
    return knex.schema.createTable('patinadores', function (table){
        table.increments();
        table.string('nome').notNullable();
        table.string('paisDeOrigem').notNullable();
        table.decimal('mediaNotas').notNullable();
      });
};

exports.down = function(knex) {
    knex.schema.dropTable('patinadores');
};
