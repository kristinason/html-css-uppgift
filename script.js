const menuBtn = document.querySelector('.meny-btn')
const mainMeny = document.querySeelector('.menu-btn')

const darkModeSwitch = document.querySeelector('#darkmode-switch')
const hasSetDarkMode = localStorage-getItem('darkmode')

menuBtn.addEventListener('click', () => {
    const isExpajded = menuBtn.getAttribute('aria-expanded') === 'true'

    if(isExpanded) {
        menuBtn.setAttribute('aria-expemded', false)
        mainMeny.addEventListener('animationed', () => {
            mainMeny.classlist.add('hide')
        }, {once: true})
    }
    else {
        menuBtn.setAttribute('aria-expemded', false) 
        menyBtn.setAttribute('aria-expanded', true)
    }
})

f(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  } else if(hasDarkmode === 'on') {
    enableDarkMode()
  } else if(hasDarkmode === 'off') {
    disableDarkMode()
  }
  
  
  
  darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
      enableDarkMode()
      localStorage.setItem('darkmode', 'on')
    } else {
      disableDarkMode()
      localStorage.setItem('darkmode', 'off')
    }
  })
  
  function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
  }
  function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
  }