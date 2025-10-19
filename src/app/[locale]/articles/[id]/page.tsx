import { IndividualArticle } from '@/app/modules/individual-article'
import { getArticle } from '@/lib/api'

export default async function BlogPostPage({
  params,
}: {
  params: { id: string }
}) {
  const article = await getArticle(params.id)

  return (
    <>
      <IndividualArticle id={params.id} article={article} />
    </>
  )
}
