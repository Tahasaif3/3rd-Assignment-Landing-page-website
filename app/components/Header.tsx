import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-end space-x-4">
          <li><Link href="#home" className="hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-200 transition-colors">About</Link></li>
          <li><Link href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  )
}