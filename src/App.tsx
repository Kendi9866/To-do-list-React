import { CircleCheck, X } from "lucide-react"
import { useState } from "react"
import { AddTaskModal } from "./components/AddTaskModal"


export default function App() {
  const [isTaskModalOpen, setTaskModal] = useState(false)
  const [tasks,setTasks] = useState<string[]>([])

  function SetTaskModalOpen(){
    setTaskModal(true)
  }

  function SetTaskModalClosed(){
    setTaskModal(false)
  }
  
  function addTask(task:string){
    setTasks([...tasks, task])
  }

  function deleteTask(id:number){
    const findTask = tasks.filter((_, index)=> index !== id)
    setTasks(findTask)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="max-w-screen-xl flex justify-center items-center flex-col h-full w-full space-y-5">
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-4xl text-black">To do list</h1>
        </div>
        <div className="w-full h-[750px] flex justify-center shadow-md bg-beige overflow-auto">
          <div className="w-full h-fit max-w-4xl flex flex-col p-4 space-y-6">
          {tasks.map((task,index) => (
              <div key={index} className="w-full h-16 px-4 justify-between flex items-center bg-beige text-zinc-800 shadow-lg">
                <div className="flex-1 items-center">
                  <p className="underline font-semibold">{task}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-green-500 hover:text-green-700">
                    <CircleCheck />
                  </button>
                  <button onClick={()=> deleteTask(index)} className="text-red-500 hover:text-red-800">
                    <X />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-start items-center max-w-4xl p-4">
          <button onClick={SetTaskModalOpen} className="hover:bg-green-700 bg-green-600 px-4 py-3 rounded-xl text-white">Adicionar tarefa</button>
        </div>
      </div>
       {isTaskModalOpen && (
        <AddTaskModal
        setTaskModalClosed={SetTaskModalClosed}
        addTask={addTask}
        />
       )}
    </div>
    
  )
}
