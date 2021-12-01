var input = require("readline-sync");

//yliluokka henkilö
class Henkilo {
  etunimet = "Niilo-Kalevi";
  sukunimi = "Virtanen";
  kutsumanimi = "Nipa";
  syntymävuosi = "1994";

  constructor(etunimet, sukunimi, kutsumanimi, syntymävuosi) {}
}

//luokka Urheilija joka perii luokan henkilö attribuutit
class Urheilija extends Henkilo {
  kuva = "Linkki";
  omapaino = "80kg";
  laji = "mäkihyppy";
  saavutukset = "sm-kulta";

  //konstruktori ja super
  constructor(etunimet, sukunimi, kutsumanimi, syntymävuosi) {
    super(etunimet, sukunimi, kutsumanimi, syntymävuosi);
  }

  //Setterit
  set kuva(Newkuva) {
    this.kuva = Newkuva;
  }
  set Omapaino(Newomapaino) {
    this.omapaino = Newomapaino;
  }
  set laji(Newlaji) {
    this.laji = Newlaji;
  }
  set saavutukset(Newsaavutukset) {
    this.saavutukset = Newsaavutukset;
  }
  //getterit
  get GetEtunimet() {
    return this.etunimet;
  }
  get GetSukunimi() {
    return this.sukunimi;
  }
  get GetKutsumanimi() {
    return this.kutsumanimi;
  }
  get GetSyntymävuosi() {
    return this.syntymävuosi;
  }
  get GetKuva() {
    return this.kuva;
  }
  get GetOmapaino() {
    return this.omapaino;
  }
  get GetLaji() {
    return this.laji;
  }
  get GetSaavutukset() {
    return this.saavutukset;
  }
}
//luo uuden urheilijan
const urheilija = new Urheilija();

console.log(urheilija);

console.log(
  "Urheilijan nimi: " + urheilija.GetEtunimet + " " + urheilija.GetKutsumanimi
);

console.log("Urheilijan laji: " + urheilija.GetLaji);

console.log("Urheilijan kuva: " + urheilija.GetKuva);

uusikuva = input.question("Syota uusi kuva linkki: ");

urheilija.kuva = uusikuva;

console.log("Urheilijan kuva: " + urheilija.GetKuva);
