import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog'
import { createArticle } from '@/lib/actions'
import { PlusIcon } from '@phosphor-icons/react/ssr'
import { ChangeEvent, useState } from 'react'
import ArticleForm from '.'

export const CreateArticle = () => {
  const maxLength = 400
  const initialValue = ''
  const [value, setValue] = useState(initialValue)
  const [characterCount, setCharacterCount] = useState(initialValue.length)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value)
      setCharacterCount(e.target.value.length)
    }
  }

  const [open, setOpen] = useState(false)

  async function handleSubmit(formData: FormData) {
    const result = await createArticle(formData)

    if (!result?.error) {
      setOpen(false) // Close dialog on success
      setValue(initialValue) // Reset form
      setCharacterCount(0)
    } else {
      // Show error to user
      alert(result.error)
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <AddButton />
        </DialogTrigger>
        <DialogContent className='overflow-auto max-[770px]:max-w-screen max-[770px]:max-h-screen max-h-[88%] max-w-[2050px] max-[770px]:rounded-none'>
          <ArticleForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            maxLength={maxLength}
            value={value}
            characterCount={characterCount}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

const AddButton = () => {
  return (
    <div
      className={`bg-secondary border-1 text-secondary-foreground shadow-xs hover:bg-secondary/80 size-9 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`}
    >
      <PlusIcon size={32} className='cursor-pointer' />
    </div>
  )
}
