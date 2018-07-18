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
	cat: 'Santé / Télésanté', name: 'Aerial', value: 30,
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
	cat: 'Autres', name: 'ApSTAT Technologies', value: 30,
	icon: 'img/apstat.png',
	desc: `
		Montreal, QC
		
		<p><a href = "http://www.apstat.com/fr/index.php">http://www.apstat.com/fr/index.php</a></p>
		
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'ARA robotique', value: 30,
	icon: 'img/ara.png',
	desc: `
		ARA Robotics is a Montreal-based company which develops an innovative, efficient UAV autopilot for industrial and commercial applications. ARA Robotics offers a variety of consulting and technological development services, all with innovation at its core basis. 
		
		<p>Montreal, QC</p>
		
		<p>Founded in 2014</p>
		
		<p><a href = "http://ara-uas.com/">http://ara-uas.com/</a></p>
		
	`},{
	cat: 'Services (consultation, R&D)', name: 'arcbees', value: 30,
	icon: 'img/arcbees.svg',
	desc: `
		Consulting and app, web and/or software development services for businesses looking to offer quality applications to their clients.	
		
		<p>Quebec, QC</p>
		
		<p>Founded in 2010</p>
		
		<p><a href = "http://www.arcbees.com/">http://www.arcbees.com/</a></p>
		
	`},{
	cat: 'Services (consultation, R&D)', name: 'Atlants Embedded', value: 30,
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
	cat: 'Services (consultation, R&D)', name: 'Avanteo Consulting', value: 30,
	icon: 'img/av.png',
	desc: `
			Avanteo Consulting provides digital health innovation and business strategy services that enable life sciences, software and health technology companies to transform healthcare challenges into positive real-world outcomes, provide added quality and efficiency to stakeholders, and maximize business opportunities and leadership.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2015</p>
			
			<p><a href = "https://www.avanteoconsulting.com/">https://www.avanteoconsulting.com/</a></p>
		
	`},{
	cat: 'Santé / Télésanté', name: 'BioMindR', value: 30,
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
	cat: 'Services (consultation, R&D)', name: 'Botler', value: 30,
	icon: 'img/botler.png',
	desc: `
			An artificially intelligent immigration assistant.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2014</p>
		
		
			<p><a href = "https://botler.ai/">https://botler.ai/"</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'C2RO', value: 30,
	icon: 'img/c2ro.png',
	desc: `
			C2RO is a cloud-based software robotics platform to offer real-time robotic vision &amp; multi-robot collaboration modules as SaaS for robots.
			
			<p>Montreal QC</p>
			
			<p>Founded in 2016</p>
		
		
			<p><a href = "http://www.c2ro.com">http://www.c2ro.com</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Cadens Medical Imaging', value: 30,
	icon: 'img/cadens.png',
	desc: `
			The company has a leading position in computer-assisted medical imaging and provides software solutions facilitating image diagnosis.
			
			<p>Montreal / Granby QC</p>
		
		
		
			<p><a href = "http://www.cadensimaging.com/">http://www.cadensimaging.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Certimail', value: 30,
	icon: 'img/certimail.png',
	desc: `
			Web based Canadian Antispam Law Conformity application for small &amp; medium enterprises
			
			<p>Montreal QC</p>
		
			<p>Founded in 2016</p>
		
			<p><a href = "http://www.certimail.ca">http://www.certimail.ca</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Cogilex Research and Development', value: 30,
	icon: 'img/cogilex.svg',
	desc: `
			Cogilex is a technology innovation company that specializes in the research and development of natural language processing (NLP) methods and tools for real-world applications such as search engines, text mining, and information extraction systems. Through a solid research program and deep expertise in the field, Cogilex has provided customized tools and services to its industrial partners worldwide.
			
			<p>Montreal QC</p>
		
			<p>Founded in 1998</p>
		
			<p><a href = "http://cogilex.com">http://cogilex.com</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'CognitiveChem', value: 30,
	icon: 'img/cognitivechem.png',
	desc: `
			Chemistry has improved our quality of life and made thousands of products possible. Unfortunately, this achievement has come at a price: our collective human health and the global environment are threatened. CognitiveChem aims to change that by providing cloud-based software to help chemists discover greener chemicals. We take the same artificial intelligence breakthroughs that power self-driving cars and online search and use it to empower the chemistry community in discovering novel organic molecules, reactions and synthetic pathways. The result is substantially fewer experiments &amp; greener chemicals, faster.			
			<p>Montreal QC</p>

			<p><a href = "http://cognitivechem.com">http://cognitivechem.com</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Corstem', value: 30,
	icon: 'img/corstem.png',
	desc: `
			Corstem is a Montreal-based artificial intelligence software developer specialized in real-time medical data analysis and computer vision. Its AI-powered tools are setting the standard in dynamic cardiac analysis. Corstem enables a whole new level of efficiency and automation for diagnosis aid to save valuable physician and patient time.			<p>Montreal QC</p>

			<p>Montreal QC</p>
			<p>Founded in 2016</p>
			
			<p><a href = "http://corstem.ai/">http://corstem.ai/</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Coveo', value: 30,
	icon: 'img/coveo.png',
	desc: `
			Coveo changes the world of work by upskilling people through search
			
			<p>Montreal QC</p>
			
			<p>Founded in 2005</p>
			
			<p><a href = "http://www.coveo.com">http://www.coveo.com</a></p>
	`},{
	cat: 'Autres', name: 'Crowdsourced Testing', value: 30,
	icon: 'img/cst.png',
	desc: `
			Founded by software testing company QA on Request, the Crowdsourced Testing company manages a fully automated crowdsourcing platform that connects web and software developers with expert software testers around the world.			
			
			<p>Montreal QC</p>
			
			<p>Founded in 2012</p>
			
			<p><a href = "https://crowdsourcedtesting.com">https://crowdsourcedtesting.com</a></p>
	`},{
	cat: 'Analytiques', name: 'CSI Flex', value: 30,
	icon: 'img/csi.png',
	desc: `
			Analytics &amp; Machine Learning for Manufacturing Equipment	
			
			<p>Montreal QC</p>
			
			<p>Founded in 2016</p>
			
			<p><a href = "http://www.csiflex.com/">http://www.csiflex.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Datacratic', value: 30,
	icon: 'img/datacratic.png',
	desc: `
			Datacratic, an iPerceptions company, is a leader in providing audience data solutions for enterprise brands.			
			<p>Montreal QC</p>
			
			<p>Founded in 2010</p>
			
			<p><a href = "http://www.datacratic.com">http://www.datacratic.com</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Dataperformers', value: 30,
	icon: 'img/dp.png',
	desc: `
			Dataperformers offers its users with artificial intelligence solutions for real-world problems. Using advanced computer vision techniques and tools the company is able to build systems that can have high-level understanding from graphic contents. The company helps its users to invent and design intelligent systems to tackle their business challenges.			<p>Montreal QC</p>
			<p>Montreal QC</p>
			<p>Founded in 2013</p>
			
			<p><a href = "http://dataperformers.com/">http://dataperformers.com/</a></p>
	`},{
	cat: 'Cybersécurité', name: 'Delve Labs', value: 30,
	icon: 'img/delve.png',
	desc: `
			Developer of autonomous security solutions software. The company develops an autonomous security solutions software. The company's product is an AI-based vulnerability assessment solution that makes it possible to cover over a million assets without increasing human workforce.			
			<p>Montreal QC</p>
			
			<p>Founded in 2014</p>
			
			<p><a href = "https://www.delvelabs.ca/">https://www.delvelabs.ca/</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Desmahealth', value: 30,
	icon: 'img/desma.png',
	desc: `
			<p>Montreal QC</p>
			<p><a href = "https://www.desmahealth.com/index.html">https://www.desmahealth.com/index.html</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Dextraseo', value: 30,
	icon: 'img/dextraseo.png',
	desc: `
			<p>Montreal QC</p>
			<p><a href = "http://www.dextraseo.com">http://www.dextraseo.com</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Dialog', value: 30,
	icon: 'img/dialog.png',
	desc: `
			Dialogue is a telemedicine platform that enhances the healthcare system by providing access to quality care.
			<p>Québec QC</p>
			<p>Founded in 2016</p>
			
			<p><a href = "https://dialoganalytics.com">https://dialoganalytics.com</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Dialog Insight', value: 30,
	icon: 'img/dialoginsight.png',
	desc: `
			Dialog Insight fournit des solutions pour la gestion de campagnes de marketing par courriel et de relation client. Personnalisez les interactions avec vos clients.

			<p>Québec QC</p>
			
			<p><a href = "https://www.dialoginsight.com/">https://www.dialoginsight.com/</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Element AI', value: 30,
	icon: 'img/elementai.svg',
	desc: `
			Provider of artificial intelligence services. The company launches and incubates advanced Artificial Intelligence products in partnership with large corporations and research institutions. It offers a platform that helps organizations embrace an AI-First strategy. It identifies projects and founded spin-off companies and joint ventures.
			<p>Montreal QC</p>
			
			<p><a href = "http://www.elementai.com">http://www.elementai.com</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'envision.ai', value: 30,
	icon: 'img/envisionai.png',
	desc: `
			Videopixx: Analysis of videos and image data sets to automatically classify images in terms of quality ranking, according to preferences defined by the user. Such preferences include "clickability", "shareability", "likeability", "best composition" etc. Such analysis will use MoreIdeas' proprietary Deep Learning algorithms that reproduce human judgement on quality of images, in relation to such preferences.			
			<p>Montreal QC</p>
			
			<p><a href = "http://envision.AI">http://envision.AI</a></p>
	`},{
	cat: 'Technologie éducative', name: 'Erudite AI', value: 30,
	icon: 'img/eruditeai.png',
	desc: `
			Redefining K12 learning, teaching and assessment with our edtech platform and intelligent educational toolbox.			
			<p>Founded in 2013</p>
			<p>Montreal QC</p>
			
			<p><a href = "http://www.erudite.ai/">http://www.erudite.ai/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Faimdata', value: 30,
	icon: 'img/faimdata.png',
	desc: `
			Faimdata is a software and services company providing consumer data intelligence solutions to identify the true single customer view. We help businesses convert their data into valuable assets whilst discovering more efficient methods to drive revenue and connect with their customers. Our predictive analytics tools make machine learning, artificial-intelligence, and marketing-automation user-friendly and accessible.
			<p>Montreal QC</p>
			<p><a href = "http://www.faimdata.com">http://www.faimdata.com</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Fluent.ai', value: 30,
	icon: 'img/fluentai.png',
	desc: `
			Developer of speech recognition technologies. The company deals in speech recognition technologies that help people to control their cars, homes and wearable devices with voice.			
			<p>Montreal QC</p>
			<p>Founded in 2015</p>
			<p><a href = "http://www.fluent.ai">http://www.fluent.ai</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Fuzzy AI', value: 30,
	icon: 'img/fuzzyai.svg',
	desc: `
			Fuzzy.ai is an API that makes it easy for developers to to build decision-making artificial intelligence without needing data science expertise or lots of data.			
			<p>Founded in 2014</p>
			<p><a href = "https://fuzzy.ai/">https://fuzzy.ai/</a></p>
	`},{
	cat: 'Autres', name: 'GRIP Entertainment', value: 30,
	icon: 'img/grip.png',
	desc: `
			GRIP Entertainment operates as an artificial intelligence (AI) game middleware company.
			<p>Founded in 2007</p>
			<p><a href = "https://gamedev.autodesk.com/">https://gamedev.autodesk.com/</a></p>
	`},{
	cat: 'Application mobile', name: 'Guarana Technologies', value: 30,
	icon: 'img/guarana.svg',
	desc: `
			Smart mobile app developers for smartphones, tablets &amp; wearable devices. We develop your ideas, make it smart, sexy, code it &amp; launch it.
			<p>Founded in 2011</p>
			<p><a href = "http://www.guarana-technologies.com">http://www.guarana-technologies.com</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Hey Day', value: 30,
	icon: 'img/heyday.png',
	desc: `
			We're a team of award-winning digital advertising pioneers coming from the world's top ad agencies and startups. We're copywriters, coders, experience designers, and marketers who all share a common goal: delight customers with engaging one-on-one experiences. From strategy and idea generation to chat bot design and development, we can help you deploy your chat bot to reach your audience on their platform of choice.
			<p><a href = "http://heyday.ai/">http://heyday.ai/</a></p>
	`},{
	cat: 'Application mobile', name: 'hopper', value: 30,
	icon: 'img/hopper.png',
	desc: `
			Hopper is an app that uses big data to predict and analyze airfare. Hopper provides travelers with the information they need to get the best deals on flights, and notifies them when prices for their flights are at their predicted lowest points.
			<p>Founded in 2007</p>
			
			<p><a href = "https://www.hopper.com/">https://www.hopper.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Humonix', value: 30,
	icon: 'img/humonix.png',
	desc: `
			A management consultancy focused on AI innovation.
			
			<p><a href = "http://humonix.com/">http://humonix.com/</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Imagia', value: 30,
	icon: 'img/imagia.svg',
	desc: `
			Artificial Intelligence for medical image analysis.
			<p>Founded in 2007</p>
			
			<p><a href = "https://www.imagia.com/">https://www.imagia.com/</a></p>
	`},{
	cat: 'Cybersécurité', name: 'Immunio', value: 30,
	icon: 'img/immunio.png',
	desc: `
			IMMUNIO secures your web applications against all attackers. It is the easiest, most effective method to ensure that you are alerted when important security events are triggered, and that threats are dealt proactively.
			<p>Founded in 2013</p>
			
			<p><a href = "https://www.immun.io/">https://www.immun.io/</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'InnoTechnix', value: 30,
	icon: 'img/innotechnix.png',
	desc: `
			InnoTechnix, a medium-sized company developing a variety of robotic arms, custom claws, talking robots, smart clocks and mobile robots.
			
			<p><a href = "https://www.itnx.com/">https://www.itnx.com/</a></p>
	`},{
	cat: 'Analyse de contenu / Système de recommandation', name: 'Intellogo', value: 30,
	icon: 'img/intellogo.png',
	desc: `
			Provider of a SaaS cognitive platform designed tooffer digitalsearch and content discovery tools on a blended search option of machine learning concepts. The company's SaaS cognitive platform has an inbuilt recommendation chatbot called Alertsy that operates within Slack messenger and tracks published contents, enabling authors, publishers and readers to find and match with the required content.
			<p>Founded in 2014</p>
			
			
			<p><a href = "http://www.intellogo.com/">http://www.intellogo.com/</a></p>
	`},{
	cat: 'Vidéo 3D / Réalité virtuelle/augmentée', name: 'Irystec', value: 30,
	icon: 'img/irystec.png',
	desc: `
			Based on the science of the human eye, proprietary image processing algorithms and physiological models, IRYStec’s Perceptual Display Platform (PDP) embedded software technology replicates how the human eye sees. IRYStec's PDP technology adapts to viewer attributes (age, gender, ethnicity, colour and contrast perception), significantly improving readability across all ambient light conditions, while reducing eyestrain and improving power consumption. It senses the ambient lighting environment and adjusts in real-time to ensure that the quality of displayed images is optimized, regardless of whether the viewing environment is dark, bright, or highly reflective. IRYStec’s PDP technology is available to OEM display device manufacturers, from mobile phones and tablets to automotive displays and Augmented/Virtual Reality (VR) headsets.
			<p>Founded in 2014</p>
			
			
			<p><a href = "http://www.irystec.com/">http://www.irystec.com/</a></p>
	`},{
	cat: 'Autres', name: 'Kaloom', value: 30,
	icon: 'img/kaloom.svg',
	desc: `
			Provider of an online platform which will allow all virtual network functions to run at scale utilizing commodity hardware, merchant silicon and existing data center architecture. The company's online platform combines open networking and container based virtualization to provide a completely lossless environment to ensure consistent connectivity and high availability.
			<p>Founded in 2014</p>
			
			
			<p><a href = "http://www.kaloom.com/">http://www.kaloom.com/</a></p>
	`},{
	cat: 'Analyse de contenu / Système de recommandation', name: 'Keatext', value: 30,
	icon: 'img/keatext.svg',
	desc: `
			Helps companies manage &amp; acquire actionable data from unstructured information through adaptable &amp; user-friendly NLP solutions.
			<p>Founded in 2010</p>
			
			
			<p><a href = "https://www.keatext.ai/">https://www.keatext.ai/</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'kinova', value: 30,
	icon: 'img/kinova.svg',
	desc: `
			Kinova designs and manufactures service robotics platforms and applications that are simple, sexy and safe. From needs to innovation, Kinova creates robots that serve two markets. Kinova in assistive robotics empowers people with disabilities to push beyond their current boundaries and limitations, while Kinova in innovation robotics empowers industry and research to interact with its environment more efficiently and safely, and contributes to aiding product development and hands-on applications in the areas of service robotics and medical advancement.
			<p>Founded in 2006</p>
			
			
			<p><a href = "http://www.kinovarobotics.com/">http://www.kinovarobotics.com/</a></p>
	`},{
	cat: 'Autres', name: 'Landr', value: 30,
	icon: 'img/landr.png',
	desc: `
			Developer of an instant online audio mastering software designed to refine and polish finished stereo mixes. The company's instant online audio mastering software uses machine learning technologies which are applied to sound engineering and delivered as a platform, enabling users to mix tracks for the studio without an engineer, make live recordings in real time and broadcast shows live with a fully mixed sound.
			<p>Founded in 2012</p>
			
			
			<p><a href = "https://www.landr.com/en">https://www.landr.com/en</a></p>
	`},{
	cat: 'Analyse de contenu / Système de recommandation', name: 'lexalytics', value: 30,
	icon: 'img/lexalytics.png',
	desc: `
			transforms global conversations into meaningful and actionable insights. Every day, our leading text analysis platforms process billions of pieces of unstructured data, translating thoughts and feelings into profitable decisions for our customers. Lexalytics helps companies implement vital feedback and monitoring programs that create an ongoing dialogue with their customers. From social media monitoring to voice of the customer programs to customer experience management to business intelligence and more, the Lexalytics Semantria™ and Salience™ platforms are fully customizable and deliver at scale and on budget
			<p>Founded in 2003</p>
			
			
			<p><a href = "https://www.lexalytics.com/">https://www.lexalytics.com/</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Lyrebird', value: 30,
	icon: 'img/lyrebird.svg',
	desc: `
			Lyrebird will offer a new generation of speech synthesis technologies for developers. It is the result of several months of research conducted at the MILA lab at University of Montréal. Our technology is the very first of this kind to allow copying voices in a matter of minutes and control the emotion of the generation. We believe that vocal human-computer interfaces will become more and more widespread in the future and we want to lead the race.
			<p>Founded in 2017</p>
			
			
			<p><a href = "http://lyrebird.ai">http://lyrebird.ai</a></p>
	`},{
	cat: 'Vision par ordinateur', name: 'MachineVision (Initialement FLIR)', value: 30,
	icon: 'img/flir.png',
	desc: `
			Flir Systems Inc. designs, manufactures, and markets thermal imaging and infrared camera systems in the U.S. and internationally. Its Thermography division offers products for commercial and industrial applications, where temperature measurement is a primary requirement. The Commercial Vision Systems division caters to security, automotive, marine, airborne, and first responder markets. The Government Systems division makes products that allow the user to see in total darkness and through smoke, haze, and various types of fog. This division serves search and rescue, force protection, border and maritime patrol, surveillance and reconnaissance, targeting, federal drug interdiction, military, paramilitary, and police markets.
			
			
			<p><a href = "https://www.ptgrey.com/">https://www.ptgrey.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Macromeasures', value: 30,
	icon: 'img/macromeasures.png',
	desc: `
			Macromeasures makes it easy to tap into the everyday behaviors of hundreds of millions of people, across social networks, to power personalized experiences and gain meaningful insights. We’re building the best way to learn about your customers. We help marketers understand their millennial customers by giving them world-class customer intelligence.
			
			
			<p><a href = "https://macromeasures.com/about/">https://macromeasures.com/about/</a></p>
	`},{
	cat: 'Autres', name: 'Me3', value: 30,
	icon: 'img/we3.png',
	desc: `
			To use technology, psychology, and design to bring lasting happiness to our users in the most economical, scalable and effective way possible.
			<p>Founded in 2017</p>
			
			<p><a href = "https://macromeasures.com/about/">https://macromeasures.com/about/</a></p>
	`},{
	cat: 'Vision par ordinateur', name: 'Mirametrix inc', value: 30,
	icon: 'img/mirametrix.png',
	desc: `
			Mirametrix develops consumer electronics integrated with proprietary attention sensing technology to enable human-computer interaction processes. The company also offers Glance by Mirametrix, a software platform that enables customers, OEMs, and ISVs to create user experiences across all devices.
			<p>Founded in 2010</p>
			
			<p><a href = "http://www.mirametrix.com/">http://www.mirametrix.com/</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'mnubo', value: 30,
	icon: 'img/mnubo.png',
	desc: `
			Provider of a big data analytics platform for the Internet of Things. The company operates a technology startup building a global cloud services platform that is organized around two strategic business lines, the internet of things cloud platform division and software engineering services division. It provides IoT Data Analytics to help product manufacturers build better connected products and services.
			<p>Founded in 2012</p>
			
			<p><a href = "http://www.mnubo.com">http://www.mnubo.com</a></p>
	`},{
	cat: 'Autres', name: 'motorleaf', value: 30,
	icon: 'img/motorleaf.png',
	desc: `
			Machine Learning Automated Control for Indoor Agriculture.
			<p>Founded in 2015</p>
			
			<p><a href = "http://www.motorleaf.com">http://www.motorleaf.com</a></p>
	`},{
	cat: 'Autres', name: 'My intelligent machines', value: 30,
	icon: 'img/mims.svg',
	desc: `
			Competitive research carried out in the Pharma/Biotech industry, and in academia relies on massively produced omics data; the use of which requires bioinformatic expertise. Unfortunately, just a fraction of scientists have access to the expertise of bioinformaticians. Hiring a huge number of bioinformaticians is limited by the availability of qualified personnel and converting any scientist in bioinformaticians is unrealistic. They will address these critical problems by conceiving and implementing artificial intelligent systems, called MIMs (for My Intelligent Machines). MIMs will be accessible to non-specialists in bioinformatics and will also support the day-to-day work of bioinformatic groups.
			<p>Founded in 2016</p>
			
			<p><a href = "http://www.mims.ai/">http://www.mims.ai/</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Myelin', value: 30,
	icon: 'img/myelin.svg',
	desc: `
			
			<p><a href = "http://www.myelin.solutions">http://www.myelin.solutions</a></p>
	`},{
	cat: 'Technologie financière', name: 'Mylo', value: 30,
	icon: 'img/mylo.png',
	desc: `
			Rounds up everyday purchases automatically and invests the spare change to help you achieve your financial goals.
			<p>Founded in 2015</p>
			
			<p><a href = "https://mylo.ai/">https://mylo.ai/</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Nash.', value: 30,
	icon: 'img/nash.png',
	desc: `
			Nash helps organizations innovate effectively by challenging assumptions, uncovering jobs to be done and making sense of new technologies.
			<p>Founded in 2017</p>
			
			<p><a href = "http://nash.agency">http://nash.agency</a></p>
	`},{
	cat: 'Autres', name: 'nectar', value: 30,
	icon: 'img/nectar.png',
	desc: `
			Nectar designs and manufactures intelligent food production systems.
			<p>Founded in 2017</p>
			
			<p><a href = "http://www.nectar.buzz">http://www.nectar.buzz</a></p>
	`},{
	cat: 'Autres', name: 'nGUVU', value: 30,
	icon: 'img/nguvu.png',
	desc: `
			Developer of gamification software for call-center agents. The company provides a cloud-based software that uses machine-learning, gamification and behavioral analytics to create sustained agent engagement in contact centers, by bringing a sense of fun and collaboration to achieving objectives.
			<p>Founded in 2014</p>
			
			<p><a href = "https://www.nguvu.com/">https://www.nguvu.com/</a></p>
	`},{
	cat: 'Vision par ordinateur', name: 'pavemetrics', value: 30,
	icon: 'img/pavemetrics.png',
	desc: `
			Pavemetrics specializes in 3D vision systems for the automated inspection of transportation infrastructure. Our systems are used in more than 35 countries around the world to automatically inspect roads, runways, railways and tunnels.
			
			<p><a href = "http://www.pavemetrics.com/about/">http://www.pavemetrics.com/about/</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Percev.ai', value: 30,
	icon: 'img/perceiveai.svg',
	desc: `
			
			<p><a href = "http://perceiv.ai">http://perceiv.ai</a></p>
	`},{
	cat: 'Santé / Télésanté', name: 'Percev.ai', value: 30,
	icon: 'img/perceiveai.svg',
	desc: `
			
			<p><a href = "http://perceiv.ai">http://perceiv.ai</a></p>
	`},{
	cat: 'Analytiques', name: 'Plotly', value: 30,
	icon: 'img/plotly.png',
	desc: `
			Plotly is the modern platform for agile business intelligence and data science.
			
			<p><a href = "https://plot.ly">https://plot.ly</a></p>
	`},{
	cat: 'Chaînes de blocs', name: 'Prëmo', value: 30,
	icon: 'img/premo.png',
	desc: `
			Prëmo is a platform powered by BlockChain and Artificial Intelligence to connect you with the right people as fast and precisely as possible. It's pure stellar innovation, at the Speed of Light!
			
			<p><a href = "https://www.xn--prmo-mpa.com/home/">https://www.xn--prmo-mpa.com/home/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Propulse Analytics', value: 30,
	icon: 'img/propulseai.png',
	desc: `
			Propulse analyzes the desires and intent of each consumer and provides the timeliest and accurate product choice available.
			
			<p>Founded in 2015</p>
			
			<p><a href = "http://www.propulseanalytics.com/en/">http://www.propulseanalytics.com/en/</a></p>
	`},{
	cat: 'Technologie éducative', name: 'Quizzio', value: 30,
	icon: 'img/quizzio.png',
	desc: `
			Quizzio is a Montreal-based startup using Machine Learning algorithms to predict how kids will answer general knowledge quizzes and adapt questions to enhance the learning and playing experience. Our mission is to propose an iPad game targeting kids 7+ years old that they truly enjoy playing while they learn and get exposed to geography, history, technology, architecture, sports, movies, etc. Quizzio is a native IOS game where the player navigates through maps by completing series of quizzes. Using a crowd sourced approach (curated by Quizzio), the content available in the game keeps growing and allow the player to get specific on a set of topics or broaden his knowledge by exploring new topics. Through proprietary algorithms (federal IRAP funding) we are able to pick content that is appropriate even if the player picks categories he has never explored before. As the player plays the game, we build his knowledge matrix.
			
			<p>Founded in 2016</p>
			
			<p><a href = "http://www.quizz.io">http://www.quizz.io</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'robotiq', value: 30,
	icon: 'img/robotiq.svg',
	desc: `
			At Robotiq, we free human hands from repetitive tasks. We help manufacturers overcome their workforce challenges by enabling them to install robots on their own. They succeed with our robotic plug + play tools and the support of our automation experts community. Robotiq is the humans behind the robots: an employee-owned business with a passionate team and an international partner network.
			
			<p>Founded in 2008</p>
			
			<p><a href = "http://robotiq.com/">http://robotiq.com/</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'RoofAI', value: 30,
	icon: 'img/roofai.svg',
	desc: `
			Roof Ai is a messaging platform that enables smart and instant communication between real estate businesses and their customers.
			
			<p>Founded in 2016</p>
			
			<p><a href = "https://roof.ai/">https://roof.ai/</a></p>
	`},{
	cat: 'Chaînes de blocs', name: 'S3r3nity', value: 30,
	icon: 'img/serenity.png',
	desc: `
			LUMINARY - Hand-free real-time access to practical knowledge ; UBIK - Intelligent collective corporate memory ; DEEP NEGOTIATION - Deeplearning for automated e-commerce negotiation ; AI FOR SMART CITIES - Automated Dynamic Smart City ; AI4REAL - Human Behaviour Replicator ; TERRAFARMING - Ecosystem Regenerator ; GENTLEDROID - Automated High Value Information Handling ; ;WORK FREEDOM - Marketplace of Automated Tasks and Expertise ; PREZURE - Action/Decision Based Predictive System ; UNEXPLORED TERRITORIES - Autonomous Territory Exploration

			<p><a href = "http://www.s3r3nity.com">http://www.s3r3nity.com</a></p>
	`},{
	cat: 'Application mobile', name: 'Seamless Planet', value: 30,
	icon: 'img/seamlessplanet.png',
	desc: `
			At Seamless Planet our mission is to provide a simple and effective solution for individuals who want access to experiences anywhere in the world. We've accumulated a vast inventory of activities, things to do and unique experiences to offer to travelers. When searching for the perfect experience for the traveler, we use a mix of artificial intelligence and the human touch to personalize the best activity that fits the travelers needs and wants.

			<p>Founded in 2014</p>
			
			<p><a href = "http://www.seamlessplanet.com">http://www.seamlessplanet.com</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'SenseAI Technologies', value: 30,
	icon: 'img/senseai.png',
	desc: `
			Industrial energy-saving through IOT and AI. <br></p>
			<p>Founded in 2017</p>
			
			<p><a href = "http://www.senseai.com">http://www.senseai.com</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Smooch', value: 30,
	icon: 'img/smooch.svg',
	desc: `
			Smooch is the best way to have personal, rich conversations with your customers online or in your mobile app. We handle thousands of communication for successful startups and leading companies around the world, every year. Our features, integrations and developer-friendly APIs let our users focus on delivering the best possible service.
			<p>Founded in 2015</p>
			
			<p><a href = "https://smooch.io/">https://smooch.io/</a></p>
	`},{
	cat: 'Vidéo 3D / Réalité virtuelle/augmentée', name: 'Sphere Play', value: 30,
	icon: 'img/sphereplay.png',
	desc: `
			Complete platform to enable broadcasters, publishers and commercial content distributors to integrate virtual reality to their existing media distribution workflow via their own apps and websites.
			
			<p><a href = "http://www.sphereplay.com/">http://www.sphereplay.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'SPILL AD', value: 30,
	icon: 'img/spillad.png',
	desc: `			
			<p><a href = "http://spillad.com/">http://spillad.com/</a></p>
	`},{
	cat: 'Analytiques', name: 'SPORTLOGiQ', value: 30,
	icon: 'img/sportlogiq.svg',
	desc: `
			Provider of analytics data for professional hockey teams. The company's platform helps in analyzing player movement and provide context to game analysis by using player tracking and activity recognition.
			<p>Founded in 2014</p>
			
			<p><a href = "http://sportlogiq.com/">http://sportlogiq.com/</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Stradigi AI', value: 30,
	icon: 'img/stradigi.png',
	desc: `
			Stradigi AI is a leading AI powered solutions provider, backed by an applied research lab committed to bringing excellence & smarter results to international businesses.</p>
			
			<p><a href = "https://www.stradigi.ai">https://www.stradigi.ai</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'Stratuscent', value: 30,
	icon: 'img/stratuscent.png',
	desc: `
			Sensing Dynamics is a start-up from Montreal, Canada that is developing CloudSense, an electronic nose platform. CloudSense is a ubiquitous chemical sensing platform technology that can quantify and identify chemical footprints that are omnipresent in our environment. This ability to sense chemical fingerprints in a smart environment can provide context to the decision making process in smart devices.
			
			<p>Founded in 2014</p>
			
			<p><a href = "http://www.stratuscent.com">http://www.stratuscent.com</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'SweetIQ', value: 30,
	icon: 'img/sweetiq.png',
	desc: `
			Consumers search the Internet for locally available products &amp; services. They rely on accurate business information, positive reviews &amp; engaging social interactions to make purchasing decisions. sweetiQ is a unified local search marketing SaaS for retail chains &amp; marketing agencies to increase their online presence, publish &amp; correct business information across the web, manage consumer reviews &amp; engage prospects on social channels to drive in-store foot traffic &amp; increase sales.
			
			<p>Founded in 2010</p>
			
			<p><a href = "https://sweetiq.com/">https://sweetiq.com/</a></p>
	`},{
	cat: 'Services (consultation, R&D)', name: 'Techinnov', value: 30,
	icon: 'img/technnov.png',
	desc: `
			Established in Montreal, Canada. Software Engineering Consulting Group is a consulting company composed by software engineers, developers, computer scientists and subject matter experts in information technology. We provide large-scale software solutions for various companies. Our expertise and passion is a mixture of ongoing life-long learning in our domain, combined with extensive work experience. Our professionals work for prestigious world-renowned corporations in different industry fields such as aviation, business solutions and entertainment which gives our team its famous heterogeneous background. In addition to our business, as part of our comittment for a better and smarter planet we participate in various research projects, which gives us the opportunity to stay in the frontline of new technology.
			
			
			
			<p><a href = "http://www.techinnov.ca/">http://www.techinnov.ca/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Thirdshelf', value: 30,
	icon: 'img/thirdshelf.png',
	desc: `
			Developer of loyalty marketing SaaS for independent retail merchants. The company helps merchants retain and maximize the lifetime value of their customers, using machine learning to convert item-level purchasing data into customer insights that trigger personalized offers and recommendations to drive repeat purchases. The company has partnered with some of the largest point-of-sale vendors for our market segment; including Lightspeed, Vend and Springboard Retail.
			
			<p>Founded in 2014</p>
			
			<p><a href = "https://www.thirdshelf.com/">https://www.thirdshelf.com/</a></p>
	`},{
	cat: 'Analytiques', name: 'Time is Life', value: 30,
	icon: 'img/timeislife.png',
	desc: `
			Time Is Life is a FinTech company specialized in data processing and data analysis in the area of GRC (Governance, Risk, Compliance).
			
			<p>Founded in 2011</p>
			
			<p><a href = "http://www.timeislife.com/">http://www.timeislife.com/</a></p>
	`},{
	cat: 'Marketing / Médias sociaux', name: 'Tylio', value: 30,
	icon: 'img/tylio.png',
	desc: `
			The affordable solution to increase brand visibility
			
			<p>Founded in 2015</p>
			
			<p>Saint-Lambert</p>
			
			<p><a href = "https://tylio.com/">https://tylio.com/</a></p>
	`},{
	cat: 'Robotique / Drone / Internet des objets', name: 'umanx', value: 30,
	icon: 'img/umanx.png',
	desc: `
			entreprise en démarrage spécialisée en robotique
			
			<p>Founded in 2014</p>
			
			<p>Québec</p>
			
			<p><a href = "https://umanx.com/">https://umanx.com/</a></p>
	`},{
	cat: 'Autres', name: 'Vention', value: 30,
	icon: 'img/vention.png',
	desc: `
			Provider of a browser-based 3D machine builder platform that is suited for the design of fixed and automated equipment in the fields of small business automation, lean manufacturing, product validation and research, and industrial design. The company's browser-based 3D machine builder platform consists of a library of structural, motion and control components, a free cloud-based 3D Machine Builder, artificial intelligence-enabled 3D constraints, enabling designers to design and order their custom industrial equipment in a few days.
			
			<p>Founded in 2015</p>
			
			<p>Montréal</p>
			
			<p><a href = "https://www.vention.io/">https://www.vention.io/</a></p>
	`},{
	cat: 'Agent conversationnel', name: 'Vhrtech.ai', value: 30,
	icon: 'img/vhrtech.png',
	desc: `
			We are dedicated to create virtual assistants using Artificial Intelligence, machine and deep learning.
			
			<p>Montréal</p>
			
			<p><a href = "http://www.vhrtech.ai">http://www.vhrtech.ai</a></p>
	`},{
	cat: 'Vision par ordinateur / Affichage intelligent', name: 'Wrnch', value: 30,
	icon: 'img/vhrtech.png',
	desc: `
			wrnch teaches game engines to see. Wrnch provides computer vision tools and middleware to help create amazing AR applications.
			
			<p>Founded in 2015</p>
			
			<p>Montréal</p>
			
			<p><a href = "https://wrnch.ai/">https://wrnch.ai/</a></p>
	`},{
	cat: 'Analyse de contenu / Système de recommandation', name: 'Youneeq', value: 30,
	icon: 'img/youneeq.png',
	desc: `
			Provider of a predictive analytics platform. The company provides a platform which uses machine learning predictive algorithms to personalize content, create behavioral based persona data and demand driven publishing opportunities.
			
			<p>Founded in 2011</p>
			
			<p>Montréal</p>
			
			<p><a href = "https://youneeq.ca/">https://youneeq.ca/</a></p>
	`}];
/*eslint-enable indent*/
/*global d3*/



let svg = d3.select('#teck-stack-svg')


let width = svg.property('clientWidth'); // get width in pixels
let height = +svg.attr('height');
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;

if (!width) {
  width = svg.node().parentNode.clientWidth;
  centerX = width*0.5;
}
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
	.style('font-size', '11px')
	.style('fill', 'rgb(200,200,205)')
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
				.classed('hidden', true);

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
		d3.selectAll('.node-icon').classed('hidden', false);
	}
});

function ticked() {
	node
		.attr('transform', d => `translate(${d.x},${d.y})`)
		.select('circle')
			.attr('r', d => d.r);
}
