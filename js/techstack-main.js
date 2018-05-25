// Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
// And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
/*eslint-disable indent*/
let data = [{
	cat: 'Marketing / Médias sociaux', name: 'Acquisio', value: 30,
	icon: 'img/acquisio.svg',
	desc: `Performance Marketing Solutions for Local Businesses and the Agencies that Serve Them
	
		<p>Brossard, QC</p>

		<p>Founded in 2003</p>

		<p><a href="https://www.w3schools.com">http://www.acquisio.com</a></p>
		
	`},{
	cat: 'Vidéo 3D / Réalité virtuelle/augmentée', name: 'Airy3D', value: 30,
	icon: 'img/airy3d.png',
	desc: `
		Optical modification of standard CMOS sensors to provide simulatneous 2D and 3D (depth) images from a single sensor. Partnering with several major camera manufacturers.
	
		<p>Montreal, QC</p>
		

		<p><a href = "http://www.airy3d.com/">http://www.airy3d.com/</a></p>
		
	`},{
	cat: 'Télésanté', name: 'Aerial', value: 30,
	icon: 'img/aerial.png',
	desc: `
		Aerial creates technology that understands a person’s movements like never before. They are introducing the next generation of device-free, ambient Indoor Activity Recognition.
		
		<p>Montreal, QC</p>

		<p>Founded in 2015</p>

		<p><a href = "http://www.aerial.ai/">http://www.aerial.ai/</a></p>
		
	`},{
	cat: 'Vision par ordinateur', name: 'Algolux', value: 30,
	icon: 'img/algolux.png',
	desc: `
		Smart Optimization for Vision Systems
		<p>Montreal, QC</p>
		
		<p>Founded in 2016</p>
		
		<p><a href = "https://algolux.com/about/">https://algolux.com/about/</a></p>
		
	`},{
	cat: 'Holding', name: 'ApSTAT Technologies', value: 30,
	icon: 'img/apstat.png',
	desc: `
		Montreal, QC
		
		<p><a href = "http://www.apstat.com/fr/index.php">http://www.apstat.com/fr/index.php</a></p>
		
	`},{
	cat: 'Robotique / Drone', name: 'ARA robotique', value: 30,
	icon: 'img/ara.png',
	desc: `
		ARA Robotics is a Montreal-based company which develops an innovative, efficient UAV autopilot for industrial and commercial applications. ARA Robotics offers a variety of consulting and technological development services, all with innovation at its core basis. 
		
		<p>Montreal, QC</p>
		
		<p>Founded in 2014</p>
		
		<p><a href = "http://ara-uas.com/">http://ara-uas.com/</a></p>
		
	`},{
	cat: 'Services', name: 'arcbees', value: 30,
	icon: 'img/arcbees.svg',
	desc: `
		Consulting and app, web and/or software development services for businesses looking to offer quality applications to their clients.	
		
		<p>Quebec, QC</p>
		
		<p>Founded in 2010</p>
		
		<p><a href = "http://www.arcbees.com/">http://www.arcbees.com/</a></p>
		
	`},{
	cat: 'Services', name: 'Atlants Embedded', value: 30,
	icon: 'img/atlants.png',
	desc: `
		Embedded technology combining signal processing with the best machine learning algorithms for your products		
		
		<p>Montreal QC</p>
		
		<p><a href = "http://atlantsembedded.com">http://atlantsembedded.com</a></p>
		
	`},{
	cat: 'Agent conversationnel', name: 'Automat', value: 30,
	icon: 'img/automat.png',
	desc: `
		Automat is helping companies use AI to talk to their customers, to understand them and serve them better. We're the first Conversational Marketing platform powered by artificial intelligence and we believe in a world where every company can have a personalized one-on-one conversation with every customer, fan, and follower. 
		
		<p>Montreal, QC</p>
		
		<p>Founded in 2017</p>
		<p><a href = "http://www.automat.ai/">http://www.automat.ai/</a></p>
		
	`},{
	cat: 'Services', name: 'Avanteo Consulting', value: 30,
	icon: 'img/av.png',
	desc: `
			Avanteo Consulting provides digital health innovation and business strategy services that enable life sciences, software and health technology companies to transform healthcare challenges into positive real-world outcomes, provide added quality and efficiency to stakeholders, and maximize business opportunities and leadership.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2015</p>
			
			<p><a href = "https://www.avanteoconsulting.com/">https://www.avanteoconsulting.com/</a></p>
		
	`},{
	cat: 'Télésanté', name: 'BioMindR', value: 30,
	icon: 'img/biomindr.png',
	desc: `
			Developer of wireless signals and machine learning techniques designed to reshape biosignal monitoring for wearables. The company leverages wireless signals and machine learning to develop a contact-free, accurate and power efficient bio-signals sensing platform enabling athletes, coaches and clinicians to continuously monitor and better approach their hydration, glucose and fluid levels.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2016</p>
		
	`},{
	cat: 'Chaînes de blocs', name: 'Blockstream', value: 30,
	icon: 'img/blockstream.png',
	desc: `
			Blockstream is FinTech company that works to accelerate innovation in crypto currencies, open assets, and smart contracts.Its products include elements, an open-source platform for building and testing applications; and liquid, which is designed for bitcoin exchanges and high-speed transactions.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2014</p>
		
		
			<p><a href = "https://blockstream.com/">https://blockstream.com/</a></p>
	`},{
	cat: 'Services', name: 'Botler', value: 30,
	icon: 'img/botler.png',
	desc: `
			An artificially intelligent immigration assistant.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2014</p>
		
		
			<p><a href = "https://botler.ai/">https://blockstream.com/</a></p>
	`}];
/*eslint-enable indent*/
/*global d3*/
let svg = d3.select('#teck-stack-svg');
let width = svg.property('clientWidth'); // get width in pixels
let height = +svg.attr('height');
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;
console.log('width', width);

let format = d3.format(',d');

let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

// use pack to calculate radius of the circle
let pack = d3.pack()
	.size([width, height ])
	.padding(1.5);

let forceCollide = d3.forceCollide(d => d.r + 1);

// use the force
let simulation = d3.forceSimulation()
	// .force('link', d3.forceLink().id(d => d.id))
	.force('charge', d3.forceManyBody())
	.force('collide', forceCollide)
	// .force('center', d3.forceCenter(centerX, centerY))
	.force('x', d3.forceX(centerX ).strength(strength))
	.force('y', d3.forceY(centerY ).strength(strength));

// reduce number of circles on mobile screen due to slow computation
if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
	data = data.filter(el => {
		return el.value >= 50;
	});
}

let root = d3.hierarchy({ children: data })
	.sum(d => d.value);

// we use pack() to automatically calculate radius conveniently only
// and get only the leaves
let nodes = pack(root).leaves().map(node => {
	// console.log('node:', node.x, (node.x - centerX) * 2);
	const data = node.data;
	return {
		x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
		y: centerY + (node.y - centerY) * 3,
		r: 0, // for tweening
		radius: node.r, //original radius
		id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
		cat: data.cat,
		name: data.name,
		value: data.value,
		icon: data.icon,
		desc: data.desc,
	};
});
simulation.nodes(nodes).on('tick', ticked);

//svg.style('background-color', '#eee');
let node = svg.selectAll('.node')
	.data(nodes)
	.enter().append('g')
	.attr('class', 'node')
	.call(d3.drag()
		.on('start', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0.2).restart(); }
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', (d) => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
		.on('end', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0); }
			d.fx = null;
			d.fy = null;
		}));

node.append('circle')
	.attr('id', d => d.id)
	.attr('r', 0)
	.style('fill', d => scaleColor(d.cat))
	.transition().duration(2000).ease(d3.easeElasticOut)
		.tween('circleIn', (d) => {
			let i = d3.interpolateNumber(0, d.radius);
			return (t) => {
				d.r = i(t);
				simulation.force('collide', forceCollide);
			};
		});

node.append('clipPath')
	.attr('id', d => `clip-${d.id}`)
	.append('use')
	.attr('xlink:href', d => `#${d.id}`);

// display text as circle icon
node.filter(d => !String(d.icon).includes('img/'))
	.append('text')
	.classed('node-icon', true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.selectAll('tspan')
	.data(d => d.icon.split(';'))
	.enter()
		.append('tspan')
		.attr('x', 0)
		.attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
		.text(name => name);

// display image as circle icon
node.filter(d => String(d.icon).includes('img/'))
	.append('image')
	.classed('node-icon', true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.attr('xlink:href', d => d.icon)
	.attr('x', d => -d.radius * 0.7)
	.attr('y', d => -d.radius * 0.7)
	.attr('height', d => d.radius * 2 * 0.7)
	.attr('width', d => d.radius * 2 * 0.7);

node.append('title')
	.text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

let legendOrdinal = d3.legendColor()
	.scale(scaleColor)
	.shape('circle');

// legend 1
svg.append('g')
	.classed('legend-color', true)
	.attr('text-anchor', 'start')
	.attr('transform', 'translate(20,30)')
	.style('font-size', '18px')
	.style('color', 'rgb(255,255,259)')
	.call(legendOrdinal);

let sizeScale = d3.scaleOrdinal()
	.domain(['less use', 'more use'])
	.range([5, 10] );

let legendSize = d3.legendSize()
	.scale(sizeScale)
	.shape('circle')
	.shapePadding(10)
	.labelAlign('end');

// legend 2
//svg.append('g')
//	.classed('legend-size', true)
//	.attr('text-anchor', 'start')
//	.attr('transform', 'translate(150, 25)')
//	.style('font-size', '12px')
//	.call(legendSize);


/*
<foreignObject class="circle-overlay" x="10" y="10" width="100" height="150">
	<div class="circle-overlay__inner">
		<h2 class="circle-overlay__title">ReactJS</h2>
		<p class="circle-overlay__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sunt, aspernatur. Autem repudiandae, laboriosam. Nulla quidem nihil aperiam dolorem repellendus pariatur, quaerat sed eligendi inventore ipsa natus fugiat soluta doloremque!</p>
	</div>
</foreignObject>
*/
let infoBox = node.append('foreignObject')
	.classed('circle-overlay hidden', true)
	.attr('x', -350 * 0.5 * 0.8)
	.attr('y', -350 * 0.5 * 0.8)
	.attr('height', 350 * 0.8)
	.attr('width', 350 * 0.8)
		.append('xhtml:div')
		.classed('circle-overlay__inner', true);

infoBox.append('h2')
	.classed('circle-overlay__title', true)
	.text(d => d.name);

infoBox.append('p')
	.classed('circle-overlay__body', true)
	.html(d => d.desc);


node.on('click', (currentNode) => {
	d3.event.stopPropagation();
	console.log('currentNode', currentNode);
	let currentTarget = d3.event.currentTarget; // the <g> el

	if (currentNode === focusedNode) {
		// no focusedNode or same focused node is clicked
		return;
	}
	let lastNode = focusedNode;
	focusedNode = currentNode;

	simulation.alphaTarget(0.2).restart();
	// hide all circle-overlay
	d3.selectAll('.circle-overlay').classed('hidden', true);
	d3.selectAll('.node-icon').classed('node-icon--faded', false);

	// don't fix last node to center anymore
	if (lastNode) {
		lastNode.fx = null;
		lastNode.fy = null;
		node.filter((d, i) => i === lastNode.index)
			.transition().duration(2000).ease(d3.easePolyOut)
			.tween('circleOut', () => {
				let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
				return (t) => {
					lastNode.r = irl(t);
				};
			})
			.on('interrupt', () => {
				lastNode.r = lastNode.radius;
			});
	}

	// if (!d3.event.active) simulation.alphaTarget(0.5).restart();

	d3.transition().duration(2000).ease(d3.easePolyOut)
		.tween('moveIn', () => {
			console.log('tweenMoveIn', currentNode);
			let ix = d3.interpolateNumber(currentNode.x, centerX);
			let iy = d3.interpolateNumber(currentNode.y, centerY);
			let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
			return function (t) {
				// console.log('i', ix(t), iy(t));
				currentNode.fx = ix(t);
				currentNode.fy = iy(t);
				currentNode.r = ir(t);
				simulation.force('collide', forceCollide);
			};
		})
		.on('end', () => {
			simulation.alphaTarget(0);
			let $currentGroup = d3.select(currentTarget);
			$currentGroup.select('.circle-overlay')
				.classed('hidden', false);
			$currentGroup.select('.node-icon')
				.classed('node-icon--faded', true);

		})
		.on('interrupt', () => {
			console.log('move interrupt', currentNode);
			currentNode.fx = null;
			currentNode.fy = null;
			simulation.alphaTarget(0);
		});

});

// blur
d3.select(document).on('click', () => {
	let target = d3.event.target;
	// check if click on document but not on the circle overlay
	if (!target.closest('#circle-overlay') && focusedNode) {
		focusedNode.fx = null;
		focusedNode.fy = null;
		simulation.alphaTarget(0.2).restart();
		d3.transition().duration(2000).ease(d3.easePolyOut)
			.tween('moveOut', function () {
				console.log('tweenMoveOut', focusedNode);
				let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
				return function (t) {
					focusedNode.r = ir(t);
					simulation.force('collide', forceCollide);
				};
			})
			.on('end', () => {
				focusedNode = null;
				simulation.alphaTarget(0);
			})
			.on('interrupt', () => {
				simulation.alphaTarget(0);
			});

		// hide all circle-overlay
		d3.selectAll('.circle-overlay').classed('hidden', true);
		d3.selectAll('.node-icon').classed('node-icon--faded', false);
	}
});

function ticked() {
	node
		.attr('transform', d => `translate(${d.x},${d.y})`)
		.select('circle')
			.attr('r', d => d.r);
}
