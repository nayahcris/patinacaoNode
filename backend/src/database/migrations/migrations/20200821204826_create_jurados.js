
exports.up = function(knex) {
    return knex.schema.createTable('jurados', function (table){
        table.increments();
        table.string('nome').notNullable();
        table.string('paisDeOrigem').notNullable();
        table.decimal('notaPatinador').notNullable();
        table.string('patinador').notNullable();

        table.foreign('patinador').references('id').inTable('patinadores');
      });
};

exports.down = function(knex) {
    knex.schema.dropTable('jurados');
};
