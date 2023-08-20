import LineGraph from "../components/graph/LineGraph"
import Map from "../components/graph/Map"
import TodayDetails from "../components/graph/TodayDetails"


const ChartsAndMap = ( ) => {
  return (
    <div className="w-full h-full ml-8 md:ml-5">
      <TodayDetails/>
      <div className="flex justify-center">
        <LineGraph/>
      </div>
      <Map/>
    </div>
  )
}

export default ChartsAndMap