import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('tb_points', table => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('latitude').notNullable()
    table.string('lontitude').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tb_points')
}