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

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
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

        {/* RIGHT SIDE */}
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
