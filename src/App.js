function book ({name, picture}) {
  return(
    <div>
      <h2>I like {name} </h2>
      <img src={picture}/>
    </div>
  );
}
  
const bookILike = [
  {
    id:1,
    name: '1984',
    image: 'https://image.yes24.com/goods/372300/XL'
    , rating:5
  },
  {
    id:2,
    name: 'Alchemist',
    image: 'https://contents.sixshop.https://t1.daumcdn.net/cfile/tistory/22108C485672653526com/thumbnails/uploadedFiles/100178/product/image_1569383690562_750.jpg'
    , rating:4.5
  },
  {
    id:3,
    name: 'The Phantom of the Opera',
    image: 'https://image.yes24.com/momo/TopCate221/MidCate002/4276487.jpg'
    , rating:4.7
  },
  {
    id:4,
    name: 'Blindness', 
    image: 'https://m1.daumcdn.net/cfile282/image/1572E311498F820A6DCEBC'
    , rating:5
  }
];

function renderBook(book){
  return(
    <div>
      {bookILike.map(book => <Book key={book.id} name={book.name} picture={book.image} />)}
    </div>
  );
}

function App() {
  return(
    <div>
      {bookILike.map(renderBook)}
    </div>
  );
}

export default App;