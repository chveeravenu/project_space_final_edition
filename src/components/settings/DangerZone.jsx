import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, X } from "lucide-react";

const DangerZone = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    // Here you can place your deletion logic, e.g., API call, clearing storage, etc.
    setDeleted(true);
    setShowConfirm(false);
  };

  if (deleted) {
    return (
      <div className="bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Account Deleted</h2>
        <p className="text-gray-300">Your account and all content have been permanently deleted.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <Trash2 className="text-red-400 mr-3" size={24} />
          <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Permanently delete your account and all of your content.
        </p>
        <button
          type="button"
          aria-label="Delete Account"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          onClick={() => setShowConfirm(true)}
        >
          Delete Account
        </button>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded shadow-lg w-80"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-white font-semibold">Confirm Delete</h3>
                <button
                  onClick={() => setShowConfirm(false)}
                  aria-label="Close confirmation dialog"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DangerZone;
