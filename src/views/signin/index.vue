<template>
    <ion-page>
         <ion-header>
           <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
             <ion-title>Sign In Page</ion-title>
           </ion-toolbar>
         </ion-header>
         <ion-content>
            <div class="px-4 py-4">
             <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
             </div>
             <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
             </div>
              
            </div>
         </ion-content>
         <ion-footer>
           <ion-toolbar class="p-1">
             <button slot= "end" class="btn btn-primary w-50">Sign In</button>
           </ion-toolbar>
         </ion-footer>
    </ion-page>
 </template>
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';
 
 export default defineComponent({
   name: "SignInScreen",
   components: { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter }
 });
 </script>
 