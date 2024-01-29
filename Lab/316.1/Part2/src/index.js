/**
 * Part 1: Getting Started
 */
//1.select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
//const mainEL2 = document.getElementsByTagName("main")[0];

//2.Set the background color using the --main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

//3. Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//4. Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr')

/**
 * Part 2: Creating a Menu Bar
 */
//1.Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById(`top-menu`);

//2.Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//3.Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//4.Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

/**
 * Part 3: Adding Menu Buttons
 */

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//1.Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {

  //2.Create an <a> element.
  let menuItem = document.createElement(`a`);
  //console.log(menuItem)

  //3.On the new element, add an href attribute with its value set to 
  menuItem.setAttribute(`href`, link.href)

  //4.Set the new element's content to the value of the text property of the "link" object.
  menuItem.textContent = link.text

  //5.Append the new element to the topMenuEl element
  topMenuEl.appendChild(menuItem)
})


/**
 * Part2-Part 3: Creating the Submenu
 */

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById(`sub-menu`)
//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute'
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0'

/**
 * Part2-Part 4: Adding Menu Interaction
 */

// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//console.log(topMenuEl)
const topMenuLinks = topMenuEl.querySelectorAll(`a`)

//2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', handleTopMenuElClick)



function handleTopMenuElClick(event) {
  //The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault() //To perform some JavaScript action without navigating to a new page
  //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName.toLowerCase() !== 'a') {
    return
  }
  else {
    //Log the content of the <a> to verify the handler is working
    //console.log('Link clicked', event.target.textContent)

    topMenuLinks.forEach((link) => {

      link.classList.remove('active')
    })
    event.target.classList.add('active')

    //Part 5: Adding Submenu Interaction
    const currentLinkObject = menuLinks.find(link => link.text === event.target.textContent)

    //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    if (currentLinkObject && currentLinkObject.subLinks) {
      subMenuEl.style.top = '100%'

      buildSubmenu(currentLinkObject.subLinks)
    }
    //Otherwise, set the CSS top property of subMenuEl to 0.
    else {
      subMenuEl.style.top = '0%'

    }
    if (event.target.textContent.toLowerCase() === 'about') {
      mainEl.innerHTML = '<h1>About</h1>';
    }
  }
}



// Helper function to build the submenu
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach((link) => {
    // Create an <a> element
    let subLink = document.createElement('a');

    // Add an href attribute to the <a>, with the value set by the href property of the "link" object
    subLink.setAttribute('href', link.href);

    // Set the element's content to the value of the text property of the "link" object
    subLink.textContent = link.text;

    // Append the new element to the subMenuEl
    subMenuEl.appendChild(subLink);
  });
}


subMenuEl.addEventListener('click', handelSubMenuElClick)

function handelSubMenuElClick(event) {
  event.preventDefault()
  if (event.target.tagName.toLowerCase() !== 'a') {
    return
  }
  else {
    subMenuEl.style.top = '0%'
    // link.classList.remove('active')

    topMenuLinks.forEach((link) => {

      link.classList.remove('active')
    })
    console.log(subMenuEl.text);
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;


  }
}
