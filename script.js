
function toggle(e) {
    const element = e.target;
    element.classList.toggle("active");
  }

const section1Element = document.getElementById("section");
section1Element.addEventListener("click", toggle,);

const accordion = document.querySelector(".accordion");async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await response.json();  data.forEach((posts) => {

      let postsEl = document.createElement("div");
      postsEl.setAttribute("class", "section")
      postsEl.innerHTML = `<p> ${posts.title}</p>`;
      postsEl.addEventListener("click", toggle);
      accordion.appendChild(postsEl);   
       
      let postBody = document.createElement("div");
      postBody.setAttribute("class", "description");
      postBody.innerHTML = `<p>${posts.body}</p>`;
      postsEl.appendChild(postBody);
    });
}

getPosts();

function myFunctionMagic() {
    var x = document.getElementById("magic");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunctionMagic1() {
    var x = document.getElementById("magic1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionMagic2() {
    var x = document.getElementById("magic2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunctionMagic3() {
    var x = document.getElementById("magic3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionMagic4() {
    var x = document.getElementById("magic4");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunctionMagic5() {
    var x = document.getElementById("magic5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction1() {
    var x = document.getElementById("text1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("text2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("text3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  