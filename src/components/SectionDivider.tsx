import React from "react";

interface SectionDividerProps {
  label?: string;
  className?: string; // React convention
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  label = "",
  className = "",
}) => {
  return (
    <div
      className={`mb-12 max-w-[84rem] mx-auto flex items-center justify-center gap-x-4 ${className}`}
    >
      <div className="h-px flex-1 border-t border-dashed border-gray-300"></div>
      <div className="inline-flex items-center whitespace-nowrap rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-gray-900 shadow px-3 py-1 text-sm">
        {label}
      </div>
      <div className="h-px flex-1 border-t border-dashed border-gray-300"></div>
    </div>
  );
};
