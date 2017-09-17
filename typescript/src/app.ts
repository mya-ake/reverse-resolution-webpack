import { StringMap } from './models/StringMap'

const KV:StringMap = Object.freeze({
  key: 'value',
  use: 'Object.entries()',
})

const renderKV = (): boolean => {
  const elApp:Element = document.getElementById('app')
  if (elApp === null) {
    return false
  }
  Object.entries(KV).forEach(([key, value]) => {
    const el:Element = document.createElement('div')
    el.textContent = `Key: ${key}, Value: ${value}`
    elApp.appendChild(el)
  })
  return true
}

const asyncRender = (): Promise<string> => {
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

const main = async (): Promise<void> => {
  const result = await asyncRender().catch((err) => console.error(err))
  const elResult = document.createElement('div')
  elResult.textContent = `Result: ${result}`
  document.getElementById('app').appendChild(elResult)
}

main()
