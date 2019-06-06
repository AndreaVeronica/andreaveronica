<template>
  <div id="hey">
    {{ msg}}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      msg: "hey this worked"
    }
  }
}
</script>

<style>
#hey {
  text-align: center;
}
</style>