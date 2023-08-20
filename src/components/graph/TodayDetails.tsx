import { useWorldData } from "../../api"

const TodayDetails = () => {
  const { data:worldData } = useWorldData();
  return (
    <div className="flex-wrap flex justify-center items-center gap-5  h-full md:h-52 xl:h-48 p-4 lg:p-1">
      <div className="rounded-xl shadow-xl bg-red-500 text-white text-center p-5 w-80">
          <h1>{worldData?.todayCases}</h1>
          <h3>Today's Cases</h3>
      </div>
      <div className="rounded-xl shadow-xl bg-blue-500 text-white text-center p-5 w-80">
          <h1>{worldData?.todayRecovered}</h1>
          <h3>Today's Recovered</h3>
      </div>
      <div className="rounded-xl shadow-xl bg-yellow-500 text-white text-center p-5 w-80">
          <h1>{worldData?.todayDeaths}</h1>
          <h3>Today's Deaths</h3>
      </div>
    </div>
  )
}

export default TodayDetails