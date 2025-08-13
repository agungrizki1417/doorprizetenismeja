const canvas = document.getElementById('spinwheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-button');
const resultEl = document.getElementById('result');

const names = [
  'dr. R. Sunarko Slamet', 'Imam Jajuli', 'Wasikin', 'Tri Yuliani', 'Pramono', 
  'Sugiyati', 'Siti Zulaikhah Kuntowati', 'Arida Zuhairoh', 'Riska Pramita Hapsari', 
  'Suryanti', 'Ariyani Muldaningsih', 'Istiqomah', 'Sulsi Astuti', 'Suharjono', 
  'Ratna Andriyani', 'Romeli', 'Maryanti', 'Nur Setiyani', 'dr. Ratna Prabawati Nopiutami', 
  'Diyana Susanti', 'Faoji', 'M. Noer', 'Agung Rizki Maulana', 'Habibullah', 
  'Rifkhi Anisa Wijayanti', 'Ahmad Faozan', 'Miyas Indra Utami', 'Ayu Indrarti', 
  'Habibiena Noviyanti', 'Fitri Nurkhasanah', 'Sunarmono Maulud', 'Fitriyanah', 
  'Yusup Kurniawan', 'Haryanto', 'Fahmi Fajarwati', 'dr. Muhammad Daffa Ramadhan', 
  'Joko Susilo', 'Kesyia Ayuni Asnidatama', 'Faisal Azis Sofian', 'Haryono'
];

const colors = [
  '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', 
  '#955251', '#B565A7', '#009B77', '#DD4124', '#D64161', 
  '#FF7B25', '#C7D3D4', '#E27D60', '#A9A9A9', '#C0C0C0', 
  '#F4E1D2', '#EDC7B7', '#B3A369', '#E0B589', '#C83349'
];

const numNames = names.length;
const arcSize = (2 * Math.PI) / numNames;

function drawWheel() {
  for (let i = 0; i < numNames; i++) {
    const angle = i * arcSize;
    
    ctx.beginPath();
    ctx.arc(300, 300, 300, angle, angle + arcSize);
    ctx.lineTo(300, 300);
    
    const colorIndex = i % colors.length;
    ctx.fillStyle = colors[colorIndex];
    ctx.fill();

    // Menggambar teks nama
    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText(names[i], 280, 10);
    ctx.restore();
  }
}

function spin() {
  spinBtn.disabled = true;
  resultEl.textContent = 'Roda sedang berputar...';

  const spinDegrees = Math.floor(Math.random() * 360) + 3600; 
  canvas.style.transform = `rotate(${spinDegrees}deg)`;

  setTimeout(() => {
    const finalAngle = spinDegrees % 360;
    const prizeIndex = Math.floor(numNames - (finalAngle / 360 * numNames));
    resultEl.textContent = `Selamat! Pemenang hari ini adalah: ${names[prizeIndex]}`;
    spinBtn.disabled = false;
  }, 6000); 
}

spinBtn.addEventListener('click', spin);

drawWheel();