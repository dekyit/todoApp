const React = require('react')



function Home({tasks, complete}){
    // console.log("TASKS :", tasks)
    // CONSOLE.LOG("COMPLETE:", complete)
    return(
        <html>
            <head>
                <title>To Do App</title>
            </head>
            <body>
                <h1>A Simple To Do List App</h1>
                <form action = "/todos" method = "POST">
                    <input type= "text" id="add" name ="add" placeholder="add new task"></input>
                    <button type="submit">Add Tasks</button>
                </form>
                <h2>Added Tasks</h2>
                <ul>    
                    {tasks.map((item, index) => {
                        return (
                            <li style={{display: "flex", margin: 8}} key={index}>
                            {item}
                            <form style = {{margin: 2}} action={`/todos/${index}?_method=PUT`} method="POST">
                                <button type="submit">&#10003;</button>
                            </form>
                            <form style = {{margin: 2}} action={`/todos/${index}?_method=DELETE`} method="DELETE">
                                <button type="submit">&#10005;</button>
                            </form>
                        </li>
                        )
                    })}
                <li>bla</li>
                <li>bla</li>
        </ul>
        <h2>Completed Tasks</h2>
            <ul>
            {complete.map((item, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox" defaultChecked />
                                {item}
                            </li>
                        )
                    })}
                <li>bla</li>
                <li>bla</li>
            </ul>
        </body>
        </html>
    )

    

}

module.exports = Home