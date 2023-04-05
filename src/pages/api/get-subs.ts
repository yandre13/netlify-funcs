import { getSubscribers } from '@/lib/xata.subscribers'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const subs = await getSubscribers()

  return res.status(200).json({
    subs,
  })
}
