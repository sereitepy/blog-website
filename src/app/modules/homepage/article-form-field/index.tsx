import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SubmitButton } from './submit-button'
import { ChangeEvent } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

interface ArticleFormProps {
  handleSubmit: (formData: FormData) => Promise<void>
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  maxLength: number
  value: string
  characterCount: number
}

export default function ArticleForm({
  handleSubmit,
  handleChange,
  maxLength,
  value,
  characterCount,
}: ArticleFormProps) {
  return (
    <div>
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
            {/* Title */}
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
              <DialogClose asChild>
                <Button type='button' variant='outline'>
                  Cancel
                </Button>
              </DialogClose>
              <SubmitButton />
            </Field>
          </FieldGroup>
        </form>
      </FieldSet>
    </div>
  )
}
