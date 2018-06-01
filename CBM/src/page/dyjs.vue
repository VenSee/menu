<template>
    <div>
    <Header></Header>
    <Container></Container>
    <div class="about">
        <div class="aboutw3-agileinfo">
          <!-- container -->
          <div class="container">
            <h2 class="agileits-title">煤层气介绍</h2>
        <div class="about-bottom">
          <!-- container -->
          <div class="container">
            <div class="about-agileinfo">
              <div class="about-w3grid">
                <img src="../images/meicengqi.jpg" alt="" />
                <h5>煤层气是什么？</h5>
                <p>煤层气是指储存在煤层中以甲烷为主要成分、以吸附在煤基质颗粒表面为主、部分游离于煤孔隙中或溶解于煤层水中的烃类气体，是煤的伴生矿产资源，属非常规天然气，是近一二十年在国际上崛起的洁净、优质能源和化工原料。俗称“瓦斯”，热值是通用煤的2-5倍，1立方米纯煤层气的热值相当于1.13kg汽油、1.21kg标准煤，其热值与天然气相当，可以与天然气混输混用，而且燃烧后很洁净， [1]  几乎不产生任何废气，是上好的工业、化工、发电和居民生活燃料。煤层气空气浓度达到5%-16%时，遇明火就会爆炸，这是煤矿瓦斯爆炸事故的根源。煤层气直接排放到大气中，其温室效应约为二氧化碳的21倍，对生态环境破坏性极强。在采煤之前如果先开采煤层气，煤矿瓦斯爆炸率将降低70%到85%。煤层气的开发利用具有一举多得的功效：洁净能源，商业化能产生巨大的经济效益。为国家战略资源。</p>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        </div>
         </div>
    </div> 
    <div class="about">
        <div class="aboutw3-agileinfo">
          <!-- container -->
          <div class="container">
            <h2 class="agileits-title">形成</h2>
        <div class="about-bottom">
          <!-- container -->
          <div class="container">
            <div class="about-agileinfo">
              <div class="about-w3grid">
                <img src="../images/meicengqi.jpg" alt="" />
                <h5>煤层气如何形成？</h5>
                <p>煤炭源于陆生高等植物，煤的原始有机物质主要是碳水化合物、木质素，成煤作用由泥炭化和煤化作用2个阶段完成。由植物-泥炭-褐煤-烟煤-无烟煤，是经过未成岩-成岩-变质作用-泥炭化-煤化的全过程。 泥炭化阶段（成岩期前），有机质在低温(<50℃) 和近地表氧化环境中，由于细菌的作用，生成少量甲烷及二氧化碳，呈水溶状态或游离状态而散失。 褐煤阶段已经进入成岩阶段，属煤化作用的未变质阶段。此期是干酪根的未成熟期，地温在50℃左右，镜质体反射率Ro≈0.5%，有机质热降解作用已经开始并且逐步加深，生物化学作用逐步减弱，主要生成甲烷及其他挥发物。 烟煤阶段的长焰煤、气煤、肥煤、焦煤、瘦煤属煤化作用的低-中变质阶段， Ro为0.5%～2.0%。此期是干酪根的成熟期，已经进入生油门限，沉积物埋深达到1000～4 500m ，地温达50～150℃，有机质经过热降解，有重烃、轻烃、甲烷及其他挥发物产出。 煤化作用的后期是高变质阶段，一般将贫煤与无烟煤划在这一阶段， Ro>2.0%，此期是干酪根过成熟期，地温>150℃，埋深>4500m，热降解产物主要是甲烷。</p>
              </div>
            <div class="zhuanyejieshao">专业课程</div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        </div>
         </div>
    </div>
    <div class="about">
        <div class="aboutw3-agileinfo">
          <!-- container -->
          <div class="container">
            <h2 class="agileits-title">专业课程</h2>
        <div class="about-bottom">
          <!-- container -->
          <div class="container">
            <div class="about-agileinfo">
              <div class="about-w3grid">
                <img src="../images/meicengqi.jpg" alt="" />
                <h5>煤层气地质学</h5>
                <p></p>
                <a href="http://www.docin.com/p-729471130.html"></a>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        </div>
         </div>
    </div>
       <Footer></Footer>
    </div>

</template>
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