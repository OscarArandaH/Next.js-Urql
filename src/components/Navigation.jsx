import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Countries',
  route: '/countries'
}, {
  label: 'Graficos',
  route: '/charts'
}, {
  label: 'PDF Render in DOM',
  route: 
  '/pdf-dom'
}, {
  label: 'PDF Render in DOM Download Button',
  route: 
  '/pdf-dom-btn-download'
}, {
  label: 'PDF Render in DOM New Tab',
  route: 
  '/pdf-dom-new-tab'
}, {
  label: 'PDF Save in File',
  route: 
  '/pdf-file'
}, {
  label: 'PDF Save in File 2',
  route: 
  '/pdf-file-2'
}
]

export function Navigation () {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
