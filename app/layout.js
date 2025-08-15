import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'  
import { cn } from '@/lib/utils'
import clientPromise from '@/lib/mongodb'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth/next'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'


function layout() {
  return (
    <div>

    </div>
  )
}

export default layout

