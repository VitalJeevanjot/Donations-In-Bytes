<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="black"
        :inverted="$q.theme === 'mat'"
      >
        <q-toolbar-title align="center">
          Donate Bytes
          <div slot="subtitle">A medium to donate your Bytes to needy ones.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <q-page class="row">
        <q-card inline class="bigger q-ma-sm">
             <q-card-media>
               <img src="https://i.kinja-img.com/gawker-media/image/upload/s--G-sdBgNR--/c_scale,f_auto,fl_progressive,q_80,w_800/z7jcryloxjedsztssw39.jpg">
             </q-card-media>
             <q-card-title class="relative-position">

               <div class="ellipsis">Donate one</div>
             </q-card-title>
             <q-card-main>
               <p>Donate to our group.</p>
             </q-card-main>
             <q-card-separator />
           </q-card>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
