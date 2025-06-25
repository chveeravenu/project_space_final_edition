import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MCQTest = () => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleUpload = () => {
    if (
      !questionNumber.trim() ||
      !question.trim() ||
      options.some((opt) => !opt.trim())
    ) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const mcqData = {
      questionNumber,
      question,
      options,
    };

    console.log("Uploaded MCQ:", mcqData);
    alert("MCQ uploaded successfully!");

    setQuestionNumber("");
    setQuestion("");
    setOptions(["", "", "", ""]);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 text-white min-h-screen">
      {/* Back arrow and title */}
      <div className="flex items-center space-x-3 px-4 pt-6">
        <button onClick={() => navigate("/createtest")} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold text-white">Add MCQ Test Question</h1>
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
          <label className="block mb-2 text-sm font-medium">Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 h-24 focus:outline-none focus:border-[#4F46E5]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium">Option {index + 1}</label>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4F46E5]"
              />
            </div>
          ))}
        </div>

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

export default MCQTest;
