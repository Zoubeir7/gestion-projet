import express from "express";
import bodyParser from "body-parser";
import { Employe } from "./Employe.js";
import { Tache } from "./Tache.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.get("/app", (req, res) => {
   
    const e1 = new Employe();
    e1.createEmploye({
        nom: "Dupont",
        prenom: "Jean",
        email: "jean.dupont@gmail.com",
        poste: "Chef de projet",
        dateEmbauche: "05-01-2020",
        statut: "CDI",
    });

    const e2 = new Employe();
    e2.createEmploye({
        nom: "Martin",
        prenom: "Marie",
        email: "marie.martin@gmail.com",
        poste: "Développeur Full Stack",
        dateEmbauche: "15-07-2022",
        statut: "CDD",
    });

    const e3 = new Employe();
    e3.createEmploye({
        nom: "Legrand",
        prenom: "Paul",
        email: "paul.legrand@gmail.com",
        poste: "Analyste Fonctionnel",
        dateEmbauche: "20-03-2021",
        statut: "CDI",
    });

    // Création des tâches avec des exemples
    const t1 = new Tache();
    t1.createTache({
        nom: "Développement du module de facturation",
        description: "Créer un module de facturation intégré au système existant",
        dateDebut: "01-10-2023",
        dateFin: "01-12-2023",
        statut: "En cours",
        priorite: "Haute",
    });

    const t2 = new Tache();
    t2.createTache({
        nom: "Mise à jour de la documentation technique",
        description: "Mettre à jour les documents techniques avec les dernières modifications",
        dateDebut: "15-09-2023",
        dateFin: "30-09-2023",
        statut: "Terminée",
        priorite: "Moyenne",
    });

    const t3 = new Tache();
    t3.createTache({
        nom: "Tests de performance",
        description: "Réaliser des tests de performance pour le nouveau module",
        dateDebut: "05-11-2023",
        dateFin: "15-11-2023",
        statut: "A faire",
        priorite: "Elevée",
    });

    console.log("**************");

  
    Assignation.assign({
        employe: e1.getEmploye(),
        tache: t1.getTache(),
        dateAssignation: new Date(),
    });
    Assignation.assign({
        employe: e2.getEmploye(),
        tache: t2.getTache(),
        dateAssignation: new Date(),
    });


    const resulFiltre = Assignation.getEmpAssign(e1.getEmploye());

   
    const allAssignations = Assignation.getTab();

    
    Assignation.assign({
        employe: e3.getEmploye(),
        tache: t3.getTache(),
        dateAssignation: new Date(),
    });

    // Vérification des assignations mises à jour
    const updatedAssignations = Assignation.getTab();

    // Réponse de l'API
    res.status(200).json({ allAssignations, updatedAssignations, resulFiltre });
});

app.listen(port, () => {
    console.log("Successfully connected on port " + port);
});
