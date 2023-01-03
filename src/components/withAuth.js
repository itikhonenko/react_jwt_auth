import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => ({ ...props }) => {
  const navigate = useNavigate()
  const authenticated = useSelector(({ auth: { authenticated } }) => authenticated);

  useEffect(() => {
    if (!authenticated) navigate('/')
  }, [authenticated, navigate])

  return authenticated && <Component {...props} />;
};

export default withAuth;
