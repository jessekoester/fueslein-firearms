import React from 'react'
import { AuthService } from '../../../auth/service'
import useAuth from '../../../hooks/useAuth'

const GalleryAdmin = () => {
  const { isLoading, isLoggedIn } = useAuth()

  return (
    <div className="conatiner">
      {isLoading
        ? (
            'Session loading...'
          )
        : isLoggedIn
          ? (
        <button onClick={AuthService.logout()}>Logout</button>
            )
          : (
        <button onClick={AuthService.login}>Login</button>
            )}
    </div>
  )
}

export default GalleryAdmin
