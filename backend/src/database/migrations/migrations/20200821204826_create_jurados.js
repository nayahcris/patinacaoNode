
exports.up = function(knex) {
    return knex.schema.createTable('jurados', function (table){
        table.increments();
        table.string('nome').notNullable();
        table.string('paisDeOrigem').notNullable();
        table.decimal('notaPatinador').notNullable();
        table.decimal('id_patinador').notNullable();

        table.foreign('id_patinador').references('id').inTable('patinadores');
      });
};

exports.down = function(knex) {
    knex.schema.dropTable('jurados');
};
