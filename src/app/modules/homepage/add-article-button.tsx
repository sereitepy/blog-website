import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlusIcon } from '@phosphor-icons/react/ssr'

export const AddArticleButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <AddButton />
        </DialogTrigger>
        <DialogContent className='min-w-[70%]'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const AddButton = () => {
  return (
      <div className={`bg-secondary border-1 text-secondary-foreground shadow-xs hover:bg-secondary/80 size-9 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`}>
        <PlusIcon size={32} className='cursor-pointer' />
      </div>
  )
}
