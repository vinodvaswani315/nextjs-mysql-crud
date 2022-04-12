import Link from 'next/link'
export default function Header()
{
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">React + Next + Mysql</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
        <Link href="/">
        <a className="nav-link">Home </a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/about">
        <a className="nav-link">About </a>
        </Link>
        </li>
      </ul>
    </div>
  </nav>)
}