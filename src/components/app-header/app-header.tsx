import './app-header.css'

const AppHeader = ({toDo, done}: any) => {
    return (
      <div className="app-header d-flex">
        <h1>todo list</h1>
        <h2>{toDo} more to do, {done} done</h2>
      </div>
    );
  };

export default AppHeader