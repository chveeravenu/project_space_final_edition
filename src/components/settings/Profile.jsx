import { useState, useRef } from "react";
import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfile((prev) => ({ ...prev, photo: ev.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <div
          className="rounded-full w-20 h-20 object-cover mr-4 cursor-pointer"
          onClick={() => {
            if (isEditing) fileInputRef.current.click();
          }}
          style={{
            backgroundImage: `url(${profile.photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Profile photo"
          title={isEditing ? "Click to change photo" : ""}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />

        <div className="flex flex-col w-full max-w-xs">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Name"
                className="mb-2 p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-100">{profile.name}</h3>
              <p className="text-gray-400">{profile.email}</p>
            </>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsEditing((prev) => !prev)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto"
      >
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </SettingSection>
  );
};

export default Profile;
