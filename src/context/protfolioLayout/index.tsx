import {
  createContext,
//   useContext,
  useState,
  type ReactNode,
} from "react";

type LayoutVariant = "default" | "sidebar" | "full";

type LayoutContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  layout: LayoutVariant;
  setLayout: (variant: LayoutVariant) => void;
};

const LayoutProviderContext = createContext<LayoutContextType | undefined>(
  undefined
);

type LayoutProviderProps = {
  children: ReactNode;
};

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [layout, setLayout] = useState<LayoutVariant>("default");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const value: LayoutContextType = {
    isSidebarOpen,
    toggleSidebar,
    layout,
    setLayout,
  };

  return (
    <LayoutProviderContext.Provider value={value}>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="h-16 bg-gray-900 text-white flex items-center px-4">
          <h1 className="font-bold text-lg">My Portfolio</h1>
          {layout === "sidebar" && (
            <button
              onClick={toggleSidebar}
              className="ml-auto bg-gray-700 px-3 py-1 rounded"
            >
              {isSidebarOpen ? "Close" : "Menu"}
            </button>
          )}
        </header>

        <div className="flex flex-1">
          {/* Sidebar (only if layout = sidebar) */}
          {layout === "sidebar" && isSidebarOpen && (
            <aside className="w-64 bg-gray-100 border-r p-4">
              <nav className="space-y-2">
                <a href="/" className="block">Home</a>
                <a href="/projects" className="block">Projects</a>
                <a href="/contact" className="block">Contact</a>
              </nav>
            </aside>
          )}

          {/* Main Content */}
          <main
            className={`flex-1 p-6 ${
              layout === "full" ? "max-w-5xl mx-auto" : ""
            }`}
          >
            {children}
          </main>
        </div>

        {/* Footer */}
        {layout !== "full" && (
          <footer className="h-12 bg-gray-200 flex items-center justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()} My Portfolio
            </p>
          </footer>
        )}
      </div>
    </LayoutProviderContext.Provider>
  );
}

// ✅ Custom hook
// export const useLayout = () => {
//   const context = useContext(LayoutProviderContext);
//   if (context === undefined) {
//     throw new Error("useLayout must be used within a LayoutProvider");
//   }
//   return context;
// };
