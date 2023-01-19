
import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
function home() {
  return (
    <div className=" bg-orange-300 flex  border-x-orange-800 p-2 mt-5 rounded-lg shadow-md">
       <Popular/>
       <Veggie/>
    </div>
  )
}

export default home