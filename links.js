var links = [{
  source: '首单用户',
  target: '新用户',
  lineStyle: {
    normal: {
      width: 2.0,
      curveness: -0.2,
      color: '#DFD39D'
    }
  }
},{
  source: '沉默用户',
  target: '成长用户',
  lineStyle: {
    normal: {
      width: 2.0,
      curveness: -0.2,
      color: '#DFD39D'
    }
  }
}, {
    source: '成长用户',
    target: '沉默用户',
    color: '#DFD39D',
    lineStyle: {
      normal: {
        width: 2.0,
        curveness: -0.2,
        color: '#DFD39D'
      }
    }
  }, {
  source: '沉默用户',
  target: '首单用户',
  symbolSize: [5, 20],
  lineStyle: {
    normal: {
      width: 2.0,
      color: '#9ADCAE'
    }
  }
},{
    source: '稳定用户',
    target: '沉默用户',
    symbolSize: [5, 20],
    lineStyle: {
      normal: {
        width: 1.0,
        color: '#000000',
        color: '#DFD39D'
      }
    }
  }, {
  source: '流失用户',
  target: '沉默用户',
  symbolSize: [5, 20],
  lineStyle: {
    normal: {
      width: 1.0,
      color: '#DFD39D'
    }
  }
}, {
  source: '沉默用户',
  target: '流失用户',
  symbolSize: [5, 20],
  lineStyle: {
    normal: {
      width: 1.0,
      color: '#DFD39D'
    }
  }
}, {
  source: '稳定用户',
  target: '成长用户',
  symbolSize: [5, 20],
  lineStyle: {
    normal: {
      width: 1.0,
      color: '#DFD39D'
    }
  }
}, {
  source: '成长用户',
  target: '首单用户',
  symbolSize: [5, 20],
  lineStyle: {
    normal: {
      width: 2.0,
      color: '#9ADCAE'
    }
  }
}]

links.forEach(link=>{
	// label 默认值
	link['label'] = link['label'] || {}
	link['label']['normal'] = link['label']['normal'] || {}
	link['label']['normal']['formatter'] = link['label']['normal']['formatter'] || function(params, ticket, callback) {
		params.name = params.data.name;
		return params.name;
	}
	link['label']['normal']['show'] = link['label']['normal']['show'] || false

	// tooltip 默认值
	link['tooltip'] = link['tooltip'] || {}
	link['tooltip']['trigger'] = link['tooltip']['trigger'] || 'item'
	link['tooltip']['formatter'] = link['tooltip']['formatter'] || function(params, ticket, callback) {
		return params.data.name;
	}

	// linestyle 默认值
	link['lineStyle'] = link['lineStyle'] || {}
	link['lineStyle']['normal'] = link['lineStyle']['normal'] || {}
	link['lineStyle']['normal']['width'] = link['lineStyle']['normal']['width'] || 1.0
	link['lineStyle']['normal']['curveness'] = link['lineStyle']['normal']['curveness'] || 0.15
})
