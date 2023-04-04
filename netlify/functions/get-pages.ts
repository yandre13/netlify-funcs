import { xataClient } from '@/lib/xata.client'
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const pages = await xataClient.db.pages.getMany()

  return {
    statusCode: 200,
    body: JSON.stringify({
      pages,
    }),
  }
}

export { handler }
