import React from "react";

import { tasksSummary } from "../../data";
import Task from "./Task";

export default function TasksSummary() {
  return (
    <section className="tasks-summary">
      {tasksSummary.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </section>
  );
}
