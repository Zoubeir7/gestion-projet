export class Tache {
    #nom = "";
    #description = "";
    #dateDebut = "";
    #dateFin = "";
    #statut = "";
    #priorite = "";

    createTache(tache) {
        this.#nom = tache.nom;
        this.#description = tache.description;
        this.#dateDebut = tache.dateDebut;
        this.#dateFin = tache.dateFin;
        this.#statut = tache.statut;
        this.#priorite = tache.priorite;
        console.log(
            `Tache: ${this.#nom}, ${this.#description}, ${this.#dateDebut}, ${this.#dateFin}, ${this.#statut}, ${this.#priorite} a été crée avec succès`
        );
    }

    getTache() {
        return {
            nom: this.#nom,
            description: this.#description,
            dateDebut: this.#dateDebut,
            dateFin: this.#dateFin,
            statut: this.#statut,
            priorite: this.#priorite,
        };
    }

    editTache(newTache) {
        this.#nom = newTache.nom;
        this.#description = newTache.description;
        this.#dateDebut = newTache.dateDebut;
        this.#dateFin = newTache.dateFin;
        this.#statut = newTache.statut;
        this.#priorite = newTache.priorite;

        console.log(
            `Tache: ${this.#nom}, ${this.#description}, ${this.#dateDebut}, ${this.#dateFin}, ${this.#statut}, ${this.#priorite}  a été mise à jour`
        );
    }

    dropTache() {
        this.#dateDebut = null;
        console.log("Tache a été supprimée");
    }
}


