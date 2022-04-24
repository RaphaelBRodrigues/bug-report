import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Bug extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public images: string

  @column()
  public name: string

  @column()
  public description: string

  // @beforeSave()
  // public static async stringifyImages(bug: Bug) {
  //   if (bug.images) {
  //     bug.images = JSON.stringify(bug.images)
  //   }
  // }
}
