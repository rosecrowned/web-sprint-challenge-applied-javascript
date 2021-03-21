import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //create
  const menuList = document.createElement('div')
  menuList.classList.add('topics')  
  

  topics.forEach(Element=> {
    const menuItem = document.createElement('div')
    //add class to tabs
    menuItem.classList.add('tab')
    //add text to the individual tabs
    menuItem.textContent = Element
    // hierarchy
    menuList.appendChild(menuItem)

    return menuList

  })


  //hierarchy
  // menuList.appendChild('topics')
  
  // //classes
  // menuList.classList.add('topics')
  // topics.classList.add('tab')

return menuList
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // const tabSelector = document.querySelector('selector')
  axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
  })
  
}
export { Tabs, tabsAppender }
