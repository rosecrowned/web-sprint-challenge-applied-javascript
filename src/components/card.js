import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // yet again, let's create the elements
  const articleCard = document.createElement('div')
  const articleHeadline = document.createElement('div')
  const articleAuthor = document.createElement('div')
  const imageDiv = document.createElement('div')
  const authorImage = document.createElement('img')
  const writtenBy = document.createElement('span')

  //now nest the elements into each other
  articleCard.appendChild(articleHeadline)
  articleCard.appendChild(articleAuthor)
  articleAuthor.appendChild(imageDiv)
  imageDiv.appendChild(authorImage)
  articleAuthor.appendChild(writtenBy)

  //assign proper classes, as needed
  articleCard.classList.add("card")
  articleHeadline.classList.add("headline")
  articleAuthor.classList.add("author")
  imageDiv.classList.add('img-container')

  //assign text
  articleHeadline.textContent = article.headline 
  articleAuthor.textContent = article.author 
  authorImage.src = `${article.authorPhoto}`
  writtenBy.textContent = `${article.authorName}`
  
  return articleCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  //

  //import the api
  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res=> {
      console.log(res.data.articles.javascripts)

      let jsArticles = res.data.articles.javascript 

        jsArticles.forEach(element => {
          document.querySelector(selector).appendChild(Card(element))
        });
    });

}

export { Card, cardAppender }
