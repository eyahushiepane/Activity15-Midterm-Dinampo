<template>
    <ion-page>
         <ion-header>
           <ion-toolbar>
             <ion-title>Home Screen</ion-title>
           </ion-toolbar>
         </ion-header>
         <ion-content>
           
         </ion-content>
    </ion-page>
 </template>
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { IonToolbar, IonTitle, IonHeader, IonPage, IonContent } from '@ionic/vue';
 
 export default defineComponent({
   name: "IndexScreen",
   components: { IonToolbar, IonTitle, IonHeader, IonPage, IonContent },
   methods: {
     async nextScreen() {
         this.$router.push('/signin');
     }
   }
 });
 </script>
 