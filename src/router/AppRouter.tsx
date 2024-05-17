import React, {useEffect} from 'react';
import {AuthRoutes} from '../auth';
import {SplashScreen, WelcomeScreen} from '../theme';
import {useAuthStore, usePermissionStore} from '../shared';
import {ProjectRoutes} from '../project';

export const AppRouter = () => {
  const {
    auth: {status},
    checkingAuth,
  } = useAuthStore();
  const {
    permission: {permissionStatus},
  } = usePermissionStore();

  useEffect(() => {
    checkingAuth();
  }, []);

  if (permissionStatus === 'unavailable' || status === 'checking')
    return <SplashScreen />;

  return (
    <>
      {permissionStatus !== 'granted' ? (
        <WelcomeScreen />
      ) : (
        <>
          {status === 'not-authenticated' ? <AuthRoutes /> : <ProjectRoutes />}
        </>
      )}
    </>
  );
};
