import { xataClient } from './xata.client'

export const getSubscribers = async () => {
  const subscribers = await xataClient.db.subscribers.getMany()
  return subscribers
}
