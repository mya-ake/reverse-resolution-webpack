const KV = Object.freeze({
  key: 'value',
  use: 'Object.entries()',
})

const renderKV = () => {
  const elApp = document.getElementById('app')
  if (elApp === null) {
    return false
  }
  Object.entries(KV).forEach(([key, value]) => {
    const el = document.createElement('div')
    el.textContent = `Key: ${key}, Value: ${value}`
    elApp.appendChild(el)
  })
  return true
}

const asyncRender = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = renderKV()
      if (result === true) {
        resolve('success')
      } else {
        reject('undefined app element')
      }
    }, 2000)
  })
}

const main = async () => {
  const result = await asyncRender().catch((err) => console.error(err))
  const elResult = document.createElement('div')
  elResult.textContent = `Result: ${result}`
  document.getElementById('app').appendChild(elResult)
}

main()
