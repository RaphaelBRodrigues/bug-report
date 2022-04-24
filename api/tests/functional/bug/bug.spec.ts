import { Group, test } from '@japa/runner'

test.group('Testing Bug Routes', async () => {
  test('Should save a new bug', async ({ client }) => {
    const payload = {
      name: 'Bug on saving a new client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      images: ['https://images.com/1'],
    }

    const response = await client.post('/bug').json(payload).send()

    response.assertStatus(201)
    response.assertBody({
      id: 1,
      resourceUrl: `https://${process.env.HOST}/bug/1`,
      bugName: payload.name,
    })
  })

  // test("it should not save a new bug", () => {

  // })
})
