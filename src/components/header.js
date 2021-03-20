const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //create elements
  newHeader.createElement('div')
  date.createElement('span')
  title.createElement('h1')
  temp.createElement('span')

  //assign hierarchy
  newHeader.appendChild('date')
  newHeader.appendChild('title')
  newHeader.appendChild('temp')

  //assign classes
  newHeader.classList.add('header')
  date.classList.add('date')
  temp.classList.add('temp')

  //assign text content
  date.textContent = Header[1]
  title.textContent = Header[0]
  temp.textContent = Header[2]
  
  // return div
  return newHeader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
   
    
  
}

export { Header, headerAppender }
