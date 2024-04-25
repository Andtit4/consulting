import { CheckIcon } from 'vue-tabler-icons';

<template>
    <div class="py-md-15 py-sm-8">
        <v-container>
            <v-row class="align-center">
                <v-col cols="12" md="6">
                    <div class="text-md-start text-center">
                        <img src="/images/corporate/build-everything.png" alt="image" class="img-fluid" />
                    </div>
                </v-col>
                <v-col cols="12" md="6" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <div class="d-flex align-center mb-5">
                        <span class="bg-warning pa-2 rounded-circle mr-2"></span>
                        <h6 class="text-subtitle-1 text-dark font-weight-bold">A Propos</h6>
                    </div>
                    <h2 class="text-h2 text-dark mb-md-8 mb-6">Ce que nous faisons</h2>
                    <p class="text-muted mb-md-11 mb-5 text-body-1">Nous proposons des services complets et divergents à
                        toute personne, toute entreprise à la quête de l’optimisation de son potentiel de croissance et
                        de développement.

                        .</p>
                    <v-btn variant="flat" color="primary" size="large" class="px-9">Nous contacter</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>