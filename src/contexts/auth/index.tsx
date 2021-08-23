import { useState, useEffect, createContext, useContext } from 'react';

import { DefaultProps, User } from '../../types';

import { auth, firebase } from '../../services/firebase';

type AuthContextData = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  signed: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: DefaultProps) {
  const [user, setUser] = useState<User>();
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        const payload = {
          id: uid,
          name: displayName,
          avatar: photoURL,
        };

        setUser(payload);

        setSigned(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        const payload = {
          id: uid,
          name: displayName,
          avatar: photoURL,
        };

        setUser(payload);

        setSigned(true);
      }
    });
  }

  async function signOut() {
    auth.signOut().then(() => {
      setSigned(false);
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut, signed }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(' useAuth must be used within an authProvider ');
  }

  return context;
}

export { AuthProvider, useAuth };
