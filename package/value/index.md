# 获取对象中的值，若没有取到，则返回null，可以无限层次下取

初始化：

```js
  new Value().setDicts([])
```

例1：

```js
var a = {
  a:{
    name:"站点",
    devices:[{
      id:1,
      name:"设备1"
    },{
      id:2,
      name:"设备12",
      sensors:[{
        id:3,
        name:"压力"
      },{
        id:4,
        name:"流量"
      }]
    }]
  }
}

console.log(val.val("a.name",a).value) // 站点
console.log(val.val("[]a.devices.id==1;name",a).value) // 设备1
console.log(val.val("[]a.devices.id==2;[]sensors.id==4;name",a).value) // 流量
```


