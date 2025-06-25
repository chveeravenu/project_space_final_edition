import { useState } from "react";
import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";

const SettingsPage = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // const handleLogout = () => {
  //   alert("You have been logged out.");
  //   setIsLoggedOut(true);
  // };

  // if (isLoggedOut) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
  //       <h1 className="text-2xl">You have logged out.</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <nav className="w-full bg-gray-800 border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Header title="Settings" />

            {/* <button
              onClick={handleLogout}
              className="px-3 py-1 rounded text-white transition duration-200 bg-[#4338CA] hover:brightness-110"
              type="button"
            >
              Logout
            </button> */}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
