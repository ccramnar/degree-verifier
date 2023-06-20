// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Upload from "@/components/Upload"
import { HomeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default function Page() {
    return (
            <div className="flex h-screen flex-col bg-white">
              <header className="shrink-0 border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/"><HomeIcon  className="h-8 w-auto"></HomeIcon></Link>
                </div>
              </header>
        
              <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
                <aside className="sticky top-8 hidden w-64 shrink-0 lg:block">{<Upload></Upload>}</aside>
                    
                <main className="flex-1">{<h1>main</h1>}</main>
              </div>
            </div>
          )
        }