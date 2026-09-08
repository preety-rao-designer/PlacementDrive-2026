import { useCallback, useRef, useState } from 'react'

/**
 * All the state the prototype needs: which screen is showing, a back stack,
 * whether a resume is attached, and which companies are selected.
 */
export function usePrototype(initial) {
  const [screen, setScreen] = useState(initial)
  const [picked, setPicked] = useState([])
  const [hasResume, setHasResume] = useState(false)
  const [toast, setToast] = useState(null)
  const stack = useRef([])
  const toastTimer = useRef(null)

  const go = useCallback((id) => {
    setScreen((cur) => {
      if (id !== cur) stack.current.push(cur)
      return id
    })
  }, [])

  const back = useCallback((fallback) => {
    setScreen(stack.current.length ? stack.current.pop() : fallback ?? initial)
  }, [initial])

  const jump = useCallback((id) => {
    stack.current = []
    setScreen(id)
  }, [])

  const togglePick = useCallback((key) => {
    setPicked((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]))
  }, [])

  const toggleAllPicked = useCallback((keys) => {
    setPicked((p) => (p.length === keys.length ? [] : keys))
  }, [])

  const notify = useCallback((message) => {
    clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const reset = useCallback(() => {
    stack.current = []
    setPicked([])
    setHasResume(false)
    setScreen(initial)
  }, [initial])

  return { screen, go, back, jump, reset, picked, togglePick, toggleAllPicked, hasResume, setHasResume, toast, notify }
}
