"use client"

import NextNProgress from "nextjs-progressbar"

export function ProgressBar() {
  return (
    <NextNProgress
      color="#29D"
      startPosition={0.3}
      stopDelayMs={500}
      height={8}
      showOnShallow={true}
    />
  )
}
