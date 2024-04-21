// src/services/auth.js

import { createAuth0Client } from '@auth0/auth0-spa-js';
import { reactive, readonly } from 'vue';

let auth0 = null;

const state = reactive({
  isAuthenticated: false,
  user: null,
  loading: true,
});

export const useAuth = () => {
  const login = async () => {
    await auth0.loginWithRedirect();
  };

  const logout = async () => {
    await auth0.logout();
  };

  return {
    state: readonly(state),
    login,
    logout,
  };
};

export const initAuth = async (options) => {
  auth0 = await createAuth0Client({
    domain: options.domain,
    client_id: options.clientId,
    redirect_uri: window.location.origin,
  });

  try {
    if (
      window.location.search.includes('code=') &&
      window.location.search.includes('state=')
    ) {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, '/');
    }

    state.isAuthenticated = await auth0.isAuthenticated();

    if (state.isAuthenticated) {
      state.user = await auth0.getUser();
    }
  } finally {
    state.loading = false;
  }
};
