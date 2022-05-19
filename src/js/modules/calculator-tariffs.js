export const calculator = () => {
   const tariffsInputs = document.querySelectorAll('.calculator__input-radio');
   const inputNumber = document.querySelector('.calculator__input-number');

   tariffsInputs.forEach(radio => {
      radio.addEventListener('change', () => {
         console.log(radio.checked);
         if (radio.checked) {
            console.log(radio.value);
         }
      });
   });

   // забороняємо ввід тексту, тільки цифри
   inputNumber.addEventListener('input', () => {
      inputNumber.value = inputNumber.value.replace(/[^\d]/g, '');
   });
};
