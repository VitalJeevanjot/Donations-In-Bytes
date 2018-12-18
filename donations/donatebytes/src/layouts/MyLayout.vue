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
      <q-page>
        <div style="column-count: 3; column-gap: 4px;">
        <div style="width:30%; height: 30%">
          <q-card inline class="q-ma-sm">
        <q-card-media>
          <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
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
              <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
          </div>
          </q-btn>
        </q-card-actions>
        </q-card>
        </div>

      <div style="width:30%; height: 30%">
        <q-card inline class="q-ma-sm">
      <q-card-media>
        <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis">Cafe Basilico</div>
      </q-card-title>
      <q-card-main>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting. 2</p>
      </q-card-main>
      <q-card-separator />
      <!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
      <q-card-actions align="center">
          <q-btn color="white" style="width: 100%" align="center">
        <div style="width:100%" >
            <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
        </div>
        </q-btn>
      </q-card-actions>
      </q-card>
      </div>

    <div style="width:30%; height: 30%">
      <q-card inline class="q-ma-sm">
    <q-card-media>
      <img src="https://www.w3schools.com/images/colorpicker.gif" style="object-fit: cover;">
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
          <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
      </div>
      </q-btn>
    </q-card-actions>
    </q-card>
    </div>

  <div style="width:30%; height: 30%">
    <q-card inline class="q-ma-sm">
  <q-card-media>
    <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
  </q-card-media>
  <q-card-title class="relative-position">
    <div class="ellipsis">Cafe Basilico</div>
  </q-card-title>
  <q-card-main>
    <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.3</p>
  </q-card-main>
  <q-card-separator />
  <!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
  <q-card-actions align="center">
      <q-btn color="white" style="width: 100%" align="center">
    <div style="width:100%" >
        <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
    </div>
    </q-btn>
  </q-card-actions>
  </q-card>
  </div>

<div style="width:30%; height: 30%">
  <q-card inline class="q-ma-sm">
<q-card-media>
  <img src="https://tpc.googlesyndication.com/simgad/2763227931070135707" style="object-fit: cover;">
</q-card-media>
<q-card-title class="relative-position">
  <div class="ellipsis">Cafe Basilico</div>
</q-card-title>
<q-card-main>
  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.4</p>
</q-card-main>
<q-card-separator />
<!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
<q-card-actions align="center">
    <q-btn color="white" style="width: 100%" align="center">
  <div style="width:100%" >
      <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
  </div>
  </q-btn>
</q-card-actions>
</q-card>
</div>

<div style="width:30%; height: 30%">
  <q-card inline class="q-ma-sm">
<q-card-media>
  <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
</q-card-media>
<q-card-title class="relative-position">
  <div class="ellipsis">Cafe Basilico</div>
</q-card-title>
<q-card-main>
  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.4</p>
</q-card-main>
<q-card-separator />
<!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
<q-card-actions align="center">
    <q-btn color="white" style="width: 100%" align="center">
  <div style="width:100%" >
      <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
  </div>
  </q-btn>
</q-card-actions>
</q-card>
</div>

<div style="width:30%; height: 30%">
  <q-card inline class="q-ma-sm">
<q-card-media>
  <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
</q-card-media>
<q-card-title class="relative-position">
  <div class="ellipsis">Cafe Basilico</div>
</q-card-title>
<q-card-main>
  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.4</p>
</q-card-main>
<q-card-separator />
<!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
<q-card-actions align="center">
    <q-btn color="white" style="width: 100%" align="center">
  <div style="width:100%" >
      <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
  </div>
  </q-btn>
</q-card-actions>
</q-card>
</div>

<div style="width:30%; height: 30%">
  <q-card inline class="q-ma-sm">
<q-card-media>
  <img src="https://pay.google.com/about/static/images/logos/google-pay-logo.svg" style="object-fit: cover;">
</q-card-media>
<q-card-title class="relative-position">
  <div class="ellipsis">Cafe Basilico</div>
</q-card-title>
<q-card-main>
  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.4</p>
</q-card-main>
<q-card-separator />
<!-- Added width then in that width a div tag to full the button width and as child give reference to image width % size to get right size on pc and mobile -->
<q-card-actions align="center">
    <q-btn color="white" style="width: 100%" align="center">
  <div style="width:100%" >
      <img src="https://lh3.googleusercontent.com/YtuGzrxbA3Xx51Kg7cNctJrK0IEKHlstSRUz9Y1WyQrJK9b5ZUqAMIR3cMjNBuqKFuk=s180" style="width:7%"/>
  </div>
  </q-btn>
</q-card-actions>
</q-card>
</div>
      </div>
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
