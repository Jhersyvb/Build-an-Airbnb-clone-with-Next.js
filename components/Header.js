import axios from 'axios'
import Link from 'next/link'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Header = () => {
  const setShowLoginModal = useStoreActions(
    actions => actions.modals.setShowLoginModal
  )
  const setShowRegistrationModal = useStoreActions(
    actions => actions.modals.setShowRegistrationModal
  )
  const user = useStoreState(state => state.user.user)
  const setUser = useStoreActions(actions => actions.user.setUser)

  return (
    <div className='nav-container'>
      <Link href='/'>
        <a>
          <img src='/img/logo.png' alt='Logo' />
        </a>
      </Link>

      <nav>
        {user ? (
          <>
            <li className='username'>{user}</li>
            <li>
              <a
                href='#'
                onClick={async () => {
                  await axios.post('/api/auth/logout')
                  setUser(null)
                }}
              >
                Log out
              </a>
            </li>
          </>
        ) : (
            <>
              <li>
                <a href='#' onClick={() => setShowRegistrationModal()}>
                  Sign up
                </a>
              </li>
              <li>
                <a href='#' onClick={() => setShowLoginModal()}>
                  Log in
                </a>
              </li>
            </>
          )}
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

        .username {
          padding: 1em 0.5em;
        }
      `}</style>
    </div>
  )
}

export default Header
