const myLibrary=[];
let index=0;
const cardGrids=document.querySelector('.cards');
function Book(title, author,pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    
    this.info=function(){
      if(this.read==='read'){
      return `${title}, ${pages} pages, not read yet`;
      }
      else{
       return `${title}, ${pages} pages, Read the Book`;
      }
    }
  }
function addBooksToLibrary(title,author,pages,read){
    const newBook=new Book(title,author,pages,read);
    myLibrary.push(newBook);
}        

myLibrary.push(new Book("JRR Hobit","JRR Tolkein",244,"read"));
myLibrary.push(new Book("absd","sfsf",234,"not read"));

function createCard(book, index){
        const bookCard=  document.createElement('div');
        bookCard.classList.add('card');

        const title=document.createElement('div');
        title.innerText=book.title;

        const author=document.createElement('div');
        author.innerText=book.author;

        const pages=document.createElement('div');
        pages.innerText=book.pages;

        pages.style.marginBottom="10px";

        const readDiv=document.createElement('button');
        readDiv.innerText="Read";
        readDiv.setAttribute('data-index',index);
        readDiv.addEventListener('click',(e)=>{
            toggleReadDiv(readDiv);
        })
        readDiv.style.marginRight="24px";
        readDiv.style.borderRadius="5%";

        const removeBtn=document.createElement('button');
        removeBtn.innerText="Remove";
        removeBtn.setAttribute('data-index',index);
        removeBtn.addEventListener('click',function(){
            removeDiv(parseInt(this.getAttribute('data-index')));
        });
        removeBtn.style.borderRadius="5%";


        bookCard.append(title,author,pages,readDiv,removeBtn);
        cardGrids.append(bookCard);
        


};

function removeDiv(index){
    myLibrary.splice(index,1);
    DisplayBooks();
}

function DisplayBooks(){
    cardGrids.innerHTML="";
    myLibrary.forEach((book,index)=>{
        createCard(book,index);
    })
}
DisplayBooks();

function toggleReadDiv(readDiv){
    if(readDiv.innerText==='read')
    {
        readDiv.innerText='not read';
    }
    else{
        readDiv.innerText='read';
    }
}

const displayBtnDiv=document.querySelector('.display-btn');
displayBtnDiv.addEventListener('click',(e)=>{
    const modal=document.querySelector('[data-modal]');
    modal.showModal();
});

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const book=document.getElementById('book').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const read=document.getElementById('readState').value;

    const newBook=new Book(book,author,pages,read);
    myLibrary.push(newBook);
    DisplayBooks();
    const modal=document.querySelector('[data-modal]');
    modal.close();

})




