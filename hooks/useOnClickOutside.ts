import { type RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

export default function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Handler): void {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
