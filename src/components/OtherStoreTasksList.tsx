import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, CalendarDays, User, Plus } from "lucide-react";
import { tasks as allTasks } from "@/data/tasks";
import TaskHeader from "@/components/TaskHeader";

const statusTabs = [
  { label: "Pending", count: 14 },
  { label: "In Progress", count: 11 },
  { label: "Completed", count: 3 },
];

export default function OtherStoreTasksList({ fullView, onViewAll, onBack }) {
  const [activeStatus, setActiveStatus] = useState("Pending");
  const [search, setSearch] = useState("");
  const tasks = allTasks.filter(t => t.group === "other" && t.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className={fullView ? "min-h-screen bg-[#181f60] pt-0" : ""}>
      {fullView ? (
        <>
          <TaskHeader title={"Today's Tasks"} onBack={onBack} />
          <div className="bg-white rounded-t-2xl p-4 -mt-4 min-h-screen">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-base mr-2">Other Store Tasks</span>
              <span className="bg-[#f0f4ff] text-xs rounded-full px-2 py-0.5 font-semibold">{tasks.length}</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">Showing all the tasks that are assigned to other store associates</div>
            <div className="flex gap-2 mb-4">
              {statusTabs.map(tab => (
                <button
                  key={tab.label}
                  className={`px-3 py-1 rounded-full border text-xs font-semibold ${activeStatus === tab.label ? 'bg-[#e6ecff] text-[#181f60] border-[#181f60]' : 'bg-white text-gray-600 border-gray-300'}`}
                  onClick={() => setActiveStatus(tab.label)}
                >
                  {tab.label} <span className="ml-1">{tab.count}</span>
                </button>
              ))}
            </div>



            <div className="overflow-y-auto max-h-[calc(100vh-200px)] pb-12">
              {tasks.map((task, i) => (
                <Card className="mb-3 p-4" key={i}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-base">{task.title}</span>
                      <ChevronRight className="text-gray-400" size={20} />
                    </div>
                    <div className="flex gap-2 mb-1">
                      {task.priority === 'High Priority' && <Badge className="bg-red-100 text-red-800" variant="secondary">High Priority</Badge>}
                      {task.priority === 'Medium Priority' && <Badge className="bg-yellow-100 text-yellow-800" variant="secondary">Medium Priority</Badge>}
                      {task.priority === 'New' && <Badge className="bg-blue-100 text-blue-800" variant="secondary">New</Badge>}
                      {task.type && <Badge className="bg-gray-100 text-gray-800" variant="secondary">{task.type}</Badge>}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <span className="flex items-center"><CalendarDays className="mr-1" size={14} /> Due: {task.due}</span>
                      <span className="flex items-center ml-4"><User className="mr-1" size={14} /> To: {task.assignee}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {fullView && <button className="fixed bottom-24 right-6 bg-[#4f5fff] text-white rounded-full p-4 shadow-lg"><Plus size={24} /></button>}
          </div>
        </>
      ) : (
        <>
          {tasks.slice(0, 3).map((task, i) => (
            <Card className="mb-3 p-4 cursor-pointer" key={i}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-base">{task.title}</span>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
                <div className="flex gap-2 mb-1">
                  {task.priority === 'High Priority' && <Badge className="bg-red-100 text-red-800" variant="secondary">High Priority</Badge>}
                  {task.priority === 'Medium Priority' && <Badge className="bg-yellow-100 text-yellow-800" variant="secondary">Medium Priority</Badge>}
                  {task.priority === 'New' && <Badge className="bg-blue-100 text-blue-800" variant="secondary">New</Badge>}
                  {task.type && <Badge className="bg-gray-100 text-gray-800" variant="secondary">{task.type}</Badge>}
                </div>
                <div className="flex items-center text-xs text-gray-500 gap-2">
                  <span className="flex items-center"><CalendarDays className="mr-1" size={14} /> Due: {task.due}</span>
                  <span className="flex items-center ml-4"><User className="mr-1" size={14} /> To: {task.assignee}</span>
                </div>
              </div>
            </Card>
          ))}
          <button className="mx-auto block text-[#2563eb] text-sm font-semibold mt-2 mb-1" onClick={onViewAll}>View All</button>
        </>
      )}
    </div>

  );
} 