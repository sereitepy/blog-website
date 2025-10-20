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
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PlusIcon } from '@phosphor-icons/react/ssr'
import { ChangeEvent, useState } from 'react'
import { SubmitButton } from './submit-button'
import { createArticle } from '@/lib/actions'
import { Checkbox } from '@/components/ui/checkbox'

export const AddArticleButton = () => {
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
        <DialogContent className='max-[770px]:overflow-auto max-[770px]:max-w-screen max-[770px]:max-h-screen max-h-[88%] max-w-[2050px] max-[770px]:rounded-none'>
          <FieldSet>
            <FieldLegend>
              <DialogTitle>Create New Article</DialogTitle>
            </FieldLegend>
            <DialogDescription>
              This Article will be displayed on your website imediately once
              published
            </DialogDescription>
            <form action={handleSubmit}>
              <FieldGroup>
                {/* TItle */}
                <Field>
                  <FieldLabel htmlFor='title'>Title</FieldLabel>
                  <Input
                    id='title'
                    name='title'
                    required
                    autoComplete='off'
                    placeholder='Photography...'
                  />
                  <FieldDescription>
                    This is the main title of your article
                  </FieldDescription>
                </Field>

                {/* Description */}
                <Field>
                  <FieldLabel htmlFor='description'>Description</FieldLabel>
                  <Textarea
                    id='description'
                    name='description'
                    placeholder='Describe your article here!'
                    required
                    className='min-h-[100px] max-h-[200px] resize-none sm:min-w-[300px]'
                    autoComplete='off'
                    rows={4}
                    value={value}
                    maxLength={maxLength}
                    onChange={handleChange}
                  />
                  <p className='text-muted-foreground text-xs'>
                    <span className='tabular-nums'>
                      {maxLength - characterCount}
                    </span>
                    &nbsp;characters left
                  </p>
                </Field>

                {/* Body */}
                <Field>
                  <FieldLabel htmlFor='body'>Body</FieldLabel>
                  <Textarea
                    id='body'
                    name='body'
                    required
                    placeholder='Describe your article here!'
                    className='min-h-[200px] max-h-[500px] resize-none sm:min-w-[300px]'
                    autoComplete='off'
                    rows={7}
                  />
                  <FieldDescription>
                    Input your article contents here
                  </FieldDescription>
                </Field>

                {/* Image */}
                <Field>
                  <FieldLabel htmlFor='image'>Image</FieldLabel>
                  <Input
                    required
                    id='image'
                    name='image'
                    autoComplete='off'
                    placeholder='https://unsplash/image...'
                  />
                  <FieldDescription>
                    Please make sure that your image link is correct!
                  </FieldDescription>
                </Field>

                {/* Published or Draft */}
                <Field orientation='horizontal'>
                  <Checkbox
                    id='published'
                    name='published'
                    defaultChecked
                    className='h-4 w-4'
                  />
                  <FieldLabel
                    htmlFor='published'
                    className='font-normal'
                    defaultChecked
                  >
                    Publish Article
                  </FieldLabel>
                </Field>

                {/* Submit Or Cancel */}
                <FieldSeparator />
                <Field
                  orientation='responsive'
                  className='flex items-end justify-end'
                >
                  <SubmitButton />
                  <DialogClose asChild>
                    <Button type='button' variant='outline'>
                      Cancel
                    </Button>
                  </DialogClose>
                </Field>
              </FieldGroup>
            </form>
          </FieldSet>
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
