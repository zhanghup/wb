class Format {
  constructor(dicts, value) {
    this.dicts = dicts
    this.value = value
  }

  format (fmt) {
    if (fmt.indexOf("dict:")) {
      return this.dictFormat(fmt.slice(5))
    }
  }

  dictFormat (key) {
    if (!this.dicts) {
      return ""
    }
    let o = this.dicts.find(r => r.code == key)
    if (!o) {
      return ""
    }
    if (!o.values) {
      return ""
    }
    o = o.values.find(r => r.value == this.vlaue)
    if (!o) {
      return ""
    }
    return o.name
  }

}


class Value {
  setDicts (list) {
    if (!(list instanceof Array)) {
      console.error("request type Array")
      return
    }
    return this
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

  add (object, field, value) {
    if (!object) {
      return {}
    }
    if (!field) {
      return object
    }

    let i = field.indexOf(".")
    if (i > 0) {
      let key = field.slice(0, i)
      if (!object[key]) {
        object[key] = {}
      }
      object[key] = this.add(object[key], field.slice(i + 1), value)
    } else {
      object[field] = value
    }
    return object
  }
}

window.val = new Value()

export default new Value()