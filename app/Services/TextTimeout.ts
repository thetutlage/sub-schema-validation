import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TextTimeoutService {
  constructor(private ctx: HttpContextContract) {}

  private async validate() {
    await this.ctx.request.validate({
      schema: schema.create({
        template: schema.object().members({
          timeout: schema.number(),
        }),
      }),
    })
  }

  public async handle() {
    await this.validate()
    // perform timeout related tasks
  }
}
