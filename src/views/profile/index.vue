<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-avatar class="ion-margin-bottom">
          <img alt="Profile picture" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name" placeholder="Enter your name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input v-model="email" type="email" placeholder="Enter your email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Bio</ion-label>
          <ion-textarea v-model="bio" placeholder="Tell us about yourself"></ion-textarea>
        </ion-item>
        <ion-button expand="block" class="ion-margin-top" @click="saveProfile">Save Profile</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'ProfilePage',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonItem, IonLabel, IonInput, IonTextarea, IonButton
    },
    setup() {
      const name = ref('');
      const email = ref('');
      const bio = ref('');
  
      const saveProfile = () => {
        console.log('Profile saved:', { name: name.value, email: email.value, bio: bio.value });
      };
  
      return {
        name,
        email,
        bio,
        saveProfile
      };
    }
  });
  </script>
  