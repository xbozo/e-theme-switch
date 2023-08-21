'use client'

import { Button } from "@/components/Button"
import { Main } from "@/components/Main"
import { ThemeProvider } from "@/contexts/ThemeContext"

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Main />
        <Button />
      </div>
    </ThemeProvider>
  )
}