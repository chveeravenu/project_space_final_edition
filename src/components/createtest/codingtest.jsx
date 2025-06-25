import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";

const CodingTest = () => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState("");
  const [description, setDescription] = useState("");
  const [examples, setExamples] = useState([{ input: "", output: "" }]);

  const handleUpload = () => {
    if (!questionNumber || !description || examples.some(ex => !ex.input || !ex.output)) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const questionData = {
      questionNumber,
      description,
      examples,
    };

    console.log("Uploaded Question:", questionData);
    alert("Question uploaded successfully!");

    // Reset form
    setQuestionNumber("");
    setDescription("");
    setExamples([{ input: "", output: "" }]);
  };

  const handleExampleChange = (index, field, value) => {
    const updated = [...examples];
    updated[index][field] = value;
    setExamples(updated);
  };

  const addExample = () => {
    setExamples([...examples, { input: "", output: "" }]);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 text-white min-h-screen">
      {/* Back Arrow and Title */}
      <div className="flex items-center space-x-3 px-4 pt-6">
        <button onClick={() => navigate("/createtest")} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold text-white">Add Coding Test Question</h1>
      </div>

      <main className="max-w-4xl mx-auto py-10 px-4 lg:px-8 space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Question Number</label>
          <input
            type="text"
            value={questionNumber}
            onChange={(e) => setQuestionNumber(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 h-32 focus:outline-none focus:border-[#4F46E5]"
          />
        </div>

        {/* Dynamic Input/Output Examples */}
        {examples.map((example, index) => (
          <div key={index} className="space-y-4 border border-gray-700 p-4 rounded-lg bg-gray-800">
            <div>
              <label className="block mb-2 text-sm font-medium">Input Example {index + 1}</label>
              <input
                type="text"
                value={example.input}
                onChange={(e) => handleExampleChange(index, "input", e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#4F46E5]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Output Example {index + 1}</label>
              <input
                type="text"
                value={example.output}
                onChange={(e) => handleExampleChange(index, "output", e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#4F46E5]"
              />
            </div>
          </div>
        ))}

        {/* Add Example Button */}
        <button
          onClick={addExample}
          className="flex items-center space-x-2 text-[#4F46E5] hover:text-white hover:bg-[#4F46E5] px-4 py-2 border border-[#4F46E5] rounded-lg transition"
        >
          <Plus size={18} />
          <span>Add</span>
        </button>

        <button
          onClick={handleUpload}
          className="px-6 py-2 rounded-lg font-medium"
          style={{ backgroundColor: "#4F46E5", color: "white" }}
        >
          Upload
        </button>
      </main>
    </div>
  );
};

export default CodingTest;
