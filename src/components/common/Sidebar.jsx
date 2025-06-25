import {
  BarChart2,
  Menu,
  Settings,
  TrendingUp,
  Users,
  ClipboardEdit,
  X,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import sigin from '../login_pages/sigin'

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Students", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Reports", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Create Test", icon: ClipboardEdit, color: "#F59E0B", href: "/createtest" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
  { name: "logout", icon: LogOut, color: "#CBF2FF", href: "/sigin" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Desktop sidebar
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Mobile drawer
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Handle resizing to switch between mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile); // show sidebar on desktop, hide on mobile
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Hamburger - only on mobile */}
      {isMobile && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileSidebarOpen(true)}
          className="fixed top-4 right-4 z-50 bg-gray-800 p-2 rounded-md text-white md:hidden"
        >
          <Menu size={24} />
        </motion.button>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
            isSidebarOpen ? "w-64" : "w-20"
          }`}
          animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
          <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
            {/* Toggle button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
            >
              <Menu size={24} />
            </motion.button>

            {/* Sidebar Items */}
            <nav className="mt-8 flex-grow">
              {SIDEBAR_ITEMS.map((item) => (
                <Link key={item.href} to={item.href}>
                  <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                    <item.icon
                      size={20}
                      style={{ color: item.color, minWidth: "20px" }}
                    />
                    <AnimatePresence>
                      {isSidebarOpen && (
                        <motion.span
                          className="ml-4 whitespace-nowrap"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2, delay: 0.3 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isMobile && isMobileSidebarOpen && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-40 h-full w-64 bg-gray-800 bg-opacity-60 backdrop-blur-md p-4 border-l border-gray-700 md:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMobileSidebarOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Sidebar Items */}
            <nav>
              {SIDEBAR_ITEMS.map((item) => (
                <Link key={item.href} to={item.href}>
                  <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                    <item.icon size={20} style={{ color: item.color }} />
                    <span className="ml-4 whitespace-nowrap text-white">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
