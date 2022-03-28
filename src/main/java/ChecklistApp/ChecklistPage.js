
function ChecklistPage() {

    // place holder for now. When connected with thhe add a task page, tasks should be added into this array w/ this format
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

    function LoadDailyToProfile(event){
        console.log("Button clicked, testing");
    }

    function LoadDailyToMonthly(event){
        console.log("Button clicked, testing");
    }

    function LoadDailyToTaskAdder(event){
        console.log("Button clicked, testing");
    }
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
            
        <button className='DailyToProfile' onClick = {LoadDailyToProfile} >Go To Profile 
        </button>
        <button className='MonthlyView' onClick = {LoadDailyToMonthly}>Monthly View</button>
        
        <button className='DailyToAddTask' onClick = {LoadDailyToTaskAdder}>Add/Remove a Task</button>
           
        
        </div>

        

    )
}



export default ChecklistPage