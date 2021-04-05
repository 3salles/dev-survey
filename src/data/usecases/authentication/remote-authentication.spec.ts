import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutentication } from "./remote-authentication"

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
