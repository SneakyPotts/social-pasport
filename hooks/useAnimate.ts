import { useState } from 'react'

export function useAnimate(onClose: () => void): [boolean, () => void] {
  const [isAnimate, setIsAnimate] = useState(false)

  const closeHandler = () => {
    setIsAnimate(true)
    setTimeout(() => {
      onClose()
    }, 200)
  }

  return [isAnimate, closeHandler]
}
