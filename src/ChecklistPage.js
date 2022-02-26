
function ChecklistPage() {

    const tasks = [
    {
    taskid: 'Do Laundry',
    day: 'Today',
    time: '1pm'
    }, 
    {
    taskid: 'Go to Gym',
    day: 'Today',
    time: '2pm'
    },
    {
    taskid: 'Clean Dishes',
    day: 'Today',
    time: '3pm'
    } 
    ]
    const taskList = tasks.map(task => <h2>{task.day}: {task.taskid} at {task.time}</h2>)
    return (
        <div className='DailyViewClass' 
        style=
        {{
            width: 500, height: 500
        }}> 
        <h1 className='DailyViewHeader'>Daily View</h1> 
        <h2 className= 'ToDoToday'>Stuff to Do Today</h2>
        {
            taskList
        }
            
        <button className='DailyToProfile'>Go To Profile</button>
        <button className='MonthlyView'>Monthly View</button>
        
        <button className='DailyToAddTask'>Add/Remove a Task</button>
           
        
        </div>

        

    )
}



export default ChecklistPage