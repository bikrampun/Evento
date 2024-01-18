"use client"

import { usePathname, useRouter } from "next/navigation"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons, type IconType } from "~/components/ui/icons"

export default function Sidebar({
  className,
  data,
}: {
  className?: string
  data: { icon: IconType; label: string; path: string }[]
}) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {data.map(({ icon, label, path }) => {
              const Icon = Icons[icon]
              return (
                <Button
                  variant={pathname === path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    router.push(path)
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
