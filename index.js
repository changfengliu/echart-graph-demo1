// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
  title: {
    text: '生命周期',
     textStyle:{
      color:'#000000',
      fontStyle:'normal',
      fontWeight:'normal',
      fontFamily:'PingFangSC-Regular',
      fontSize: 24
    },
    left:'center'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series : [
    {
      type: 'graph',
      layout: 'none',
      roam: true, //是否scale/move
      data: getBackNodes()
    }, {
      type: 'graph',
      layout: 'none',
      roam: true, //是否scale/move
      edgeSymbol: ['circle', 'arrow'],
      data: getNodes(),
      links: links
    }
  ]
}

myChart.setOption(option);
