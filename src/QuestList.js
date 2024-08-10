import QuestItem from "./QuestItem";

export default function QuestList({list}) {
    return <div>
        {list.map(el=><QuestItem task={el}/>)}
    </div>
}