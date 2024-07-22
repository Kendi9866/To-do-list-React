import { X } from "lucide-react"
import { useState } from "react";

interface AddTaskModalProps{
  setTaskModalClosed: () => void;
  addTask: (task:string) => void
}




export function AddTaskModal({addTask ,setTaskModalClosed}:AddTaskModalProps){
  const [taskText, setTaskText] = useState<string>('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
      setTaskModalClosed();
    }
  };


  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center flex-col ">
      <div className="w-[640px] bg-white/80 space-y-6 p-4">
        <div className="flex justify-between">
          <p className="font-semibold">Adicionar tarefa</p>
          <button onClick={setTaskModalClosed}> <X/> </button>
        </div>
        <div className="flex items-center">
          <input 
          placeholder="Escreva aqui a tarefa" 
          className="w-full px-2 py-2 rounded-lg bg-white/70 border border-black" 
          type="text" 
          value={taskText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)}
          />
        </div>
        <button onClick={handleAddTask} className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">
          Adicionar tarefa
        </button>
      </div>
    </div>
  )
}