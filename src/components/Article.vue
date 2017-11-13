<template>
  <div class="container">
    <h1>{{nav.navigation[index].title}}</h1>
    <img :src="nav.navigation[index].src" alt="">
    <p v-for="(value, key, index) in    navigation[index].navigation.description">{{key}} - {{value}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'thearticle',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      nav: 'getNav'
    })
  },
  props: {
    index: { type: Number, require: true }
  }
}
</script>
