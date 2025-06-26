const nameField    = document.getElementById('name');
const emailField   = document.getElementById('email');
const subjectField = document.getElementById('subject');
const statusEl     = document.getElementById('status');

function send() {
  
  statusEl.textContent = '';
  statusEl.classList.remove('success', 'error');

 
  if (
    nameField.value.trim() === '' ||
    emailField.value.trim() === '' ||
    subjectField.value.trim() === ''
  ) {
    statusEl.textContent = '❌ يرجى ملء جميع الحقول';
    statusEl.classList.add('error');
   
    setTimeout(() => {
      statusEl.textContent = '';
      statusEl.classList.remove('error');
    }, 5000);
    return; 
  }

 
  try {
  
    


    nameField.value    = '';
    emailField.value   = '';
    subjectField.value = '';

    
    statusEl.textContent = '✅ تم الإرسال بنجاح';
    statusEl.classList.add('success');
  } catch (err) {
    
    statusEl.textContent = '❌ فشل الإرسال';
    statusEl.classList.add('error');
    console.error(err);
  }


  setTimeout(() => {
    statusEl.textContent = '';
    statusEl.classList.remove('success', 'error');
  }, 5000);
}
