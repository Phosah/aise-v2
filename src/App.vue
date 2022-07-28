<script setup>
import { RouterView, RouterLink } from "vue-router";
import SidebarNav from './components/SidebarNav.vue';
{
  RouterView;
  RouterLink;
}
</script>

<template>
  <main class="font-euclid-circular">
    <SidebarNav />
    <div>
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
@font-face {
  font-family: "NewParisHeadline";
  font-weight: 700;
  src: local("NewParisHeadline"),
    url("./fonts/NewParisHeadlines-Bold.ttf") format("OpenType");
}

@font-face {
  font-family: "NewParisKingSize";
  font-weight: 400;
  src: local("NewParisKingSize"), url("./fonts/NewParisKingSize-Regular.ttf");
}

@font-face {
  font-family: "NewParisKingSize";
  font-weight: 700;
  src: local("NewParisKingSize"), url("./fonts/NewParisKingSize-Bold.ttf");
}

@font-face {
  font-family: "Euclid Circular A";
  font-weight: 300;
  src: local("EuclidCircularA"), url("./fonts/EuclidCircularA-Light.ttf");
}

@font-face {
  font-family: "Euclid Circular A";
  font-weight: 400;
  src: local("EuclidCircularA"), url("./fonts/EuclidCircularA-Regular.ttf");
}

@font-face {
  font-family: "Euclid Circular A";
  font-weight: 500;
  src: local("EuclidCircularA"), url("./fonts/EuclidCircularA-Medium.ttf");
}

@font-face {
  font-family: "Euclid Circular A";
  font-weight: 700;
  src: local("EuclidCircularA"), url("./fonts/EuclidCircularA-Bold.ttf");
}

.font-new-paris-headline {
  font-family: "NewParisHeadline", serif;
  font-weight: 700;
}

.font-new-paris-kingsize-regular {
  font-family: "NewParisKingSize", serif;
  font-weight: 400;
}

/* Add -bold to ...-kingsize font name */
.font-new-paris-kingsize {
  font-family: "NewParisKingSize", serif;
  font-weight: 700;
}

.font-euclid-circular-light {
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 300;
}

.font-euclid-circular {
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 400;
}

.font-euclid-circular-medium {
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 500;
}

.font-euclid-circular-bold {
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 700;
}
</style>