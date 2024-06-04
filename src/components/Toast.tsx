import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  setToastMessage: (message: string | null) => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  setToastMessage,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
      // Start fade-out timer to start fadeout animation before the message is removed
      const fadeOutTimer = setTimeout(() => {
        setVisible(false);
      }, duration - 500); // Start fade-out 500ms before the end

      const removeMessageTimer = setTimeout(() => {
        setToastMessage(null);
      }, duration);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeMessageTimer);
      };
    }
  }, [message, duration, setToastMessage]);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${
          visible ? "animate-fadeIn" : "animate-fadeOut"
        } bg-black bottom-5 items-center flex text-sm font-bold text-white fixed px-4 py-2 rounded shadow-lg`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
