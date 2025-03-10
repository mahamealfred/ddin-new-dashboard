import { createContext, useContext, useState, ReactNode } from "react";


// Define user object type
interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
}

// Define AuthContext Type
interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  pageloading: boolean;
  setpageloading: (loading: boolean) => void;
  logout: () => void;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

//export const Initialload = createContext<any>(null);
 const Initialload = createContext<AuthContextType | undefined>(undefined);

// Create Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [pageloading, setpageloading] = useState(false)
  // Logout function
  const logout = () => {
    setUser(null);
      setAuthToken(null);
  };

  return (
      <Initialload.Provider value={{ authToken, setAuthToken, logout,pageloading,setpageloading,user, setUser  }}>
          {children}
      </Initialload.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
  const context = useContext(Initialload);
  if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};