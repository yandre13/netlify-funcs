import { getSubscribers } from '@/lib/xata.subscribers'
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const subs = await getSubscribers()

  return {
    statusCode: 200,
    body: JSON.stringify({
      subs,
    }),
  }
}

export { handler }
