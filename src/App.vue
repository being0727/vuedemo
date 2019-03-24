<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
          <Add/>
          <List :comments="comments"/>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import Add from "./components/Add.vue";
import List from "./components/List.vue";
export default {
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        {
          name: 'margo',
          age: 17,
          content: '不错哦顶顶顶顶'
        },
        {
          name: 'margo',
          age: 17,
          content: '说得对  不错哦顶顶顶顶'
        }
      ]
    };
  }
};
</script>

<style>
</style>
