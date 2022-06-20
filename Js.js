(function($){
   var thisArray = [
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   },
   {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cupiditate molestiae delectus.",
      image: "/images/kitchen.jpg"
   }
   ];

   var store = document.getElementById("test123");
   for (let i = 0; i < thisArray.length; i++) {
      let data = thisArray[i];
      store.innerHTML += `
      <div class="flex flex-col text-center items-center">
      <a href="${data.image}" class="flex justify-center">
         <img src="${data.image}" alt="" class="w-5/6 ">
      </a> 
      <p class="text-sky-500 text-2xl font-semibold my-3">${data.title}</p>
      <p class="w-4/6 mb-3">${data.text}.</p>
      <button type="submit" class="border border-sky-400 p-4 rounded-lg cursor-pointer text-sky-600 font-medium hover:bg-sky-600 hover:text-white">View Home</button>
      </div>
      `
   }

// $("#test123").magnificPopup({
//    delegate: 'a', // child items selector, by clicking on it popup will open
//    type: 'image'
//    // other options
// });

$("#test123").magnificPopup({
   delegate: "a", // child items selector, by clicking on it popup will open
   type: "image"
   // other options
});

})(jQuery);