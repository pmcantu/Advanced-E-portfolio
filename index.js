//template_phowamj
//service_letjeyd
//vRJ-dpcUL22sCESdk
 //   event.preventDefault();
 //   await emailjs
// .sendForm(
//       'service_letjeyd',
 //      'template_phowamj',
 //      event.target,
//       'user_vRJ-dpcUL22sCESdk'
//    ) }

   let isModalOpen = false;
   let contrastToggle = false;

   const scaleFactor = 1 / 20;
   
   function moveBackground(event) {

      const shapes = document.querySelectorAll(".shape");
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;
      

     for (let i = 0; i < shapes.length; ++i) {
     const isOdd = i % 2 !== 0;
     const boolInt = isOdd ? -1 : 1;

        shapes[i].style.transform =`translate(${x * boolInt
        }px,${y * boolInt}px)
         rotate(${x* boolInt * 10}deg)`;
            }
            
   }

  function toggleContrast() {
    contrastToggle = !contrastToggle  
    if (contrastToggle)  { 
      document.body.classList += " dark-theme" 
       } 
       else {
        document.body.classList.remove("dark-theme")  
       }
    
  }
    


   

 function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList +=(" modal__overlay--visible");

  emailjs
  .sendForm(
  'service_v8olonb',
  'template_phowamj',
  event.target,
  'vRJ-dpcUL22sCESdk'

  ).then (() => {
   
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log('this worked 5')
  }).catch(()  => {
  loading.classList.remove("modal__overlay--visible") 
  alert(
  " The email service is temorarily unavailable. Please contact me directly on pmcantu2014@icloud.com"
  );
  })

 }
 
   // toggle modal
   

   function toggleModal () {
    
    if (isModalOpen) {

      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
   }

 