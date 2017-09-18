<template>
  <form v-on:submit.prevent="submit" class="form">
    <div>
      <label for="form-key">Key: </label>
      <input id="form-key" type="text" v-model="kv.key">
    </div>
    <div>
      <label for="form-value">Value: </label>
      <input id="form-value" type="text" v-model="kv.value">
    </div>
    <button type="submit">Add</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      kv: {
        key: '',
        value: '',
      },
    }
  },
  methods: {
    submit() {
      this.$emit('apply', this.kv)
      this.clearKV()
    },
    clearKV() {
      this.kv = {
        key: '',
        value: '',
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.form {
  margin-bottom: 24px;
}
</style>
