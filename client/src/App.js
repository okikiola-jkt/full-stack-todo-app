import React from 'react'

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome Okiki</h1>
      <h4>Your task</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox">
            <div className="text">
              Get the bread
            </div>
            <div className="delete">X</div>
          </div>
        </div>

        <div className="todo-is-complete">
          <div className="checkbox">
            <div className="text">
              Get the bread
            </div>
            <div className="delete">X</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

