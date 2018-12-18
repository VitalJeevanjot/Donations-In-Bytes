<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="black"
        :inverted="$q.theme === 'mat'"
      >
      <!-- Make title bar looks more interesting... -->
        <q-toolbar-title align="center">
          Donate Bytes
          <div slot="subtitle">A medium to donate your Bytes to needy ones.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
<!-- Two tabs Startups/Needy -->
<!-- Add a progressbar with button that say donate (Button iwth deterministic progress) -->
<!-- Add good icon to donate buttons -->
    <q-page-container>
      <q-page class="row justify-center">
          <q-list no-border>
            <q-item v-for='item in items' :key='item.title' sparse>
          <q-card inline class="q-ma-sm no-wrap" style="width: 100%">
        <q-card-media align="center">
          <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/02/google-pacman-796x419.jpg" style="object-fit: contain; width: 350px; height: 300px;">
        </q-card-media>
        <q-card-title class="relative-position">
          <div class="ellipsis">Cafe Basilico</div>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
        </q-card-main>
        <q-card-separator />
        <!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
        <q-card-actions align="center">
            <q-btn color="white" style="width: 100%" align="center">
          <div style="width:100%" >
              <img class="cover" src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
          </div>
          </q-btn>
        </q-card-actions>
        </q-card>
      </q-item>
    </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      items: [{}, {}, {}]
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
