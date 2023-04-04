import { xataClient } from './xata.client'

type PromiseType<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U
  : never

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export type PageProps = ArrayElement<PromiseType<ReturnType<typeof getPages>>>

export const getPages = async () => {
  const pages = await xataClient.db.pages.getMany()
  // this is an array of objects
  return pages
}
