      const callButton = document.getElementById('call-button');


      callButton.addEventListener('click', () => {
        const phoneNumber = '5491169976990'; 
        const message = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.');
  

        window.location.href = 'https://wa.me/5491169976990?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios';
      });

