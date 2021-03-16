<template>
  <input :value="value" :type="type" @input='handleInput' v-bind='$attrs'>
</template>

<script>
export default {
  name: 'LgInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value);
      const findParent = parent => {
        while(parent) {
          if (parent.$options.name === 'LgFormItem') {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate');
        // parent.validate()
      }
    },
  }
}
</script>

<style>

</style>