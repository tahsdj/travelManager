import './main.sass'

const recommends = [
	{
		title: '成大',
		imgUrl: 'img/ncku.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '6:00~17:30',
		category: 'nosugar'
	},
	{
		title: '虎山步道',
		imgUrl: 'img/tigar.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '14:30~17:30',
		category: 'nosugar'
	},
	{
		title: '巴克禮公園',
		imgUrl: 'img/barkely.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '6:00~17:30',
		category: 'nosugar'
	},
	{
		title: '納涼屋',
		imgUrl: 'img/japan.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~20:00',
		category: 'nosugar'
	},
	{
		title: '奇美博物館',
		imgUrl: 'img/musium.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~17:00',
		category: 'nosugar'
	},
	{
		title: '知事官邸',
		imgUrl: 'img/knowledge.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '11:00~19:00',
		category: 'nosugar'
	},
	{
		title: '台南神學院',
		imgUrl: 'img/god.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '13:00~17:00',
		category: 'nosugar'
	},
	{
		title: '十鼓糖廠',
		imgUrl: 'img/sugar.jpg',
		period: 'two-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~21:00',
		category: 'sugar'
	},
	{
		title: '台南甜點',
		imgUrl: 'img/desert.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '11:00~15:30',
		category: 'sugar'
	}
]

Vue.component('travel-element',{
	template: '#travel-element',
	props: [
		'title'
	]
})


var app = new Vue({
	el: '#app',
	data: {
		recommendedSpot: recommends,
		mousePos: {
			x: 0,
			y: 0
		},
		nowId : -1,
		nowframe: -1,
		frameWork: [
			{
				title: 'morning',
				active: false,
				style: {
					border: 'none'
				}
			},
			{
				title: 'afternoon',
				active: false,
				style: {
					border: 'none'
				}
			},
			{
				title: 'evening',
				active: false,
				style: {
					border: 'none'
				}
			}
		],
		myList: [
			{
				list: []
			},
			{
				list: []
			},
			{
				list: []
			}
		],
		isActive: true
	},
	watch: {
		mousePos() {
			if ( this.nowId != -1) {
				this.recommendedSpot[this.nowId].style = {
					position: 'absolute',
					left: `${this.mousePos.x}px`,
					top: `${this.mousePos.y}px`
				}
				//console.log(this.nowId)
			}
		}
	},
	methods: {
		select(i) {
			this.nowId = i
		},
		hover(i) {
			this.frameWork[i].active = !this.frameWork[i].active

			if (this.frameWork[i].active){
				this.nowframe = i
				this.frameWork[i].style = {
					border: '1px solid #dfb079'
				}
			}else{
				this.nowframe = -1
				this.frameWork[i].style = {
					border: 'none'
				}
			}
		},
		remove(i,j) {
			this.myList[i].list.splice(j,1)
		}
	}
})


window.onmousemove = (event) => {
	//let id = app.nowId
	app.mousePos = { x: event.pageX , y: event.pageY}
	//console.log(app.mousePos) 
}
window.onmouseup = ()=> {
	if( app.nowframe != -1 && app.nowId != -1 ){
		app.recommendedSpot[app.nowId].style = {
			position: 'relative',
			backgroundColor: 'gray'
		}
		app.myList[app.nowframe].list.push(app.recommendedSpot[app.nowId])
		/*let title = app.recommendedSpot[app.nowId].title
		let frameWork = app.frameWork[app.nowframe].title
		let url = app.recommendedSpot[app.nowId].imgUrl
		let time = app.recommendedSpot[app.nowId].time
		let period = app.recommendedSpot[app.nowId].period
		let element = `<li class="ui-state-default ui-widget-content ${period}">`
					+ `<h3 >${title}</h3>`
					+ `<div class="time">${time}</div>`
					+ `<div class="note"><img src="img/note.png"></div>`
					+ `<img src="img/close.png" class="close" alt="" @click = "remove">`
					+ '</li>'
		$(`.${frameWork} > .sortable`).append(element)*/
	}else{
		app.recommendedSpot[app.nowId].style = {
			position: 'relative',
			backgroundColor: 'white'
		}
	}
	app.nowId = -1
}
/*
window.onmouseup = ()=>{
	if(app.nowId != -1){
		app.postits[app.nowId].locked = false
		let projectId = app.projects[app.nowProjectId].id
		let content = {}
		content.index = app.nowId
		content.x = app.mousePos.x
		content.y = app.mousePos.y
		$.ajax({
		        	type: 'post',
			        data: JSON.stringify(content),
			        contentType: 'application/json',
			        url: './position/'+projectId+'',
			        success: function(data) {
			        	console.log('update position')
			        }
			    })
		socket.emit('stop',{id: app.nowId})
	}
	app.nowId = -1
	//console.log(app.nowId)
}
*/
window.onmousedown = ()=>{
	let x = app.mousePos.x
	let y = app.mousePos.y

	//use position to avoid form area
	if( (x >= 350 && y >= 350) || ( x >= 350 && y <= 350) || ( x <= 350 && y >= 350)){
		app.profileForm = {
			display: "none"
		}
	}
}
