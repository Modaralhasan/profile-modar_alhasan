const nameField    = document.getElementById('name');
const emailField   = document.getElementById('email');
const subjectField = document.getElementById('subject');
const statusEl     = document.getElementById('status');

function send() {
  // إعادة تعيين الحالة القديمة
  statusEl.textContent = '';
  statusEl.classList.remove('success', 'error');

  // التحقق من أن جميع الحقول مليئة
  if (
    nameField.value.trim() === '' ||
    emailField.value.trim() === '' ||
    subjectField.value.trim() === ''
  ) {
    statusEl.textContent = '❌ يرجى ملء جميع الحقول';
    statusEl.classList.add('error');
    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => {
      statusEl.textContent = '';
      statusEl.classList.remove('error');
    }, 5000);
    return; // لا نتابع التنفيذ إلى الخطوات التالية
  }

  // إذا كانت الحقول كلها مليئة نتابع عملية "الإرسال"
  try {
    // هنا من الممكن أن تضع طلب الإرسال الحقيقي (fetch أو AJAX)
    // ...

    // مسح الحقول بعد الإرسال
    nameField.value    = '';
    emailField.value   = '';
    subjectField.value = '';

    // عرض رسالة نجاح
    statusEl.textContent = '✅ تم الإرسال بنجاح';
    statusEl.classList.add('success');
  } catch (err) {
    // في حال حدوث خطأ أثناء الإرسال
    statusEl.textContent = '❌ فشل الإرسال';
    statusEl.classList.add('error');
    console.error(err);
  }

  // إخفاء أي رسالة (نجاح أو خطأ) بعد 5 ثوانٍ
  setTimeout(() => {
    statusEl.textContent = '';
    statusEl.classList.remove('success', 'error');
  }, 5000);
}
