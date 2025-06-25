import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const availableAccounts = [
  {
    id: 8,
    name: "Google",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 4,
      name: "GitHub",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      connected: true,
      link: "https://github.com/your-profile",
    },
    {
      id: 5,
      name: "LeetCode",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      connected: false,
      link: "",
    },
    {
      id: 6,
      name: "GFG",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
      connected: false,
      link: "",
    },
    {
      id: 7,
      name: "CodeChef",
      icon: "https://logo.svgcdn.com/s/codechef-dark.png",
      connected: false,
      link: "",
    },
  ]);

  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const handleConnectClick = (account) => {
    if (!account.connected) {
      setSelectedAccountId(account.id);
      setLinkInput("");
      setShowLinkModal(true);
    } else {
      setConnectedAccounts((accounts) =>
        accounts.map((acc) =>
          acc.id === account.id ? { ...acc, connected: false, link: "" } : acc
        )
      );
    }
  };

  const confirmLink = () => {
    if (linkInput.trim()) {
      setConnectedAccounts((accounts) =>
        accounts.map((acc) =>
          acc.id === selectedAccountId
            ? { ...acc, connected: true, link: linkInput.trim() }
            : acc
        )
      );
      setShowLinkModal(false);
    }
  };

  const addAccount = (account) => {
    if (!connectedAccounts.some((acc) => acc.id === account.id)) {
      setConnectedAccounts((accounts) => [
        ...accounts,
        { ...account, connected: false, link: "" },
      ]);
    }
    setShowAddMenu(false);
  };

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3 border-b border-gray-700"
        >
          <div className="flex items-center gap-2">
            <img
              src={account.icon}
              alt={`${account.name} icon`}
              className="w-6 h-6 object-cover rounded-full"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {account.connected && account.link && (
              <a
                href={account.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-white hover:bg-gray-100 transition duration-200"
                style={{ color: "#4338CA" }}
              >
                Visit
              </a>
            )}
            <button
              onClick={() => handleConnectClick(account)}
              className={`px-3 py-1 rounded text-white transition duration-200 ${
                account.connected
                  ? "hover:brightness-110"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
              style={account.connected ? { backgroundColor: "#4338CA" } : {}}
            >
              {account.connected ? "Connected" : "Connect"}
            </button>
          </div>
        </div>
      ))}

      {/* Add account dropdown */}
      <div className="relative mt-4">
        <button
          onClick={() => setShowAddMenu(!showAddMenu)}
          className="flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200"
        >
          <Plus size={18} className="mr-2" /> Add Account
        </button>

        {showAddMenu && (
          <div className="absolute z-10 mt-2 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg">
            {availableAccounts.map((account) => (
              <button
                key={account.id}
                onClick={() => addAccount(account)}
                disabled={connectedAccounts.some((acc) => acc.id === account.id)}
                className={`w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 transition duration-150 ${
                  connectedAccounts.some((acc) => acc.id === account.id)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={account.icon}
                    alt={`${account.name} icon`}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{account.name}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Custom Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg w-80">
            <h3 className="text-lg text-white mb-2">Enter Link</h3>
            <input
              type="text"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowLinkModal(false)}
                className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmLink}
                className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </SettingSection>
  );
};

export default ConnectedAccounts;
