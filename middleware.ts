import { flags } from './src/utils/flags'
import type { NextRequest } from 'next/server'
import { MiddlewareRequest } from '@netlify/next'

export async function middleware(nextRequest: NextRequest) {
  // @ts-ignore
  const request = new MiddlewareRequest(nextRequest)
  const response = await request.next()

  const path = nextRequest.nextUrl.pathname

  if (path === '/') {
    const title = `Hi from ${nextRequest?.geo?.city},  ${
      // flags is an array of objects with a name and a value
      flags.find((flag) => flag.name === nextRequest?.geo?.country)?.emoji ||
      nextRequest?.geo?.country
    }.`
    response.replaceText('h1', title)
    response.setPageProp('title', title)
    return response
  }
  return response
}
