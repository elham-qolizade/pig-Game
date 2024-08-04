import { useState, createContext, useContext, ReactNode } from "react";

type AppContextType = {
  player1: string;
  player2: string;
  winScore: number;
  setPlayer1: (value: string) => void;
  setPlayer2: (value: string) => void;
  setWinScore: (value: number) => void;
};

const initialValues: AppContextType = {
  player1: "",
  player2: "",
  winScore: 100,
  setPlayer1: () => {},
  setPlayer2: () => {},
  setWinScore: () => {},
};

const AppContext = createContext<AppContextType>(initialValues);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [winScore, setWinScore] = useState(100);

  return (
    <AppContext.Provider
      value={{
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        winScore,
        setWinScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
