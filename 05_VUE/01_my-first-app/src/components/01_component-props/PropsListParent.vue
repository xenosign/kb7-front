<template>
  <div>
    <PropsListChild
      siteName="네이버"
      siteUrl="http://naver.com"
      visited="방문"
    />
    <PropsListChild
      siteName="다음"
      siteUrl="http://daum.net"
      visited="미방문"
    />
    <PropsListChild2 :siteInfo="siteData" />
  </div>
</template>

<script>
import PropsListChild from './PropsListChild.vue';
import PropsListChild2 from './PropsListChild2.vue';

export default {
  name: 'App',
  data() {
    return {
      siteData: {
        siteName: '페이스북',
        siteUrl: 'http://facebook.com',
        visited: '방문',
      },
    };
  },
  components: {
    PropsListChild,
    PropsListChild2,
  },
};
</script>
