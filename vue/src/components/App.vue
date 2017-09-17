<template>
  <div>
    <div class="items">
      <div v-for="(value, key) in items">
        Key: {{key}}, Value: {{value}}
      </div>
    </div>
    <form-kv v-on:apply="apply"></form-kv>
  </div>
</template>
<script>
import Form from './Form'

const KV = {
  key: 'value',
  use: 'Object.entries()',
}

export default {
  data() {
    return {
      items: KV,
    }
  },
  components: {
    'form-kv': Form,
  },
  methods: {
    apply(value) {
      console.log(value)
      this.items = Object.assign({}, this.items, {
        [value.key]: value.value,
      })
    }
  },
}
</script>
<style scoped>
.items {
  margin-bottom: 24px;
}
</style>
