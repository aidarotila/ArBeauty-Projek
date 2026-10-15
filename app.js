(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rp=n=>'Rp '+n.toLocaleString('id-ID'),src=f=>encodeURI(f);
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const I={s:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',u:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',c:'<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',x:'<path d="M5 5l14 14M19 5 5 19"/>',m:'<path d="M4 7h16M4 12h16M4 17h16"/>',t:'<path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13"/>'};
const svg=k=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;
const P=`Hydrating Glow Serum|120|89|serum.jpg|Skincare
Daily Protection Sunscreen|150|99|sunscreen.jpg|Skincare
Gentle Facial Wash|110|79|facial wash2.jpg|Skincare
Loose Setting Powder|196|102|bedak.jpg|Makeup
Base Primer|98|60|primer.jpg|Makeup
Makeup Setting Spray|200|170|setting sprei.jpg|Makeup
Daily Moisturizer|183|110|calm moisturizer.jpg|Skincare
Hydrating Lip Treatment|80|63|lip balm.jpg|Skincare
Anti-Aging Collagen Serum|80|55|collagen serum.jpg|Skincare
Gentle Facial Cleansing|165|150|face cleansing.jpg|Skincare
Brightening Serum|125|98|face seu.jpg|Skincare
Skin Barrier Care|210|198|pantenol skintifik.jpg|Skincare
Cushion Foundation|350|240|cushion.jpg|Makeup
Skin Foundation|255|117|foundatin.jpg|Makeup
Face Color Blush On|125|83|bluush on.jpg|Makeup`.split('\n').map((l,i)=>{const[n,o,p,im,c]=l.split('|');return{id:i,n,o:o*1e3,p:p*1e3,im,c}});
const B=[['Skintific','skintific.jpg'],['Harlatte','harlattee.jpg'],['Laneige','laneige.jpg'],['MS Glow','msglow.jpg'],['Toriden','toriden.jpg'],['Skinn','skinn.jpeg'],['Luzz Skin','luzzskin.jpeg'],['Gentel Woman','gentel woman.jpeg'],['Barely','Barely.jpeg'],['AHC','AHC.jpeg'],['Elf Skin','ELFSKIN.jpeg'],['Ogulia','ogulia skin.jpeg'],['Logo Skin','logoskin.jpeg'],['Heypack','heypack.jpeg']];
const S=[['Rahasia Kulit Glowing Ala Korea','wardah.jpg','Temukan rahasia kecantikan alami dari perawatan kulit Korea yang berfokus pada hidrasi dan nutrisi.','Konsep glass skin berawal dari satu prinsip: kulit yang terhidrasi dengan baik akan memantulkan cahaya secara alami. Mulailah dengan double cleansing, lanjutkan dengan toner, essence, dan serum bertekstur ringan, lalu kunci kelembapan dengan moisturizer. Kuncinya adalah konsisten, bukan banyaknya produk.'],
['Rutinitas Skincare Pagi & Malam','sincare rutin.jpg','Pelajari urutan skincare pagi dan malam untuk hasil maksimal dan kulit cerah setiap hari.','Pagi: cleanser lembut, serum, moisturizer, lalu sunscreen sebagai langkah wajib. Malam: bersihkan makeup dan sunscreen, gunakan treatment seperti retinol atau serum pencerah, tutup dengan moisturizer. Aplikasikan produk dari tekstur paling encer ke paling kental.'],
['Rahasia Kulit Sehat & Bercahaya','retinol.jpg','Pelajari cara merawat kulit secara konsisten dengan rutinitas sederhana namun efektif.','Kulit sehat dibangun dari kebiasaan kecil: cukup tidur, minum air, dan menjaga skin barrier. Kenalkan bahan aktif seperti retinol secara bertahap, mulai 2 kali seminggu, dan selalu gunakan sunscreen di siang hari agar kulit terlindungi.'],
['Your Daily Glow Routine','summer skincare.jpg','Dapatkan tampilan kulit yang halus dan cerah dengan langkah perawatan sederhana setiap pagi dan malam.','Di cuaca panas, pilih tekstur gel yang ringan dan tidak lengket. Gunakan sunscreen SPF 30+ dan aplikasikan ulang setiap 2-3 jam saat beraktivitas di luar ruangan. Jangan lupa bersihkan wajah sebelum tidur agar pori tidak tersumbat.']];
let cart=ld('arCart',{}),user=ld('arUser',null);
const cur=location.pathname.split('/').pop()||'index.html',page=document.body.dataset.page;
const nav=[['index.html','Home'],['brands.html','Brands'],['catalog.html','Catalogue'],['story.html','AR Story'],['contact.html','Contact Us']];
document.body.insertAdjacentHTML('afterbegin',`<header class="hd"><div class="wrap top"><form id="sf" class="sf">${svg('s')}<input id="q" type="search" placeholder="Cari produk…" aria-label="Cari produk"></form><a class="logo" href="index.html">Arbeauty<small>SKINCARE INDONESIA</small></a><div class="act"><button id="ub" class="ib" aria-label="Akun">${svg('u')}<span id="un"></span></button><button id="cb" class="ib" aria-label="Keranjang">${svg('c')}<span>Cart</span><b id="cn">0</b></button><button id="mb" class="ib mm" aria-label="Menu">${svg('m')}</button></div></div><nav id="nv" class="nv wrap">${nav.map(([h,t])=>`<a href="${h}" class="${h==cur?'on':''}">${t}</a>`).join('')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="ft"><div class="wrap"><div class="fg"><div><h4>Arbeauty Skin</h4><p>Skincare lokal terpercaya, membuat kulitmu glowing dan sehat alami. Mari cantik bersama Arbeauty.</p></div><div><h4>Hubungi Kami</h4><p>Email: arbeauty@gmail.com</p><p>Senin - Jumat | 08.00 - 17.00</p><div class="soc" style="margin-top:12px"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">IG</a><a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">TT</a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">YT</a></div></div><div><h4>Newsletter</h4><p>Dapatkan promo & tips skincare terbaru.</p><form id="nf" class="nl"><input type="email" placeholder="Email kamu" required aria-label="Email"><button class="btn">Daftar</button></form></div></div><p class="cp">© 2025 Arbeauty Indonesia | All rights reserved.</p></div></footer><div id="ov" class="ov"></div><aside id="dr" class="dr" aria-label="Keranjang"><div class="dh"><h3>Keranjang</h3><button class="ib" data-cc aria-label="Tutup">${svg('x')}</button></div><div id="db" class="db"></div><div class="df"><div class="tot"><span>Total</span><span id="tt"></span></div><button id="ck" class="btn">Checkout</button></div></aside><dialog id="dlg"></dialog><div id="tz" class="tz" role="status"></div>`);
const dlg=$('#dlg'),tz=$('#tz');let tm;
const toast=m=>{tz.textContent=m;tz.classList.add('on');clearTimeout(tm);tm=setTimeout(()=>tz.classList.remove('on'),2400)};
const show=h=>{dlg.innerHTML=`<button class="x" data-c aria-label="Tutup">${svg('x')}</button>${h}`;if(!dlg.open)dlg.showModal()};
dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('[data-c]'))dlg.close()});
const cd=o=>{$('#dr').classList.toggle('on',o);$('#ov').classList.toggle('on',o);document.body.style.overflow=o?'hidden':''};
const save=()=>{sv('arCart',cart);draw()};
const total=()=>Object.entries(cart).reduce((s,[i,q])=>s+P[i].p*q,0);
function draw(){
  $('#cn').textContent=Object.values(cart).reduce((a,b)=>a+b,0);$('#tt').textContent=rp(total());
  $('#un').textContent=user?user.name.split(' ')[0]:'Account';
  const e=Object.entries(cart);
  $('#db').innerHTML=e.length?e.map(([i,q])=>{const p=P[i];return`<div class="ci"><img src="${src(p.im)}" alt=""><div><h5>${p.n}</h5><small>${rp(p.p)}</small><div class="qt"><button data-q="${i}" data-d="-1" aria-label="Kurangi">−</button>${q}<button data-q="${i}" data-d="1" aria-label="Tambah">+</button></div></div><button class="ib rm" data-r="${i}" aria-label="Hapus">${svg('t')}</button></div>`}).join(''):'<p class="empty">Keranjangmu masih kosong.<br>Yuk, pilih produk favoritmu!</p>';
}
const add=id=>{cart[id]=(cart[id]||0)+1;save();toast(`✓ ${P[id].n} masuk keranjang`)};
const card=p=>`<article class="card rv"><button class="im" data-v="${p.id}" aria-label="Lihat ${p.n}"><img src="${src(p.im)}" alt="${p.n}" loading="lazy"><span class="bd">-${Math.round(100-p.p/p.o*100)}%</span></button><div class="cb"><small>${p.c}</small><h3>${p.n}</h3><div class="pr"><del>${rp(p.o)}</del><b>${rp(p.p)}</b></div><button class="btn o" data-a="${p.id}">Quick Buy</button></div></article>`;
const reveal=()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});$$('.rv:not(.in)').forEach(el=>io.observe(el))};
document.addEventListener('click',e=>{const t=e.target.closest('button,a');if(!t)return;const d=t.dataset;
  if(d.a!=null){add(+d.a);dlg.open&&dlg.close()}
  else if(d.v!=null){const p=P[d.v];show(`<img class="qv" src="${src(p.im)}" alt="${p.n}"><small style="color:var(--ac);font-weight:700">${p.c.toUpperCase()}</small><h3>${p.n}</h3><div class="pr" style="justify-content:flex-start"><del>${rp(p.o)}</del><b>${rp(p.p)}</b></div><p>Formula ringan, aman untuk penggunaan harian dan cocok untuk berbagai jenis kulit.</p><button class="btn" data-a="${p.id}" style="width:100%">Tambah ke Keranjang</button>`)}
  else if(d.s!=null){const s=S[d.s];show(`<img class="qv" style="aspect-ratio:16/10" src="${src(s[1])}" alt=""><h3>${s[0]}</h3><p>${s[3]}</p><a class="btn o" href="catalog.html" style="width:100%">Belanja Produknya</a>`)}
  else if(d.q!=null){const q=(cart[d.q]||0)+ +d.d;q<1?delete cart[d.q]:cart[d.q]=q;save()}
  else if(d.r!=null){delete cart[d.r];save()}
  else if(d.cc!=null)cd(false);
  else if(d.f!=null){cat=d.f;$$('.chip').forEach(c=>c.classList.toggle('on',c===t));cat$()}
});
$('#cb').onclick=()=>cd(true);$('#ov').onclick=()=>cd(false);
document.addEventListener('keydown',e=>e.key==='Escape'&&cd(false));
$('#mb').onclick=()=>$('#nv').classList.toggle('on');
$('#ck').onclick=()=>{if(!Object.keys(cart).length)return toast('Keranjang masih kosong');const t=total();cart={};save();cd(false);show(`<h3>Pesanan Diterima 🎉</h3><p>Terima kasih sudah berbelanja di Arbeauty${user?', '+user.name.split(' ')[0]:''}! Total pembayaran <b>${rp(t)}</b></p><button class="btn" data-c style="width:100%">Tutup</button>`)};
$('#ub').onclick=()=>user?show(`<h3>Halo, ${user.name}!</h3><p>${user.email}</p><button class="btn o" id="lo" style="width:100%">Keluar</button>`):show(`<h3>Masuk / Daftar</h3><p>Buat akun demo untuk pengalaman belanja yang lebih personal.</p><form id="af"><input class="fi" name="n" placeholder="Nama lengkap" required><input class="fi" name="e" type="email" placeholder="Email" required><button class="btn">Lanjutkan</button></form>`);
dlg.addEventListener('submit',e=>{if(e.target.id==='af'){e.preventDefault();const f=new FormData(e.target);user={name:f.get('n').trim(),email:f.get('e').trim()};sv('arUser',user);dlg.close();draw();toast(`Selamat datang, ${user.name.split(' ')[0]}!`)}});
dlg.addEventListener('click',e=>{if(e.target.id==='lo'){user=null;try{localStorage.removeItem('arUser')}catch{}dlg.close();draw();toast('Kamu sudah keluar')}});
$('#nf').onsubmit=e=>{e.preventDefault();e.target.reset();toast('Terima kasih sudah berlangganan! 💌')};
let cat='Semua',cat$=()=>{};
$('#sf').onsubmit=e=>{e.preventDefault();const v=$('#q').value.trim();if(page!=='catalog')location.href='catalog.html?q='+encodeURIComponent(v)};
const g=$('#grid');
if(g&&page==='home'){g.innerHTML=P.slice(0,8).map(card).join('')}
if(g&&page==='catalog'){
  $('#q').value=new URLSearchParams(location.search).get('q')||'';
  cat$=()=>{const q=$('#q').value.toLowerCase(),s=$('#sort').value;
    let l=P.filter(p=>(cat==='Semua'||p.c===cat)&&(p.n+p.c).toLowerCase().includes(q));
    if(s==='lo')l.sort((a,b)=>a.p-b.p);if(s==='hi')l.sort((a,b)=>b.p-a.p);if(s==='ds')l.sort((a,b)=>b.o/b.p-a.o/a.p);
    $('#cnt').textContent=l.length+' produk';g.innerHTML=l.length?l.map(card).join(''):'<p class="empty">Produk tidak ditemukan. Coba kata kunci lain.</p>';reveal()};
  $('#q').addEventListener('input',cat$);$('#sort').onchange=cat$;cat$();
}
const bs=$('#bgrid');if(bs)bs.innerHTML=B.slice(0,+bs.dataset.n||99).map(b=>`<div class="bc rv"><img src="${src(b[1])}" alt="${b[0]}" loading="lazy">${b[0]}</div>`).join('');
const sg=$('#sgrid');if(sg)sg.innerHTML=S.slice(0,+sg.dataset.n||9).map((s,i)=>`<article class="card sc rv"><img src="${src(s[1])}" alt="${s[0]}" loading="lazy"><div class="cb"><h3>${s[0]}</h3><p>${s[2]}</p><button class="btn o" data-s="${i}" style="align-self:flex-start">Baca Selengkapnya</button></div></article>`).join('');
const cf=$('#cf');
if(cf)cf.onsubmit=e=>{e.preventDefault();let ok=true;
  $$('.fi',cf).forEach(i=>{const v=i.value.trim(),bad=!v||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(v))||(i.name==='m'&&v.length<10);i.classList.toggle('bad',bad);i.nextElementSibling.textContent=bad?i.dataset.e:'';ok=ok&&!bad});
  if(ok){const n=cf.n.value.trim().split(' ')[0];cf.reset();show(`<h3>Pesan Terkirim ✉️</h3><p>Terima kasih, ${n}! Tim Arbeauty akan membalas dalam 1x24 jam kerja.</p><button class="btn" data-c style="width:100%">Oke</button>`)}};
draw();reveal();
})();
