function login() {
  const code = document.getElementById('loginCode').value.trim();
  if (code === '1110') {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    showSection('appointments', document.querySelector('.nav-btn'));
  } else {
    document.getElementById('loginError').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('loginError').classList.add('hidden');
    }, 3000);
  }
}

// دعم الضغط على Enter
document.getElementById('loginCode').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    login();
  }
});

function showSection(sectionName, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(sectionName)?.classList.remove('hidden');
  btn.classList.add('active');
}
