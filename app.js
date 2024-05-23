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
var professionista1 = new ProfessionistaMedia('Serena', 'Cardinale', 'Giornalismo', 5, ['diritti umani', 'politica']);
var professionista2 = new ProfessionistaMedia('Franca', 'Marini', 'Regia', 8, ['documentari', 'cinema']);
var professionista3 = new ProfessionistaMedia('Laura', 'Costantini', 'Produzione', 3, ['musica', 'spettacolo']);
// Istanziazione di oggetti ProgrammaFormazione
var programma1 = new ProgrammaFormazione('Leadership Femminile', 'Programma per sviluppare competenze di leadership', 'Giornalismo', 30);
var programma2 = new ProgrammaFormazione('Mentorship Tecnica', 'Mentorship per sviluppo competenze tecniche', 'Regia', 60);
var programma3 = new ProgrammaFormazione('Empowering Women', 'Programma per raccontare la donna nel mondo moderno', 'Produzione', 40);
// Le professioniste partecipano ai programmi di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma1);
professionista3.partecipaProgramma(programma2);
// Istanziazione di oggetti Piattaforma
var piattaforma1 = new Piattaforma('Voce delle Donne', 'online', 'Piattaforma per promuovere la voce delle donne nei media', ['giornalismo', 'cinema', 'documentari']);
var piattaforma2 = new Piattaforma('Media Innovazione', 'audiovisivo', 'Canale per contenuti innovativi', ['spettacolo', 'musica']);
var piattaforma3 = new Piattaforma('Le dee nel mondo moderno', 'podcast', 'Canale per contenuti audiovisivi', ['spettacolo', 'musica']);
// Pubblicazione dei contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(professionista1, 'Un articolo sui diritti umani');
piattaforma1.pubblicaContenuto(professionista2, 'Un documentario sulla politica');
piattaforma2.pubblicaContenuto(professionista3, 'Un servizio sulla musica emergente');
piattaforma3.pubblicaContenuto(professionista1, "Atena: La Saggezza e il Potere della Leadership Femminile");
piattaforma3.pubblicaContenuto(professionista2, "Artemide: L'Indipendenza e la Forza della Donna Selvaggia");
piattaforma3.pubblicaContenuto(professionista3, "Afrodite: Amore, Bellezza e Autostima nel Mondo Contemporaneo");
// Verifica del funzionamento della logica di collegamento
console.log(programma1.elencoPartecipanti);
console.log(programma2.elencoPartecipanti);
console.log(programma3.elencoPartecipanti);
