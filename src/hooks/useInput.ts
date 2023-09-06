import { ChangeEvent, useState } from 'react'

export default function useInput(): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void
] {
  const [value, setValue] = useState('')

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, handler]
}
