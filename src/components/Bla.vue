<template lang="pug">
  .hello
    h1.h1 {{ msg }}
</template>

<script>
export default {
  name: 'Bla',
  props: {
    msg: String
  }
}
</script>

<style lang="sass">
    .h1
        color: red
</style>
