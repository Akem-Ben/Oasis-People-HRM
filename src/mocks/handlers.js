import { http, HttpResponse } from "msw";

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json({
      data: 'Captured a "GET /posts" request',
    })
  })
]