interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    specializzazione: string;
    durata: number; //durata in giorni
    elencoPartecipanti: IProfessionistaMedia[];

    aggiungiPartecipante(professionista: IProfessionistaMedia): void;   
}

interface IPiattaforma {
    nome: string;
    tipo: string; //stampato, online, audiovisivo. ecc.
    desctizione: string;
    categorieContenuto: string[];

    pubblicaContenuto(professionista: IProfessionistaMedia, categorieContenuto: string): void;
}

class ProfessionistaMedia implements IProfessionistaMedia {

    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }   
}

class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    specializzazione: string;
    durata: number; //durata in giorni
    elencoPartecipanti: IProfessionistaMedia[];

    constructor(titolo: string, descrizione: string, specializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.specializzazione = specializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
    }
}

class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string; //stampato, online, audiovisivo, ecc.
    desctizione: string;
    categorieContenuto: string[];

    constructor(nome: string, tipo: string, desctizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.desctizione = desctizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Pubblicando contenuto da ${professionista.nome} ${professionista.cognome}: ${contenuto}`);

    }
}   

// Istanziazione di oggetti ProfessionistaMedia
const professionista1 = new ProfessionistaMedia('Serena', 'Cardinale', 'Giornalismo', 5, ['diritti umani', 'politica']);
const professionista2 = new ProfessionistaMedia('Franca', 'Marini', 'Regia', 8, ['documentari', 'cinema']);
const professionista3 = new ProfessionistaMedia('Laura', 'Costantini', 'Produzione', 3, ['musica', 'spettacolo']);

// Istanziazione di oggetti ProgrammaFormazione
const programma1 = new ProgrammaFormazione('Leadership Femminile', 'Programma per sviluppare competenze di leadership', 'Giornalismo', 30);
const programma2 = new ProgrammaFormazione('Mentorship Tecnica', 'Mentorship per sviluppo competenze tecniche', 'Regia', 60);
const programma3 = new ProgrammaFormazione('Empowering Women', 'Programma per raccontare la donna nel mondo moderno', 'Produzione', 40);

// Le professioniste partecipano ai programmi di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma1);
professionista3.partecipaProgramma(programma2);

// Istanziazione di oggetti Piattaforma
const piattaforma1 = new Piattaforma('Voce delle Donne', 'online', 'Piattaforma per promuovere la voce delle donne nei media', ['giornalismo', 'cinema', 'documentari']);
const piattaforma2 = new Piattaforma('Media Innovazione', 'audiovisivo', 'Canale per contenuti innovativi', ['spettacolo', 'musica']);
const piattaforma3 = new Piattaforma('Le dee nel mondo moderno', 'podcast', 'Canale per contenuti audiovisivi', ['spettacolo', 'musica']);

// Pubblicazione dei contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(professionista1, 'Un articolo sui diritti umani');
piattaforma1.pubblicaContenuto(professionista2, 'Un documentario sulla politica');
piattaforma2.pubblicaContenuto(professionista3, 'Un servizio sulla musica emergente');
piattaforma3.pubblicaContenuto(professionista1, "Atena: La Saggezza e il Potere della Leadership Femminile");
piattaforma3.pubblicaContenuto(professionista2, `Artemide: L'Indipendenza e la Forza della Donna Selvaggia`);
piattaforma3.pubblicaContenuto(professionista3, `Afrodite: Amore, Bellezza e Autostima nel Mondo Contemporaneo`);


// Verifica del funzionamento della logica di collegamento
console.log(programma1.elencoPartecipanti); 
console.log(programma2.elencoPartecipanti); 
console.log(programma3.elencoPartecipanti);