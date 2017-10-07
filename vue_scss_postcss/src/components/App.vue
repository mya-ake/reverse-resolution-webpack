<template>
  <section>
    <h3>Object entries.</h3>
    <div class="items">
      <div v-for="(value, key) in items" v-bind:key="'v-' + key">
        Key: {{key}}, Value: {{value}}
      </div>
    </div>
    <section>
      <h4>Add object entry</h4>
      <form-kv v-on:apply="apply"></form-kv>
    </section>
  </section>
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
<style lang="scss">
html {
  height: 100%;
  margin: 0;
}

body {
  min-height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  &__header {
  }
  &__body {
    &-image {
      width: $size-iamge * 2;
      height: $size-iamge;
      margin: auto auto 48px;
      background-image: url('../images/webpack.png'), url('../images/vue.png');
      background-position: left, right;
      background-size: contain, contain;
      background-repeat: no-repeat;
    }
  }
  &__footer {
    margin-top: auto;
  }
}

.items {
  margin-bottom: 24px;
}
</style>
