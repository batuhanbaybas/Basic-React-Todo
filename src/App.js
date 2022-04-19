import { useSelector } from "react-redux";
import ThemeIcon from "./Component/ThemeIcon";
import TodoInput from "./Component/TodoInput";
import TodoLit from "./Component/TodoLit";
import { themeSelector } from "./Redux/themeSlice";


function App() {
  const theme = useSelector(themeSelector);
  return (
    <div className={`${theme ? " bg-dark" : "bg-white"} min-vh-100 pb-5`}>
      <div className="w-25 mx-auto">
        <ThemeIcon />
        <TodoInput />
        <TodoLit />
      </div>
    </div>
  );
}

export default App;
