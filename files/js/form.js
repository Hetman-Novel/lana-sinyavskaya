"use strict"

document.addEventListener('DOMContentLoaded', function () {

   // Контактная форма
   const form = document.getElementById('form');
   const send_text_good = document.getElementById('send-text-good');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
      let formData = new FormData(form);

      if (error === 0) {
         form.classList.add('_sending');
         /*let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         });*/
         if (response.ok) {
            let result = await response.json();
            //alert(result.message);
            form.reset();
            form.classList.remove('_sending');
            send_text_good.classList.add('sendGood');
            setTimeout(() => {
               send_text_good.classList.remove('sendGood');
            }, 3000);
         } else {
            //alert('Ошибка');
            form.classList.remove('_sending');
            send_text_good.classList.remove('sendGood');
         }
      } else {
         //alert('Заполните обязательные поля');
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               if (input.value === '') {
                  formAddError(input);
                  error++;
               } else {
                  formAddError(input);
               }
            }
         } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_required');
      input.classList.add('_required');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_required');
      input.classList.remove('_required');
   }
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   // footer


});