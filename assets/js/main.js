//Alle Accordion Items ins Array ziehen
const accordionItems = document.querySelectorAll(".accordion__item");

//Acoordion Items loopen um header rauszuziehen

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");

  //Click Event Listener wenn wir auf header klicken

  accordionHeader.addEventListener("click", () => {
    //Als erstes das geöffnete Itemm hier speichern
    const openItem = document.querySelector(".accordion-open");

    //Das neu geklickte Item wird weiter gepassed

    toggleItem(item);

    //Check, dass das bereits geöffnete Item und das neu gecklickte Item nicht das selbe ist und ein bereits geöffmnetes existiert
    //Bereits geöffnete auch weiter passen in toggle Funktion

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  // Accordion content für jedes Item ziehen oder geöffnetes Item (Text)
  const accordionContent = item.querySelector(".accordion__content");

  //Wenn geöffnetes Item existiert wird item zu openItem und dann style emntfernt und Klasse accordion open entfernt
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    // Hier kommt neu gecklicktes Item rein und bekommt Klasse accordion open zugewiesen
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
