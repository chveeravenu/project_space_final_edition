import React from "react";
import { FileCode2, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

const CreateTestPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    navigate(`/createtest/${type}`);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Create Test" />

      <main className="max-w-7xl mx-auto py-10 px-4 lg:px-8 flex flex-col space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
        <div
          onClick={() => handleNavigate("coding")}
          className="cursor-pointer p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-md flex items-center space-x-4"
        >
          <FileCode2 size={40} className="text-blue-400" />
          <div>
            <h2 className="text-xl text-white font-semibold">Coding Test</h2>
            <p className="text-sm text-gray-400">
              Design and assign coding assessments.
            </p>
          </div>
        </div>

        <div
          onClick={() => handleNavigate("mcq")}
          className="cursor-pointer p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-md flex items-center space-x-4"
        >
          <ListChecks size={40} className="text-pink-400" />
          <div>
            <h2 className="text-xl text-white font-semibold">MCQs</h2>
            <p className="text-sm text-gray-400">
              Create and manage multiple choice questions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateTestPage;
