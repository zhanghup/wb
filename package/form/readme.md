# form 表单说明

## 整体示例（其中，datas可以单独取出）

```js
let fields = {
  item1:{
    title:"示例1",
    datas:[
      {
        title: "标题",
        key: "取值",
        field: "title",
        type: "input:text",
        span: 24,
        default: 1,
        items: [{ title: "状态1", value: 1, disable: true }]
      }
    ]
  },
  item2:{
    title:"示例1",
    datas:[
      {
        title: "标题2",
        key: "取值",
        field: "title",
        type: "input:text",
        span: 24,
        default: 1,
        items: [{ title: "状态1", value: 1, disable: true }]
      }
    ]
  }
}
```

## title 展示的文字说明

## field

最终返回到表单 form 中的字段

例1：fiele:"title",则结果为

```json
{"title":""}
```

例2：fiele:"station.title",则结果为

```json
{"station":{"title":""}}
```



- 若 field 字段为空，则取值 key

## type 表单类型

| 类型           | 数据类型 | 说明                      |
| -------------- | -------- | ------------------------- |
| input:text     | String   | 字符串                    |
| input:textarea | String   | 文本域                    |
| radio          | -        | 单选框，需配合 items 使用 |
| switch         | 0,1      | 开关                      |

## span 占用一行的多少长度，最大 24

## default 默认值

类型： String
类型： Function

## items 用户渲染列表

## action 只显示在某个行为下['add','edit']

如下所示，该字段只会在新增的时候，有效

```json
[
  {
    "title": "标题",
    "key": "取值",
    "field": "title",
    "type": "input:text",
    "action": "add"
  }
]
```
