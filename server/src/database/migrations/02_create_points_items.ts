import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('tb_points_items', table => {
    table.increments('id').primary()
    table.integer('point_id').notNullable().references('id').inTable('tb_points')
    table.integer('item_id').notNullable().references('id').inTable('tb_items')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tb_points_items')
}