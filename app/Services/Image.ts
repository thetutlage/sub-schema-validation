import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ImageService {
  constructor(private ctx: HttpContextContract) {}

  private async validate() {
    await this.ctx.request.validate({
      schema: schema.create({
        template: schema.object().members({
          src: schema.string({ trim: true }, [rules.url()]),
        }),
      }),
    })
  }

  public async handle() {
    await this.validate()
    // perform image related tasks
  }
}
