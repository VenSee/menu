<template>
    <div>
    <Header></Header>
    <Container></Container>
    <div class="about">
        <div class="aboutw3-agileinfo">
          <!-- container -->
          <div class="container">
            <h2 class="agileits-title">自我检测</h2>
          </div> 
            <p class="biaoti">一、选择题</p> 
          <li v-for="item in list" class="ti">
            {{item.ID}}、{{item.question}}
            <div class="xuanxiang">
              <el-radio-group v-model="item.bool">
              <li  @click="countA(item)" ><el-radio :label="1">{{item.a}}</el-radio></li>
              <li  @click="countB(item)" ><el-radio :label="2">{{item.b}}</el-radio></li>
              <li  @click="countC(item)" ><el-radio :label="3">{{item.c}}</el-radio></li>
              <li  @click="countD(item)" ><el-radio :label="4">{{item.d}}</el-radio></li>
              </el-radio-group>
            </div>  
          </li>
          <p> <a href="javascript:void 0" @click="countDanxuan()" >评分</a>：<span class="defen">{{num}}</span></p>
          <p class="biaoti">二、判断题</p>
          <li v-for="item in list2" class="ti">
            {{item.fsId}}、{{item.question}}
            <div class="xuanxiang">
            <el-radio-group v-model="item.bool">
            <li  @click="countA(item)"><el-radio :label="1" >正确</el-radio></li> 
            <li  @click="countB(item)"><el-radio :label="2"  >错误</el-radio></li>
          </el-radio-group>
          </div>
          </li> 
          <p> <a href="javascript:void 0" @click="countPanduan()" >评分</a>：<span class="defen">{{num2}}</span></p>
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
      //选择题


      list: [
      {
      "ID":"1",
      "question":"岩石渗透性的好坏用（ ）表示。",
      "a":"A、渗透率", 
      "b":"B、孔隙度",
      "c":"C、有效孔隙度",
      "d":"D、渗透量",
      "bool":10,
      "aaScore":10,
      "bbScore":0,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },
      {
      "ID":"2",
      "question":"表示岩石渗透性大小的量，称为岩石的（）。",
      "a":"A、硬度",
      "b":"B、渗透量",
      "c":"C、渗透率",
      "d":"D、刚度",
      "bool":10,
      "aaScore":0,
      "bbScore":0,
      "ccScore":10,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"3",
      "question":"影响钻井液性能的地质因素不包括（）。",
      "a":"A、盐侵",
      "b":"B、粘土侵",
      "c":"C、地温",
      "d":"D、地层倾角",
      "bool":10,
      "aaScore":0,
      "bbScore":0,
      "ccScore":0,
      "ddScore":10,
      "score":0
      },
       {
      "ID":"4",
      "question":"岩层性质与钻井关系密切而复杂，主要表现有（）。",
      "a":"A、影响钻井速度与钻头进尺",
      "b":"B、使钻井过程出现复杂情况",
      "c":"C、使钻井液性能发生变化与影响丼眼质量",
      "d":"D、上述全部都是",
      "bool":10,
      "aaScore":0,
      "bbScore":0,
      "ccScore":0,
      "ddScore":10,
      "score":0
      },
       {
      "ID":"5",
      "question":"油气的物质基础“干酪根”的化学分类IE确的是（）",
      "a":"A、壳质组、镜质组、惰质组",
      "b":"B、I型A、II型B、III型C",
      "c":"C、藻质体、无定形、草质体、木质、煤质",
      "d":"D、腐泥型、腐殖型",
      "bool":10,
      "aaScore":0,
      "bbScore":10,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"6",
      "question":"油气的物质基础“干酪根”的反射光分类IE确的是（）",
      "a":"A、I型A、II型B、m型C ",
      "b":"B、腐泥组、壳质组、镜质组、惰质组",
      "c":"C、藻质体、无定形、草质体、木质、煤质",
      "d":"D、腐泥型、腐殖型",
      "bool":10,
      "aaScore":0,
      "bbScore":10,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"7",
      "question":"有机质向油气转化的一般模式IE确的是（）",
      "a":"A、生物化学牛气阶段、热催化牛油气阶段、深部高温牛气阶段、热裂解牛凝析气阶段",
      "b":"B、生物化学生气阶段、热裂解牛凝析气阶段、热催化生油气阶段、深部高温生气阶段",
      "c":"C、生物化学生气阶段、热催化牛油气阶段、热裂解牛.凝析气阶段、深部高温生气阶段",
      "d":"D、牛物化学生气阶段、热催化牛油气阶段、深部高温牛气阶段、热裂解生凝析气阶段",
      "bool":10,
      "aaScore":0,
      "bbScore":0,
      "ccScore":10,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"8",
      "question":"影响盖层封闭性的主要因素IE确的是（）",
      "a":"A、盖层的岩性、盖层的厚度和分布、构造运动",
      "b":"B、盖层的尺度、盖层的连续性、构造运动",
      "c":"C、盖层的尺度、盖层的厚度和分布、盖层的连续性",
      "d":"D、盖层的岩性、盖层的尺度、盖层的连续性",
      "bool":10,
      "aaScore":10,
      "bbScore":0,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"9",
      "question":"油气运移的基本方式IE确的是（）",
      "a":"A、流动、扩散",
      "b":"B、蠕动、渗滤",
      "c":"C、渗滤、扩散",
      "d":"D、流动、蠕动",
      "bool":10,
      "aaScore":10,
      "bbScore":0,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"10",
      "question":"下列因素中，（）能够使石油的粘度增大。",
      "a":"A、温度升高",
      "b":"B、压力减小",
      "c":"C、溶解气含量减少",
      "d":"D、高分子化合物含量的降低",
      "bool":10,
      "aaScore":0,
      "bbScore":0,
      "ccScore":10,
      "ddScore":0,
      "score":0
      },
       {
      "ID":"11",
      "question":"受单一局部构造或地层岩性因素控制的、M—面枳内的油气聚集单元是（）。",
      "a":"A、油气藏",
      "b":"B、油气田",
      "c":"C、油气聚集带",
      "d":"D、含油盆地",
      "bool":10,
      "aaScore":10,
      "bbScore":0,
      "ccScore":0,
      "ddScore":0,
      "score":0
      },








      ],
      //判断题
      list2:[
        {
        "fsId":1,
        "question":" 表层套筲柱设计时要考虑抗拉载荷",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
          {
        "fsId":2,
        "question":" 地层流体高于临界流速吋容易形成砂桥（",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
          {
        "fsId":3,
        "question":" 水泥面以下套管强度计算时应考虑双向应力影响",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
          {
        "fsId":4,
        "question":" 通常用套管的抗滑扣力表示套管的抗拉强度",
        "bool":10,
        "aaScore":10,
        "bbScore":0,
        "score":0
        },
          {
        "fsId":5,
        "question":" 砾石充填完井法是国内外最为广泛的一种完井方法",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
          {
        "fsId":6,
        "question":" 地层流体高于临界流速时容易形成砂桥",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
          {
        "fsId":7,
        "question":"偏心配水器相对于常规配水器可以增加内通孔直径",
        "bool":10,
        "aaScore":10,
        "bbScore":0,
        "score":0
        },
          {
        "fsId":8,
        "question":"在加重钻井液中，无枪身射孔器比有枪身射孔器更容易下井",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
         {
        "fsId":9,
        "question":"套管轴向拉力一般井底最大",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
        {
        "fsId":10,
        "question":"套管轴向拉力一般井底最大",
        "bool":10,
        "aaScore":0,
        "bbScore":10,
        "score":0
        },
        
      ],
      num:0,
      num2:0
    }
  },
  methods: {
    countA(item){
      var _this = this;
      item.score = item.aaScore;
      item.bool = item.aaScore;
        
    },
     countB(item){
      var _this = this;
      item.score = item.bbScore;
      item.bool = item.bbScore;
        
    }, 
    countC(item){
      var _this = this;
      item.score = item.ccScore;
      item.bool = item.ccScore;        
    }, 
    countD(item){
      var _this = this;
      item.score = item.ddScore;
      item.bool = item.ddScore;
    },
    countDanxuan(){
      var _this = this;
      _this.num = 0;
      _this.list.forEach(
        function(item){
          _this.num +=item.score
        }
      )
    },
    countPanduan(){
      var _this = this;
      _this.num2 = 0;
      _this.list2.forEach(
        function(item){
          _this.num2 +=item.score
        }
      )
    }




  }		
}		
</script>
<style>
p{
  text-align: center;
  font-size: 1.5em;
}
.ti{
  list-style: none;
  text-align: left;
  font-size: 1.5em;
  padding: 20px 0px;
  margin-left: 300px;
}
.el-radio__label{
  font-size: .9em
}
.xuanxiang li{
  padding: 10px 0px;
  text-align: left
}
.biaoti{
  margin: 50px 0px 0px 200px;
  text-align: left;
}
.defen{
  color: red;
  font-size: 45px
}
</style>
