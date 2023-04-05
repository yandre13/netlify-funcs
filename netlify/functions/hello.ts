import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const message = await fetch(
    'http://localhost:8888/.netlify/functions/hello',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )
  const jsonData = await message.json()
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: jsonData.message,
    }),
  }
}

export { handler }
