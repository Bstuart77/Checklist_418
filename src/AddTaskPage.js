import React, { useState } from "react";
import "./AddTaskPage.css";

function AddTaskPage() {

    function CategoryDropdown(){
        return(
            <div className = "CategoryDropdown">
                
            </div>
        )
    }

    return (
        <div className = "AddTaskCardBody">
            <div className = "TaskCardGrid">
                <div className = 'AddTaskCard'> 
            
                    <h1 className='AddTaskHeader'> Add a Task </h1> 
                    
                    <form>
                        <label className = 'TitleLabel'> Title </label>
                    <br/>
                        <input className = 'TitleBox' 
                            type = "text" required
                            placeholder="Ex: Do Homework"
                        />
                    <br/>
                    <br/>
                        <label className = 'DateTimeLabel'> Date and Time </label>
                    <br/>
                        <input className = 'DateTimeBox' 
                            type = "text" required
                            placeholder="Ex: March 15 by 3:00"
                        />
                    <br/>
                    <br/>   
                        <label className = 'CategoryLabel'> Category </label>
                        <label className = 'ColorLabel'> Color </label>
                    <br/>
                    

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <input className = 'NotesBox' 
                            type = "text" required
                            placeholder="Notes"
                        />
                
                    </form>
                        
                    <button className='AttachFilesButton'> Attach Files </button>
                    <button className='CancelButton'> Cancel </button>
                    <button className='SaveButton'> Save </button>
    
                </div>


            </div>

        </div>
    )
}

export default AddTaskPage