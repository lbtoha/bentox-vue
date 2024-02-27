        <script setup lang="ts">
        import aboutOne from "@/assets/image/about-1.png";
import AboutCardProfile from "@/components/pages/about/AboutCardProfile.vue";
import AboutEducation from "@/components/pages/about/AboutEducation.vue";
import AboutLetsWorks from "@/components/pages/about/AboutLetsWorks.vue";
import AboutMyExperience from "@/components/pages/about/AboutMyExperience.vue";
import AboutWhatIDo from "@/components/pages/about/AboutWhatIDo.vue";
import ExperienceInNumber from "@/components/pages/about/ExperienceInNumber.vue";
import HelloCard from "@/components/pages/about/HelloCard.vue";
import ProfileCardAbout from "@/components/pages/about/ProfileCardAbout.vue";
        </script>
<template>
     <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="about-body">
        <div className="about-body__1st-row">
          <HelloCard />
          <AboutCardProfile :image="aboutOne" />
        </div>
        <div className="about-body__2nd-row">
          <AboutMyExperience />
          <AboutWhatIDo />
          <ExperienceInNumber />
        </div>
        <div className="about-body__3rd-row">
          <ProfileCardAbout />
          <AboutEducation />
          <AboutLetsWorks />
        </div>
      </div>
    </div>
</template>


<style scoped>

</style>