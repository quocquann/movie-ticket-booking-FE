

import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { isLoggedSelector } from '../../../features/authentication/service/states/selectors'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

  const isLogged = useAppSelector(isLoggedSelector);
  
  return (
    isLogged ? children : <Navigate to="/login" replace/>
  )
}

export default PrivateRoute