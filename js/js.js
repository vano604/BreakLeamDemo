var data = new Date();
document.getElementById('an').innerHTML = data.getFullYear();

function mobileMenu() {
    document.getElementById("navbar").classList.toggle("mobile");
}

/*const ip = "d4.rustix.me:25856";

fetch("https://api.mcstatus.io/v2/status/java/" + ip)
  .then(r => r.json())
  .then(data => {
    if (data.online) {
      document.getElementById("status").textContent =
        `Онлайн: ${data.players.online} / ${data.players.max}`;
    } else {
      document.getElementById("status").textContent = "Сервер оффлайн";
    }
  })
  .catch(() => {
    document.getElementById("status").textContent = "Не удалось получить данные";
  });*/


/*
  const ip = "d4.rustix.me:25856"; // вставь IP или домен сервера

  // функция для генерации случайного никнейма для головы
  function getRandomSkinName() {
    const names = [
      "Steve", "Alex", "Herobrine", "Notch", "Creeper", "Zombie", 
      "Skeleton", "Enderman", "Villager", "Ghast", "Spider", "Wolf", "Pig", "Tehnoblade", "Agera001",
      "Dragon", "Daquavis"
    ];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  fetch("https://api.mcstatus.io/v2/status/java/" + ip)
  .then(res => res.json())
  .then(data => {
    const online = data.players.online || 0;
    const max = data.players.max || 0;
    document.getElementById("online").textContent = `Онлайн: ${online} / ${max}`;
  
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = ""; // очистка
  
    const count = Math.min(10, online);
  
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "player";
  
      const randomSkin = getRandomSkinName();
  
      div.innerHTML = `
        <img src="https://mc-heads.net/avatar/${randomSkin}/64">
        <div>Игрок ${i + 1}</div>
      `;
      playersDiv.appendChild(div);
    }
  
  })
  .catch(() => {
    document.getElementById("online").textContent = "Сервер оффлайн";
  });*/



  const ip = "d4.rustix.me:25856"; // IP или домен сервера

  // функция для генерации случайного никнейма для головы
  function getRandomSkinName() {
    const names = [
      "Steve", "Alex", "Herobrine", "Notch", "Creeper", "Zombie", 
      "Skeleton", "Enderman", "Villager", "Ghast", "Spider", "Wolf", "Pig", "Technoblade", "Agera001",
      "Dragon", "Daquavis"
    ];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  fetch("https://api.mcstatus.io/v2/status/java/" + ip)
  .then(res => res.json())
  .then(data => {
    const online = data.players.online || 0;
    const max = data.players.max || 0;
    document.getElementById("online").textContent = `Онлайн: ${online} / ${max}`;
  
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = ""; // очистка
  
    // проверяем есть ли список игроков
    const list = data.players.list || []; 
  
    const count = Math.min(10, online);
  
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "player";
  
      const randomSkin = getRandomSkinName();
  
      // если ник есть, используем его, иначе fallback
      const nick = list[i] || `Игрок ${i + 1}`;
  
      div.innerHTML = `
        <img src="https://mc-heads.net/avatar/${randomSkin}/64">
        <div>${nick}</div>
      `;
      playersDiv.appendChild(div);
    }
  
  })
  .catch(() => {
    document.getElementById("online").textContent = "Сервер оффлайн";
  });
  



/*

  const form = document.getElementById('contactForm');
      
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbwCamHwQM0bo-D4MGsr2fj7_GzjqSMPpCZ9bzhv3y5t1hb-ef0yZQDI9oRovwwkI0014g/exec", {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      alert('Данные отправлены: ' + result);
      form.reset(); // очищаем форму после отправки
    })
    .catch(error => {
      alert('Ошибка: ' + error.message);
    });
  });

*/


const apiKey = "AIzaSyAN7O8Y-qaiy_5-oxUp5cAss-uW_zl0z1I"; // получаем на Google Cloud
const channelId = "UCrFHB6BiGUOVKxU5G58Ffbg"; // вставь ID ютубера

function checkStream() {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const imgs = document.querySelectorAll(".ytimg");

      // Ищем live видео
      const isLive = data.items.some(item => item.snippet.liveBroadcastContent === "live");

      imgs.forEach(img => {
        img.style.borderColor = isLive ? "red" : "blue";
      });

      console.log("Live status:", isLive); // для отладки
    })
    .catch(err => console.error(err));
}

// Проверка при загрузке страницы
checkStream();

// Автообновление каждые 30 секунд
setInterval(checkStream, 30000);

function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const correctUser = "admin";
  const correctPass = "1234";

  if (user === correctUser && pass === correctPass) {
      document.getElementById("login-box").style.display = "none";
      document.getElementById("site-content").style.display = "block";
  } else {
      document.getElementById("error").textContent = "Неверный логин или пароль!";
  }
}
