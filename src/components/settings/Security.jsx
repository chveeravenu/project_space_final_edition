import { Lock, Eye, EyeOff } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully!");
    setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
    setIsChangingPassword(false);
  };

  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />

      <div className="mt-4">
        {isChangingPassword ? (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
            {["oldPassword", "newPassword", "confirmPassword"].map((field) => (
              <div key={field} className="relative">
                <label className="block text-gray-300 mb-1 capitalize">
                  {field === "oldPassword"
                    ? "Old Password"
                    : field === "newPassword"
                    ? "New Password"
                    : "Confirm New Password"}
                </label>
                <input
                  type={showPassword[field] ? "text" : "password"}
                  name={field}
                  value={passwords[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pr-10"
                />
                <button
                  type="button"
                  onClick={() => toggleShowPassword(field)}
                  className="absolute right-2 top-8 text-gray-400 hover:text-gray-200"
                  tabIndex={-1}
                >
                  {showPassword[field] ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Save Password
              </button>
              <button
                type="button"
                onClick={() => setIsChangingPassword(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setIsChangingPassword(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Change Password
          </button>
        )}
      </div>
    </SettingSection>
  );
};

export default Security;
