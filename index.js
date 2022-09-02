const log = console.log
const shareBtns = document.querySelectorAll('.share-icon')

shareBtns.forEach(shareBtn => {
  shareBtn.addEventListener('click', (e)=>{
    if(window.innerWidth <= 496){
      
      const tooltip = document.querySelector('.tooltip1')
      const info = document.querySelector('.info')
      // log(tooltip)
      if (tooltip.classList.contains('hidden')){
        tooltip.classList.remove('hidden')
        info.classList.add('hidden')
      }else{
        log(tooltip.classList)
        tooltip.classList.add('hidden')
        info.classList.remove('hidden')
      }
    
    }else{
      const tooltip = document.querySelector('.tooltip')
      tooltip.classList.toggle('active')
      icon = document.querySelector('.icon')
      icon.classList.toggle('active')
    }
  }
  )
}) 


