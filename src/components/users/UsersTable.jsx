// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Search, X } from "lucide-react";

// // Initial dummy data without branch
// const initialData = [
//   { id: 1, name: "Anie", email: "22A91A1234@aec.edu.in", testsTaken: 5, totalScore: 430 },
//   { id: 2, name: "Balu", email: "22A91A1234@aec.edu.in", testsTaken: 4, totalScore: 375 },
//   { id: 3, name: "Charan", email: "22A91A1234@aec.edu.in", testsTaken: 3, totalScore: 290 },
//   { id: 4, name: "Divya", email: "22A91A1234@aec.edu.in", testsTaken: 5, totalScore: 455 },
//   { id: 5, name: "Hanu", email: "22A91A1234@aec.edu.in", testsTaken: 4, totalScore: 390 },
//   { id: 6, name: "Pavan", email: "22A91A1234@aec.edu.in", testsTaken: 2, totalScore: 160 },
// ];

// const StudentsTable = () => {
//   const [students] = useState(initialData);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [alertStudent, setAlertStudent] = useState(null);

//   const handleSearch = (e) => setSearchTerm(e.target.value);

//   const term = searchTerm.trim().toLowerCase();

//   const filteredStudents = students.filter((student) => {
//     const fields = [
//       student.name,
//       student.email,
//       String(student.testsTaken),
//       String(student.totalScore),
//     ].map((field) => field.toLowerCase());

//     return fields.some((field) => field.includes(term));
//   });

//   return (
//     <>
//       <motion.div
//         className="bg-[#1C2634] min-h-[85vh] shadow-lg rounded-xl p-6 border border-gray-700"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-white">Student Test Results</h2>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search students..."
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-700">
//             <thead>
//               <tr>
//                 {["Name", "Email", "Total Tests Taken", "Total Score", "View"].map((head) => (
//                   <th
//                     key={head}
//                     className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wide"
//                   >
//                     {head}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-700">
//               {filteredStudents.length > 0 ? (
//                 filteredStudents.map((student) => (
//                   <motion.tr
//                     key={student.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
//                           {student.name.charAt(0)}
//                         </div>
//                         <div className="ml-4 text-sm font-medium text-gray-100">{student.name}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-300">{student.email}</td>
//                     <td className="px-6 py-4 text-sm text-gray-300">{student.testsTaken}</td>
//                     <td className="px-6 py-4 text-sm text-gray-300">{student.totalScore}</td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => setAlertStudent(student)}
//                         className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-400">
//                     No matching students found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>

//       {alertStudent && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
//           <motion.div
//             className="bg-[#1C2634]/90 p-6 rounded-xl shadow-xl max-w-md w-full text-white relative"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//               onClick={() => setAlertStudent(null)}
//             >
//               <X size={20} />
//             </button>

//             <h3 className="text-2xl font-bold mb-4 text-center text-[#7E9CFA]">🎉 Student Details</h3>

//             <div className="space-y-2">
//               <p><strong>Name:</strong> {alertStudent.name}</p>
//               <p><strong>Email:</strong> {alertStudent.email}</p>
//               <p><strong>Total Tests Taken:</strong> {alertStudent.testsTaken}</p>
//               <p><strong>Total Score:</strong> {alertStudent.totalScore}</p>
//             </div>

//             <div className="mt-6 flex justify-center">
//               <button
//                 onClick={() => setAlertStudent(null)}
//                 className="bg-[#4338CA] hover:bg-[#372fb1] text-white px-6 py-2 rounded-full"
//               >
//                 OK
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StudentsTable;




import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [alertStudent, setAlertStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("https://projectspace-backend.onrender.com/student-test-summary");
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error("Error fetching student data:", err);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const term = searchTerm.trim().toLowerCase();

  const filteredStudents = students.filter((student) => {
    const fields = [
      student.name,
      student.email,
      String(student.totalTestsTaken),
      String(student.totalScore),
    ].map((field) => field.toLowerCase());

    return fields.some((field) => field.includes(term));
  });

  return (
    <>
      <motion.div
        className="bg-[#1C2634] min-h-[85vh] shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Student Test Results</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {["Name", "Email", "Total Tests Taken", "Total Score", "View"].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wide"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-gray-100">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{student.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{student.totalTestsTaken}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{student.totalScore}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setAlertStudent(student)}
                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                      >
                        View
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No matching students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {alertStudent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div
            className="bg-[#1C2634]/90 p-6 rounded-xl shadow-xl max-w-md w-full text-white relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setAlertStudent(null)}
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-[#7E9CFA]">🎉 Student Details</h3>

            <div className="space-y-2">
              <p><strong>Name:</strong> {alertStudent.name}</p>
              <p><strong>Email:</strong> {alertStudent.email}</p>
              <p><strong>Total Tests Taken:</strong> {alertStudent.totalTestsTaken}</p>
              <p><strong>Total Score:</strong> {alertStudent.totalScore}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setAlertStudent(null)}
                className="bg-[#4338CA] hover:bg-[#372fb1] text-white px-6 py-2 rounded-full"
              >
                OK
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default StudentsTable;
