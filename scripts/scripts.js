const virusInfo = {
  creeper: {
    title: 'CREEPER',
    year: '1971',
    desc: 'Первый компьютерный вирус в истории. Появлялся на экране с сообщением "I\'M THE CREEPER: CATCH ME IF YOU CAN".',
    tag: 'Экспериментальный'
  },
  brain: {
    title: 'BRAIN',
    year: '1986',
    desc: 'Первый вирус для IBM PC, созданный пакистанскими братьями. Заменял загрузочный сектор.',
    tag: 'Загрузочный'
  },
  iloveyou: {
    title: 'ILOVEYOU',
    year: '2000',
    desc: 'Письмо с темой "I LOVE YOU" уничтожило файлы на миллионах компьютеров. Ущерб $10 млрд.',
    tag: 'Почтовый червь'
  },
  stuxnet: {
    title: 'STUXNET',
    year: '2010',
    desc: 'Был нацелен в основном на центрифуги иранских предприятий по обогащению урана с целью тайно сорвать находившуюся тогда на стадии становления ядерную программу Ирана.',
    tag: 'Червь'
  },
  melissa: {
    title: 'MELISSA',
    year: '1999',
    desc: 'Рассылал себя первым 50 контактам в Outlook. Положил почтовые серверы.',
    tag: 'Макровирус'
  },
  virus: {
    title: 'Основные понятия',
    year: 'Компьютерный вирус был назван по аналогии с биологическими вирусами за сходный механизм распространения.',
    desc: 'Компьютерный вирус — разновидность вредоносного программного обеспечения, которое при запуске способно самовоспроизводиться, изменяя другие компьютерные программы и внедряя в них собственный код. ',
    tag: 'Компьютерный вирус'
  },
  wannacry: {
    title: 'WANNACRY',
    year: '2017',
    desc: 'Вымогатель, зашифровал больницы и компании по всему миру. Требовал биткоины.',
    tag: 'Шифровальщик'
  }
};

const popup = document.getElementById('virusPopup');
const popupTitle = document.getElementById('popupTitle');
const popupYear = document.getElementById('popupYear');
const popupDesc = document.getElementById('popupDescription');
const popupTag = document.getElementById('popupTag');
const closeBtn = document.querySelector('.popup-close');


document.querySelectorAll('.virus-card-wrapper').forEach(card => {
  card.addEventListener('click', () => {
    const virusKey = card.dataset.virus;
    const data = virusInfo[virusKey];

    popupTitle.textContent = data.title;
    popupYear.textContent = data.year;
    popupDesc.textContent = data.desc;
    popupTag.textContent = data.tag;

    popup.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});

const carousel = document.querySelector('.virus-carousel');
const track = document.querySelector('.carousel-track');
let scrollPos = 0;
let direction = 1;
let isHovered = false;

function autoScroll() {
  if (!carousel || !track || isHovered) {
    requestAnimationFrame(autoScroll);
    return;
  }

  const maxScroll = track.scrollWidth - carousel.clientWidth;
  if (maxScroll <= 0) {
    requestAnimationFrame(autoScroll);
    return;
  }

  scrollPos += direction * 1;

  if (scrollPos >= maxScroll) {
    scrollPos = maxScroll;
    direction = -1;
  } else if (scrollPos <= 0) {
    scrollPos = 0;
    direction = 1;
  }

  carousel.scrollLeft = scrollPos;
  requestAnimationFrame(autoScroll);
}

carousel.addEventListener('mouseenter', () => { isHovered = true; });
carousel.addEventListener('mouseleave', () => { isHovered = false; });


document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    location.reload();
  }
});
autoScroll();