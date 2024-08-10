export default function QuestItem({task}) {
    return <div>
        <div className="inline-flex p-2">
            <input type='checkbox'
            checked={task.done}
            className='checkbox checkbox-success mr-4'
            />
            <p
            className={`${task.done?"line-through":""}`}
            >{task.title}</p>
        </div>
    </div>
}