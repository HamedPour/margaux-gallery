<template lang="html">
    <v-container class="contactBG">
      <h1 class="text-xs-center display-3 fontAdventPro mt-3">Contact</h1>
      <v-divider class="mb-5" dark></v-divider>
      <v-layout wrap>
        <v-flex xs12 md7 lg6 >
          <div class="text-xs-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7425.850500560196!2d2.344252153267369!3d48.84992208184537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe21386f43adc2ff1!2sinception+gallery!5e0!3m2!1sen!2suk!4v1516269423064" max-width="600" width="92%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </v-flex>

        <v-flex xs12 md5 lg6 class="mt-4 pl-4 text-xs-center text-md-left">
          <div>
            <p style="font-size:1.5rem"class="fontAdventPro fontSpread">
              Marguax Gallery <br>
              67 Rue Saint-Jacques <br>
              75005 Paris <br>
              France
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p>
              Monday - Friday 10am-5pm <br>
              Saturday 11am-4pm
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p>
              Tel +33 (0) 1 45 48 55 26 <br>
              Fax +33 (0) 1 45 43 22 78
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p class="scoped_pointer">
              <b>General Enquiries</b> : art@margauxgallery.com <br>
              <b>Sales Enquiries</b> : sales@margauxgallery.com
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p>
              <b>Principal</b> :  Pierre Alcover <br>
              <b>Gallery Director</b> :  René Lefèvre <br>
              <b>Operations Manager</b> :  Clémence Poésy <br>
              <b>Registrar &amp; Logistics Manager</b> :  Roxane Mesquida <br>
              <b>Press &amp; Marketing Manager</b> :  Omar Sy <br>
              <b>Business Development Manager</b> :  David Oyelowo <br>
              <b>Finance Manager</b> :  Djimon Hounsou
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <span class="scoped_pointer">
              <v-icon dark>camera_alt</v-icon> Instagram <br>
              <v-icon dark>camera</v-icon> Artsy <br>
              <v-icon dark>email</v-icon> Join the mailing list <br>
            </span>
            <v-divider dark class="mb-3 mt-3"></v-divider>
            <p class="body-3">
              Marguax Gallery does not accept unsolicited artist's submission
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p>
              <span class="pr-5 scoped_pointer">Disclaimer</span>
              <span class="pl-5 scoped_pointer">Privacy Policy</span>
            </p>
            <v-divider dark class="mb-3"></v-divider>
            <p>
              &copy; 2018 Marguax - Site by HamedPour
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css">
.contactBG {
  background: #353737;
  color: #fff;
}
.scoped_pointer {
  cursor: pointer;
}
</style>
