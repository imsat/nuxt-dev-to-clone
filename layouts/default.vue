<template>
  <div>
    <the-header />
    <nuxt keep-alive />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
// import TheFooter from '@/components/TheFooter'
// import GithubBanner from '@/components/GithubBanner'
// import CodesandboxBanner from '@/components/CodesandboxBanner'
export default {
  components: {
    TheHeader,
    // TheFooter,
    // GithubBanner,
    // CodesandboxBanner
  }
}
</script>