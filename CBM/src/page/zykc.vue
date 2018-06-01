<template>
    <div>
    <Header></Header>
    <Container></Container>
    <div class="about">
        <div class="aboutw3-agileinfo">
          <!-- container -->
          <div class="container">
            <h2 class="agileits-title">地区分布</h2>
        <div class="about-bottom">
          <!-- container -->
          <div class="container">
            <div class="about-agileinfo">
              <div class="about-w3grid">
                <img src="../images/meicengqi.jpg" alt="" />
                <h5>中国的煤层气分布</h5>
                <p>我国煤层气资源丰富。据煤层气资源评价，我国埋深2000m以浅煤层气地质资源量约36万亿m3，主要分布在华北和西北地区。其中，华北地区、西北地区、南方地区和东北地区赋存的煤层气地质资源量分别占全国煤层气地质资源总量的56.3%、28.1%、14.3%、1.3%。1000m以浅、1000～1500m和1500～2000m的煤层气地质资源量，分别占全国煤层气资源地质总量的38.8%、28.8%和32.4%。全国大于5000亿m3的含煤层气盆地(群)共有14个，其中含气量在5000～10000亿m3之间的有川南黔北、豫西、川渝、三塘湖、徐淮等盆地，含气量大于10000亿立方米的有鄂尔多斯盆地东缘、沁水盆地、准噶尔盆地、滇东黔西盆地群、二连盆地、吐哈盆地、塔里木盆地、天山盆地群、海拉尔盆地。</p>
              </div>
              <div class="clearfix"> </div>
              <div class="about-w3gridd">
                <h5>中国的煤层气分布图</h5>
                <img src="../images/fenbutu.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
         </div>
    </div>
    <Footer></Footer>
    </div>

</template>
<style>
.about-w3gridd{
  text-align: center;
  margin-top: 10px
}
.about-w3gridd h5{
  font-size: 1.5em
}
</style>

<script>
import Header from '../components/headertop.vue'
import Footer from '../components/footer.vue'
import Container from '../components/container.vue'
export default {
  components: { Header, Footer, Container},
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}			
		$(function () {
					// Slideshow 4
						$("#slider3").responsiveSlides({
							auto: true,
							pager: true,
							nav: false,
							speed: 500,
							namespace: "callbacks",
							before: function () {
								$('.events').append("<li>before event fired.</li>");
							},
							after: function () {
								$('.events').append("<li>after event fired.</li>");
							}
						 });				
          });		
</script>