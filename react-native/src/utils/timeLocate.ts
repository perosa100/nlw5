export function timeActual() {
  var dateActual = new Date()
  var currentTimeZoneOffsetInHours = dateActual.getTimezoneOffset() / 60
  console.log(currentTimeZoneOffsetInHours)

  var date = new Date(
    dateActual.getFullYear(),
    dateActual.getMonth(),
    dateActual.getDate(),
    dateActual.getHours() - currentTimeZoneOffsetInHours,
    dateActual.getHours(),
    dateActual.getSeconds(),
    dateActual.getMilliseconds()
  )

  return date
}
