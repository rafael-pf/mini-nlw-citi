"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Task {
  id: number;
  title: string;
}

export default function MyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {};

  const addTask = async (e: React.FormEvent) => {};

  const updateTask = async (e: React.FormEvent) => {};

  const deleteTask = async (id: number) => {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Task Manager</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addTask} className="flex gap-2">
            <Input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
              className="flex-grow"
            />
            <Button type="submit">Add Task</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between mb-2"
            >
              {editingTask && editingTask.id === task.id ? (
                <form onSubmit={updateTask} className="flex gap-2 flex-grow">
                  <Input
                    type="text"
                    value={editingTask.title}
                    onChange={(e) =>
                      setEditingTask({ ...editingTask, title: e.target.value })
                    }
                    className="flex-grow"
                  />
                  <Button type="submit">Save</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEditingTask(null)}
                  >
                    Cancel
                  </Button>
                </form>
              ) : (
                <>
                  <span>{task.title}</span>
                  <div>
                    <Button
                      variant="outline"
                      onClick={() => setEditingTask(task)}
                      className="mr-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
