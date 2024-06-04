"use client";

import Toast from "@/components/Toast";
import { ReactNode, createContext, useContext, useState } from "react";

interface ToastProviderProps {
    children: ReactNode;
}

interface ToastContextProps {
  showToast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastDuration, setToastDuration] = useState<number>(3000);

  const showToast = (message: string, duration: number = 3000) => {
    setToastMessage(message);
    setToastDuration(duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && (
        <Toast
          message={toastMessage}
          duration={toastDuration}
          setToastMessage={setToastMessage}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
