export const tasks = [
  // Backlog: 3 tasks
  {
    id: 1,
    title: "Design new logo",
    status: "backlog",
    priority: "high",
    dueDate: "2025-12-10",
    assignee: "John Doe",
    comments: 3,
    attachments: 2,
  },
  {
    id: 2,
    title: "Research competitors",
    status: "backlog",
    priority: "medium",
    dueDate: "2025-12-12",
    assignee: "Alice Johnson",
    comments: 1,
    attachments: 0,
  },
  {
    id: 3,
    title: "Plan marketing strategy",
    status: "backlog",
    priority: "low",
    dueDate: "2025-12-15",
    assignee: "Bob Brown",
    comments: 0,
    attachments: 1,
  },

  // To Do: 2 tasks
  {
    id: 4,
    title: "Implement authentication",
    status: "todo",
    priority: "high",
    dueDate: "2025-12-15",
    assignee: "Jane Smith",
    comments: 1,
    attachments: 0,
  },
  {
    id: 5,
    title: "Update API endpoints",
    status: "todo",
    priority: "medium",
    dueDate: "2025-12-25",
    assignee: "John Doe",
    comments: 0,
    attachments: 0,
  },

  // In Progress: 3 tasks
  {
    id: 6,
    title: "Develop frontend UI",
    status: "inprogress",
    priority: "medium",
    dueDate: "2025-12-18",
    assignee: "Jane Smith",
    comments: 4,
    attachments: 1,
  },
  {
    id: 7,
    title: "Optimize performance",
    status: "inprogress",
    priority: "high",
    dueDate: "2025-12-20",
    assignee: "Alice Johnson",
    comments: 2,
    attachments: 3,
  },
  {
    id: 8,
    title: "Test new features",
    status: "inprogress",
    priority: "low",
    dueDate: "2025-12-22",
    assignee: "Bob Brown",
    comments: 5,
    attachments: 0,
  },

  // Done: 2 tasks
  {
    id: 9,
    title: "Fix bug in dashboard",
    status: "done",
    priority: "high",
    dueDate: "2025-12-05",
    assignee: "Bob Brown",
    comments: 2,
    attachments: 3,
  },
  {
    id: 10,
    title: "Write documentation",
    status: "done",
    priority: "low",
    dueDate: "2025-12-20",
    assignee: "Alice Johnson",
    comments: 5,
    attachments: 1,
  },
];

export const projects = ["Project A", "Project B", "Project C"];

export const priorities = ["low", "medium", "high"];

export const statuses = ["backlog", "todo", "inprogress", "done"];

export const assignees = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
];
