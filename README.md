# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.




## Jij

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Elaine Wilberforce

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface plane
 
</details>



## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Amsterdam Dance Event
  https://www.amsterdam-dance-event.nl/en/
  https://www.amsterdam-dance-event.nl/en/program/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Amsterdam Dance Event

  <img src="readme-images/ADEhome.png" width="375px" alt="Screenshot van ADE website op iPhone XR">

  #### Screenshot(s) van de tweede pagina (small screen):
  ADE 2022 Program - ADE 

  <img src="readme-images/ADEprogram.png" width="375px" alt="Screenshot van ADE programma op iPhone XR">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen

  #### Screenreader
  Ik heb VoiceOver van Apple gebruikt om de toegankelijkheid van mijn site uit te testen. Bij de screenreader heb ik de volgende bevindingen gevonden:
  - Sommige koppen zijn niet samengevoegd
  - Knop voor de video’s spreekt hij alleen uit als knop
  - Links voor de social media spreekt ie alleen uit als afkortingen (instagram als Ig) 
   - Navigatie in footer leest hij omgekeerd
  - Kopniveau 2: see something you like? Staat nergens op
  - Hartje (favorieten) leest hij als plus
  - Gedoe met de search balk
 
  Dit kan ik oplossen door de teksten wat duidelijker te maken en typen, de buttons en om de regels in de goede volgorde te coderen

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  ~(hoe kan ik dit oplossen)~


  #### Motoriek (shocks, elastiekjes)
  Ik heb daarna de motorieke functies getest met een elektrische schokapparaat om Parkinsons na te bootsen en elastiekjes om je vingers voor beperkingen aan je vingers.

  Ik kwam niet heel ver met het elektrische apparaat omdat dit te heftig voor mij was maar ik heb wel wat getest met de elastiekjes, zoals typen, scrollen en klikken. Het typen ging wel alleen had ik veel typfouten

  ~(hoe kan ik dit oplossen)~
  <img src="readme-images/elastiekje.jpg" width="375px" alt="Visuele beperkingsbrillen">


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Ik heb de brillen getest (met zeer beperkt zicht en wazig zicht) en ben door mijn site gaan scrollen en wat ik heb opgemerkt is dat de kleine tekstjes moeilijk te lezen zijn doordat het wazig te zien is. Ook is de tekst van de footer niet handig met het contrast (zwarte achtergrond met grijze tekst).

  Ik kan dit bijvoorbeeld oplossen door een hoger contrast te gebruiken als kleur, fellere kleuren te gebruiken en wat groter tekst/duidelijkere lettertype te gebruiken
  <img src="readme-images/brillen.jpg" width="375px" alt="Visuele beperkingsbrillen">

</details>



## Breakdownschets (week 1)

<details>
  <summary>Mijn 3 breakdownschetsen van mijn website</summary>

  ### pagina 1 - ADE programma: 
  <img src="readme-images/breakdown-ade-program-v2.png" width="375px" alt="breakdown van ADE programma pagina">

  ### dynamisch deel (menu): 
  <img src="readme-images/breakdown-ade-menu.png" width="375px" alt="breakdown van de hamburgermenu">

  ### pagina 2 - ADE homepagina):
  <img src="readme-images/breakdown-ade-home.png" width="375px" alt="breakdown van de homepagina van ADE">

</details>





## Voortgang 1 (week 2)

<details open>
  <summary>1e voortgangsgesprek</summary>

  ### Stand van zaken
  (neem ook screenshots op van delen van je website en code)

  Met mijn code ging het goed, ik was best ver, alleen had ik wat problemen met de position:fixed op mijn kopjes bovenop de
  video background en had ik wat foutjes met h1 en h2 kopjes



  ### Agenda voor meeting
  samen met je groepje opstellen

  | Elaine            | Shelley            | Lisanne      | Karenza             |
  | ---               | ---                | ---          | ---                 |
  | position: fixed   | verplaatsen        | nog werken   | vragen weet ik ff   |
  | hamburger menu    | container css      | aan html     | niet meer           |
  | ...               | hamburger menu     | ...          | ...                 |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - h1 maar 1x gebruiken in je hele html + kopjes altijd eerst
  - aria-labels
  - hamburger menu handigheden

</details>





## Voortgang 2 (week 3)

<details>
  <summary>2e voortgangsgesprek</summary>

  ### Stand van zaken
  (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Elaine            | Shelley              | Lisanne        | Karenza          |
  | ---               | ---                  | ---            | ---              |
  |button             | positie "child" in   | nog werken     | -                |
  |verplaatsen in     | grid zonder dat hij  | aan html/css?  |                  |
  |hamburgermenu open | uittrekt + css check | ...            | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>


## Toegankelijkheidstest 2/2 (week 4)

<details open>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is): nog uitwerken + foto's toevoegen

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Screenreader:
  - Issues met skip button spotify
  - Carousel leest ie niet als link
  - Afbeeldingen alt niet toegevoegd, leest als file
  - Heading laatste carousel (niet opnieuw lezen?)


  - Headings leest ie wel
  - P's leest ie wel
  - Navigatie gaat goed
  - A's gaat goed


  #### Muis en Toetsenbord 
  Focus en hover state nog niet gedaan

  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  
  Kleurenblindheid
  Normaal

  Blue cone
  Problemen met tekst in carousel gele tekst (laatste section)

  Monochrome 
  Problemen met tekst in carousel gele tekst (laatste section) 
  Pijltjes zwart, misschien border eromheen

  Green-weak
  Oke

  Green-blind
  Oke

  Red-weak
  Oke

  Red-blind
  Oke

  Blue weak
  Problemen met tekst in carousel gele tekst (laatste section)

  Blue-blind
  Problemen met tekst in carousel gele tekst (laatste section)

  Brillen

  Low contrast
  Tekst carousel geel niet duidelijk
  Footer tekst wat helderder

  Color
  Alles gaat goed

  Hemifield loss
  Oke

  Central field loss
  Wazig zien, misschien meer contrast

  Diabetic eye disease 



  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details open>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Elaine           | Shelley            | Lisanne      | Karenza          |
  | hoe linken       | ---                | ---          | ---              |
  | naar section     | Geen vragen        | -            | -                |
  | zonder id/class  | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Intersection Observer - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  2. Carousel van Sanne - https://codepen.io/shooft/pen/abmLRMg
  3. Learn Intersection Observer in 15 minutes - https://www.youtube.com/watch?v=2IbRtjez6ag
  4. The Noun Project - Icons - https://thenounproject.com/
  5. Media van ADE - https://www.amsterdam-dance-event.nl/en/
  6. Base64 Decoder (voor a::before icon converteren naar SVG) - https://base64.guru/converter/decode/file
  7. Scroll to top button - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  8. Embedded Spotify link - https://open.spotify.com/playlist/2tYOFz9ouZnhV833UixJI8?go=1&utm_source=embed_player_m&utm_medium=desktop&nd=1 

</details>