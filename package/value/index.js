class Format {
  constructor(dicts, value) {
    this.dicts = dicts
    this.value = value
  }

}


class Value {
  setDicts (list) {
    if (!(list instanceof Array)) {
      console.error("request type Array")
      return
    }
  }

  slice_eq = /\[\](.*)\.(.*?)\s*={2,3}\s*(.*?)$/
  getSingleValue (key, object) {
    if (!object) {
      return null
    }
    let o = JSON.parse(JSON.stringify(object))
    let keys = key.split('.')
    for (let k of keys) {
      if (o[k] != undefined) {
        o = o[k]
      } else {
        o = null
      }
    }
    return o
  }

  typeString = /"(.*?)"|'(.*?)'/

  getValue (key, object) {

    if (!this.slice_eq.test(key)) {
      return this.getSingleValue(key, object)
    }
    let ss = key.split(";")

    let r = ss[0].match(this.slice_eq)
    let keys = r[1]
    let field = r[2]
    let optValue = r[3]
    let ofield = ss.slice(1).join(";")

    let slice = this.getSingleValue(keys, object)
    if (!(slice instanceof Array)) {
      if (slice === null) {
        return null
      }
      console.error('只接受数组类型，但是获取到的是：', slice)
      return slice
    }

    if (this.typeString.test(optValue)) {
      let fieldSh = optValue.match(this.typeString)
      if (fieldSh && fieldSh.length > 2) {
        optValue = fieldSh[1] || fieldSh[2]
      }
    } else if (/^\d+$/.test(optValue)) {
      optValue = parseInt(optValue)
    } else if (/^\d+\.\d+$/.test(optValue)) {
      optValue = parseInt(optValue)
    }
    let oo = slice.find(r => {
      return r[field] === optValue
    })

    return this.getValue(ofield, oo)
  }



  val (key, object) {
    return new Format(this.dicts, this.getValue(key, object))
  }

  valf () {

  }
}

window.val = new Value()

export default new Value()