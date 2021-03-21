import { useState, useLayoutEffect } from 'react'

import { smallBreakpoint, mediumBreakpoint, bigBreakpoint } from "common";

let defaultHeight: number = 0
let defaultWidth: number = 0

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width: defaultWidth, height: defaultHeight })

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...windowDimensions,
    small: windowDimensions.width < smallBreakpoint,
    medium: windowDimensions.width >= smallBreakpoint && windowDimensions.width < mediumBreakpoint,
    big: windowDimensions.width >= mediumBreakpoint && windowDimensions.width < bigBreakpoint,
  }
}
