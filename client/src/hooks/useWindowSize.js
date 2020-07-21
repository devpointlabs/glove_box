import {useState, useLayoutEffect} from 'react'

function useWindowSize() {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      return setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return [size[0], size[1], BREAKPOINTS]
}

export const BREAKPOINTS = {sm: 640, md: 768, lg: 1024, xl: 1280}
export default useWindowSize