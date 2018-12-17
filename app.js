const min = document.getElementById('min')
const hour = document.getElementById('hour')
const sec = document.getElementById('sec')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  console.log(`${hour.value}:${min.value}:${sec.value}`)
  const t =
    new Date(2018, 11, 17, hour.value, min.value, sec.value)
      .getTime() - Date.now()
  setTimeout(() => new Notification('test'), t)
})
