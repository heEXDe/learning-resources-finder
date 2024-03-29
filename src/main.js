// get & create buttons
var btnWebDevelop = document.createElement("button");
var btnGames = document.createElement("button");
var btnMachLearn = document.createElement("button");
var btnDataScience = document.createElement("button");
var btnEnglish = document.createElement("button");
var btnSpanish = document.createElement("button");
var btnFrench = document.createElement("button");
var btnGerman = document.createElement("button");
var btnItalian = document.createElement("button");

//eventlisteners
document.getElementById('btnProgramming').addEventListener('click', function(){ ch_page("btnProgramming");});
document.getElementById('btnFLang').addEventListener('click', function(){ ch_page("btnFLang");});
document.getElementById('btnMath').addEventListener('click', function(){ ch_page("btnMath");});
document.getElementById('btnEngin').addEventListener('click', function(){ ch_page("btnEngin");});
document.getElementById('btnPhy').addEventListener('click', function(){ ch_page("btnPhy");});
document.getElementById('btnChem').addEventListener('click', function(){ ch_page("btnChem");});
document.getElementById('btnWrit').addEventListener('click', function(){ ch_page("btnWrit");});


// set inner text
btnWebDevelop.innerHTML = "Web development";
btnGames.innerHTML = "Games";
btnMachLearn.innerHTML = "Machine learning";
btnDataScience.innerHTML = "Data Science";
btnEnglish.innerHTML = "English";
btnSpanish.innerHTML = "Spanish";
btnFrench.innerHTML = "French";
btnGerman.innerHTML = "German";
btnItalian.innerHTML = "Italian";

// set id for elements
btnWebDevelop.setAttribute("id", "btnWebDevelop");
btnGames.setAttribute("id", "btnGames");
btnMachLearn.setAttribute("id", "btnMachLearn");
btnDataScience.setAttribute("id", "btnDataScience");
btnEnglish.setAttribute("id", "btnEnglish");
btnSpanish.setAttribute("id", "btnSpanish");
btnFrench.setAttribute("id", "btnFrench");
btnGerman.setAttribute("id", "btnGerman");
btnItalian.setAttribute("id", "btnItalian");

function ch_page(btnPushedName){
  document.getElementById('p1').innerHTML = 'Refreshing the page takes you back to the beginning.'
  switch (btnPushedName){
    case "btnProgramming":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      div_1.append(btnWebDevelop,btnMachLearn, btnGames, btnDataScience);
      document.getElementById('btnWebDevelop').addEventListener('click', function(){ ch_page("btnWebDevelop");});
      document.getElementById('btnGames').addEventListener('click', function(){ ch_page("btnGames");});
      document.getElementById('btnMachLearn').addEventListener('click', function(){ ch_page("btnMachLearn");});
      document.getElementById('btnDataScience').addEventListener('click', function(){ ch_page("btnDataScience");});
      break;
    case "btnFLang":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      div_1.append(btnEnglish, btnSpanish, btnFrench, btnGerman, btnItalian);
      document.getElementById('btnEnglish').addEventListener('click', function(){ ch_page("btnEnglish");});
      document.getElementById('btnSpanish').addEventListener('click', function(){ ch_page("btnSpanish");});
      document.getElementById('btnFrench').addEventListener('click', function(){ ch_page("btnFrench");});
      document.getElementById('btnGerman').addEventListener('click', function(){ ch_page("btnGerman");});
      document.getElementById('btnItalian').addEventListener('click', function(){ ch_page("btnItalian");}); 
      break;
    case "btnMath":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Khan Academy</h2>(free)<br><a href=\"https://www.khanacademy.org/math\" target=\"_blank\" style=\"text-decoration:none\">Math</a><br><a href=\"https://khanacademy.org/math/k-8-grades\" target=\"_blank\" style=\"text-decoration:none\">Math: pre-k - 8th grade</a><br><a href=\"https://www.khanacademy.org/math/get-ready-courses\" target=\"_blank\" style=\"text-decoration:none\">Math: Get ready courses</a><br><h2>Brilliant</h2>(paid)<br><a href=\"https://brilliant.org/s/math/\" target=\"_blank\" style=\"text-decoration:none\">Math</a><h2>Wikibooks</h2>(free)<br><a href=\"https://en.wikibooks.org/wiki/Subject:Mathematics\" target=\"_blank\" style=\"text-decoration:none\">Math</a><br><h2>edX</h2>(paid, free)<br><a href=\"https://www.edx.org/learn/math\" target=\"_blank\" style=\"text-decoration:none\">Math</a>";
      break;
    case "btnEngin":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Khan Academy</h2>(free)<br><a href=\"https://www.khanacademy.org/science/electrical-engineering\" target=\"_blank\" style=\"text-decoration:none\">Electrical engineering</a><br><h2>Wikibooks</h2>(free)<br><a href=\"https://en.wikibooks.org/wiki/Subject:Engineering\" target=\"_blank\" style=\"text-decoration:none\">Engineering</a><br><h2>Brilliant</h2>(paid)<br><a href=\"https://brilliant.org/s/science/\" target=\"_blank\" style=\"text-decoration:none\">science and engineering</a><br><h2>edX</h2>(paid, free)<br><a href=\"https://www.edx.org/learn/engineering\" target=\"_blank\" style=\"text-decoration:none\">Engineering</a>"
      break;
    case "btnPhy":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Khan Academy</h2>(free)<br><a href=\"https://www.khanacademy.org/science/ms-physics\" target=\"_blank\" style=\"text-decoration:none\">Middle school physics - NGSS</a><br><a href=\"https://www.khanacademy.org/science/high-school-physics\" target=\"_blank\" style=\"text-decoration:none\">High school physics</a><br><a href=\"https://www.khanacademy.org/science/hs-physics\" target=\"_blank\" style=\"text-decoration:none\">High school physics - NGSS</a><br><a href=\"https://www.khanacademy.org/science/ap-college-physics-1\" target=\"_blank\" style=\"text-decoration:none\">AP/College Physics 1</a><br><a href=\"https://www.khanacademy.org/science/ap-physics-2\" target=\"_blank\" style=\"text-decoration:none\">AP/College Physics 2</a><br><a href=\"https://www.khanacademy.org/science/physics\" target=\"_blank\" style=\"text-decoration:none\">Physics library</a><br><h2>Wikibooks</h2>(free)<br><a href=\"https://en.wikibooks.org/wiki/Subject:Physical_sciences\" target=\"_blank\" style=\"text-decoration:none\">Physical sciences</a><h2>Brilliant</h2>(paid)<br><a href=\"https://brilliant.org/s/science/\" target=\"_blank\" style=\"text-decoration:none\">science and engineering</a><br><h2>edX</h2>(paid, free)<br><a href=\"https://www.edx.org/learn/physics\" target=\"_blank\" style=\"text-decoration:none\">Physics</a>"
      break;
    case "btnChem":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Khan Academy</h2>(free)<br><a href=\"https://www.khanacademy.org/science/ap-chemistry-beta\" target=\"_blank\" style=\"text-decoration:none\">Welcome to AP/College Chemistry</a><br><a href=\"https://www.khanacademy.org/science/organic-chemistry\" target=\"_blank\" style=\"text-decoration:none\">Organic chemistry</a><br><a href=\"https://www.khanacademy.org/science/chemistry\" target=\"_blank\" style=\"text-decoration:none\">Chemistry library</a><br><h2>Wikibooks</h2>(free)<br><a href=\"https://en.wikibooks.org/wiki/Subject:Chemistry\" target=\"_blank\" style=\"text-decoration:none\">Subject:Chemistry</a><h2>edX</h2>(paid, free)<br><a href=\"https://www.edx.org/learn/chemistry?linked_from=sitenav&list=subjects\" target=\"_blank\" style=\"text-decoration:none\">Chemistry</a>"
      break;
    case "btnWrit":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>edX</h2>(free, paid)<br><a href=\"https://www.edx.org/search?q=writing\" target=\"_blank\" style=\"text-decoration:none\">Writing</a><br><h2>Coursera</h2>(free, paid)<br><a href=\"https://www.coursera.org/search?query=writing&index=prod_all_launched_products_term_optimization&language=English\" target=\"_blank\" style=\"text-decoration:none\">Game development: courses & programs</a><h2>Udemy</h2>(free, paid)<br><a href=\"https://www.udemy.com/courses/search/?lang=en&q=writing&sort=most-reviewed&src=ukw\" target=\"_blank\" style=\"text-decoration:none\">Game development: courses & programs</a>"      
      break;
    case "btnWebDevelop":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Free Code Camp</h2>(free, open source)<br><a href=\"https://www.freecodecamp.org/learn/2022/responsive-web-design/\" target=\"_blank\" style=\"text-decoration:none\">Responsive Web Design</a><br><a href=\"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/\" target=\"_blank\" style=\"text-decoration:none\">JavaScript Algorithms and Data Structures</a><br><a href=\"https://www.freecodecamp.org/learn/front-end-development-libraries/\" target=\"_blank\" style=\"text-decoration:none\">Front End Development Libraries</a><br><a href=\"https://www.freecodecamp.org/learn/back-end-development-and-apis/\" target=\"_blank\" style=\"text-decoration:none\">Back End Development and APIs</a><br><h2>The Odin Project</h2>(free, open source)<br><a href=\"https://www.theodinproject.com/\" target=\"_blank\" style=\"text-decoration:none\">Main page</a><h2>Mozilla Web Docs</h2>(free, open source)<br><a href=\"https://developer.mozilla.org/en-US/docs/Learn\" target=\"_blank\" style=\"text-decoration:none\">Learn web development</a><br><h2>Khan Academy</h2>(free)<br><a href=\"https://www.khanacademy.org/computing/computer-programming\" target=\"_blank\" style=\"text-decoration:none\">Computer programming</a><h2>SoloLearn</h2>(free, paid)<br><a href=\"https://www.sololearn.com/learn/languages/html\" target=\"_blank\" style=\"text-decoration:none\">Learn HTML with Sololearn</a><br><a href=\"https://www.sololearn.com/learn/languages/css\" target=\"_blank\" style=\"text-decoration:none\">Learn CSS with Sololearn</a><br><a href=\"https://www.sololearn.com/learn/languages/javascript\" target=\"_blank\" style=\"text-decoration:none\">Learn JavaScript with Sololearn</a><h2>W3 School</h2>(free, paid)<br><a href=\"https://www.w3schools.com/\" target=\"_blank\" style=\"text-decoration:none\">Main page</a>"
      break;
    case "btnGames":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>edX</h2>(free, paid)<br><a href=\"https://www.edx.org/search?q=game\" target=\"_blank\" style=\"text-decoration:none\">Game development: courses & programs</a><br><h2>Coursera</h2>(free, paid)<br><a href=\"https://www.coursera.org/search?query=games&index=prod_all_launched_products_term_optimization&topic=Information%20Technology&topic=Computer%20Science\" target=\"_blank\" style=\"text-decoration:none\">Game development: courses & programs</a><h2>Udemy</h2>(free, paid)<br><a href=\"https://www.udemy.com/courses/search/?lang=en&q=games&sort=most-reviewed&src=ukw\" target=\"_blank\" style=\"text-decoration:none\">Game development: courses & programs</a>"
      break;
    case "btnMachLearn":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Free Code Camp</h2>(free, open source)<br><a href=\"https://www.freecodecamp.org/learn/machine-learning-with-python/\" target=\"_blank\" style=\"text-decoration:none\">Machine Learning with Python</a><br><h2>SoloLearn</h2>(free, paid)<br><a href=\"https://www.sololearn.com/learning/1094\" target=\"_blank\" style=\"text-decoration:none\">Machine Learning</a><h2>Kaggle</h2>(free)<br><a href=\"https://www.kaggle.com/learn\" target=\"_blank\" style=\"text-decoration:none\">Learn</a>"
      break;
    case "btnDataScience":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Free Code Camp</h2>(free, open source)<br><a href=\"https://www.freecodecamp.org/learn/data-visualization/\" target=\"_blank\" style=\"text-decoration:none\">Data Visualization</a><br><h2>Brilliant</h2>(paid)<br><a href=\"https://brilliant.org/s/data-analysis/\" target=\"_blank\" style=\"text-decoration:none\">The best way to learn data analysis</a><h2>Kaggle</h2>(free)<br><a href=\"https://www.kaggle.com/learn\" target=\"_blank\" style=\"text-decoration:none\">Learn</a><h2>edX</h2>(free, paid)<br><a href=\"https://www.edx.org/search?tab=course&subject=Data+Analysis+%26+Statistics\" target=\"_blank\" style=\"text-decoration:none\">Learn</a>"
      break;
    case "btnEnglish":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Duolingo</h2>(free, paid)<br><a href=\"https://www.duolingo.com\" target=\"_blank\" style=\"text-decoration:none\">English</a><h2>FutureLearn</h2>(paid)<br><a href=\"https://www.futurelearn.com/subjects/language-courses\" target=\"_blank\" style=\"text-decoration:none\">Language Courses</a><br>"
      break;
    case "btnSpanish":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Duolingo</h2>(free, paid)<br><a href=\"https://www.duolingo.com\" target=\"_blank\" style=\"text-decoration:none\">Spanish</a><h2>FutureLearn</h2>(paid)<br><a href=\"https://www.futurelearn.com/subjects/language-courses\" target=\"_blank\" style=\"text-decoration:none\">Language Courses</a><br>"
      break;
    case "btnFrench":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Duolingo</h2>(free, paid)<br><a href=\"https://www.duolingo.com\" target=\"_blank\" style=\"text-decoration:none\">French</a><h2>FutureLearn</h2>(paid)<br><a href=\"https://www.futurelearn.com/subjects/language-courses\" target=\"_blank\" style=\"text-decoration:none\">Language Courses</a><br>"
      break;
    case "btnGerman":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Duolingo</h2>(free, paid)<br><a href=\"https://www.duolingo.com\" target=\"_blank\" style=\"text-decoration:none\">German</a><h2>FutureLearn</h2>(paid)<br><a href=\"https://www.futurelearn.com/subjects/language-courses\" target=\"_blank\" style=\"text-decoration:none\">Language Courses</a><br>"
      break;
    case "btnItalian":
      while (div_1.firstChild) {div_1.removeChild(div_1.firstChild);};
      document.getElementById("div_1").innerHTML += "<h2>Duolingo</h2>(free, paid)<br><a href=\"https://www.duolingo.com\" target=\"_blank\" style=\"text-decoration:none\">Italian</a><h2>FutureLearn</h2>(paid)<br><a href=\"https://www.futurelearn.com/subjects/language-courses\" target=\"_blank\" style=\"text-decoration:none\">Language Courses</a><br>"
      break;
  }
}