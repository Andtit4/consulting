<template>
    <!-- -----------------------------------------------
          Start Footer
    ----------------------------------------------- -->
    <v-footer class="footer px-0">
      <v-container>
        <v-row class="py-6 py-sm-7">
          <!-- -----------------------------------------------
          First Column
        ----------------------------------------------- -->
          <v-col cols="12" md="3" sm="6" class="px-xs-0">
            <h4 class="font-weight-medium mb-5 text-h6">Adresse</h4>
            <p class="mt-5 text-muted">71 Rue Kplllee</p>
          </v-col>
          <!-- -----------------------------------------------
          Second Column
        ----------------------------------------------- -->
          <v-col cols="12" md="3" sm="6" class="px-xs-0">
            <h4 class="font-weight-medium mb-5 text-h6">Téléphone</h4>
            <p class="mt-5 text-muted">Reception : +205 123 4567</p>
            <p class="text-muted">Office : +207 235 7890</p>
          </v-col>
          <!-- -----------------------------------------------
          Third Column
        ----------------------------------------------- -->
          <v-col cols="12" md="3" sm="6" class="px-xs-0">
            <h4 class="font-weight-medium mb-5 text-h6">Email</h4>
            <p class="mt-5 text-muted">
              Office : <NuxtLink class="text-dark text-decoration-none" to="mailto:info@dsconsulting.com">info@dsconsulting.com</NuxtLink>
            </p>
            <p>
              <span class="text-muted">Site : </span>
              <NuxtLink class="text-dark text-decoration-none" href="#"
                >dsconsulting.com</NuxtLink
              >
            </p>
          </v-col>
          <!-- -----------------------------------------------
          Fourth Column
        ----------------------------------------------- -->
          <v-col cols="12" md="3" sm="6" class="px-xs-0">
            <h4 class="font-weight-medium mb-5 text-h6">Social</h4>
            <div class="social-icons mt-5">
              <NuxtLink to="/">
                <i class="mdi mdi-facebook"></i>
              </NuxtLink>
              <NuxtLink to="/">
                <i class="mdi mdi-twitter"></i>
              </NuxtLink>
              <NuxtLink to="/">
                <i class="mdi mdi-google-plus"></i>
              </NuxtLink>
              <NuxtLink to="/">
                <i class="mdi mdi-youtube"></i>
              </NuxtLink>
              <NuxtLink to="/">
                <i class="mdi mdi-instagram"></i>
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
        <div class="footer-bottom-bar mt-sm-5 mt-0 font-14 ml-sm-0 ml-n3">
          <div class="d-block d-sm-flex align-center">
            <p class="text-muted mb-sm-0 mb-3">
              All Rights Reserved by
              <NuxtLink to="#" class="text-muted text-decoration-none">AndTit4</NuxtLink>
            </p>
            <div class="ml-auto">
              <div class="d-sm-flex align-center">
                <NuxtLink  to="/" class="text-muted text-decoration-none px-sm-4 ps-0">Terms of Use</NuxtLink>
                <NuxtLink to="/" class="text-muted text-decoration-none px-sm-4 px-2">Legal Disclaimer</NuxtLink>
                <NuxtLink to="/" class="text-muted text-decoration-none px-sm-4 px-2">Privacy Policy</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-footer>
    <!-- -----------------------------------------------
          End Footer
    ----------------------------------------------- -->
  </template>
  