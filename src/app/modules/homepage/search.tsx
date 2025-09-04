import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface SearchInputProps {
  input: string
  setInput: (input: string) => void
}

export const SearchInput = ({ input, setInput }: SearchInputProps) => {
  return (
    <div className='sm:min-w-100 min-w-76 flex items-center justify-center border-1 px-5 rounded-xl focus-visible:ring-offset-0 focus-within:ring-1 focus-within:ring-muted-foreground focus-within:border-transparent transition-all duration-400 ease-in-out hover:shadow-sm focus:shadow-sm'>
      <Search size={18} />
      <Input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Search Articles...'
        className='border-0 ring-0 bg-inner-background dark:bg-inner-background shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 2xl:text-base lg:text-sm text-xs'
      />
    </div>
  )
}
