import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const hideToast = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(hideToast);
  }, [message, duration]);

  return (
    <div
      className={`${
        visible ? "animate-fadeIn" : "animate-fadeOut"
      } bg-black text-white fixed bottom-5 right-5 px-4 py-2 rounded shadow-lg
        `}
    >
      {message}
    </div>
  );
};

export default Toast;
