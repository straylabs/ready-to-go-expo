import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { StorageKey, StorageUtils } from "./Storage";

interface AuthState {
  isAuthenticated: boolean;
}

interface AuthContextType {
  authState: AuthState;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const defaultAuthState: AuthState = {
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const storedState = StorageUtils.get<AuthState>(StorageKey.AUTH_STATE);
    return storedState || defaultAuthState;
  });

  const login = () => {
    const newState: AuthState = { isAuthenticated: true };
    setAuthState(newState);
    StorageUtils.set(StorageKey.AUTH_STATE, newState);
  };

  const logout = () => {
    setAuthState(defaultAuthState);
    StorageUtils.set(StorageKey.AUTH_STATE, defaultAuthState);
  };

  useEffect(() => {
    const storedState = StorageUtils.get<AuthState>(StorageKey.AUTH_STATE);
    if (storedState) {
      setAuthState(storedState);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
