import React from "react"
import TodoItem from './TodoItem'

function MainContent(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    fontSize: 30
  }

  if (hours < 12){
    timeOfDay = "morning"
    styles.color = "#04756F"
  }
  else if (hours >=12 && hours < 17){
    timeOfDay = "afternoon"
    styles.color = "#2E0927"
  }
  else {
    timeOfDay = "evening"
    styles.color = "#D90000"

  }



    return(
        <main>
          <h2 style={styles}>Good {timeOfDay}!</h2>
          <h3>It's currently about {date.getHours() % 12} o'clock</h3>
          <div className="todo-list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
          </div>
        </main>
    )
}

export default MainContent