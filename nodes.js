var richStyle = {
	a: {
      color: '#FFF',
      lineHeight: 15,
			align: 'center'
  },
  b: {
      color: '#FFF',
			fontSize: 18,
			align: 'center',
      lineHeight: 28
  },
  x: {
      color: '#FFF',
			align: 'center'
  }
}

function getNodes() {
	let nodes = [{
	  name: '稳定用户',
	  symbolSize:  155,
	  x: 240,
	  y: 200,
	  label: {
			formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
		},
	  color: '#20A0FF',
	  itemStyle: {
	    normal: {
	      color: '#20A0FF',
	    }
	  }
	}, {
	  name: '流失用户',
	  symbolSize: 100,
	  x: 190,
	  y: 300,
	  label: {
	    formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
	  },
	  color: '#636568',
	  itemStyle: {
	    normal: {
	      color: '#636568'
	    }
	  }
	}, {
	  name: '沉默用户',
	  symbolSize: 110,
	  x: 90,
	  y: 280,
	  label: {
	    formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
	  },
	  itemStyle: {
	    normal: {
	      color: '#98A3B8'
	    }
	  }
	}, {
	  name: '成长用户',
	  symbolSize:140,
	  x: 140,
	  y: 190,
	  label: {
	    formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
	  },
	  itemStyle: {
	    normal: {
	      color: '#1CBDB4'
	    }
	  }
	}, {
	  name: '首单用户',
	  symbolSize: 130,
	  x: 60,
	  y: 180,
	  label: {
	    formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
	  },
	  itemStyle: {
	    normal: {
	      color: '#9ADCAE'
	    }
	  }
	}, {
	  name: '新用户',
	  symbolSize: 100,
	  x: 20,
	  y: 240,
	  label: {
	    formatter: [
				'{a|329.00}',
				'{b|934.00}',
				'{x|+45.24%}'
			].join('\n')
	  },
	  itemStyle: {
	    normal: {
	      color: '#DFD39D'
	    }
	  }
	}]
	nodes.forEach(node=>{
		node.label = node.label || {}
		node.label['show'] = true
		node.label['rich'] = richStyle
	})
	return nodes;
}

function getBackNodes(){
	let nodes = getNodes()
	nodes.forEach(node=>{
		node['label'] = {
			show: true,
			position: 'top',
	    distance: '8'
		}
	})
	return nodes;
}
