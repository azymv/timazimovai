import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-heading text-xl font-bold">
            Azimov AI
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link href="#course" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium text-gray-600 hover:text-gray-900">
                    Course
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#resources" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium text-gray-600 hover:text-gray-900">
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#ebook" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium text-gray-600 hover:text-gray-900">
                    E-Book
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/course/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="#course">
            <Button>Get the Course</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}