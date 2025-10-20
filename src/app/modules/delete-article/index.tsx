'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { deleteArticle } from '@/lib/actions'
import { TrashIcon } from '@phosphor-icons/react/ssr'
import { useTransition } from 'react'

export default function DeleteArticle({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()
  const handleDelete = () => {
    startTransition(async () => {
      await deleteArticle(id)
    })
  }
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <ButtonIconOutline />
        </DialogTrigger>
        <DialogContent className='max-[770px]:max-w-[83%]'>
          {isPending ? (
            <div className='h-22 flex items-center justify-center'>
              loading...
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  this article.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button
                  type='submit'
                  variant='destructive'
                  onClick={handleDelete}
                  disabled={isPending}
                >
                  {isPending ? 'Deleting' : 'Delete'}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

const ButtonIconOutline = () => {
  return (
    <div
      className={`border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`}
    >
      <TrashIcon
        size={10}
        color='#fa004b'
        weight='duotone'
        className='cursor-pointer'
      />
    </div>
  )
}
