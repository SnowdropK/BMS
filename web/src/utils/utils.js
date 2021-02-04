function formateDate(stamp){
  if (!stamp) return '';
  let date = new Date(stamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export default {
  formateDate
}