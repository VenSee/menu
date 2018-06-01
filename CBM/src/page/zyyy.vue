<template>
    <div>
    <Header></Header>
    <Container></Container>
    <!-- gallery -->
	<div class="gallery-top">
		<!-- container -->
		<div class="container">
			<div class="gallery-agileinfo">
				<h2 class="agileits-title">Gallery</h2>
			</div>
			<div class="gallery-w3agileits-row">
				<div class="gallery-w3grids">
					<div class="col-md-3 gallery-wthreegrid">
						<a class="example-image-link" href="../images/s2.jpg" data-lightbox="example-set" data-title=""><img class="example-image" src="../images/s2.jpg" alt=""/></a>
					</div>
					<div class="col-md-3 gallery-wthreegrid">
						<a class="example-image-link" href="../images/s5.jpg" data-lightbox="example-set" data-title=""><img class="example-image" src="../images/s5.jpg" alt=""/></a>
					</div>
					<div class="col-md-3 gallery-wthreegrid">
						<a class="example-image-link" href="../images/s3.jpg" data-lightbox="example-set" data-title=""><img class="example-image" src="../images/s3.jpg" alt=""/></a>
					</div>
					<div class="col-md-3 gallery-wthreegrid">
						<a class="example-image-link" href="../images/s4.jpg" data-lightbox="example-set" data-title=""><img class="example-image" src="../images/s4.jpg" alt=""/></a>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
		<!-- //container -->
	</div>
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
</script>