<template>
    <div class="corporate-banner pt-md-16 pt-8 pb-md-12 pb-8 mt-95" ref="banner">
        <v-container>
            <v-row class="align-center justify-space-between pt-md-7">
                <v-col cols="12" md="5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <div class="d-flex align-center mb-6" ref="animatedText">
                        <span class="bg-warning pa-2 rounded-circle mr-2"></span>
                        <h6 class="text-subtitle-1 text-dark font-weight-bold">Bienvenu à DS-CONSULTING</h6>
                    </div>
                    <h1 class="text-h1 text-dark mb-6">Nous nous occupons, de vous</h1>
                    <p class="text-body-1 text-muted mb-8">Nous accompagnons les hommes et les organisations à découvrir et à gérer au mieux les ressources mises à leur disposition, Nous utilisons de rares outils d'évaluation qui approche l'orientation professionnelle dans une perspective d’épanouissement tout en se concentrant sur quatre domaines clés du design d’une personne:.</p>
                    <v-btn ref="animatedButton" variant="flat" color="primary" size="large" class="px-9">Voir plus</v-btn>
                </v-col>
                <v-col cols="12" md="6" class="mt-md-0 mt-3">
                    <div class="position-relative text-center text-lg-start">
                        <img src="/images/shape/shapeline-2.png" alt="shape" class="img-fluid position-absolute top-0 right-0 mt-n10 mr-n16" />
                        <div class="position-relative z-index1 rounded-md overflow-hidden">
                            <img src="/images/corporate/corporate-banner.jpg" alt="banner" class="img-fluid rounded-md"/>
                        </div>
                        <img src="/images/shape/circle-line-3.png" alt="shape" class="img-fluid position-absolute bottom-0 left-0 mb-n10 ml-n12 " />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    mounted() {
        this.animateBanner();
    },
    methods: {
        animateBanner() {
            gsap.from(this.$refs.banner, { duration: 1, opacity: 0, y: -50 });
            gsap.from(".text-h1", { duration: 1, opacity: 0, y: 20, delay: 0.5 });
            gsap.from(".text-body-1", { duration: 1, opacity: 0, y: 20, delay: 1 });
            gsap.from(".bg-warning", { duration: 1, scale: 0, delay: 1.5 });
            gsap.from(this.$refs.animatedButton, { duration: 1, opacity: 0, x: -50, delay: 2 });
        }
    }
}
</script>