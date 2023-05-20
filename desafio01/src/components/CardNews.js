class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "By Anônimo");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardLeft.setAttribute("class", "card_right");

    const newsImg = document.createElement("img");
    newsImg.src = this.getAttribute("photo") || "assetsdefault.jpg";
    newsImg.alt = "darthfoto";

    cardRight.appendChild(newsImg);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `

    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:80%;
        border:1px solid gray;
        box-shadow: 9px 9px 30px 0px rgba(0,0,0,.7);
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    span {
        font-weight: 400;
    }
    
    a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    
    p {
        color: gray;
    }
    
    img {
        width: 22rem;
    }
    `;

    return style
  }
}

customElements.define("card-news", CardNews);
