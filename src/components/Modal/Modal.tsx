import { ReactNode } from "react";

interface ShadowProps {
  children: ReactNode;
}

const Shadow: React.FC<ShadowProps> = ({
  children,
}) => {
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-30 z-40 w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded shadow-md w-auto flex z-50 rounded-xl h-auto max-h-96 overflow-y-auto scrollable-content">
        {children}
      </div>
    </div>
  );
};

export default Shadow;
