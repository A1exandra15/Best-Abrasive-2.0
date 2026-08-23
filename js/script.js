const PRICE = "Ціна";
const DATA = [
  {cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["GERRARD","BEST"],
   name:"Диск відрізний", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","1,0 · 1,2 · 1,6 мм",PRICE],["150 мм","1,6 · 2,0 мм",PRICE],["180 мм","1,6 · 2,0 мм",PRICE],["230 мм","2,0 · 2,5 мм",PRICE],["300 мм","3,0 · 3,5 мм",PRICE],["355 мм","3,5 мм",PRICE],["400 мм","3,5 · 4,0 мм",PRICE]]},

  {cat:"Зачисні диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["BEST","GERRARD"],
   name:"Диск зачисний", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","6,0 мм",PRICE],["150 мм","6,0 мм",PRICE],["180 мм","6,0 мм",PRICE],["230 мм","6,0 мм",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Тип","Жорсткість"],
   rows:[["125 мм","Т 27","Soft"],["125 мм","Т 27","Medium"],["125 мм","Т 27","Hard"]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий» 90 пелюстків", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий Оксид Алюмінію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["BEST"],
   name:"Пелюстковий «Карбід Кремнію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["BEST"],
   name:"Пелюстковий «Оксид Алюмінію — Електрокорунд»", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Електроди", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["Sumy Electrode","Astorel-RC"],
   name:"Зварювальні електроди", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Марка","Діаметр","Фасування"],
   rows:[["АНО-21","3 мм","2,5 кг · 5 кг"],["АНО-21","4 мм","2,5 кг · 5 кг"],["АНО-36","3 мм","2,5 кг"],["АНО-36","4 мм","2,5 кг · 5 кг"]]},

  {cat:"Зварювальний дріт", img:["images/photo_2026-08-15_18-05-12.jpg", "images/photo_2026-08-15_18-05-14.jpg"], brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},

  {cat:"Відрізні диски", img:"img/cut.jpg", brands:["GERRARD","BEST"],
   name:"Диск відрізний", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","1,0 · 1,2 · 1,6 мм",PRICE],["150 мм","1,6 · 2,0 мм",PRICE],["180 мм","1,6 · 2,0 мм",PRICE],["230 мм","2,0 · 2,5 мм",PRICE],["300 мм","3,0 · 3,5 мм",PRICE],["355 мм","3,5 мм",PRICE],["400 мм","3,5 · 4,0 мм",PRICE]]},

  {cat:"Зачисні диски", img:"img/grind.jpg", brands:["BEST","GERRARD"],
   name:"Диск зачисний", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","6,0 мм",PRICE],["150 мм","6,0 мм",PRICE],["180 мм","6,0 мм",PRICE],["230 мм","6,0 мм",PRICE]]},

  {cat:"Пелюсткові диски", img:"img/flap-coral.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Тип","Жорсткість"],
   rows:[["125 мм","Т 27","Soft"],["125 мм","Т 27","Medium"],["125 мм","Т 27","Hard"]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий» 90 пелюстків", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий Оксид Алюмінію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16", brands:["BEST"],
   name:"Пелюстковий «Карбід Кремнію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16", brands:["BEST"],
   name:"Пелюстковий «Оксид Алюмінію — Електрокорунд»", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Електроди", img:"img/electrodes.jpg", brands:["Sumy Electrode","Astorel-RC"],
   name:"Зварювальні електроди", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Марка","Діаметр","Фасування"],
   rows:[["АНО-21","3 мм","2,5 кг · 5 кг"],["АНО-21","4 мм","2,5 кг · 5 кг"],["АНО-36","3 мм","2,5 кг"],["АНО-36","4 мм","2,5 кг · 5 кг"]]},

  {cat:"Зварювальний дріт", img:"img/wire.jpg", brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},

   {cat:"Відрізні диски", img:"img/cut.jpg", brands:["GERRARD","BEST"],
   name:"Диск відрізний", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","1,0 · 1,2 · 1,6 мм",PRICE],["150 мм","1,6 · 2,0 мм",PRICE],["180 мм","1,6 · 2,0 мм",PRICE],["230 мм","2,0 · 2,5 мм",PRICE],["300 мм","3,0 · 3,5 мм",PRICE],["355 мм","3,5 мм",PRICE],["400 мм","3,5 · 4,0 мм",PRICE]]},

  {cat:"Зачисні диски", img:"img/grind.jpg", brands:["BEST","GERRARD"],
   name:"Диск зачисний", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","6,0 мм",PRICE],["150 мм","6,0 мм",PRICE],["180 мм","6,0 мм",PRICE],["230 мм","6,0 мм",PRICE]]},

  {cat:"Пелюсткові диски", img:"img/flap-coral.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Тип","Жорсткість"],
   rows:[["125 мм","Т 27","Soft"],["125 мм","Т 27","Medium"],["125 мм","Т 27","Hard"]]},

  {cat:"Пелюсткові диски", img:"img/flap-zirc90.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий» 90 пелюстків", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"img/flap-zirc-ao.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий Оксид Алюмінію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"img/flap-sic.jpg", brands:["BEST"],
   name:"Пелюстковий «Карбід Кремнію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Пелюсткові диски", img:"img/flap-ao.jpg", brands:["BEST"],
   name:"Пелюстковий «Оксид Алюмінію — Електрокорунд»", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Електроди", img:"img/electrodes.jpg", brands:["Sumy Electrode","Astorel-RC"],
   name:"Зварювальні електроди", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Марка","Діаметр","Фасування"],
   rows:[["АНО-21","3 мм","2,5 кг · 5 кг"],["АНО-21","4 мм","2,5 кг · 5 кг"],["АНО-36","3 мм","2,5 кг"],["АНО-36","4 мм","2,5 кг · 5 кг"]]},

  {cat:"Зварювальний дріт", img:"img/wire.jpg", brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},
];

document.querySelectorAll('.card').forEach((card, cardIndex) => {

    const img = card.querySelector('.slide-img');
    const prev = card.querySelector('.prev');
    const next = card.querySelector('.next');
 
    const images = list[cardIndex].images;

    let current = 0;

    next.onclick = () => {
        current++;

        if (current >= images.length) {
            current = 0;
        }

        img.src = images[current];
    };

    prev.onclick = () => {
        current--;

        if (current < 0) {
            current = images.length - 1;
        }

        img.src = images[current];
    };

});

const grid=document.getElementById('grid');
const filtersEl=document.getElementById('filters');
const cats=["Усі",...[...new Set(DATA.map(d=>d.cat))]];
let activeCat="Усі",query="";


cats.forEach((c,i)=>{
  const b=document.createElement('button');
  b.className='chip'+(i===0?' active':'');b.textContent=c;
  b.onclick=()=>{activeCat=c;[...filtersEl.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');render();};
  filtersEl.appendChild(b);
});

function matches(d){
  if(activeCat!=="Усі"&&d.cat!==activeCat)return false;
  if(!query)return true;
  const hay=(d.name+" "+d.sub+" "+d.cat+" "+d.brands.join(" ")+" "+d.rows.flat().join(" ")).toLowerCase();
  return hay.includes(query);
}
function render(){
  const list=DATA.filter(matches);grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="empty">За запитом нічого не знайдено. Спробуйте «диск», «125», «Р60» або «дріт».</div>';return;}
  list.forEach(d=>{
    const card=document.createElement('article');card.className='card';
    const brands=d.brands.map(b=>`<span class="brand-tag">${b}</span>`).join('');
    const head=d.cols.map(c=>`<th>${c}</th>`).join('');
    const body=d.rows.map(r=>`<tr>${r.map(v=>v===PRICE?`<td class="price">${v}</td>`:`<td>${v}</td>`).join('')}</tr>`).join('');
    card.innerHTML=`
      <div class="card-media">
        <div class="brands">${brands}</div>
        <span class="cat-pill">${d.cat}</span>
        <img src="${d.img}" alt="${d.name}" loading="lazy">
      </div>
      <div class="card-head"><h3>${d.name}</h3><div class="sub">${d.sub}</div></div>
      <div class="card-body"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>
      <div class="card-foot"><span class="n">${d.rows.length} позиц.</span>
        <button class="btn-ask" data-name="${d.name}">Запит ціни</button></div>`;
    grid.appendChild(card);
  });
  document.querySelectorAll('.btn-ask').forEach(b=>b.onclick=()=>askPrice(b.dataset.name));
}
function askPrice(name){
  const subj=encodeURIComponent("Запит ціни: "+name);
  const body=encodeURIComponent("Доброго дня! Цікавить ціна та наявність:\n\n• "+name+" — \n\nКількість: \nМісто доставки: ");
  showToast(name);
  setTimeout(()=>{window.location.href=`mailto:info.specelektrod@gmail.com?subject=${subj}&body=${body}`;},500);
}
const toast=document.getElementById('toast');let tT;
function showToast(name){toast.innerHTML=`Формуємо запит: <b>${name}</b> → відкриваю пошту`;toast.classList.add('show');clearTimeout(tT);tT=setTimeout(()=>toast.classList.remove('show'),3200);}
document.getElementById('q').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});
document.getElementById('st-cat').textContent=new Set(DATA.map(d=>d.cat)).size;
document.getElementById('st-sku').textContent=DATA.reduce((s,d)=>s+d.rows.length,0)+'+';
document.getElementById('yr').textContent=new Date().getFullYear();
render();