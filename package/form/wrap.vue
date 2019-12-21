<template>
  <div class="wrap">
    <el-button @click="open" type="primary" icon="el-icon-search">搜索</el-button> 
    <el-drawer
        title="我是标题"
        :visible.sync="opened"
        :with-header="false"
        direction="rtl"
    >
    
    </el-drawer>
  </div>
</template>
<script>
export default {
  name:"wrap",
  data(){
    return {
      opened:false,
    }
  },
  methods:{
    open(){
      this.opened = true
    }
  }
}
</script>

<style scoped>
.wrap{
  display:inline-block;

}
</style>
