import Generate_btn from "./components/Generate_btn"
import Generated_PW from "./components/Generated_PW"
import dinosayr from "./assets/dinosayr.png"
function App() {

  return (
    <>
    <img src={dinosayr} alt="dinosaur" className="w-3/4 max-w-md min-w-100"/>
    <div className=" max-w-xl p-5">
      <Generated_PW />
      <Generate_btn />
      </div>
    </>
  )
}

export default App
