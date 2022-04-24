import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bugs extends BaseSchema {
  protected tableName = 'bugs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('images')
      table.string('name').notNullable()
      table.string('description').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
