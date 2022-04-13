import React from 'react'
import '../styling/Content-styling.css'

const Content = () => {
    const toDoList = [
        {
            id: 1,
            title : "Membuat Komponen",
            completed : true,
        },
        {
            id : 2,
            title : "Unit Testing",
            completed : false,
        },
        {
            id: 3,
            title : "Setup Development Environment",
            completed : true,
        },
        {
            id : 4,
            title : "Deploy ke Server",
            completed : false,
        },
    ];

    return(
        <div>
            {toDoList.map((toDo) => (
                <div className={ `${toDo.completed ? 'warna' : ''}` } style={{ 
                    textDecorationLine: toDo.completed ? 'line-through' : 'none', 
                    textDecorationStyle: 'solid',                    
                    }}>
                        <div className='border'>
                        <h3>
                        {toDo.title}
                        </h3>
                        </div>
                   </div>
            ))}
        </div>
    );
}

export default Content