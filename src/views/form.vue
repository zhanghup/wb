<template>
  <div>
    dddddddddddddddddddddddddddddddd
    <zform :fields="fields" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        item1: {
          title: "示例1",
          datas: [
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
        item2: {
          title: "示例1",
          datas: [
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
    };
  }
};
</script>