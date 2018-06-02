<template>
<!-- header -->
	<div class="header">
		<!-- container -->
		<div class="container">
			<div class="header-bottom">
				<div class="w3ls-logo">
					<h1><a href="#">Coalbed<span>Methane</span></a></h1>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="top-nav">
				<nav class="navbar navbar-default">
					<div class="container">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">Menu						
						</button>
					</div>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="home-icon"><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
							<router-link to="/"active-class="active"exact class="daohang"><li >CBM</li></router-link>							
							<router-link to="/dyjs" active-class="active"  class="daohang"><li>定义介绍</li></router-link>
							<router-link to="/zyfb" active-class="active" class="daohang"><li>资源分布</li></router-link>
							<router-link to="/kcfs" active-class="active" class="daohang"><li>开采方式</li></router-link>
							<router-link to="/zyyy" active-class="active" class="daohang"><li >资源应用</li></router-link>
					     	<router-link to="/test" active-class="active"class="daohang"><li >自我检测</li></router-link>
							<el-dropdown trigger="click">
						<span class="el-dropdown-link daohang">						
								专业课程<i class="el-icon-arrow-down el-icon--right"></i>							
						</span>
						<el-dropdown-menu slot="dropdown">
							<router-link to="/mcqdz" class="xiala"><el-dropdown-item>煤层气地质学</el-dropdown-item></router-link>
							<router-link to="/zjkc"><el-dropdown-item>钻井工程</el-dropdown-item></router-link>
							<router-link to="/wjkc"><el-dropdown-item>完井工程</el-dropdown-item></router-link>
							<router-link to="/cqkc"><el-dropdown-item>采气工程</el-dropdown-item></router-link>							
						</el-dropdown-menu>
						</el-dropdown>
						</ul>	
						<div class="clearfix"> </div>
					</div>	
				</nav>	
			</div>
		</div>
		<!-- //container -->
	</div>
	<!-- //header -->
			
</template>
<script>


export default {
  data () {
    return {
      ins: 1,
    }
  },
 methods: {

  }
}

</script>
<style>
.el-dropdown-link{
	cursor: pointer;
}
.daohang{
    font-size: 1.2em;
	margin-right:3.0em;
	color: aliceblue
}
.daohang :hover{
	color:  #00f3e8
}
.active{
	color: #00f3e8;
}
</style>

