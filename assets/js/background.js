// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/

//Advice.
  var advice = [ 
    [1,'Add some fucking contrast.'],
    [2,'Have a clear fucking hierarchy.'],
    [3,'Use fucking Helvetica.'],
    [4,'Read a fucking book.'],
    [5,'Get over your fucking self.'],
    [6,'Make it fucking balanced.'],
    [7,'Sketch more fucking ideas.'],
    [8,'Sans-fucking-serif.'],
    [9,'Use a fucking grid system.'],
    [10,'Use more fucking white space.'],
    [11,'Make it fucking consistent.'],
    [12,'Make it fucking asymmetrical.'],
    [13,'Fucking simplify.'],
    [14,'Use a fucking color scheme.'],
    [15,'Have a fucking focal point.'],
    [16,'Fix your fucking letterspacing.'],
    [17,'Rag your fucking type.'],
    [18,'Do your fucking research.'],
    [19,'Fucking communicate something.'],
    [20,'Always use a fucking contract.'],
    [21,'Get fucking inspired.'],
    [22,'Use fucking alignment.'],
    [23,'Use fucking spell check.'],
    [24,'Try a fucking rule line.'],
    [25,'Try removing a fucking rule line.'],
    [26,'Make it fucking bigger.'],
    [27,'Make it fucking smaller.'],
    [28,'Consider your fucking user.'],
    [29,'Donâ€™t be fucking trendy.'],
    [30,'Be fucking decisive.'],
    [31,'Have a fucking concept.'],
    [32,'Hang your fucking quotation marks.'],
    [33,'Watch your fucking intervals.'],
    [34,'Make me fucking care.'],
    [35,'Make it fucking interesting.'],
    [36,'Learn to fucking write.'],
    [37,'Fucking empathize.'],
    [38,'Do your fucking homework.'],
    [39,'Pay attention to fucking detail.'],
    [40,'Stop fucking around.'],
    [41,'Fucking do it again.'],
    [42,'Fucking start over.'],
    [43,'Donâ€™t fucking use comic sans.'],
    [44,'Donâ€™t fucking steal sheep.'],
    [45,'Take a fucking break.'],
    [46,'Fail fucking often.'],
    [47,'Document your fucking successes.'],
    [48,'Write a fucking design brief.'],
    [49,'Donâ€™t use fucking Helvetica.'],
    [50,'Donâ€™t work for a bad fucking design firm.'],
    [51,'Fucking ideate.'],
    [52,'Have a fucking reason.'],
    [53,'Take your fucking time.'],
    [54,'Be fucking honest with yourself.'],
    [55,'Learn to take some fucking criticism.'],
    [56,'Fucking experiment.'],
    [57,'Donâ€™t fucking quit.'],
    [58,'Lose your fucking ego.'],
    [59,'Love your fucking job.'],
    [60,'Pick fucking better clients.'],
    [61,'Ask good fucking questions.'],
    [62,'Think about all the fucking possibilities.'],
    [63,'Donâ€™t fucking procrastinate.'],
    [64,'Be a good fucking person.'],
    [65,'Trust your fucking gut.'],
    [66,'Use one fucking space after a period.'],
    [67,'Make it fucking legible.'],
    [68,'Donâ€™t reinvent the fucking wheel.'],
    [69,'Reinvent the fucking wheel.'],
    [70,'Question fucking everything.'],
    [71,'A computer is a Lite-Brite for bad fucking ideas.'],
    [72,'A computer is just a fucking tool.'],
    [73,'Donâ€™t design in a fucking vacuum.'],
    [74,'Itâ€™s all in how you fucking say it.'],
    [75,'Donâ€™t let the fucking text push you around.'],
    [76,'Fucking collaborate.'],
    [77,'Clean up your fucking URLs.'],
    [78,'Encode your fucking ampersands.'],
    [79,'Make it fucking sustainable.'],
    [80,'Break the fucking grid.'],
    [81,'Donâ€™t succumb to fucking cliches.'],
    [82,'Donâ€™t fucking bastardize type.'],
    [83,'Quit your fucking job.'],
    [84,'Concept is fucking king.'],
    [85,'Fucking bastardize type.'],
    [86,'Remove your fucking widows.'],
    [87,'Remove your fucking orphans.'],
    [88,'Take a fucking chance.'],
    [89,'Make fucking mistakes.'],
    [90,'Capitalize on the fucking experience.'],
    [91,'Save fucking often.'],
    [92,'Break the fucking rules.'],
    [93,'Know the fucking rules.'],
    [94,'Form follows fucking function.'],
    [95,'Keep fucking learning.'],
    [96,'Sell your fucking ideas.'],
    [97,'Track your fucking hours.'],
    [98,'Comment your fucking code.'],
    [99,'Drink more fucking coffee.'],
    [100,'Drink less fucking coffee.'],
    [101,'Ask for fucking help.'],
    [102,'Donâ€™t fucking work for free.'],
    [103,'Get a fucking hobby.'],
    [104,'Think fucking laterally.'],
    [105,'The logo is not the fucking brand.'],
    [106,'Get a fucking mentor.'],
    [107,'Learn from your fucking mistakes.'],
    [108,'You wonâ€™t know until you fucking try.'],
    [109,'Study your fucking process.'],
    [110,'Learn to fucking say no.'],
    [111,'Learn from your fucking peers.'],
    [112,'Educate your fucking client.'],
    [113,'Identify a fucking need.'],
    [114,'Be more fucking efficient.'],
    [115,'Know when to fucking speak up.'],
    [116,'Buy your fucking fonts.'],
    [117,'Be your fucking self.'],
    [118,'There is no fucking box.'],
    [119,'You canâ€™t polish a fucking turd.'],
    [120,'Fucking network.'],
    [121,'Itâ€™s what you fucking leave out.'],
    [122,'Check your fucking separations.'],
    [123,'Give the client what they fucking need.'],
    [124,'Fucking sleep on it.'],
    [125,'Find fucking inspiration everywhere.'],
    [126,'Give a fucking damn.'],
    [127,'Believe in your fucking self.'],
    [128,'Validate your fucking markup.'],
    [129,'Proof your fucking copy.'],
    [130,'Stay up all fucking night.'],
    [131,'Arrive fucking early.'],
    [132,'Go to a fucking conference.'],
    [133,'Take a fucking workshop.'],
    [134,'Donâ€™t fucking work on spec.'],
    [135,'Hire a fucking photographer.'],
    [136,'Know your fucking typefaces.'],
    [137,'Back up your fucking data.'],
    [138,'Read the fucking copy.'],
    [139,'Hire a fucking illustrator.'],
    [140,'The problem contains the fucking solution.'],
    [141,'Learn from your fucking peers.'],
    [142,'Learn from your fucking teachers.'],
    [143,'Learn from your fucking students.'],
    [144,'Learn from other fucking disciplines.'],
    [145,'Work outside of your fucking habits.'],
    [146,'Let limitations drive fucking innovation.'],
    [147,'Make it appropriate but fucking unexpected.'],
    [148,'Be consistent, not fucking predictable.'],
    [149,'Less is fucking more.'],
    [150,'Design is a fucking lifestyle.'],
    [151,'Never fucking assume anything.'],
    [152,'Beautiful things work fucking better.'],
    [153,'Never fucking get caught.'],
    [154,'Respect your fucking colleagues.'],
    [155,'Do it right the first fucking time.'],
    [156,'Work with reliable fucking vendors.'],
    [157,'Measure twice, cut fucking once.'],
    [158,'Constantly fucking challenge yourself.'],
    [159,'Always ask for more fucking money.'],
    [160,'Learn to fucking work for yourself.'],
    [161,'Learn to fucking take advice.'],
    [162,'Be fucking productive.'],
    [163,'Never take no for a fucking answer.'],
    [164,'Show some fucking passion.'],
    [165,'Learn to manage your fucking projects.'],
    [166,'Learn to fucking give advice.'],
    [167,'Solve problems through fucking action.'],
    [168,'Make a fucking difference.'],
    [169,'Promote your fucking self.'],
    [170,'Get up fucking early.'],
    [171,'Get fucking involved.'],
    [172,'Trust your fucking process.'],
    [173,'Be your own fucking boss.'],
    [174,'Open your fucking eyes.'],
    [175,'Always be fucking ready.'],
    [176,'Be fucking observant.'],
    [177,'Practice makes fucking perfect.'],
    [178,'Change your fucking routine.'],
    [179,'Work fucking harder.'],
    [180,'Black is not a fucking color.'],
    [181,'Carve your own fucking path.'],
    [182,'Fucking inspire someone.'],
    [183,'Start a new fucking project.'],
    [184,'Defy fucking convention.'],
    [185,'Tell a fucking story.'],
    [186,'Manage your fucking clients.'],
    [187,'Design is fucking change.'],
    [188,'Thrive where others fucking fail.'],
    [189,'Delight your fucking audience.'],
    [190,'Fall in love with your fucking work.'],
    [191,'Kill the fucking drop shadow.'],
    [192,'Get fucking started.'],
    [193,'You have to fucking want it.'],
    [194,'Seek fucking criticism.'],
    [195,'Donâ€™t play by the fucking rules.'],
    [196,'Donâ€™t make fucking excuses.'],
    [197,'Donâ€™t covet your fucking ideas.'],
    [198,'Give away everything you fucking know.'],
    [199,'First impressions are fucking critical.'],
    [200,'Hire a fucking developer.'],
    [201,'Learn to adapt or fucking die.'],
    [202,'Stay fucking passionate.'],
    [203,'Own your fucking failures.'],
    [204,'Be fucking authentic.'],
    [205,'Get in over your fucking head.'],
    [206,'Be fucking confident.'],
    [207,'Get fucking focused.'],
    [208,'Fail, fail, and fucking fail again.'],
    [209,'Work with the fucking best.'],
    [210,'Itâ€™s not what you sayâ€”itâ€™s how you fucking say it.'],
    [211,'Fucking risk everything.'],
    [212,'Learn to fucking improvise.'],
    [213,'Be fucking bold.'],
    [214,'Fire your bad fucking clients.'],
    [215,'Always fucking deliver.'],
    [216,'Be fucking accountable.'],
    [217,'Build fucking credibility.'],
    [218,'Be fucking visionary.'],
    [219,'Co-fucking-create.'],
    [220,'Empathy over fucking ego.'],
    [221,'Envision the fucking future.'],
    [222,'Set your sights fucking higher.'],
    [223,'Make your own fucking rules.'],
    [224,'There is no fucking limit to creativity.'],
    [225,'Triple-check your fucking work.'],
    [226,'Have a fucking purpose.'],
    [227,'Change is fucking inevitable.'],
    [228,'Own your fucking expertise.'],
    [229,'Donâ€™t apologize for your fucking creativity.'],
    [230,'Fake it until you fucking make it.'],
    [231,'Master your fucking craft.'],
    [232,'Give better fucking creative direction.'],
    [233,'Never fucking settle.'],
    [234,'Make yourself fucking useful.'],
    [235,'Never fucking compromise.'],
    [236,'Keep a fucking sketchbook.'],
    [237,'Know your fucking history.'],
    [238,'Design is a fucking job.'],
    [239,'Forget everything you fucking know.'],
    [240,'Do what you fucking love.'],
    [241,'Start a fucking side project.'],
    [242,'Come, sit, and fucking conquer.'],
    [243,'Make work that fucking matters.'],
        [244,'Have a fucking plan.'],
        [245,'Set some fucking goals.'],
        [246,'Do the fucking work.'],
        [247,'No risk, no fucking reward.'],
        [248,'Never cease to be fucking curious.'],
        [249,'Adopt a new fucking perspective.'],
        [250,'Mastery requires hard fucking work.'],
        [251,'Stop asking for fucking permission.'],
        [252,'Live and work without fucking regrets. '],
        [253,'Cultivate some fucking discipline.'],
        [254,'Donâ€™t play it so fucking safe.'],
        [255,'Unleash your fucking creativity.'],
        [256,'Be willing to die for your fucking convictions. '],
        [257,'Donâ€™t fucking lie to yourself.'],
        [258,'The details make the fucking design.'],
        [259,'Finish what you fucking start.'],
        [260,'Push your fucking self.'],
        [261,'Have some fucking initiative. '],
        [262,'Donâ€™t overwork the fucking problem.'],
        [263,'Ask for fucking feedback.'],
        [264,'Obstacles are fucking opportunities. '],
        [265,'Commit first, fucking figure it out later.'],
        [266,'Explore your fucking process.'],
        [267,'Being creative is a fucking decision.'],
        [268,'Make yourself fucking uncomfortable. '],
        [269,'Every roadblock is a fucking detour.'],
        [270,'Give up fucking control.'],
        [271,'Just fucking play.'],
        [272,'Simple is fucking hard.'],
        [273,'Share your fucking ideas.'],
        [274,'Design is fucking business. '],
        [275,'Clarity is fucking important. '],
        [276,'There is no right fucking answer.'],
        [277,'Hire a fucking accountant.'],
        [278,'Learn to manage your fucking time.'],
        [279,'Explore all of your fucking options'],
        [280,'Stop using Google for fucking inspiration.'],
        [281,'Dreaming ainâ€™t fucking doing.'],
        [282,'Creativity requires fucking tenacity. '],
        [283,'Mistakes make great fucking work.'],
        [284,'Be fucking patient.'],
        [285,'Fucking create something.'],
        [286,'Make the time and fucking energy. '],
        [287,'Quit thinking like a fucking designer.'],
        [288,'Learn on the fucking job.'],
        [289,'Lead, donâ€™t fucking follow.'],
        [290,'Use a tool you canâ€™t fucking control.'],
        [291,'Create something that makes you fucking laugh.'],
        [292,'Hire a fucking bookkeeper.'],
        [293,'Design for your fucking self.'],
        [294,'Keep a fucking journal.'],
        [295,'Challenge your fucking assumptions.'],
        [296,'Become a fucking expert.'],
        [297,'Think like a fucking beginner.'],
        [298,'Stop doing fucking busywork.'],
        [299,'Listen to your fucking intuition.'],
        [300,'Put it all on the fucking line.'],
        [301,'Creativity is built on fucking failure.'],
        [302,'Experimentation leads to fucking innovation.'],
        [303,'Work together as a fucking team.'],
        [304,'Donâ€™t wait to be fucking discovered.'],
        [305,'Create your own fucking opportunities.'],

  ];
  
  function randomAdvice(initAdviceId) {
    var currentIndex =  localStorage.advicenumber;//parseInt($('#advice-number').html());
    var randomIndex;
    var randomAdvice;
    var adviceHash;
    
    // calculate current index from page
    if (isNaN(currentIndex)) currentIndex = 0;
    else currentIndex--;
    
    if (initAdviceId) {
      initAdviceId = parseInt(initAdviceId);
      
      for (var i = 0; i < advice.length; i++) {
        if (advice[i][0] === initAdviceId) {
          randomIndex = i;
          break;
        }
      }
    }
    else {
      // select random advice
      do {
        randomIndex = Math.floor(Math.random()*advice.length);
      } while(randomIndex === currentIndex);
    }
    
    randomAdvice = advice[randomIndex];
    adviceHash = '/advice/'+randomAdvice[0];
    // console.log(randomAdvice[0]);
    // console.log(randomAdvice[1]);

    localStorage.advicenumber = randomAdvice[0];
    localStorage.currentadvice = randomAdvice[1];

    if(history.replaceState) {
        history.replaceState(null, null, '#'+adviceHash);
    }
    else {
      window.location.hash = adviceHash;
    }
  }
  
  //var randomAdvice = randomAdvice;
  function initAdvice() {
      randomAdvice();
  };


//Send notification.
function show() {     
    var NowMoment = moment().format('LTS');
    //Calling the advice
    initAdvice();

    new Notification(NowMoment,{
        icon: '/assets/img/icon128x128.png',
        body: localStorage.currentadvice
    });  
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.Notification) {
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { show(); }

  var interval = 0; // The display interval, in minutes.

  setInterval(function() {
    interval++;

    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      show();
      interval = 0;
    }
  }, 3600000); //Milliseconds
}
