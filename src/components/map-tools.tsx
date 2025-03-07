'use client'

import { House } from 'lucide-react'
import Link from 'next/link'
import { LanguageSwitch } from '~/components/language-toggle'
import { RotateControl } from '~/components/rotate-control'
import { ThemeToggle } from '~/components/theme-toggle'
import { useIsClient } from '~/hooks/useClient'

interface MapToolsProps {
  isRotating: boolean
  setIsRotating: (isRotating: boolean) => void
}

export function MapTools({ isRotating, setIsRotating }: MapToolsProps) {
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

  return (
    <>
      <div className='fixed top-0 right-12 z-[49] mt-10 hidden w-auto md:block xl:right-10'>
        <div className='flex items-center gap-4 rounded-full bg-white/20 px-6 py-3 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-black/20'>
          <RotateControl
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Link href='/'>
            <House
              className='cursor-pointer'
              size={22}
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
          </Link>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <div className='-translate-x-1/2 fixed bottom-4 left-1/2 z-[49] h-16 w-auto transform md:hidden'>
        <div className='flex items-center justify-center gap-4 rounded-full bg-white/20 px-6 py-3 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-black/20'>
          <RotateControl
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Link href='/'>
            <House
              className='cursor-pointer'
              size={22}
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
          </Link>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
