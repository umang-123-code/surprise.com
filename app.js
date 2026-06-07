const PORTFOLIO_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    title: "Mom's 50th Birthday Party",
    description: 'A midnight room decoration with 50 balloons, family video montage, and a custom cake. She had no idea!',
    category: 'birthday',
    rating: '5.0'
  },
  {
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
    title: 'Anniversary Dinner Surprise',
    description: 'Recreated their first date at home — same menu, candles, and a playlist of their songs.',
    category: 'anniversary',
    rating: '5.0'
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    title: 'Airport Reunion',
    description: 'Best friends reunited after 2 years abroad. Welcome banner, flowers, and the whole gang waiting.',
    category: 'reunion',
    rating: '4.9'
  },
  {
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5cc?w=600&h=400&fit=crop',
    title: 'Promotion Celebration',
    description: 'Office desk decorated with achievement board and team-signed congratulatory poster.',
    category: 'achievement',
    rating: '4.8'
  },
  {
    image: 'https://images.unsplash.com/photo-1490759847861-f943798f1bf3?w=600&h=400&fit=crop',
    title: 'Just Because Flowers',
    description: 'Surprise flower delivery with a handwritten open-when letter. Made her entire week.',
    category: 'just-because',
    rating: '5.0'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    title: 'Blindfold Surprise Party',
    description: '30 friends hiding in the living room. Lured with a casual dinner invite. Epic reaction!',
    category: 'birthday',
    rating: '5.0'
  }
];

const SURPRISE_IDEAS = [
  {
    emoji: '🎂',
    title: 'Midnight Cake & Balloons',
    description: 'Decorate their room while they sleep. Set an alarm for midnight and surprise them with cake, balloons, and a happy birthday song.',
    category: 'birthday',
    difficulty: 'Easy'
  },
  {
    emoji: '📸',
    title: 'Memory Scrapbook',
    description: 'Collect photos, ticket stubs, and notes from friends. Compile into a handmade scrapbook they can keep forever.',
    category: 'birthday',
    difficulty: 'Medium'
  },
  {
    emoji: '🎬',
    title: 'Video Message Montage',
    description: 'Ask friends and family to record short clips. Edit them into one heartfelt video and play it at the surprise moment.',
    category: 'birthday',
    difficulty: 'Medium'
  },
  {
    emoji: '🌹',
    title: 'Anniversary Dinner at Home',
    description: 'Cook their favorite meal, set the table with candles and flowers, and recreate your first date atmosphere.',
    category: 'anniversary',
    difficulty: 'Medium'
  },
  {
    emoji: '💝',
    title: 'Open-When Letters',
    description: 'Write a series of letters for different moods — "Open when you\'re sad", "Open when you miss me", etc.',
    category: 'anniversary',
    difficulty: 'Easy'
  },
  {
    emoji: '🗺️',
    title: 'Memory Lane Walk',
    description: 'Plan a route through places meaningful to your relationship. Leave small surprises or notes at each stop.',
    category: 'anniversary',
    difficulty: 'Medium'
  },
  {
    emoji: '✈️',
    title: 'Surprise Airport Pickup',
    description: 'Show up unannounced at the airport or bus station when they return from a trip. Bring a welcome banner!',
    category: 'reunion',
    difficulty: 'Easy'
  },
  {
    emoji: '🏠',
    title: 'Welcome Home Decoration',
    description: 'Decorate their home entrance with banners, fairy lights, and a "Welcome back!" sign before they arrive.',
    category: 'reunion',
    difficulty: 'Easy'
  },
  {
    emoji: '🎊',
    title: 'Friends Flash Mob',
    description: 'Coordinate friends to show up at a café or park at the same time for an unexpected group reunion.',
    category: 'reunion',
    difficulty: 'Hard'
  },
  {
    emoji: '🏆',
    title: 'Achievement Celebration Board',
    description: 'Create a poster board with their accomplishments, photos, and congratulatory messages from loved ones.',
    category: 'achievement',
    difficulty: 'Easy'
  },
  {
    emoji: '🎁',
    title: 'Gift Scavenger Hunt',
    description: 'Hide clues around the house or neighborhood leading to a final gift. Each clue celebrates a milestone.',
    category: 'achievement',
    difficulty: 'Medium'
  },
  {
    emoji: '🌟',
    title: 'Star Dedication',
    description: 'Name a star after them (online services) and present the certificate with a telescope stargazing night.',
    category: 'achievement',
    difficulty: 'Easy'
  },
  {
    emoji: '☕',
    title: 'Coffee & Note Delivery',
    description: 'Show up at their door with their favorite coffee and a handwritten note — just because you care.',
    category: 'just-because',
    difficulty: 'Easy'
  },
  {
    emoji: '🌻',
    title: 'Flower Bomb Their Desk',
    description: 'Fill their workspace with their favorite flowers and a sweet card. Works for home or office.',
    category: 'just-because',
    difficulty: 'Easy'
  },
  {
    emoji: '🎵',
    title: 'Personalized Playlist',
    description: 'Curate songs that remind you of them. Share via QR code hidden in a card or played during dinner.',
    category: 'just-because',
    difficulty: 'Easy'
  },
  {
    emoji: '🎪',
    title: 'Surprise Party',
    description: 'Gather friends in a hidden room. Walk them in blindfolded or lure them with a casual invite.',
    category: 'birthday',
    difficulty: 'Hard'
  },
  {
    emoji: '🧳',
    title: 'Weekend Getaway',
    description: 'Pack bags secretly and reveal a surprise trip to a nearby hill station, beach, or favorite spot.',
    category: 'just-because',
    difficulty: 'Hard'
  },
  {
    emoji: '🍽️',
    title: 'Family Recipe Dinner',
    description: 'Cook a traditional family recipe together. Set the table festively and share stories about the dish.',
    category: 'reunion',
    difficulty: 'Medium'
  }
];

const CHECKLIST_ITEMS = [
  'Decide on the surprise type and date',
  'Check if the person will be available (subtly!)',
  'Recruit helpers and assign roles',
  'Set a budget and list needed items',
  'Buy or prepare gifts / decorations',
  'Plan how to keep it secret',
  'Create a backup plan (rain, cancellation)',
  'Prepare the reveal moment script',
  'Set up venue / room / location',
  'Do a final rehearsal with helpers',
  'Capture photos or video of the moment',
  'Enjoy their reaction — you earned it!'
];

const TIMELINE_TEMPLATES = {
  party: [
    { day: '14 days before', task: 'Pick venue and confirm guest list' },
    { day: '10 days before', task: 'Send secret invites and assign roles' },
    { day: '7 days before', task: 'Order cake, decorations, and supplies' },
    { day: '3 days before', task: 'Confirm RSVPs and plan the lure strategy' },
    { day: '1 day before', task: 'Set up venue and do a walkthrough' },
    { day: 'Day of', task: 'Execute the surprise — everyone in position!' }
  ],
  gift: [
    { day: '10 days before', task: 'Choose and order or make the gift' },
    { day: '7 days before', task: 'Plan how and when to reveal it' },
    { day: '3 days before', task: 'Wrap gift and write the card' },
    { day: '1 day before', task: 'Hide gift and prepare reveal spot' },
    { day: 'Day of', task: 'Present the gift at the perfect moment' }
  ],
  trip: [
    { day: '21 days before', task: 'Book travel and accommodation' },
    { day: '14 days before', task: 'Plan itinerary and pack list' },
    { day: '7 days before', task: 'Confirm bookings and weather' },
    { day: '2 days before', task: 'Pack bags secretly' },
    { day: 'Day of', task: 'Reveal the destination and go!' }
  ],
  decor: [
    { day: '7 days before', task: 'Buy decorations, balloons, and lights' },
    { day: '3 days before', task: 'Recruit helpers and plan setup time' },
    { day: '1 day before', task: 'Prepare banners and signs' },
    { day: 'Day of', task: 'Decorate while they\'re away — be quick!' }
  ],
  video: [
    { day: '14 days before', task: 'Ask friends to record video clips' },
    { day: '7 days before', task: 'Collect all clips and start editing' },
    { day: '3 days before', task: 'Add music, titles, and finalize' },
    { day: '1 day before', task: 'Test playback on the display device' },
    { day: 'Day of', task: 'Play the video at the surprise moment' }
  ],
  dinner: [
    { day: '7 days before', task: 'Plan menu and buy ingredients' },
    { day: '3 days before', task: 'Set tableware, candles, and music' },
    { day: '1 day before', task: 'Prep anything that can be made ahead' },
    { day: 'Day of', task: 'Cook, set the table, and surprise them' }
  ],
  custom: [
    { day: '14 days before', task: 'Define your custom surprise concept' },
    { day: '10 days before', task: 'List everything you need and recruit help' },
    { day: '7 days before', task: 'Start preparing materials and logistics' },
    { day: '3 days before', task: 'Run through the plan with helpers' },
    { day: 'Day of', task: 'Execute your unique surprise!' }
  ]
};

const TIPS_BY_RELATIONSHIP = {
  family: [
    'Involve other family members — they often know little details you might miss.',
    'Consider their daily routine so the surprise fits naturally.',
    'A handwritten letter from the heart often means more than expensive gifts.'
  ],
  friend: [
    'Check their schedule through a mutual friend to avoid spoiling the secret.',
    'Inside jokes make surprises extra special — weave them in.',
    'Capture their reaction on video — friends love reliving the moment.'
  ],
  partner: [
    'Think about your shared memories — nostalgia is powerful.',
    'Small, thoughtful details beat grand gestures if they\'re personal.',
    'Plan something that gives you quality time together, not just a gift.'
  ],
  colleague: [
    'Keep it appropriate for the workplace — group cards and cakes work great.',
    'Coordinate with other teammates for a team surprise.',
    'A thoughtful note recognizing their contribution goes a long way.'
  ],
  other: [
    'Personalize based on what you know about them.',
    'When in doubt, ask someone close to them for input.',
    'The effort and thought matter more than the price tag.'
  ]
};

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_ITEMS.map(item => `
    <div class="portfolio-card reveal" onclick="document.getElementById('planner').scrollIntoView({behavior:'smooth'})">
      <div class="portfolio-img ${item.category}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="portfolio-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="portfolio-meta">
          <span class="portfolio-tag">${item.category.replace('-', ' ')}</span>
          <span class="portfolio-rating">★ ${item.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderIdeas(filter = 'all') {
  const grid = document.getElementById('ideasGrid');
  const filtered = filter === 'all'
    ? SURPRISE_IDEAS
    : SURPRISE_IDEAS.filter(idea => idea.category === filter);

  grid.innerHTML = filtered.map(idea => `
    <div class="idea-card" data-category="${idea.category}">
      <div class="idea-emoji">${idea.emoji}</div>
      <h3>${idea.title}</h3>
      <p>${idea.description}</p>
      <span class="idea-tag">${idea.category.replace('-', ' ')}</span>
      <div class="idea-difficulty">Difficulty: ${idea.difficulty}</div>
    </div>
  `).join('');
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderIdeas(btn.dataset.filter);
    });
  });
}

function getDaysUntil(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  return diff;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function generatePlan(data) {
  const daysUntil = getDaysUntil(data.date);
  const timeline = TIMELINE_TEMPLATES[data.surpriseType] || TIMELINE_TEMPLATES.custom;
  const tips = TIPS_BY_RELATIONSHIP[data.relationship] || TIPS_BY_RELATIONSHIP.other;

  let countdownText;
  if (daysUntil < 0) {
    countdownText = 'That date has passed — pick a new one to replan!';
  } else if (daysUntil === 0) {
    countdownText = 'Today is the day! Go make it happen!';
  } else if (daysUntil === 1) {
    countdownText = '1 day to go — final preparations time!';
  } else {
    countdownText = `${daysUntil} days to go until the big surprise!`;
  }

  const budgetTips = {
    low: 'Focus on handmade gifts, heartfelt letters, and free experiences.',
    medium: 'Mix a thoughtful gift with a nice meal or small decoration.',
    high: 'Go for venue booking, premium gifts, or a weekend getaway.'
  };

  return `
    <div class="plan-result">
      <h3>Plan for ${data.personName}'s ${data.occasion.replace('-', ' ')}</h3>
      <p>Surprise type: <strong>${data.surpriseTypeLabel}</strong> · Budget: <strong>${data.budget}</strong></p>
      <div class="plan-countdown">${countdownText}</div>
      <p>Target date: ${formatDate(data.date)}</p>
      ${data.notes ? `<p><em>Note: ${data.notes}</em></p>` : ''}

      <div class="plan-timeline">
        <h4>Timeline</h4>
        ${timeline.map(item => `
          <div class="timeline-item">
            <span class="timeline-day">${item.day}</span>
            <span class="timeline-task">${item.task}</span>
          </div>
        `).join('')}
      </div>

      <div class="plan-tips">
        <h4>Tips for ${data.relationship} surprises</h4>
        <ul>
          ${tips.map(tip => `<li>${tip}</li>`).join('')}
          <li>${budgetTips[data.budget]}</li>
        </ul>
      </div>
    </div>
  `;
}

function setupPlanner() {
  const form = document.getElementById('plannerForm');
  const output = document.getElementById('planOutput');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('surpriseDate').min = tomorrow.toISOString().split('T')[0];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const surpriseType = document.getElementById('surpriseType');
    const data = {
      personName: document.getElementById('personName').value.trim(),
      relationship: document.getElementById('relationship').value,
      occasion: document.getElementById('occasion').value,
      date: document.getElementById('surpriseDate').value,
      budget: document.getElementById('budget').value,
      surpriseType: surpriseType.value,
      surpriseTypeLabel: surpriseType.options[surpriseType.selectedIndex].text,
      notes: document.getElementById('notes').value.trim()
    };

    output.innerHTML = generatePlan(data);
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function setupChecklist() {
  const list = document.getElementById('checklist');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');

  const saved = JSON.parse(localStorage.getItem('surpriseChecklist') || '[]');

  function updateProgress() {
    const checkboxes = list.querySelectorAll('input[type="checkbox"]');
    const done = [...checkboxes].filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const pct = total ? (done / total) * 100 : 0;
    progressFill.style.width = `${pct}%`;
    progressText.textContent = `${done} of ${total} done`;
  }

  function saveState() {
    const state = [...list.querySelectorAll('input[type="checkbox"]')].map(cb => cb.checked);
    localStorage.setItem('surpriseChecklist', JSON.stringify(state));
    updateProgress();
  }

  list.innerHTML = CHECKLIST_ITEMS.map((item, i) => `
    <li class="${saved[i] ? 'done' : ''}">
      <input type="checkbox" id="check-${i}" ${saved[i] ? 'checked' : ''}>
      <label for="check-${i}">${item}</label>
    </li>
  `).join('');

  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const cb = li.querySelector('input');
      cb.checked = !cb.checked;
      li.classList.toggle('done', cb.checked);
      saveState();
    });
  });

  list.querySelectorAll('input').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('li').classList.toggle('done', cb.checked);
      saveState();
    });
  });

  document.getElementById('resetChecklist').addEventListener('click', () => {
    list.querySelectorAll('input').forEach(cb => {
      cb.checked = false;
      cb.closest('li').classList.remove('done');
    });
    localStorage.removeItem('surpriseChecklist');
    updateProgress();
  });

  updateProgress();
}

function setupMessageBuilder() {
  const fields = {
    msgTo: document.getElementById('msgTo'),
    msgFrom: document.getElementById('msgFrom'),
    msgOccasion: document.getElementById('msgOccasion'),
    msgBody: document.getElementById('msgBody')
  };

  const previews = {
    previewTo: document.getElementById('previewTo'),
    previewFrom: document.getElementById('previewFrom'),
    previewOccasion: document.getElementById('previewOccasion'),
    previewBody: document.getElementById('previewBody')
  };

  const card = document.getElementById('cardPreview');

  function updatePreview() {
    previews.previewTo.textContent = fields.msgTo.value
      ? `Dear ${fields.msgTo.value},`
      : 'Dear Friend,';
    previews.previewFrom.textContent = fields.msgFrom.value
      ? `— ${fields.msgFrom.value}`
      : '— With love';
    previews.previewOccasion.textContent = fields.msgOccasion.value || 'Happy Birthday!';
    previews.previewBody.textContent = fields.msgBody.value || 'Your message will appear here...';
  }

  Object.values(fields).forEach(input => {
    input.addEventListener('input', updatePreview);
  });

  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      card.className = `card-preview ${btn.dataset.style}`;
    });
  });
}

function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

function setupMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50
      ? '0 4px 20px rgba(26,26,26,0.08)'
      : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  renderIdeas();
  setupFilters();
  setupPlanner();
  setupChecklist();
  setupMessageBuilder();
  setupScrollReveal();
  setupMobileMenu();
  setupNavbarScroll();
});
