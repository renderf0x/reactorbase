//initial array of HR20 students.
/* missing github:

janet brown
Douglas Eichelberger
sasha bayan
issac pao

missing email:

bernie chu */

var peeps = [
	{
		name: 'Pira Trtasavit',
		cohort: 'hr20',
		name_note: 'Class Lead here at HR20. (FYI - it\'s pronounced "PEER-uh"; you\'re on your own with the last name)',
		photo:'pira.jpg',
		q1: 'Prior to Hack Reactor, I was working in administration at The University of California San Francisco at SF General Hospital. My background is in education (as a teacher and recruiter), and non-profit community building (aka, I\'m also a pastor), and I own and operate personal coaching practice. ',
		q2: 'I was born and raised in San Francisco. SF Natives are rare and fast-becoming an endangered species =) ',
		q3: 'Hack Reactor is my first venture into SF\'s rich and robust tech industry. What excites me most about being a part of Hack Reactor is our innovative approach to education, especially our rapid-iteration model which you will soon be experiencing first hand. ',
		q4: 'I actually have very little coding experience (CodeAcademy counts). My main role is to ensure that your HR experience is also full of great opportunities to grow in your academic, interpersonal and empathic skills as well. I am simply amazed every day being surrounded by some of the most brilliant coders and the most effective communicators here at Hack Reactor.',
		q5: ['I\'ve been a contestant on 2 nationally televised gameshows (The Price Is Right and Wheel of Fortune).', 'I toured with a rock & roll cover band the year after I graduated from college.',' I\'ve been married 7 years and have a 3-year old son, with another on the way in December.','I recently released a song on iTunes & Amazon that was co-written with my wife and successfully supported by backers on Kickstarter (y\'know you want to Google it now =).','I\'m thrilled to be working with you throughout the course. Feel free to ask me questions as you prepare for week 1 at Hack Reactor.']
		github_id: 'piratritasavit',
		hometown: 'San Francisco, USA',
		email: 'pira.tritasavit@hackreactor.com',
		roles: ['hacker', 'class-lead']
	},
	{
		name: 'Cory Asato',
		cohort: 'hr20',
		name_note: 'pronounce as you will',
		photo:'cory.jpg',
		q1: 'I\'ve been tending bar for the better part of a decade.  Touring the food industry for my thus adult life working from fine-dining to slanging beers and shots in punky dives to crafting cocktails with some of the brightest....Oh man my 20\'s are over :) .',
		q2: 'Flying in from Honolulu, Hawaii. ',
		q3: 'Skynet.  :D I\'m particularly interested in creating services to ease a more "natural" way of living.  Whether that be environmental, farm to table resources, inner-city farming, energy technology, etc. etc.  You get it, hippie stuff.  Further, I love how Node is being used with micro-controllers giving JS devs access to hardware development.  Can\'t wait to dig in more! Outside of that, MUSIC!  Note to self: learn Web Audio API.',
		q4: 'I are newb.  Started perhaps a little over a year ago at the advise of a friend.  Did the CodeAcademy, CodeSchool, Tutsplus route picking things up from books and blogs along the way.  Have dabbled with and use/d Backbone, Angular, Meteor, Node, Express, Mongodb / Mongoose, Gulp, Browserify, Keystonejs, etc.  I\'m finding the deeper I go, the more creative and expressive programming becomes.  Something akin to writing a good song...but perhaps thats reaching.',
		q5: ['Obsessed with banjo.', 'Guitar pedal nerd.  (I buy vintage fuzz pedals like girls buy shoes)', 'Favorite cocktail to make: The Sazerac.']
		github_id: 'coryasato',
		hometown: 'Honolulu, USA',
		email: 'czasato@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Rustin Crandall',
		cohort: 'hr20',
		name_note: 'Rustin is like Justin with an \"R\"',
		photo:'rustin.png',
		q1: 'I\'m currently a web manager at Stanford GSB. I\'ve also worked as a Program Administrator at Stanford GSB, a Product Manager for a e-commerce fashion company in the Philippines, a Program Manager for an edtech nonprofit in New York, and an IT/Education volunteer in the Peace Corps. ',
		q2: 'Coming all the way from San Mateo, CA! (about 15 miles south of SF for those from further away)',
		q3: 'I\'m especially interested education technology and using technology in the nonprofit sector. I also love travel and theater/movies/TV and wouldn\'t mind exploring tech in those areas as well.',
		q4: 'Mostly HTML and CSS from work and building sites as a freelancer. Some PHP, though mostly just for editing Drupal and Wordpress. Have been playing with learning JavaScript and Python from online courses at sites from Code Academy to Udacity for a while, but am excited for a more immersive approach to learning. ',
		q5: ['Have been married for 5 years and have 3 cats', 'MA in history with focus on late-19th Century American cultural history','Have performed in over 15 musicals (amateur)']
		github_id: 'rustinpc',
		hometown: 'San Mateo, USA',
		email: 'rustinpc@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Valentyn Boginskey',
		cohort: 'hr20',
		name_note: '(like Valentine), or Val if you\'re lazy. Either is fine, really.',
		photo:'valentyn.png',
		q1: 'I\'ve been an IT consultant for 2.5 years at Accenture. I was a sysadmin for about 2 years before that with the US Army, as a civilian.',
		q2: 'Edison, NJ. It\'s about a 40 minute train ride from NYC. Ask me about the Jersey Shore! Or actually, please don\'t =)',
		q3: 'I\'m fascinated by digital currency - Bitcoin - and the potential it has to revolutionize world finance. I also have an interest in the security / privacy space, especially in light of some recent news concerning a certain 3-letter agency. Aside from that, if it makes Ars Technica, I\'m generally interested.',
		q4: 'My prior coding experience is nearly nonexistent, as the most code I\'ve ever written for work was a couple dozen lines of shell script. I am fairly comfortable in a terminal though, and I started learning Ruby / Rails earlier this year, via Treehouse / Code School.',
		q5: ['I drove one of those Geek Squad beetles and taught an SAT class, though not at the same time.', 'I started building a 16-ft, dual-engine hovercraft with one of my coworkers. Let\'s just say it\'s a work in progress.', 'In 8th grade, I made a mean science lab website, complete with 90\'s-era flashing GIFs.']
		github_id: 'vboginskey',
		hometown: 'Edison, USA',
		email: 'poison5151@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Arthur Chan',
		cohort: 'hr20',
		name_note: '',
		photo:'arthurchan.jpg',
		q1: 'I studied at University of the Pacific for Biology and (recently) Computer Science (Foundational Theories Concentration). Acquired an interest in web development at school, but did not have time to go for a web development concentration. I\'ve worked a bit as a pharmacy technician and interned at Western Digital prior to this.',
		q2: 'I am coming from LA County.',
		q3: 'Interest in the vast and rapidly changing web development scene. The structure and organization possibilities provided by web application frameworks appeal to my coding OCD. I also really enjoy learning about and applying concurrent computing.',
		q4: 'I have a scattered experience in a bunch of languages and the different coding paradigms of cs. I recently learned a bit about concurrent/parallel computing from some free courses online and hope to see if any of it will be applicable in web development. My web development and network security coding experience in the Computer Science field is extremely lacking and I aim to change that during my time with Hack Reactor.',
		q5: ['I love all food and I am always eager to taste or cook new dishes', 'Previous to studying computer science, I was studying with Pharmacy School in mind','I am a board game enthusiast. Recent favorites: Kemet and Libertalia']
		github_id: 'ArthurKChan',
		hometown: 'Los Angeles, USA',
		email: 'arfurboy@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Derek Barncard',
		cohort: 'hr20',
		name_note: 'Like the oil machinery, but not spelled like that.',
		photo:'derekryan.jpg',
		q1: 'Working at Twitter doing abuse review and policy enforcement. Before that I was working doing Japanese language tech support and partner management at a few different places.',
		q2: 'Been in SF for a while, though I\'m originally from LA.',
		q3: 'Like Cory, I\'m fascinated by the intersection of music and technology. As a musician myself I have a vested interest in providing better ways for music to be created, collaborated on, promoted, and consumed. I also love the intersection of design/art of all forms and tech. I also just love digging deeper and learning.',
		q4: 'I\'ve flirted with coding related jobs and activities, from tech support and scripting to building websites, for most of my time in the tech industry, but haven\'t had any formal training. I\'ve gone through the usual suspects of Codeacademy, Codeschool and the like, and gotten to the point where I\'ve hacked some internal tools at work to improve them, but never made the leap into full on development. I\'m massively looking forward to the next stage with all y\'alls.',
		q5: ['I\'m absolutely hooked on reading Japanese books about Peter Drucker.', 'I\'ve produced dance tunes that have charted on Beatport and been put on a compilation by Paul Oakenfold.','I lived for 1 year in France, 6 months in the UK, and on and off in Japan for years']
		github_id: 'renderf0x',
		hometown: 'Los Angeles, USA',
		email: 'derek.barncard@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Sandeep Gonnabathula',
		cohort: 'hr20',
		name_note: 'y\'all can call me Sunny.',
		photo:'sunny.png',
		q1: 'I attended UT in Austin for a while before moving back to Houston, getting my Associate\'s degree and working in investment banking for Morgan Stanley.',
		q2: 'Though I live in Houston, I consider myself a forcibly-removed Austinite.',
		q3: 'My biggest tech interests for the past few years have been cyber-security, crypto-currencies (go Bitcoin and Stellar!) and reputation/sharing/p2p-economy companies like Lyft, Airbnb and TaskRabbit. The power that these technologies give the lay-man make me very excited about the future of economy and governance.',
		q4: 'I took the Udacity Intro to CS with Python course in July 2013, after which I used it a bit at work to speed up my workflow. In January, I learned about web dev bootcamps and influenced by my increasing disdain for banking and finance, I picked up JS in February/March. Since then, I\'ve taken a few Code School courses, dabbled with the insanely-awesome Meteor framework and applied what little I know to a crypto-currency-related pet project (if you\'re interested, ask me about it since I\'m probably dying to tell you)!',
		q5: ['I\'ve worked on a few movie sets and once got to meet the Houston rapper Slim Thug.', 'By \'worked on\', I mean I was a production assistant and by \'meet\' I mean fetched him coffee once :(','Thanks to the internet, I\'ve been trying to become a bit of a DIYer. I\'ve cracked open my TV a few times to fix a temperature sensor, I\'ve reflowed my PS3 twice (for a total gain of 2 weeks of life) and I\'ve recently branched out into lawn equipment (quite unsuccessfully I might add).']
		github_id: 'sunny-g',
		hometown: 'Austin, USA',
		email: 'sunny.gonna@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Sebastian Tonkin',
		cohort: 'hr20',
		name_note: 'like the Jamaican crab from the Little Mermaid',
		photo:'test.png',
		q1: 'I started in product marketing at Google and then was the "business guy" founder of a startup called Cloud Nine that got acquired by Boingo. I realized our product/eng meetings were my favorite part of the workday and then discovered HR. ',
		q2: 'Already local here in SF (in the  Haight).    Originally from Connecticut.  ',
		q3: '- Drones - Eyetracking, EEG and other cool wearable stuff',
		q4: '- HTML and CSS from freelance web design in college - Some C# experience from a few IT internships way back in the day ',
		q5: ['Fifth year burner', 'Occasional woodworker','Avid meditator']
		github_id: 'sgtonkin',
		hometown: 'Connecticut, USA',
		email: 'sgtonkin@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Rick Takes',
		cohort: 'hr20',
		name_note: 'like Brick without the “B”.',
		photo:'ricktakes.jpg',
		q1: 'Working as a freelance web developer and digital content producer for the past 5 years.  Was contracted at Cisco for 18 months as part of the global brand team to produce a series of training videos and related materials as well oversee the ongoing development of the Brand Exchange, an iStock-like platform.  Before that I worked in corporate video production and have a degree in Media Arts.',
		q2: 'The far side of the bay, Alameda.  ',
		q3: 'I\'m interested technology that interacts with people and its environment.  I\'ve dabbled with leapmotion, Arduino, RaspberryPi and similar technologies.  I\'m especially interested in using tech to create interactive art and games.  More broadly I\'ll read just about anything relating to technology or science.  It\'s all pretty fascinating. ',
		q4: 'I have been working as a web developer for the past few years, mostly working in PHP, JS, HTML, CSS with a little Python and shell scripting.  I\'ve done quite a bit of theme and plugin development for custom WordPress sites.  I\'m really excited to get some more formal experience as a developer, and most importantly to work in a team setting. ',
		q5: ['I\'ve ridden my motorcycle to the Arctic Circle and back and rebuild bikes in my free time.', 'Like Sunny, I\'ve also worked on a few films as a PA.  I met Gary Busey, he\'s just as crazy as he seems.','I own a Virtual Boy (the failed Nintendo system not a fake child)']
		github_id: 'RTakes',
		hometown: 'Alamda, USA',
		email: 'rick@theparkmart.com',
		roles: ['hacker']
	},
	{
		name: 'Judy Zaratan',
		cohort: 'hr20',
		name_note: '',
		photo:'judy.jpg',
		q1: 'I worked as a Systems Electrical Engineer at a satellite company.  Prior to that, I worked in a biotech company working as a QC Analyst.',
		q2: 'Santa Clara, but I was born and raised in San Francisco.  ',
		q3: 'I\'m interested in the wearables and any type of stuff that tracks your health, such as sleep, exercising, eating habits, etc...',
		q4: 'C++ and Python, but mostly the rudimentary stuff you learn in school and a little from my work experience.  I\'ve just started learning Javascript through Code Academy, Code School, and whatever I can absorb from the web.  Hoping to change all that and take it up a notch with Hack Reactor and you awesome people!!',
		q5: ['I\'ve gotten into CrossFit and I\'m into weightlifting.  I enjoy it a lot!', 'I\'ve got two cats called Furby and Mochi.']
		github_id: 'mochicat8',
		hometown: 'San Francisco, USA',
		email: 'mochicat8@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Liz Portnoy',
		cohort: 'hr20',
		name_note: '',
		photo:'liz.jpg',
		q1: 'I worked as a strategy & operations consultant at Deloitte for the past two years. As an analyst I was a total generalist, so I worked on everything from developing a strategy for a material sciences company to sell its products to the government to sourcing janitors for a logistics company (glamorous, I know). Seeing how different companies work was a cool experience, but I found myself a little frustrated with not being able to create real things or products that people use, so I’m excited to switch gears.  Before Deloitte I went to Duke and got a degree in econ and cultural anthropology.',
		q2: 'New York City- I recently moved from Manhattan to Greenpoint, Brooklyn and am working on becoming trendy enough to fit in (not there yet).  Minneapolis, Minnesota is home.',
		q3: 'I\'m interested in ed tech and how tech can be used at city and state government levels to improve people’s everyday life. Something like education, whose format was largely unchanged for a long time and is only recently starting to get shook up is really exciting to me.  I also love learning about UX / UI stuff- it never ceases to fascinate me how the way people interact with technology completely shapes the whole product.',
		q4: 'I am brand new at coding. I started contemplating the bootcamp idea this spring  after a few people told me I would really like it. I went the code academy / Skillshare / code school track, read a lot of the Eloquent Javascript and have been getting comfortable with the basics of html, css, javascript and a little Ruby. My brother just asked me to build a website for his upcoming wedding, so it looks like that will be my first \‘real\' project.',
		q5: ['In my free time I do a lot of cooking and concert-going and like to stay pretty active. I also listen to a lot of podcasts and my favorites are the pop-culture ones on the Grantland network', 'Walking is my favorite way to get to know a new place. Took it a little too far this past summer when I went on what i thought (and led my boyfriend to believe) would be an 8 mile hike in Colorado. It ended up being a 20 mile day which involved basically scaling a cliff and traversing  on a foot-wide path across mountain ledges. Given my fear of heights, it was easily the scariest experience of my life.','I spent about half my childhood in South America, split between Buenos Aires and Sao Paulo and have worked on keeping up my Spanish and Portuguese since. Love the idea of living in the region again (maybe next time in Rio…)']
		github_id: 'lizportnoy',
		hometown: 'New York City, USA',
		email: 'lizport10@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Tim Hua',
		cohort: 'hr20',
		name_note: 'last name is up to interpretation: I\'ve been getting the karate kick noise for as long as I can remember though',
		photo:'timhua.png',
		q1: 'I\'ve spent the last 18 months starting/maintaining an e-commerce shop. Prior to that I was a Systems Engineer (fancy title for IT) at AMD for ~8ish years.',
		q2: 'Fremont, CA - all of maybe 30 miles from HR.',
		q3: 'I have an interest in pretty much all things tech. It started when I built my first computer some 15 years ago and dabbled in overclocking to squeeze as much out of the system as I could (when an extra 100mhz was considered massive). These days I\'m very interested in seeing where fitness related tech is headed, from the Vessel, to various fitness trackers, to contact lenses that track stats.',
		q4: 'Random tinkering with HTML/CSS and some light JS back in my high school days, some BASH and perl scripting for automation reasons at my last job, nothing major. I\'ve gone through Code Academy, Code School, and some Udacity classes. I\'ve always had an interest in web development but it never really developed (har). Really excited about getting started with everyone in less than a month (!!).',
		q5: ['Happily married for ~2.5 years. We have a 4yr old tuxedo kitten and an 8mo old shepherd/lab mix puppy. We are expecting our first non-furbaby in April 2015.', 'I enjoy driving and working on cars. On free weekends and if my car is not in a few dozen pieces strewn about the garage I like to drive in circles around the local racetracks. Failing that, I\'d be putting the car back together (or tearing it apart).','Casual gamer.']
		github_id: 'timhua',
		hometown: 'Fremont, USA',
		email: 'tim.hua@icloud.com',
		roles: ['hacker']
	},
	{
		name: 'Brian Zindler',
		cohort: 'hr20',
		name_note: '',
		photo:'brianzindler.jpg',
		q1: 'I recently finished my undergrad at Lawrence University in Economics. This summer I interned at a commercial real estate company. ',
		q2: 'I\'m currently in Chicago, and went to school in Wisconsin.',
		q3: 'Software that helps learners, and creators. I\'m interested in helping musicians, artists, performers, and programmers. I\'m really into the work of people like Bret Victor and Alan Kay.',
		q4: 'I have been teaching myself to program for the past year and a half. Before that I dabbled slightly in rails but didn\'t program very much. I have been working on learning javascript, and clojure. I\'ve currently been using clojurescript on a lot of personal projects, and am really enjoying it.',
		q5: ['I really like doing improv comedy.', 'I was co-founder and director of my college improv team.']
		github_id: 'zindlerb',
		hometown: 'Chicago, USA',
		email: 'zindlerb@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Chris Perez',
		cohort: 'hr20',
		name_note: '',
		photo:'christian.jpg',
		q1: 'I grew up on a dairy farm in southern California, traveled to the east coast for some schooling, moved back west after graduating in 2012, worked at an architecture firm for a few years, then was gradually lured to tech by my housemate who was working for Twitter at the time.',
		q2: 'Oakland, CA',
		q3: 'Frontend development, education, biotech,  3D printing, graphics and modeling, BIM, machine learning, friendly AI, data visualization, processing (the language), open source everything',
		q4: 'Very little. I took an intro programming class as a sophomore in 2010. Crowning achievements were a Sudoku solver and a Rock-Paper-Scissors player written in Java (regrettably forgot most of what I learned in the ensuing years). After finishing undergrad I worked through some intro Coursera/Udacity classes to jog my memory, then got a bit more serious about doing a bootcamp about 3 or 4 months ago. Since then I\'ve picked up some Ruby, HTML/CSS, JavaScript, JQuery, and CLI basics.',
		q5: ['My wingspan is 5 inches greater than my height.', 'I love the outdoors, hiking, camping, bouldering, you name it.','Seems there are lots of musicians in our cohort! Count me in. I play guitar/piano and have also owned many pedals.','Also, my girlfriend is in HR21.']
		github_id: 'cmperez',
		hometown: 'Oakland, USA',
		email: 'christian.manuel.perez@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Issac Pao',
		cohort: 'hr20',
		name_note: 'That\'s Issac spelled with double s and not double a. My mom claimed to see the double s spelling in the Bible, but to this day I haven\'t been able to find it. Then again, I\'ve never tried to find it.',
		photo:'issac.png',
		q1: 'I\'m currently working as a software engineer at Lam Research Corp, a wafer fabrication equipment company in the semiconductor industry. I\'m taking a leave of absence to come to Hack Reactor, so I will technically still be employed during my stay. Many might ask why I am joining Hack Reactor if I\'m already an experienced software engineer. My answer to that is I want to learn the web quickly, efficiently, and thoroughly, and I believe there is no better place to do that than in Hack Reactor.',
		q2: 'San Jose, CA',
		q3: '1. I\'m interested in how I can use tech to supplement or even foster the practice of fundamentals in basketball. So many young players today only care about shooting and fancy moves. 2. I\'m interested in using tech to make the composition of music easier, particularly on the piano.',
		q4: 'I\'ve been at Lam for about 3 years now and develop most of my software in Smalltalk, a beautiful and powerful language yet like Latin, a dead language. Virtually all modern OO languages are patterned after Smalltalk, and its development environment was also the first to use the MVC framework that many languages pattern after today. I can readily testify that learning Smalltalk helped me tremendously in grasping OO concepts. Small talk aside, I\'ve developed windows applications in C++, C#, and Java at Lam. I do not have any prior web development experience, however. so HTML/CSS are pretty foreign to me.',
		q5: ['I love talking about conspiracy theories', 'I dropped around 20 points on Jeremy Lin in middle school. I played well that game so I could namedrop.','I have perfect pitch and frequently use that to play songs I like from movies, artists, etc. on the piano by ear.','I couldn\'t concentrate on my SAT because I heard the bulldozer outside and started obsessing over what note it was.']
		github_id: '',
		hometown: 'San Jose, USA',
		email: 'issac_pao@sbcglobal.net',
		roles: ['hacker']
	},
	{
		name: 'Alex Dajani',
		cohort: 'hr20',
		name_note: '',
		photo:'xelad1.jpg',
		q1: 'Did non profit work in the arts (which is actually where I started doing some rudimentary coding in PHP/HTML/CSS).  I\'ve also intermittently taught private music lessons since college.  My family owns a small restaurant here in San Francisco as well where I help out.',
		q2: 'Lived in SF my entire life.',
		q3: 'Sheesh now I feel unoriginal for having an interest in technology and music!  I\'ve been building my own computers for about 8 years and have always had an interest in the hardware side of things.  I have an interest in biohacking like Sebastian.  I\'m excited for the new wave of alternative education methods powered by technology.  I\'ve always been a big hobbiest and have a deep love of learning (that\'s how I got started on this path in the first place).  Sites like coursera, codeacademy, udemy, edx, have all been invaluable to me on my journey!',
		q4: 'Minimal experience.  Like many children my first experience was with Logo, and then some basic HTML.  From then on most of my coding revolved around hacking bits and pieces of pre written code together, or editing someone else\'s work.  I didn\'t start actually coding anything significant from scratch until about December of last year when I took an online Java course.',
		q5: ['I really enjoy competitive gaming.  This ranges from fighting games (as an aside my cat\'s name is Akuma) to poker.  If the game has depth then I\'ll probably be into it!', 'While I keep up with team sports casually I am an avid watcher of combat sports (boxing/MMA).  Hopefully this doesn\'t conjure up a picture of an Ed Hardy shirt!  I\'ve been practicing martial arts since I was about 8 (though I\'ve taken a brief hiatus), and really enjoy watching the individual adaptations of competitors as a fight progresses.','I once had dreams of being in a famous metal band.  I took up guitar in college and playing is one of my favorite pastimes to this day (though I haven\'t been in a formal band setting in a while, and spend most of my time learning more about Jazz).  What you probably won\'t guess, however, is that my first serious instrument was the flute!']
		github_id: 'xelad1',
		hometown: 'San Francisco, USA',
		email: 'xelad1@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Nikhil Ballaney',
		cohort: 'hr20',
		name_note: 'Nick-hill',
		photo:'nikhil.jpg',
		q1: 'Graduated in Management Studies in May this year.',
		q2: 'Born, brought up and studied in Mumbai, India. Currently staying with my brother in Omaha, NE.',
		q3: 'I am simply fascinated by technology\'s boundless potential and how one can touch the lives of billions through it.',
		q4: 'Studied the basics of arrays and objects in the 9th/10th grade. Majority of my learning began through online resources a couple of months ago enough to get into Hack Reactor.',
		q5: ['Interested in psychology, how the world functions and how things work.', ' I plan to retire near a water body in the mountains (pure air).','I like to best describe myself as peaceful, versatile and joyful.']
		github_id: 'NBallaney',
		hometown: 'Mumbai, India',
		email: 'ballaneyster@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Raymond Ma',
		cohort: 'hr20',
		name_note: '',
		photo:'raymondma.jpg',
		q1: 'I graduated from my undergraduate studies last September and began working in San Francisco around March / April. During that time I also spent a large portion of my time studying for a few actuary exams.',
		q2: 'I went to school in Berkeley and when I graduated went back home (Diamond Bar) for a few months before starting work in San Francisco. I am currently living around the Lake Meritt area (Oakland).',
		q3: 'I\'ve always been interested in mobile technologies, but recently have gotten really interested in fitness + technology (fit apps, wearables, etc) ',
		q4: 'I started out with some basic html during the Xanga days. In high school I took AP Computer Science which introduced me to JAVA. In college most of my work was based off “R” as I was a Stats major.',
		q5: ['I’m a big fitness junkie and I go to the gym at least 20 times a month without fail. (this might change soon LOL)', ' I started fixing broken phones in high school. I even set up a small makeshift workshop in my parent’s garage. The money I collected helped pay my way through college.','I am the biggest candy corn fan … I tend to gain a few pounds around the  month of October.']
		github_id: 'raymondma1',
		hometown: 'Diamond Bar, USA',
		email: 'raymondxma@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Robert Niimi',
		cohort: 'hr20',
		name_note: '',
		photo:'robertniimi.jpg',
		q1: 'Prior to Hack Reactor I had been working Full-time at P&G. All my prior experience has been in mechanical design and operations management. ',
		q2: 'I grew up in Las Vegas, but I am moving from Boston to start HR.',
		q3: 'There are a wide variety of things that interest me in tech, but at the moment I have been very interested in ed tech.',
		q4: 'My coding experience is very minimal. As a mechanical engineer in school, I would use MATLAB and took a course in C, and after graduation, I learned some Java, HTML and CSS through iTunesU, CodeSchool, etc.',
		q5: ['After I was accepted to Hack Reactor, I drove from the east to the west coast, flew to Hawaii, and have been in Southeast Asia since. I will conclude my trip in New Zealand and Australia before returning to the US and starting HR.']
		github_id: 'robertn702',
		hometown: 'Las Vegas, USA',
		email: 'robertn702@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Bernie Chu',
		cohort: 'hr20',
		name_note: '',
		photo:'berniechu.jpg',
		q1: 'Just got my PhD in chemical and systems biology from Stanford but a combo of anemic job market and disillusionment with science led me to switch gears.',
		q2: 'Palo Alto',
		q3: 'I like fancypants web stuff. Like holy cow you can get Microsoft office lite in a browser?! Google docs is amazing! I also find the idea of leveraging the free time of Internet users to do amazing things like recaptcha and duolingo do.',
		q4: 'Very little. Just a bit of image analysis in Matlab in grad school and then teaching myself some basic web stuff recently for HR prep.',
		q5: ['Married 6 years.', 'Have 2 dogs.','Smoke meat when the mood strikes.','Have dabbled in crossfit but am the least athletic/fit person in the world.']
		github_id: 'bernardchu',
		hometown: 'Palo Alto, USA',
		email: '',
		roles: ['hacker']
	},
	{
		name: 'Owen Diehl',
		cohort: 'hr20',
		name_note: '',
		photo:'owendiehl.jpg',
		q1: 'An Economics and Philosophy student, I\'ve been out of school for a year and a half and have dabbled in finance and insurance, neither of which held lasting interest. The past few months have been dedicated to teaching myself to code.',
		q2: 'I\'m coming from Nashville, TN and Washington, DC before that. ',
		q3: 'Hardware and software. I\'m glad we have a member from the semiconductor industry here (expect to be pestered!). I\'ve been playing video games for as long as I can remember, which probably was the impetus for my fascination with electronic systems. Particularly, I\'m interested in exploitative mechanics and game theory. High level manufacturing and \'lights out\' facilities are fascinating as well. ',
		q4: 'I started to code about 6 months ago and have been intensifying my studies in the past few months since being accepted into HR. Before that, I was taking a generalist approach to many different languages/concepts. One of my projects was setting up a SQL server because I was interested in data management.',
		q5: [' I climbed Mt. St Helens the year before it was deemed an active volcano again.', 'I love to talk about video game theory and world creation.','I enjoy running and hiking, so if anyone wants to explore on a Sunday, let me know.']
		github_id: 'owen-d',
		hometown: 'Washington DC, USA',
		email: 'ow.diehl@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Sasha Bayan',
		cohort: 'hr20',
		name_note: 'as in Sasha Baron Cohen or Sasha Fierce',
		photo:'sashabanyan.jpg',
		q1: 'Graduated in 2013 from Northwestern, spent several months afterwards launching an album of my original music, working at a recording studio in LA, and freelancing as a guitarist, sitarist, and singer-songwriter.',
		q2: 'I\'ll be coming from Los Angeles',
		q3: 'I\'m very interested in healthy/ sustainable music and arts distribution -- models like Patreon and Kickstarter that empower artists to create content while earning some cheddar. I\'m also fascinated by apps and sites that coordinate social encounters -- whether Meetup, Couchsurfing, Tinder, etc. I want to learn how we can further use technology to facilitate community building.',
		q4: 'Hardly any before HR. I was always mesmerized by programmers\' ability to manipulate content on computers and wished it was a skill I had. I found out about HR and my prep started from there -- Code School, Code Academy, and plenty of Google searches.',
		q5: ['I released an album that features 9 songs with 35 musicians and 40+ instruments and yours truly on vocals', 'I\'ve recorded Lance Bass of NSYNC for a single he was featured on with Snoop Dogg','I lived in Spain, Brazil, Israel, and India to do sociological + musicological research','I surf (poorly but with passion)']
		github_id: '',
		hometown: 'Los Angeles, USA',
		email: 'sashabayanmusic@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'David Raleigh',
		cohort: 'hr20',
		name_note: 'David, but if you call me Dave or Raleigh it\'s all good by me',
		photo:'davidraleigh.jpg',
		q1: 'Last job was working in Washington DC on a NASA software product to keep close formation satellites from colliding. Before that I worked on Geographic Information Systems software for importing height map data, working with computational geometry and testing projection transformations. I have an English lit degree and a masters in geodesy (what the heck is geodesy, right?).',
		q2: 'Just left Washington DC. Born and raised in Menlo Park, CA, but I haven\'t lived in the Bay area since high school.',
		q3: 'WebGL, Cessium, Leaflet, D3, WebSockets and PostGIS are some web mapping essentials I want to tackle. I\'d like to go through the process of wrapping a C++ library for Node.js. I\'m also interested in learning some General Purpose GPU programming.',
		q4: 'I haven\'t taken any computer science courses, but I\'ve learned a little C++, C#, Java, Python, Objective-C and Matlab. I have no JavaScript experience outside of HackReactor and for some reason I\'m intimidated by JavaScript and all it\'s associated goodies.',
		q5: ['I\'ve led surveying and research expeditions in Bolivia and Argentina that total some 6 months worth of camping in remote locations. My successes in South America earned me a spot on an Antarctica research team. I thought it would be so cold there that I\'d need a thick beard, but I had no beard growing skills. Now I look at what ought to be epic photos of me in Antarctica and all I can see is my ridiculous neck-beard.']
		github_id: 'davidraleigh',
		hometown: 'Menlo Park, USA',
		email: 'davidraleigh@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Rachel Sison',
		cohort: 'hr20',
		name_note: 'My nickname is Peter, but that won\'t make sense to any of you for a while. You can call me Rachel or Peter :) ',
		photo:'rachaelsison.jpg',
		q1: 'I was a Realtor for a while, an Esthetician for a few years, I travelled for a bit, and then I went back to school a couple years ago. I just graduated UC Berkeley, my major was Cognitive Science, with a concentration in Computer Science.',
		q2: 'I\'ve lived in SF for 9 years now, so I consider myself a \'local\'.',
		q3: 'One area of interest I have is the possibility of combining certain branches of education with programming. I had an \'aha\' moment in college where I was struggling with a difficult algorithm in one of my math classes, and then I coincidentally had to code that exact algorithm in my CS class. Breaking it all down into parts to build up the functionality cemented the concept for me, and I think that could be something interesting to play with in education. I\'m not particularly tied down to this area though, I mostly see myself doing front-end/ UI work.',
		q4: 'I took some CS classes at UC Berkeley, I have a pretty decent working knowledge of Java, Python, C, Matlab, (some) Ruby, and now JS. I\'ve built a few things for class projects, but haven\'t really built anything completely from scratch yet, except a pong game.',
		q5: [' I go to burning man every year (this year was my 5th ), build some awesome stuff, and run a 50 person camp.', 'I drive a motorcycle: Kawasaki Ninja','Ok, I\'ve been debating all day whether I should tell this story or not. It\'s a little risky but.. I\'m going to go for it because: first impressions and all. I have a lot of tech friends here in sf and I was once at a Halloween campout party at which the Zuck was also in attendance. At some point in the night we were the only two in line waiting to use the porta potty, and he was in front of me. I had to go realllly badly, time was of the essence! I won\'t repeat verbatim words that I said here, but I essentially told him, \'Mark, you\'re a guy. You don\'t have to wait in this line, there\'s a bush over there!\' To which he responded, \'Agh, you\'re right! I didn\'t want to make you feel weird, Thanks!\' and proceeded to run behind a tree. ']
		github_id: 'rachelsison',
		hometown: 'San Francisco, USA',
		email: 'rsison87@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Douglas Eichelberger',
		cohort: 'hr20',
		name_note: 'first name usually shortened to \'dug\' (my username in various places around the web), last name avoided.',
		photo:'dug.jpg',
		q1: 'I was at Palantir for the past four years, performing various duties across the BD and engineering teams. A looong time ago I studied math (with a dose of CS) at MIT.',
		q2: 'I\'ve lived in SF for nearly ten years.',
		q3: 'I\'m interested in helping people/organizations use their data to make more informed (and hopefully better) decisions.',
		q4: 'My JS experience is limited, as I was (un?)fortunate enough to be exposed to TypeScript while at Palantir. It\'s basically a superset of JS with true code completion (static typing) – imagine typing the “.” operator after an object and knowing *exactly* what functions/properties are available. I\'m still adjusting to life without it. Oh, and I have some professional experience with Java & Python.',
		q5: ['I\'m into cycling (I did a 175-mile MS charity ride two weekends ago, and used to bike to work in Palo Alto regularly).', 'I\'d be happy to bang out a few guitar chords with the inevitable HR20 house band (though the rest of you might be less happy to hear it).','I’m also a type 1 diabetic – using technology to better manage blood sugar levels (and other health indicators) is of particular interest to me.']
		github_id: '',
		hometown: 'San Francisco, USA',
		email: 'dduugg@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'John Tan',
		cohort: 'hr20',
		name_note: '',
		photo:'johntan.jpg',
		q1: 'I was studying Biochemistry at the University of Minnesota.',
		q2: 'I\'m from the Minneapolis-St.Paul area.',
		q3: 'I\'m interested in the automation of high-level roles in engineering, science, and business strategy. I\'m also motivated by tech that can greatly improve people\'s lives, whether that is in education, energy, or health.',
		q4: 'My coding experience consists of hobby and learning projects in Python and Javascript. I\'ve worked through some of the CS curriculum through Coursera and textbooks. My first taste of programming was Matlab and Visual Basic in a numerical analysis course in college.',
		q5: ['Recently built a robot from (almost) scratch with a bio major friend. It was quite a learning experience frying circuit boards, we learned a lot about engineering and electrical/mechanical/controls things.', 'Enjoy skiing and hope to ski in the Sierras sometime.','Cooking enthusiast and has fun learning new techniques and styles. (Eating enthusiast too)']
		github_id: 'johnttan',
		hometown: 'Minneapolis, USA',
		email: 'tantai.john@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Michael Lom',
		cohort: 'hr20',
		name_note: '',
		photo:'michaellom.png',
		q1: 'I worked as a CPA for a public accounting firm, performing quarterly and year-end audits of company financial statements within the construction and investment management industries.',
		q2: 'San Francisco',
		q3: 'Currently, I\'m interested in programming for web development, both front and back end; in the future, I would like to extend my learning of programming to hardware as well.',
		q4: 'I\'m new to programming and began studying a couple of months ago in preparation for Hack Reactor. I learned Javascript through online courses on CodeCademy; Code School; Google searching, etc. Picked up some HTML and CSS, too. ',
		q5: ['I enjoy long-distance running and swimming.', 'Hobby with computers: I built my own desktop computer before and have occasionally performed repairs.','Lived in Beijing and Shanghai, China, for approximately 2 years, during and after college.']
		github_id: 'mlom',
		hometown: 'San Francisco, USA',
		email: 'lom.michael@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Janet Brown',
		cohort: 'hr20',
		name_note: 'as in miss jackson...',
		photo:'janetbrown.png',
		q1: 'Started life in consulting, worked for some great brands and now have own consulting business.  ',
		q2: 'I am flying in 48 hours before HR from Sydney, so caffeine will be my best friend. That said I have been based in SF (downtown) for a while, so the city isn\'t too new. ',
		q3: 'tech',
		q4: 'Honestly, not much...HR is a part of changing all that ',
		q5: ['I\'m an Aussie, which may explain much', 'I travel alot, worked in 30+ countries incl  launching Smirnoff in Thailand and benchmarking the nightlife of Sao Paulo ']
		github_id: '',
		hometown: 'Sydney, Australia',
		email: 'theplaincode@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Dennis Lin',
		cohort: 'hr20',
		name_note: 'Just call me Denny ;)',
		photo:'dennislin.png',
		q1: 'I recently graduated from university in Taiwan with a BSci in Compute Science. I attended to various programming contests since high school. Most of them are ACM-ICPC-like. ',
		q2: 'I\'m from Taichung, Taiwan. Beautiful island, country and land of hospitality. ',
		q3: 'Any kinds of tech which could disruptively changes people\'s lives. Specifically massive group decision making system( ex. LiquidFeedBack from Pirate Parties), and collaboration tools recently.',
		q4: 'As mentioned earlier, I attended to many programming problem solving contests, which heavily involved Algorithms, Data Structures and ad-hoc approaches(well, aka dirty hacks without comments). My most used tools including C/C++, Java and Python, though I have flirted with PHP, Javascript, Scheme and some other languages.',
		q5: ['I made a website about Pokémon back in 1999, when I was a third grade.', 'Hosted an amateur Chinese pop music internet radio(IceCast), with curated playlists and talk shows. Built an real-time interface with PHP and JQuery.','I\'m a foodie and beer enthusiast. There\'re no fine foods that I could resist.','I was part of Sunflower Movement. Students of Taiwan occupied the parliament on March 19th. With help of other passionate professions and specialists, we secured the internet connection between inside and outside of the parliament, under massive surveillance of plainclothes polices and even confronted SWAT teams. This was for net neutrality(in terms of politics).']
		github_id: 'pioneerlike',
		hometown: 'Taichung, Taiwan',
		email: 'pioneerlike@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Jerod Rubalcava',
		cohort: 'hr20',
		name_note: 'Program Manager of Class Experience & HIR, as well as one of your Class Leads here at Hack Reactor.',
		photo:'jarodrubalcava.jpg',
		q1: 'Prior to Hack Reactor, I was an Instructor at Guangxi University in China.  I taught Industrial/Organizational Psychology & Globalization, Culture, and Social Psychology, as well as electives such as Progressive Stress Management, The Social and Cultural Influences of Bruce Lee, and Event Planning for Charity: Flashmob.  Before China, I worked at University of CA San Francisco, the State of CA Dept. of Rehabilitation, Chaired the San Francisco Mayor\'s Committee for Employment of Persons with Disabilities all doing academic and career advising, teaching, coaching groups of students, persons with severe and chronic mental illness, chemical dependency, and forensic backgrounds. I also obtained my Masters in Counseling Psychology while working in the field.',
		q2: 'I was born and raised in Kirkland, WA (where Costco is from!), and have been in SF for going on 5 years.',
		q3: 'I have a dream of creating a website with attention to usability that connects counselors, coaches, and social workers with persons who would like to utilize their services to work collaboratively online. The intention with this website is to make it mainstream, reduce the stigma around counseling, and be the definitive website for all things counseling-related. The website\'s purpose is to link clients and clinicians from all over the world to also address culturally competent counseling, group counseling, and create a strong community of empowered people.',
		q4: 'Very little.  I\'m SLOWLY learning JS, and attempting to complete the preparation material for the admissions challenge you all just rocked. ',
		q5: ['I have static-line skydived 5 times, with 1 time being at night ', 'I like swimming from Alcatraz Island to the mainland','I once tried out for a professional soccer team']
		github_id: 'Jerodruby',
		hometown: 'Kirkland, USA',
		email: 'jerod.rubalcava@hackreactor.com',
		roles: ['hacker','class-lead','hr-staff']
	},
	{
		name: 'Derek Wu',
		cohort: 'hr20',
		name_note: 'I prefer Derek, but you can call me Dai (pronounced die) as well',
		photo:'derekwu.jpg',
		q1: 'I worked at Blue Shield of California as an actuarial analyst for the past 4 years. Prior to that I attended University of California, San Diego as a Math/Economics joint major.',
		q2: 'I live in Los Angeles currently.',
		q3: 'I think technology is being increasingly consumed in every facet of our lives. I love how companies from Google to Uber has fundamentally changed the way we interact with the world and each other. My specific interest lies in gamification or in general, digital tools that help people have a better real life experiences.',
		q4: 'As an actuary I had some knowledge of SAS and VBA. I also took some intro courses to Java in college. Aside from that, I\'ve been self learning from codeschool and various other sources.',
		q5: ['I love board games. I also enjoy designing/modifying existing board games to play with friends.', 'I recently proposed to my girlfriend so we will get married sometime next year.','I once attended a table tennis summer camp, but because I wasn\'t very good I was paired with kids half my age. They kicked my butt every day but it was still really fun.']
		github_id: 'asakurasol',
		hometown: 'Los Angeles, USA',
		email: 'mamamia1734@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Anastasia Zotova',
		cohort: 'hr20',
		name_note: '',
		photo:'anastasiavoltova.png',
		q1: '18 months ago I co-founded an online education startup.  Before that I worked in management consulting.',
		q2: 'Moscow, Russia',
		q3: 'I am excited by all web and mobile services that enable p2p economy, such as Airbnb, and would love to create something like this in education.  I am also intrigued by the potential of big data, but know little about it.',
		q4: 'I have little coding experience.  I had some programming classes in college and recently took courses on Udacity, CodeSchool, etc.',
		q5: ['In high school I learnt ancient Greek.  So far I like JavaScript much better', 'I have a secret dream to act in a movie, at least once','I went on three skiing trips over the Arctic Circle']
		github_id: 'azotova',
		hometown: 'Moscow, Russia',
		email: 'azotova@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Brett Leibowitz',
		cohort: 'hr20',
		name_note: '',
		photo:'brettleibowitz.jpg',
		q1: 'I graduated from Princeton Engineering in 2013 and was working as an Integration Engineer at Epic Systems for a little over a year.',
		q2: 'I was working in Madison, WI, but just moved all my stuff home to Las Vegas.',
		q3: 'I really enjoy coding and very interested to learn a lot more about coding for websites. I also think autonomous vehicles are awesome and am excited to see those start to come up.',
		q4: 'In college, I took classes in Java and C as well as used many statistical programming languages like R, Matlab, and Mathematica. For my last job, we coded mainly in Cache. I have done many courses on Codecademy and other online resources for web development',
		q5: ['I like playing football, basketball and yoga', 'I am interested in Sustainabile fishing','I am a huge fan of dogs','I had the best burn at the end of a Jerry Springer commercial. I got to take the show to commercial and won a free T-shirt for it']
		github_id: 'TonOfPrince',
		hometown: 'Las Vegas, USA',
		email: 'brettleibo@gmail.com',
		roles: ['hacker']
	},
	{
		name: 'Caly Moss',
		cohort: 'hr14',
		name_note: 'pronounced like the nickname for California ("Cali")',
		photo:'calymoss.jpg',
		q1: 'Before Hack Reactor, I was working on a farm in Kentucky. Before that I lived in China for several years recovering from a foreign service career track and doing marketing, business dev stuff, and translating/editing for a Chinese contemporary art magazine to keep my creative side alive.',
		q2: 'I\'ve been in SF for a little while now after moving back from Beijing, but I grew up in downtown Chicago.',
		q3: 'Mostly Angular and frameworks/technologies related to front-end architecture at this point. If anyone wants to do a deep dive into Polymer, let\'s do it!',
		q4: 'Before HR, none. I wrote my first for-loop last December. I like to think that my philosophy minor and doing symbolic logic in college counts, though.',
		q5: ['- I speak Chinese fluently and a couple other languages passably. I\'ll probably listen in on your conversation and not tell you (just kidding!....mostly)','If you want to know how to train a donkey or make an Amish quilt, I\'m the gal to help you.','When not coding, I plan escapes out of the city to bike or climb, watch soccer (any Bayern Munich fans?!), and get too competitive at pub quiz.']
		github_id: 'BaBuDe',
		hometown: 'Chicago, USA',
		email: 'caly.moss@hackreactor.com',
		roles: ['hacker','hacker-in-residence']
	},
	{
		name: 'Rene Polo',
		cohort: 'hr20',
		name_note: '',
		photo:'renepolo.jpg',
		q1: 'I\'ve been working as a software developer on the University i\'ve studied in Cochabamba (Bolivia) it’s called UCATEC. I\'ve made their platform where Students, Teachers and the Staff can be in touch sharing projects, chatting and many more.. in PHP',
		q2: 'Cochabamba, Bolivia',
		q3: 'Software development, Mobile apps, NodeJs, wereables ',
		q4: 'I\'ve coded in many different languages just to try them out doing random projects or participating in Hackathons. I\'ve made some iOS Apps for some companies on my country and for the US',
		q5: ['I\'ve won the 1st place in a programming contest on my school when i was 8 years old. (and the contest was only for Seniors lol)','I\'ve had a dinner with the AirBnb co-founders, when i didn’t know how big was getting AirBnb','I love airplanes, guitars, biking and drones']
		github_id: 'chitopolo',
		hometown: 'Cochabamba, Bolivia',
		email: 'ichitopolo@gmail.com',
		roles: ['hacker']
	},
];