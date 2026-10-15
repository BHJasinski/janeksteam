(()=>{
const root=document.getElementById('railway-globe'),svg=d3.select(root.querySelector('svg')),yearInput=root.querySelector('#railYear'),select=root.querySelector('#railRoute'),play=root.querySelector('#railPlay');
const routes=[
[1825,'eu','Stockton–Darlington',[[-1.65,54.63],[-1.55,54.52],[-1.32,54.57]],'Pierwsze publiczne zastosowania trakcji parowej; linia obejmowała również Shildon.','https://blog.railwaymuseum.org.uk/shildon-the-cradle-of-the-railways-and-locomotion-no-1/'],
[1830,'eu','Liverpool–Manchester',[[-2.98,53.41],[-2.73,53.45],[-2.24,53.48]],'Regularne przewozy między portem a ośrodkiem przemysłowym.','https://heritage.stockton.gov.uk/articles/stories/stockton-where-passenger-railways-began/'],
[1830,'us','Baltimore–Ellicott’s Mills',[[-76.63,39.29],[-76.8,39.27]],'Pierwszy odcinek B&O; w tym roku testowano tu parowóz Tom Thumb.','https://www.borail.org/collection/tom-thumb/'],
[1833,'us','Charleston–Hamburg',[[-79.93,32.78],[-80.41,33.02],[-80.83,33.25],[-81.72,33.56],[-81.96,33.49]],'Połączenie portu Charleston z Hamburgiem nad rzeką Savannah.','https://www.asce.org/about-civil-engineering/history-and-heritage/historic-landmarks/charleston-hamburg-railroad'],
[1835,'eu','Bruksela–Mechelen',[[4.36,50.86],[4.48,51.03]],'Początek belgijskiej państwowej sieci kolejowej.','https://www.canonvanvlaanderen.be/en/events/the-first-train-journey/'],
[1835,'eu','Norymberga–Fürth',[[11.08,49.45],[10.99,49.48]],'Pionierska linia parowa na ziemiach niemieckich.','https://www.dhm.de/lemo/kapitel/reaktionszeit/wirtschaft/eisenbahnbau'],
[1837,'eu','Paryż–Le Pecq',[[2.32,48.88],[2.2,48.89],[2.11,48.9]],'Pierwsza linia z Paryża; początkowo docierała do Le Pecq, nie na wzgórze Saint-Germain.','https://en.wikipedia.org/wiki/Timeline_of_railway_history'],
[1838,'eu','Londyn–Birmingham',[[-.13,51.53],[-.4,51.66],[-.9,52.04],[-1.26,52.37],[-1.89,52.48]],'Otwarcie całego połączenia London and Birmingham Railway.','https://www.networkrail.co.uk/who-we-are/our-history/iconic-infrastructure/the-history-of-birmingham-new-street-station/'],
[1839,'eu','Amsterdam–Haarlem',[[4.9,52.38],[4.64,52.39]],'Pierwsza linia kolejowa w Niderlandach.','https://npokennis.nl/longread/7581/hoe-ontstond-de-spoorlijn'],
[1839,'eu','Lipsk–Drezno',[[12.38,51.34],[13.29,51.31],[13.73,51.05]],'Ukończenie dalekobieżnej linii przez Riesę.','https://www.dhm.de/lemo/kapitel/reaktionszeit/wirtschaft/eisenbahnbau'],
[1841,'eu','Londyn–Bristol',[[-.18,51.52],[-.97,51.46],[-1.79,51.56],[-2.12,51.46],[-2.36,51.38],[-2.58,51.45]],'Great Western Railway: pełne połączenie Londynu z Bristolem.','https://www.networkrail.co.uk/who-we-are/our-history/iconic-infrastructure/the-history-of-london-paddington-station/'],
[1845,'eu','Warszawa–Grodzisk',[[21.0,52.23],[20.8,52.17],[20.63,52.11]],'14 czerwca: pierwszy odcinek Kolei Warszawsko-Wiedeńskiej.','https://stacjamuzeum.pl/wydarzenia/zwiedzanie-w-ramach-174-rocznicy-dzww/'],
[1848,'eu','Grodzisk–Granica',[[20.63,52.11],[20.14,51.95],[19.69,51.41],[19.12,50.81],[19.42,50.43],[19.27,50.28]],'Ukończenie trasy do stacji Granica; nie jest to bezpośrednia linia Warszawa–Wiedeń.','https://warszawa.ap.gov.pl/pociag-do-archiwum-train-to-the-archive-english-version/'],
[1851,'eu','Petersburg–Moskwa',[[30.33,59.93],[31.25,59.45],[33.23,58.39],[34.05,57.88],[35.92,56.86],[37.66,55.78]],'Połączenie dwóch najważniejszych miast ówczesnego państwa rosyjskiego.','https://en.wikipedia.org/wiki/History_of_rail_transport_in_Russia'],
[1862,'eu','Warszawa–Petersburg',[[21.04,52.25],[23.16,53.13],[23.83,53.68],[25.28,54.69],[26.53,55.87],[28.33,57.82],[29.85,58.74],[30.33,59.93]],'Ukończenie całej Drogi Żelaznej Petersbursko-Warszawskiej.','https://warszawa.ap.gov.pl/pociag-do-archiwum/'],
[1869,'us','Omaha–Sacramento',[[-95.94,41.26],[-100.77,41.14],[-104.82,41.14],[-107.24,41.79],[-109.47,41.53],[-111.97,41.22],[-112.55,41.62],[-115.76,40.83],[-119.81,39.53],[-120.18,39.33],[-121.49,38.58]],'10 maja: połączenie Union Pacific i Central Pacific w Promontory. Pokazany rdzeń trasy, nie cała sieć USA.','https://www.nps.gov/articles/goldenspike.htm'],
[1882,'eu','Przeprawa przez Gotthard',[[8.62,46.71],[8.59,46.66],[8.61,46.53],[8.97,46.2]],'Otwarcie historycznej linii przez tunel Gottharda.','https://news.sbb.ch/de/019d7b77-c601-706f-9b7d-af6a0bb0a89b/mit-dem-zug-durch-europa'],
[1883,'us','Los Angeles–Nowy Orlean',[[-118.24,34.05],[-116.55,33.92],[-114.62,32.73],[-110.97,32.22],[-106.49,31.76],[-103.65,30.14],[-100.9,29.36],[-98.49,29.42],[-95.37,29.76],[-91.82,30.22],[-90.07,29.95]],'Ukończenie południowego połączenia transkontynentalnego.','https://home.nps.gov/amis/learn/historyculture/str.htm'],
[1893,'us','St. Paul–Seattle',[[-93.09,44.95],[-94.16,45.56],[-96.79,46.88],[-101.29,48.23],[-109.68,48.55],[-113.22,48.44],[-114.34,48.36],[-117.43,47.66],[-120.31,47.42],[-121.09,47.75],[-122.2,47.98],[-122.33,47.61]],'Ukończenie transkontynentalnej Great Northern Railway.','https://www.nps.gov/subjects/hfc/upload/HFCA-1645-Finding-Aid_December-12-2017.pdf'],
[1906,'eu','Brig–Domodossola',[[7.99,46.32],[8.0,46.2],[8.2,46.2],[8.29,46.12]],'Tunel Simplon otwiera nową przeprawę kolejową przez Alpy.','https://news.sbb.ch/de/019d7b77-c601-706f-9b7d-af6a0bb0a89b/mit-dem-zug-durch-europa']
].map((d,i)=>({year:d[0],region:d[1],name:d[2],coords:d[3],note:d[4],url:d[5],id:i,geo:{type:'LineString',coordinates:d[3]}}));
const land=topojson.feature(RAIL_WORLD,RAIL_WORLD.objects.land),proj=d3.geoOrthographic().rotate([38,-34,0]).clipAngle(90),path=d3.geoPath(proj),grat=d3.geoGraticule10();
let year=1869,zoom=1,w=600,h=440,selected=15,timer=null;
const colors={eu:'var(--viz-series-1)',us:'var(--viz-series-2)'};
function visible(c){return d3.geoDistance(c,[-proj.rotate()[0],-proj.rotate()[1]])<Math.PI/2-.02;}
function draw(){w=root.querySelector('.globe-area').clientWidth;h=root.querySelector('.globe-area').clientHeight;svg.attr('viewBox',`0 0 ${w} ${h}`);svg.select('clipPath rect').attr('width',w).attr('height',h);proj.translate([w/2,h/2]).scale(Math.min(w,h)*.46*zoom);
svg.select('.ocean').attr('d',path({type:'Sphere'}));svg.select('.grid').attr('d',path(grat));svg.select('.land').attr('d',path(land));svg.select('.land-facets').attr('d',path(land));svg.select('.shade').attr('d',path({type:'Sphere'}));
const active=routes.filter(r=>r.year<=year);
svg.select('.lines').selectAll('path').data(active,d=>d.id).join('path').attr('d',d=>path(d.geo)).attr('stroke',d=>colors[d.region]).attr('stroke-width',d=>d.id===selected?3.8:2.1).attr('stroke-opacity',d=>d.id===selected?1:.8).attr('fill','none').attr('stroke-linecap','round');
const points=active.flatMap(r=>[r.coords[0],r.coords.at(-1)].map(c=>({c,r}))).filter(d=>visible(d.c));
svg.select('.points').selectAll('circle').data(points).join('circle').attr('cx',d=>proj(d.c)[0]).attr('cy',d=>proj(d.c)[1]).attr('r',d=>d.r.id===selected?3.3:2).attr('fill',d=>colors[d.r.region]);
}
function update(){root.querySelector('#railYearValue').textContent=year;yearInput.value=year;
const active=routes.filter(r=>r.year<=year);root.querySelector('#railStatus').textContent=`Widoczne wybrane połączenia: Europa ${active.filter(r=>r.region==='eu').length} · USA ${active.filter(r=>r.region==='us').length}`;
if(!active.some(r=>r.id===selected))selected=active.at(-1)?.id;
select.replaceChildren(...active.map(r=>{const o=document.createElement('option');o.value=r.id;o.textContent=`${r.year} · ${r.region==='eu'?'Europa':'USA'} · ${r.name}`;return o}));select.value=selected;
const r=routes[selected],detail=root.querySelector('#railDetail');detail.replaceChildren();if(r){detail.append(document.createTextNode(r.note+' '));const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Źródło ↗';detail.append(a)}draw();}
function stop(){clearInterval(timer);timer=null;play.textContent='▶ Odtwórz historię';}
yearInput.addEventListener('input',()=>{stop();year=+yearInput.value;selected=routes.filter(r=>r.year<=year).at(-1)?.id;update()});
play.onclick=()=>{if(timer){stop();return}if(year>=1906)year=1825;play.textContent='Ⅱ Zatrzymaj';timer=setInterval(()=>{year++;selected=routes.filter(r=>r.year<=year).at(-1)?.id;update();if(year>=1906)stop()},650)};
select.onchange=()=>{selected=+select.value;const r=routes[selected];const c=d3.geoCentroid(r.geo);proj.rotate([-c[0],-c[1],0]);zoom=r.region==='eu'?3.5:1.8;update()};
root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{const v=b.dataset.view;proj.rotate(v==='eu'?[-12,-51,0]:v==='us'?[98,-38,0]:[38,-34,0]);zoom=v==='eu'?3.2:v==='us'?1.9:1;draw()});
root.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{zoom=Math.max(.8,Math.min(6,zoom*(b.dataset.zoom==='in'?1.3:1/1.3)));draw()});
root.querySelectorAll('[data-turn]').forEach(b=>b.onclick=()=>{const r=proj.rotate();proj.rotate([r[0]+(b.dataset.turn==='left'?-15:15),r[1],0]);draw()});
let drag=null;
svg.node().addEventListener('pointerdown',e=>{drag=[e.clientX,e.clientY,proj.rotate()];svg.node().setPointerCapture(e.pointerId)});
svg.node().addEventListener('pointermove',e=>{if(!drag)return;const speed=70/proj.scale();proj.rotate([drag[2][0]+(e.clientX-drag[0])*speed,Math.max(-85,Math.min(85,drag[2][1]-(e.clientY-drag[1])*speed)),0]);draw()});
svg.node().addEventListener('pointerup',()=>drag=null);svg.node().addEventListener('pointercancel',()=>drag=null);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});new ResizeObserver(draw).observe(root.querySelector('.globe-area'));update();
})();

(()=>{
const audio=document.getElementById('backgroundMusic'),btn=document.getElementById('musicBtn'),status=document.getElementById('musicStatus'),volume=document.getElementById('volume');
audio.volume=.15;let pending=false;
function state(on){btn.textContent=on?'♫ Wyłącz muzykę':'♫ Włącz muzykę';btn.setAttribute('aria-pressed',String(on));}
btn.addEventListener('click',async()=>{if(pending)return;if(!audio.paused){audio.pause();state(false);status.textContent='Muzyka wyciszona. Możesz wrócić do niej w dowolnej chwili.';return}pending=true;btn.disabled=true;try{await audio.play();state(true);status.textContent='Muzyka w tle • odtwarzanie w pętli';}catch(e){state(false);status.textContent='Muzyka nie jest jeszcze dostępna. Dodaj plik assets/audio/muzyka.mp3, a potem odśwież stronę.';}finally{pending=false;btn.disabled=false}});
volume.addEventListener('input',()=>audio.volume=Number(volume.value)/100);
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-view]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))})}));
})();
