const data = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
]

const currency = (title, sub, text) => {
    return `
          <div id="currency"> 
                <p id='title'>${title}</p>
                <div id="symbolContainer">
                    <p id="sub">${sub}</p>
                </div>
                <br>
                <hr></hr>
                <p id="text">${text}</p>
                <button>
                  <p>Save</p>
                     <span class="material-icons">
                         arrow_forward
                     </span>
                </button>
          </div>
      `
  };

  const allCurrencies = (data) => {
    let currencies = "";
    for (const curr of data) {
      currencies += currency(curr.title, curr.sub, curr.text);
    }
    return `
          <div id="currenciesFlexContainer">${currencies}</div>
      `;
  };
  

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const root = document.getElementById("root")
    root.insertAdjacentHTML("beforeend", allCurrencies(data))
  });