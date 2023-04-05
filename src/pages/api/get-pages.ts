import { getPages } from '@/lib/xata.pages'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pages = await getPages()

  return res.status(200).json({
    pages,
  })
}
