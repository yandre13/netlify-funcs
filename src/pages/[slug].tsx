import { PageProps, getPages } from '@/lib/xata.pages'

export async function getStaticPaths() {
  const res = await getPages()
  const paths = res.map((page) => ({
    params: { slug: page.slug },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await getPages()
  const page = res.find((page) => page.slug === params.slug)
  return {
    props: {
      page,
    },
  }
}

export default function CustomPage({ page }: { page: PageProps }) {
  return (
    <div>
      <h2>{page.title}</h2>
      <br />
      <p>{page.slug}</p>
    </div>
  )
}
