// import { use } from 'react'
// import { convertTimestampToHoursAndMinutes } from '@/utils/convertTimestampToHoursAndMinutes'
// import { extractWeatherHistoryData } from '@/utils/extractWeatherHistoryData'
// import execute from '@/useCase/ecowitt/device-real-time-use-case'

// export function Teste() {
//   const deviceHistoryData = use(execute())

//   if (!deviceHistoryData) {
//     return <></>
//   }

//   const weatherHistoryData = extractWeatherHistoryData(deviceHistoryData)

//   return (
//     <div>
//       <p>
//         max: {weatherHistoryData.outdoor.temperature.max.value} - {''}
//         {convertTimestampToHoursAndMinutes(
//           weatherHistoryData.outdoor.temperature.max.timestamp,
//         )}
//       </p>
//       <p>
//         min: {weatherHistoryData.outdoor.temperature.min.value} - {''}
//         {convertTimestampToHoursAndMinutes(
//           weatherHistoryData.outdoor.temperature.min.timestamp,
//         )}
//       </p>
//     </div>
//   )
// }
