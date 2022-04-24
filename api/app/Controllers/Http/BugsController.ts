import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bug from 'App/Models/Bug'
import StoreBugValidator from 'App/Validators/StoreBugValidator'

export default class BugsController {
  public async store({ request, response }: HttpContextContract) {
    const { description, images, name } = await request.validate(StoreBugValidator)

    const result = await Bug.create({
      description,
      images: JSON.stringify(images),
      name,
    })
    console.log(result)

    return response.created({
      id: 1,
      resourceUrl: `https://${process.env.HOST}/bug/1`,
      bugName: name,
    })
  }
}
