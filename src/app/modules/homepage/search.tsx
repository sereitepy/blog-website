import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface SearchInputProps {
  input: string
  setInput: (input: string) => void
}

export const SearchInput = ({ input, setInput }: SearchInputProps) => {
  return (
    <div className='min-w-100 flex items-center justify-center border-1 dark:border-white/20 px-5 rounded-xl focus-visible:ring-offset-1 focus-within:ring-1 focus-within:ring-muted-foreground focus-within:border-transparent transition-all duration-200 hover:shadow-sm focus:shadow-sm'>
      <Search size={18} />
      <Input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Search Articles...'
        className='border-0 ring-0 bg-inner-background dark:bg-inner-background shadow-none focus-visible:ring-0 focus-visible:ring-offset-0  '
      />
    </div>
  )
}
