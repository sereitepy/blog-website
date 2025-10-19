'use client'

import { Button } from '@/components/ui/button'
import { deleteArticle } from '@/lib/actions'
import { TrashIcon } from '@phosphor-icons/react/ssr'
import { useTransition } from 'react'

export default function DeleteArticle({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()
  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      startTransition(async () => {
        await deleteArticle(id)
      })
    }
  }
  return (
    <Button variant='outline' size='icon' onClick={handleDelete} disabled={isPending}>
      {isPending ? (
        'Deleting...'
      ) : (
          <TrashIcon size={10} color='#fa004b' weight='duotone' />
      )}
    </Button>
  )
}
