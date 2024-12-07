// Kod splecny pro vsechny stranky

// 3 ukol: Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s 
//    ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.
// 1.	V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.
// 2.	Přidejte mu posluchač události kliknutí.
// 3.	Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.
// 4.	Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

const menuTlacitkoEl = document.querySelector('#menu-tlacitko')
const menuPolozkyEl = document.querySelector('#menu-polozky')

menuTlacitkoEl.addEventListener('click', () => {
    menuPolozkyEl.classList.toggle('show')

    // Bonus
    console.log(menuPolozkyEl.classList.contains("show"))   // jen pro kontrolu

    const icon = document.querySelector('#menu-tlacitko i')
    icon.classList.toggle('fa-xmark')           // pozor nesmi tam byt cele "fas fa-xmark"

    // Prvni reseni, nez jsem rozchodila toggle
    // if (menuPolozkyEl.classList.contains('show')) {
    //     icon.classList = "fas fa-xmark"
    // } else {
    //     icon.classList = "fas fa-bars"
    // }
} )

// 3 Bonus - reseni viz vyse
// Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.
// 	HTML ikonky křížku: <i class="fas fa-xmark"></i>
// 	HTML ikonky hamburgeru: <i class="fas fa-bars"></i>






