import { IndividualArticle } from '@/app/modules/individual-article'
import { getArticle } from '@/lib/api'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await getArticle(id)

  return (
    <>
      <IndividualArticle id={id} article={article} />
    </>
  )
}
