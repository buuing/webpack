<template>
  <div @click="click">{{num}}</div>
</template>

<script>
export default {
    data () {
        return {
            num: 0
        }
    },
    methods: {
        click () {
            this.num++
        }
    }
}
</script>

<style scoped>
</style>
