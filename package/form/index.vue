<template>
  <div class="wrap">
    <el-button @click="open" type="primary" icon="el-icon-search">搜索</el-button>
    <el-drawer size="600px" title="我是标题" :visible.sync="opened" :with-header="false" direction="rtl">
      <div class="content-wrap">
        <div class="content">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          </el-form>
          <tagForm />
        </div>
        <div class="button">
          <el-button>取消</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import tagForm from "./tagForm";
export default {
  name: "zform",
  components: { tagForm },
  props: {
    fields: { type: [Array, Object], required: true }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    open() {
      this.opened = true;
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  display: inline-block;

  .content-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      flex-grow: 1;
    }
    .button {
      display: flex;
      /deep/ button {
        flex-grow: 1;
        margin: 0px;
        border-radius: 0px;
      }
    }
  }
}
</style>
