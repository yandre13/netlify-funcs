// import { Config, Context } from 'https://edge.netlify.com'

// const handler = async (request: Request, context: Context) => {
//   const message = await fetch(
//     'http://localhost:8888/.netlify/functions/hello',
//     {
//       headers: {
//         Accept: 'application/json',
//       },
//     }
//   )

//   const jsonData = await message.json()
//   return new Response(jsonData.message, {
//     headers: {
//       'content-type': 'text/plain;charset=UTF-8',
//     },
//   })
// }
// export default handler

// export const config: Config = {
//   path: '/edge-functions/hello',
// }
