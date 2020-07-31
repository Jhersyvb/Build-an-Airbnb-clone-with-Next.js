import Link from 'next/link'

const Header = () => (
  <div className='nav-container'>
    <Link href='/'>
      <a>
        <img src='/img/logo.png' alt='Logo' />
      </a>
    </Link>

    <nav>
      <ul>
        <li>
          <Link href='/register'>
            <a>Sign up</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>Log in</a>
          </Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      .nav-container {
        border-bottom: 1px solid #ddd;
        height: 50px;
      }

      img {
        float: left;
      }

      ul {
        float: right;
        margin: 0;
        padding: 0;
      }

      li {
        display: block;
        float: left;
      }

      a {
        color: #333;
        display: block;
        margin-right: 15px;
        text-decoration: none;
      }

      nav a {
        padding: 1em 0.5em;
      }
    `}</style>
  </div>
)

export default Header
