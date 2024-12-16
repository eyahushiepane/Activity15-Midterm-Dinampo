<template>
   <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-title>Index Page</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          
        </ion-content>
        <ion-footer>
          <ion-toolbar class="p-1">
            <button slot= "end" class="btn btn-primary w-50" @click="nextScreen()">Next</button>
          </ion-toolbar>
        </ion-footer>
   </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent({
  name: "IndexScreen",
  components: { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
  methods: {
    async nextScreen() {
        this.$router.push('/signin');
    }
  }
});
</script>
