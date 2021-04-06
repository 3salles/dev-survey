import { HttpResponse } from "./http-response";

export type HttpPostParams<T> = {
  url: string
  body?: object
}

export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
