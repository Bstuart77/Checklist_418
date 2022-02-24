import {useState} from 'react'
//import {Box, Button} from '@mui/material'

function ChecklistPage() {
    return (
        <div className='DailyViewClass' 
        style=
        {{
            width: 500, height: 500
        }}> 
        <h1 className='DailyViewHeader'>Daily View</h1> 
        <h2 className= 'ToDoToday'>Stuff to Do Today</h2>
        <h2>Testing</h2>
        <h2>Testing</h2>
        <h2>Testing</h2>
            
        <button className='ChecklistToProfile'>Go To Profile</button>
        <button className='MonthlyView'>Monthly View</button>
        <button className='DailyView'>Daily View</button>
           
        </div>

        

    )
}



export default ChecklistPage