<template>
  <div class="container">
    <ul>
    <li v-for="(item, index) in nav.navigation">
      <a href="#" @click.prevent="description(index)" >{{item.title}}</a>
    </li>
    </ul>
    <thearticle v-if="typeof(index) === 'number'" :index="index"></thearticle>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import thearticle from '@/components/article'
export default {
  name: 'nav',
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapGetters({
      nav: 'getNav',
      index: 'getIndex'
    })
  },
  methods: {
    description (index) {
      this.$store.dispatch('setIndex', index)
    }
  },
  components: {
    thearticle
  }
}
</script>
