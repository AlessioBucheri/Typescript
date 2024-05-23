var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, specializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.specializzazione = specializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, desctizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.desctizione = desctizione;
        this.categorieContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Pubblicando contenuto da ".concat(professionista.nome, " ").concat(professionista.cognome, ": ").concat(contenuto));
    };
    return Piattaforma;
}());
// Istanziazione di oggetti ProfessionistaMedia
var prof1 = new ProfessionistaMedia('Maria', 'Rossi', 'Giornalismo', 5, ['diritti umani', 'politica']);
var prof2 = new ProfessionistaMedia('Anna', 'Bianchi', 'Regia', 8, ['documentari', 'cinema']);
var prof3 = new ProfessionistaMedia('Laura', 'Verdi', 'Produzione', 3, ['musica', 'spettacolo']);
// Istanziazione di oggetti ProgrammaFormazione
var programma1 = new ProgrammaFormazione('Leadership Femminile', 'Programma per sviluppare competenze di leadership', 'Giornalismo', 30);
var programma2 = new ProgrammaFormazione('Mentorship Tecnica', 'Mentorship per sviluppo competenze tecniche', 'Regia', 60);
// Le professioniste partecipano ai programmi di formazione
prof1.partecipaProgramma(programma1);
prof2.partecipaProgramma(programma1);
prof3.partecipaProgramma(programma2);
// Istanziazione di oggetti Piattaforma
var piattaforma1 = new Piattaforma('Voce delle Donne', 'online', 'Piattaforma per promuovere la voce delle donne nei media', ['giornalismo', 'cinema', 'documentari']);
var piattaforma2 = new Piattaforma('Media Innovazione', 'audiovisivo', 'Canale per contenuti innovativi', ['spettacolo', 'musica']);
// Pubblicazione dei contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(prof1, 'Un articolo sui diritti umani');
piattaforma1.pubblicaContenuto(prof2, 'Un documentario sulla politica');
piattaforma2.pubblicaContenuto(prof3, 'Un servizio sulla musica emergente');
// Verifica del funzionamento della logica di collegamento
console.log(programma1.elencoPartecipanti);
console.log(programma2.elencoPartecipanti);
