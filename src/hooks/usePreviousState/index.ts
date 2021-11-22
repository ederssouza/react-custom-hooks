import { useRef, useEffect } from 'react'

function usePreviousState (value: any) {
  const stateRef = useRef(null)

  useEffect(() => {
    stateRef.current = value
  }, [value])

  return stateRef.current
}

export default usePreviousState
