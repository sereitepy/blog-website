'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

interface SubmitButtonProp {
  update?: boolean
}

export function SubmitButton({ update }: SubmitButtonProp) {
  const { pending } = useFormStatus()
  
  return (
    <Button type='submit' disabled={pending}>
      {pending ? update ? 'Updating' : 'Creating...' : update ? 'Update Article' : 'Create Article'}
    </Button>
  )
}
