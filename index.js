let odj = {
  login1: "buvi008",
  login2: "Vad1m",
  login3: "Amin"
}

function addKey (key, obj) {
  if(obj[key]) {
    throw new Error(`Ключ ${key} уже присутствует в ${obj}`)
  } else {
    obj[key] = key
  }
}

function remove(key, obj) {
  delete obj[key]
}

function lookup(obj) {
  return obj[Object.keys(obj).pop()]
}

module.exports = {
  addKey,
  remove,
  lookup
}