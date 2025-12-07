import { IoMdClose } from "react-icons/io";
import { assignees, priorities, statuses } from "../data/mockData";

function TaskDrawer({ open, onClose }) {
  return (
    <div
      className={`fixed bottom-0 right-0 w-full h-full bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
      >
        <IoMdClose size={18} />
      </button>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
        {/* LEFT SIDE (2/3 width) */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          {/* Task Title */}
          <div>
            <label className="font-semibold block mb-1">Task Title</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter title..."
            />
          </div>

          {/* Details */}
          <div>
            <label className="font-semibold block mb-1">Details</label>
            <div className="border rounded p-3 h-40">
              <textarea
                className="w-full h-full outline-none resize-none"
                placeholder="[Long description / details]"
              />
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="font-semibold block mb-1">Comments</label>
            <div className="border rounded p-3 h-40">
              <textarea
                className="w-full h-full outline-none resize-none"
                placeholder="Write a comment..."
              />
            </div>
          </div>

          {/* Activity Log */}
          <div>
            <label className="font-semibold block mb-1">Activity log</label>
            <div className="border rounded p-3 h-40">
              <textarea
                className="w-full h-full outline-none resize-none"
                placeholder="Timeline of changes"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (1/3 width) */}
        <div className="flex flex-col gap-6 border rounded p-4 h-fit">
          {/* Status */}
          <div>
            <label className="font-semibold block mb-1">Status</label>
            <select className="border w-full rounded px-2 py-1">
              {statuses.map((s) => (
                <option key={s} className="capitalize">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="font-semibold block mb-1">Priority</label>
            <select className="border w-full rounded px-2 py-1">
              {priorities.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Assignee */}
          <div>
            <label className="font-semibold block mb-1">Assignee</label>
            <select className="border w-full rounded px-2 py-1">
              {assignees.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="font-semibold block mb-1">Due date</label>
            <input type="date" className="border w-full rounded px-2 py-1" />
          </div>

          {/* Labels */}
          <div>
            <label className="font-semibold block mb-1">Labels</label>
            <input
              className="border w-full rounded px-2 py-1"
              placeholder="[Value]"
            />
          </div>

          {/* Estimate */}
          <div>
            <label className="font-semibold block mb-1">Estimate</label>
            <input
              className="border w-full rounded px-2 py-1"
              placeholder="[Value]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDrawer;

// import { IoMdClose } from "react-icons/io";
// import { assignees, priorities, statuses } from "../data/mockData";

// function TaskDrawer({ open, onClose }) {
//   return (
//     <div
//       className={`fixed bottom-0 right-0 w-full h-1/2 xl:w-96 xl:h-full bg-white shadow-lg p-6 flex flex-col gap-4 overflow-y-auto rounded-t-lg xl:rounded-none transition-transform duration-300
//       ${open ? "xl:translate-x-0" : "xl:translate-x-full"}`}
//     >
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-3 right-3 p-1 bg-gray-100 rounded-full hover:bg-gray-200"
//       >
//         <IoMdClose size={18} />
//       </button>

//       <h2 className="text-lg font-bold">Task Title</h2>

//       <select className="border rounded px-2 py-1">
//         {statuses.map((status) => (
//           <option key={status} className="capitalize">
//             {status}
//           </option>
//         ))}
//       </select>

//       <select className="border rounded px-2 py-1">
//         {priorities.map((prio) => (
//           <option key={prio}>{prio}</option>
//         ))}
//       </select>

//       <select className="border rounded px-2 py-1">
//         {assignees.map((ass) => (
//           <option key={ass}>{ass}</option>
//         ))}
//       </select>

//       <input
//         type="date"
//         className="border rounded px-2 py-1"
//         defaultValue="2025-12-10"
//       />

//       <textarea
//         placeholder="Description..."
//         className="border rounded p-2 h-24"
//       />

//       <div className="flex flex-col gap-2">
//         <h3 className="font-semibold">Comments</h3>
//         <p className="text-sm text-gray-600">Comment 1</p>
//         <p className="text-sm text-gray-600">Comment 2</p>
//       </div>

//       <div className="flex flex-col gap-2">
//         <h3 className="font-semibold">Activity Log</h3>
//         <p className="text-sm text-gray-600">Created on 2025-12-01</p>
//         <p className="text-sm text-gray-600">Status changed to In Progress</p>
//       </div>
//     </div>
//   );
// }

// export default TaskDrawer;

// import { assignees, priorities, statuses } from "../data/mockData";

// function TaskDrawer() {
//   return (
//     <div className="bg-white shadow-lg p-6 flex flex-col gap-4 fixed bottom-0 right-0 w-full h-1/2 overflow-y-auto rounded-t-lg xl:fixed xl:right-0 xl:top-0 xl:bottom-auto xl:h-full xl:w-96 xl:rounded-none">
//       <h2 className="text-lg font-bold">Task Title</h2>
//       <select className="border rounded px-2 py-1">
//         {statuses.map((status) => (
//           <option key={status} className="capitalize">
//             {status}
//           </option>
//         ))}
//       </select>
//       <select className="border rounded px-2 py-1">
//         {priorities.map((prio) => (
//           <option key={prio}>{prio}</option>
//         ))}
//       </select>
//       <select className="border rounded px-2 py-1">
//         {assignees.map((ass) => (
//           <option key={ass}>{ass}</option>
//         ))}
//       </select>
//       <input
//         type="date"
//         className="border rounded px-2 py-1"
//         defaultValue="2025-12-10"
//       />
//       <textarea
//         placeholder="Description..."
//         className="border rounded p-2 h-24"
//       />
//       <div className="flex flex-col gap-2">
//         <h3 className="font-semibold">Comments</h3>
//         <p className="text-sm text-gray-600">Comment 1</p>
//         <p className="text-sm text-gray-600">Comment 2</p>
//       </div>
//       <div className="flex flex-col gap-2">
//         <h3 className="font-semibold">Activity Log</h3>
//         <p className="text-sm text-gray-600">Created on 2025-12-01</p>
//         <p className="text-sm text-gray-600">Status changed to In Progress</p>
//       </div>
//     </div>
//   );
// }

// export default TaskDrawer;
