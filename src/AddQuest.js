import { useRef, useState } from "react"

export default function AddQuest({appendQuest}){
    const questInput = useRef(null);
    const [title, setTitle] = useState("");
        
    function addNewQuest(){
        setTitle(title.trim());
        if (title==='') return;
        appendQuest(title)
        questInput.current.value = "";
    }

    return <div
    className="flex gap-4 w-full 
    justify-center items-center">
        <input 
        className="bg-blue-600
            rounded-full pl-0 
            input-sm flex w-[70%]
            focus-within:outline-none"
            ref={questInput}
            onChange={event=>setTitle(event.target.value)}
            onKeyDown={event=> event.key.toUpperCase()==='ENTER' && addNewQuest()}
            
        />
        <button
        className="rounded-full
            bg-green-600 h-fit
            px-2 text-lg"
            onClick={addNewQuest}
        >+</button>
    </div>
}