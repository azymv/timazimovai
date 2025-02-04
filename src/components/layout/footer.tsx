import Link from 'next/link'
import { Twitter, Linkedin} from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-heading text-xl font-bold">
              Tim Azimov
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Helping product managers leverage AI to build better products
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <nav>
              <h3 className="font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><Link href="#course" className="text-sm text-gray-600 hover:text-gray-900">Course</Link></li>
                <li><Link href="#resources" className="text-sm text-gray-600 hover:text-gray-900">Resources</Link></li>
                <li><Link href="#ebook" className="text-sm text-gray-600 hover:text-gray-900">E-Book</Link></li>
              </ul>
            </nav>
            <nav>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex gap-4">
                <a href="https://x.com/timazimov/" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/timazimov/" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Timur Azimov IE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}