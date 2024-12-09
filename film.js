const filmy = [
	{
		id: 'pelisky',
		nazev: 'Pelíšky',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
			sirka: 663,
			vyska: 909,
		},
		ochutnavka: 'České drama z období 1968.',
		popis:
			'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
		premiera: '2019-04-08',
	},
	{
		id: 'promlceno',
		nazev: 'Promlčeno',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
			sirka: 420,
			vyska: 595,
		},
		ochutnavka: 'Český krimi thriller s Karlem Rodenem.',
		popis:
			'Šokující živé vysílaní, které během chvíle změní životy několika nevinných lidí. Radek (Karel Roden) se po téměř dvaceti letech nečekaně vrací do svého rodného města, aby zde nalezl jistou mladou ženu a jednou provždy se vyrovnal se svou minulostí. V pátrání po neznámé ženě mu pomáhá Eva, ambiciózní rozhlasová moderátorka, která jeho příběh dostane do své živě vysílané noční show. Chtěla mít ve vysílání senzační událost, ale k jejímu zděšení a ke zděšení všech posluchačů začne na povrch vyplouvat něco, s čím nikdo nepočítal. Svůj plán připravoval Radek několik let a během jeho vyprávění je do pochmurného příběhu vtažena nejen ona sama, ale i pražská kriminálka a další aktéři dlouho zapomenutých událostí. Začíná napínavý boj o čas a o spravedlnost. Opravdu už je vše nenávratně promlčeno? (csfd.cz, Bontonfilm)',
		premiera: '2022-04-28',
	},
	{
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},
	{
		id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
			sirka: 663,
			vyska: 919,
		},
		ochutnavka: 'Francouzská komedie.',
		popis:
			'Pred 35 000 rokmi v časoch, kedy bol boj o oheň už dávno vybojovaný, prišiel na rad šampón, kvôli ktorému bol spáchaný prvý zločin v histórii ľudstva. Dva praveké kmene, Špinavovlasých a Čistovlasých žijú v harmónii a mieri až do chvíle, keď si Špinavovlasí uvedomia, že sa od susedného kmeňa líšia... Čistotou vlasov. Ale tajnú receptúru na peniacu zmes majú iba Čistovlasí a tí sa o ňu nechcú podeliť... Čistovlasí až doteraz žili pokojný, šťastný a čistý život. Nikoho z nich nenapadlo, že by im mohol niekto závidieť ich krásne čisté vlasy. Dokonca ani špinavý a smradľavý susedný kmeň Špinavovlasých. Ale v jednu noc sa to stalo. Po prvý raz v histórii ľudstva bol spáchaný zločin. Človek zabil človeka... Čo bolo vlastne jeho motívom? Kto vyrieši tento záhadný rébus? Čo ak je táto vrrrrražda iba začiatkom hrôzostrašnej série? Všetky tieto otázky začínajú riešiť prrrrehistorickí vyšetrovatelia. Začína sa prrrraveká špionáž a s ňou prichádza aj prvý vyšetrovaný zločin v dejinách ľudskej spoločnosti. Zažijete prvé vypočúvania, sledovania a podozrievania. V bláznivej komédii režiséra Chabata vstúpite do prrrrehistorickej doby, kedy bola platená starostlivosť o deti nutnosťou, profesionálny volejbal zábavou a sledovanie nástenných malieb ako predchodcov televízie samozrejmosťou. Nezľaknite sa hrôzostrašných zvukov vychádzajúcich z jaskýň. Podmienky základných ľudských potrieb, boli pred 35 000 rokmi nedokonalé. (csfd.cz, oficiální text distributora)',
		premiera: '2004-09-23',
	},
	{
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
	{
		id: 'kimi',
		nazev: 'KIMI',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
			sirka: 420,
			vyska: 622,
		},
		ochutnavka: 'Americký thriller o IT pracovnici s agorafobií.',
		popis:
			'Pracovnice IT oddělení trpící agorafobií najde nahrávku násilného trestného činu a nahlásí ji svým nadřízeným. Uvědomuje si však, že bude muset opustit svůj byt, aby mohl být zločin vyšetřen. (csfd.cz, HBO Max)',
		premiera: '2022-02-10',
	},
	{
		id: 'petrolejove-lampy',
		nazev: 'Petrolejové lampy',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
			sirka: 663,
			vyska: 937,
		},
		ochutnavka: 'Sugestivní filmové drama podle románu Jaroslava Havlíčka.',
		popis:
			'Sugestivní filmové drama Petrolejové lampy natočil Juraj Herz podle stejnojmenného románu Jaroslava Havlíčka. Vypráví v něm tragický příběh stárnoucí dívky Štěpy, žijící na přelomu století v dusném prostředí českého maloměsta, v ovzduší nepochopení a předstíraných citů, přetvářky a falše. Štěpě jsou neustále matkou vnucováni adepti na ženění, kteří ovšem musejí pocházet z téhož okruhu jako ona. Štěpa je však jiná než ostatní dívky. Jakoby zasažena duchem emancipace vyslouží si pověst dívky volných mravů a ta přirozeně nápadníky z řad městské honorace odrazuje. Než by se stala starou pannou, provdá se za bratrance, zkrachovalého důstojníka. V den svatby ale ještě netuší, jaká strašlivá nemoc pronásleduje jejího ženicha... Pečlivě rekonstruované období secese v sobě tají osudové lidské trápení: stárnoucí dívka z rodiny maloměstské honorace se dočká svého štěstí, když se provdá na pohledného důstojníka. Netuší ovšem, že muž trpí zhoubnou pohlavní chorobu - s marnou obětavostí pak o něho pečuje, vystavena zlomyslnému posměchu svého okolí. Vynikající, stále sugestivní snímek Juraje Herze se opírá o procítěné, jemně odstíněné herecké výkony Ivy Janžurové a Petra Čepka. (csfd.cz, oficiální text distributora)',
		premiera: '1971-10-01',
	},
	{
		id: 'krakonosovo-tajemstvi',
		nazev: 'Krakonošovo tajemství',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Česká vánoční pohádka z Krkonoš.',
		popis:
			'Na zámek v podhůří Krkonoš přijíždí jeho nový majitel Štěpán se svojí snoubenkou, krásnou komtesou Blankou, a mladším bratrem Adamem. Cestou kočár nešťastně srazí kolemjdoucí dívku, Adam jí pomůže a ona se do něj zamiluje. Na zámku Adam objeví starou vlašskou knihu, která by měla obsahovat cestu k pokladům. Tajemné značky vlašské knihy však nedokáže vyluštit ani národopisec Jiráček, který v kraji sbírá pověsti a nevychází z údivu nad tím, že zdejší lidé stále věří v Krakonoše. Na zámku se objeví záhadný cizinec a nabídne Štěpánovi, že jej k pokladu za určitých podmínek dovede. Výprava do hor může začít. Naplní se Liduščina láska k Adamovi? Jakou záhadu skrývá starý obraz na zámku Hůrka a co strašlivého se v horách kdysi odehrálo? A kdo je vlastně Krakonoš a jaké je jeho největší tajemství? (csfd.cz, Česká televize)',
		premiera: '2022-12-24',
	},
]

// Bonus k 6 ukolu - funkce musi byt zde, abych ji mohla pouzit na radku 159
const jakDalekoDoPremiery = (premieraOdDneska) => {
	if (premieraOdDneska === 0) {
		return 'je dnes'
	} else if (premieraOdDneska > 0) {		// premiera teprve bude
		if (premieraOdDneska === 1) {
			return 'bude za ' + premieraOdDneska + ' den'
		} else if (premieraOdDneska >= 2 && premieraOdDneska <= 4) {
			return 'bude za ' + premieraOdDneska + ' dny'
		} else {
			return 'bude za ' + premieraOdDneska + ' dní'
		}

	} else {								// premiera uz byla
		const premieraOdDneskaAbs = Math.abs(premieraOdDneska)							
		if (premieraOdDneskaAbs === 1) {
			return 'bylo před ' + premieraOdDneskaAbs + ' dnem'
		} else {
			return 'bylo před ' + premieraOdDneskaAbs + ' dny'
		}	
	}
}

// 5. ukol ✔ -------------------------------------------------------------------------------------------------------------------------------------
// Zobrazte příslušné informace o filmu na stránce s detailem.
// 1.	Protože stránka film.html obsluhuje datail všech filmů, budete si muset přes adresu stránky předat informaci, který konkrétní film si 
//		uživatel právě prohlíží. Využijeme toho, že na konec adresy můžeme přidat znak mřížky (#) a za něj libovolný text, který následně můžeme
//		 v JavaScriptu přečíst. (V tomto kroku jsou jen informace, nic neděláte.)
// 2.	V souboru seznam.js v HTML kódu z předchozího úkolu (který zobrazuje jeden film v seznamu) přidejte do odkazu href za film.html znak mřížky
//		 (#) a za něj ještě unikátní identifikátor (id), který má každý film jiný. (vyreseno v seznam.js)
// 3.	V souboru film.js zjistěte, na film s jakým id se uživatel chce dívat – zjistíte to z property location.hash. Všimněte si, že hodnota
//		 vlastnosti hash začíná znakem mřížky (#). Id v poli filmy mřížkou nezačínají. Mřížku vhodnou metodou na řetězcích odřízněte. 
const filmId = window.location.hash.slice(1)
console.log(filmId)

// 4.	Cyklem prohledejte pole filmy a film s id stejným jako hash (bez mřížky) si poznamenejte do proměnné. (Případně můžete také použít 
//		funkci find na poli.)

const film = filmy.find(item => item.id === filmId)


// 5.	Vepište informace (název, popis, plakát) o nalezeném filmu do stránky. Upravte textový obsah a atributy příslušných potomků 
//		prvku #detail-filmu. Do .card-text vepište dlouhý popis filmu.
const detailFilmuEl = document.querySelector('#detail-filmu')
detailFilmuEl.innerHTML = ''

detailFilmuEl.innerHTML += `
	<div class="row g-0">
		<div class="col-md-5">
			<img
				src="${film.plakat.url}"
				alt="plakát"
				class="img-fluid rounded-start"
				width="${film.plakat.sirka}"
				height="${film.plakat.vyska}"
			/>
		</div>
		<div class="col-md-7">
			<div class="card-body">
				<h5 class="card-title">${film.nazev}</h5>
				<p class="card-text">${film.popis}</p>
				<p class="card-text">
					<small class="text-muted" id="premiera">Premiéra 
					<strong>${dayjs(film.premiera).format('D. M. YYYY')}</strong>, 
					což ${jakDalekoDoPremiery(dayjs(film.premiera).diff(dayjs(), 'days'))}. </small> 
				</p>
				<h6>Hodnocení</h6>
				<div class="stars">
					<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Nic moc">
						1
					</button>
					<button class="far fa-star button-star"	data-mdb-toggle="tooltip" title="Ucházející">
						2
					</button>
					<button	class="far fa-star button-star"	data-mdb-toggle="tooltip" title="Dobrý">
						3
					</button>
					<button	class="far fa-star button-star"	data-mdb-toggle="tooltip" title="Skvělý">
						4
					</button>
					<button	class="far fa-star button-star"	data-mdb-toggle="tooltip" title="Úžasný">
						5
					</button>
				</div>

				<h6 class="mt-4">Poznámka</h6>
				<form id="note-form">
					<div class="row">
						<div class="col-md-6 col-lg-7 col-xl-8 mb-2">
							<div class="form-outline">
								<textarea class="form-control" 	id="message-input" rows="4"></textarea>
								<label class="form-label" for="message-input"> Text poznámky </label>
							</div>
						</div>
						<div class="col-md-6 col-lg-5 col-xl-4">
							<div class="form-check d-flex justify-content-center mb-2">
								<input class="form-check-input me-2 mb-2" type="checkbox" value="" id="terms-checkbox"/>
								<label class="form-check-label" for="terms-checkbox">
									Souhlasím se všeobecnými podmínky užívání.
								</label>
							</div>
							<button type="submit" class="btn btn-primary btn-block">
								Uložit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

`
// 6.ukol ✔ ---------------------------------------------------------------------------------------------------------------------------------------
// Zobrazte datum premiéry filmu. -> pridano rovnou nahoru do vypisu filmu (radka cca 171 )

// Zapojte do stránky film.html knihovnu dayjs přidáním HTML do hlavičky. <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
// Do prvku s id premiera vepište HTML Premiéra <strong>29. 11. 2022</strong>, kde datum nahraďte datumem 
// premiéry filmu naformátovaným pomocí dayjs a metody .format().
// Datum v dayjs vytvoříte například voláním dayjs('2022-12-24'). Vánoce nahraďte datumem premiéry filmu.
// Hezké datum z dayjs vytvoříte voláním dayjs('2022-12-24').format('D. M. YYYY').

// document.querySelector('#premiera').innerHTML = `
// 	Premiéra <strong>${dayjs(film.premiera).format('D. M. YYYY')}</strong>, což je za 24 dní.
// `


// Bonus ✔
// Spočítejte kolik dní uběhlo od premiéry nebo za kolik dní premiéra bude. Pomůže vám metoda .diff().
// Dnešní datum pro další výpočty v dayjs vytvoříte voláním dayjs().
// Datum premiéry pak voláním dayjs('2022-12-24').
// Pro vzdálenost mezi datumy pužijte metodu .diff() například takto: dayjs("2022-12-24").diff(dayjs(), 'days').
// Do elementu s id premiera připište, před kolika dny nebo za kolik dní bude nebo jestli je dnes.

const premieraOdDneskaTest = dayjs(film.premiera).diff(dayjs(), 'days') // jen test
console.log(premieraOdDneskaTest)
// vyreseno funkci r.108 a zapisem do vypisu filmu r.172 - tam se funkce vola s parametrem



// Extra bonus ✔
// Zařiďte, aby tvar slova den byl ve správném tvaru, aby se třeba nestalo „což bylo před 1 dní“.
// -> Pridana podminka do funkce r.109 a testovano volanim s ruznymi cisly a vypisem do console
console.log(jakDalekoDoPremiery(-1))



// 7. ukol ✔ 😵------------------------------------------------------------------------------------------------------------------------------------
// Zařiďte, aby klikání na hvězdičky v hodnocení filmu zvýraznilo všechny hvězdičky až po kliknutou.
// Vytvořte si pomocnou funkci pro zvýraznění určitého počtu hvězdiček (s jedním vstupním parametrem, číslem 1-5).
// Ve funkci projděte cyklem všechny prvky se třídou fa-star.
// Zvýrazněným hvězdičkám odeberte třídu far a přidejte fas. Ostatním obráceně. Zvýrazněné nechť jsou ty, 
//	 které jsou v pořadí menší nebo rovny číslu ze vstupu funkce. Pokud tedy funkci zavoláte například s číslem tři,
//	 první tři hvězdičky budou mít třídu fas a zbylé dvě budou mít far.
// Funkci vyzkoušejte zavolat s různými hodnotami. Zkušební volání ale v kódu nenechávejte.
const allStarsEl = document.querySelectorAll('.fa-star')	// vytvori pole buttonu hvezdicek
let yourRating = 0

const starRating = (event) => {
	yourRating = event.target.textContent		// pridano pro reseni bonusu - aby si pamatoval, na kolik hvezd se kliklo
	allStarsEl.forEach(item => {
		if (item.textContent <= event.target.textContent) {
			console.log(item.textContent)
			item.classList.add('fas')
			item.classList.remove('far')
		} else {
			item.classList.remove('fas')
			item.classList.add('far')
		}
	})

}

// forEach muze mit i 2 parametry: Tohle reseni nastinil Michal
// hvezdicky.forEach((h, i) => {
// 	if(index < pocetHvezd) {
// 		h.classList.add()
// 	}
// })

// Smyčkou přidejte všem hvězdičkám, prvkům se třídou fa-star posluchač události na kliknutí.
// Po kliknutí zjistěte, na kterou hvězdičku uživatel kliknul. Každá hvězdička má ve svém textovém obsahu číslo pořadí.
// Číslo využijte jako parametr funkce předchystané podle instrukcí výše.

allStarsEl.forEach(btn => {			// pridani posluchace na kazdou hvezdicku
	btn.addEventListener('click', starRating)
})

// Bonus
// Při přejíždění myší přes hvězdičky zvýrazněte všechny až po tu, na které je uživatel myší.
// Kromě posluchače události na kliknutí přidejte i posluchač na mouseenter a opět podle textového obsahu 
//	hvězdičky zavolejte vaši funkci s příslušným parametrem.
// Pokud uživatel s myší odjede pryč, zvýrazněte hvězdičky zpět tak, jak byly po posledním kliknutí.
// Kdykoliv uživatel na nějakou hvězdičku klikne, poznamenejte si bokem, kolikátá to byla.
// S událostí mouseleave zavolete vaši funkci s poznamenanou hodnotou.
allStarsEl.forEach(btn => {			
	btn.addEventListener('mouseenter', (event) => {
		allStarsEl.forEach(item => {
			if (item.textContent <= event.target.textContent) {
				console.log(item.textContent)
				item.classList.add('fas')
				item.classList.remove('far')
			} else {
				item.classList.remove('fas')
				item.classList.add('far')
			}
		})
	
	})
})

allStarsEl.forEach(btn => {			
	btn.addEventListener('mouseleave', () => {		// funguje, ale opakuje se stejny kod v podmince. Jde zkratit? ❓👀❓
		allStarsEl.forEach(item => {
			if (item.textContent <= yourRating) {
				item.classList.add('fas')
				item.classList.remove('far')
			} else {
				item.classList.remove('fas')
				item.classList.add('far')
			}
		})
	})
})




// 8. ukol ✔ ------------------------------------------------------------------------------------------------------------------------------------
// Umožněte uživateli vyplněním formuláře přidat k filmu vlastní poznámku.
// V souboru film.js pomocí document.querySelector najděte prvek s id note-form.
// a. Při pokusu o odeslání tohoto formuláře zamezte výchozí chování prohlížeče.
// b. Ověřte, že uživatel do textového pole, prvku s id message-input něco napsal. Pokud ne, přidejte prvku 
//	třídu is-invalid, která ho zvýrazní červeně.

// c. Pokud uživatel něco napsal, ověřte, že souhlasil s podmínkami, že zaškrtl políčko s id terms-checkbox. 
//	Pokud nezaškrtl, přidejte políčku třídu is-invalid

// d. Pokud uživatel splnil obě podmínky z kroků výše, nahraďte HTML obsah formuláře za odstavec 
// 	<p class="card-text">…</p> s textem z textového pole.

document.querySelector('#note-form').addEventListener('submit', (e) => {
	e.preventDefault()		// 8a.
	const message = document.querySelector('#message-input').value

	if (message === "") {		// 8b.
		document.querySelector('#message-input').classList.add('is-invalid')
		document.querySelector('#message-input').focus()	// Bonus: aby se objevil kurzor rovnou v textovem poli
	} else {
		document.querySelector('#message-input').classList.remove('is-invalid')

		const termsCheckboxEl = document.querySelector('#terms-checkbox').checked
		if (termsCheckboxEl) {		//8c.
			document.querySelector('#terms-checkbox').classList.remove('is-invalid')
			// 8d.
			document.querySelector('#note-form').innerHTML = `
				<p class="card-text">${message}</p>
			`
		} else {
			document.querySelector('#terms-checkbox').classList.add('is-invalid')
		}
	}

})

// Bonus ✔
// Pokud vyživatel něco ve formuláři vynechal, pomozte mu zaměřením příslušného formulářového prvku.
// V místech, kde přidáváte třídu is-invalid, volejte také na formulářovém prvku metodu .focus(). Ta například u textového pole přenese
// kurzor pro psaní rovnou na správné místo, aby uživatel mohl začít psát z klávesnice.
// -> Vyreseno na r. 354


// 9. ukol ------------------------------------------------------------------------------------------------------------------------------------
// Obohaťte video přehrávač vlastními ovládacími prvky.
// V souboru film.html u prvku <video> umažte ručně atribut controls. Skryjí se tím ovládací prvky předchystané přímo prohlížečem. 
// V CSS je pak už hotový kód, který automaticky zobrazí <div class="player-controls"> s vlastním vizuálem. Vy v CSS nemusíte nic měnit. 
// Jen si všimněte, že se na stránce objevily jiné ovládací prvky, které ale nereagují na klikání.

// a. Oživte tlačítko pro přehrávání a pozastavení.
// 	  V souboru film.js, pokud je na stránce prvek s id prehravac, přidejte posluchač události kliknutí na prvek se třídou play.😜
// b. Na kliknutí zavolejte na prvku <video> metodu .play(). Pokud uživatel klikne, video by se mělo začít přehrávat.

// c. Přidejte na <video> posluchač události playing. Ta nastává v okamžiku, kdy se video začíná přehrávat.
// 	  Při události na prvku s id prehravac přidejte třídu playing. Předchystané CSS v takovém případě zařídí, že se přehrávací tlačítko skryje 
// 	  a místo něho se objeví tlačítko pro pozastavení.

// d. Tlačítku .pause přidejte posluchač, který po kliknutí zavolá na videu metodu .pause(), což pozastaví přehrávání.
//	  Poslouchejte na událost s názvem pause. Pokud nastane, odeberte z přehrávače třídu playing.
const videoPlayerEl = document.querySelector('#prehravac')
const videoEl = document.querySelector('video')

if (videoPlayerEl === null) {							// a.
	console.log('Na strance neni prehravac')
} else {
	document.querySelector('.play').addEventListener('click', () => {	// b.
		videoEl.play()
	})
	videoEl.addEventListener('playing', () => {			// c.
		videoPlayerEl.classList.add('playing')	
		
	})

	document.querySelector('.pause').addEventListener('click', () => {	// d.
		videoEl.pause()
	})
	videoEl.addEventListener('pause', () => {
		videoPlayerEl.classList.remove('playing')
	})

}



// V prvku se třídou current-time zobrazujte aktuální čas přehrávaného videa.
// Poslouchejte na prvku videa událost timeupdate. Pokud nastane, vyčtěte z videa přes vlastnost .currentTime počet přehraných sekund.
// Aktuální čas zaokrouhlete a převeďte zvlášť na minuty a sekundy.
// Obě hodnoty oddělené dvojtečkou vypište do prvku .current-time.