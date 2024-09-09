<script setup lang="ts">
import Header from '@/layouts/header/Header.vue';
import HeroBanner from '@/components/custom-components/HeroBanner.vue';
import Services from '@/components/custom-components/Services.vue';
import BuildAmazing from '@/components/custom-components/BuildAmazing.vue';
import BuildFeature from '@/components/custom-components/BuildFeature.vue';
import ChoosePricePlan from '@/components/custom-components/ChooseYourPlan.vue';
import Portfolio from '@/components/custom-components/Portfolio.vue';
import Blog from '@/components/custom-components/BlogSection.vue';
import Team from '@/components/custom-components/Team.vue';
import Testimonials from '@/components/custom-components/Testimonials.vue';
import Contact from '@/components/custom-components/Contact.vue';
import UpgradetoPro from '@/components/custom-components/UpgradetoPro.vue';
import Footer from '@/layouts/footer/Footer.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);
const smoothScrollTo = (elementRef: string) => {
    const element = ref(elementRef).value;
    if (typeof element === 'object' && element !== null && 'offsetTop' in element) {
        gsap.to(window, { duration: 1, scrollTo: { y: element.offsetTop, offsetY: 70 } }); // Correction de l'offset
    }
};

onMounted(() => {
    const sections = document.querySelectorAll('section'); // Sélectionnez toutes les sections
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", 
                toggleActions: "play none none reverse", 
                once: true 
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out" // Ajout d'une animation moderne
        });
    });
});
</script>
<template>
    <!--Header-->
    <Header @click="smoothScrollTo('heroBanner')" />
    <HeroBanner ref="heroBanner" />
    <Services ref="services" /> <!-- Correction de ref -->
    <BuildAmazing ref="buildAmazing" /> <!-- Correction de ref -->
    <BuildFeature ref="buildFeature" /> <!-- Correction de ref -->
    <ChoosePricePlan ref="choosePricePlan"/> <!-- Correction de ref -->
    <Blog ref="blog"/> <!-- Correction de ref -->
    <!-- <Portfolio/> -->
    <Team ref="team"/> <!-- Correction de ref -->
    <Testimonials ref="testimonials" /> <!-- Correction de ref -->
    <Contact ref="contact"/> <!-- Correction de ref -->
    <!-- <UpgradetoPro/> -->
    <Footer />
</template>

