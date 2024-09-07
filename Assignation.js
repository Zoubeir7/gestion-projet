
export class Assignation {
    static #tabAssignations = [];

    static getTab() {
        return Assignation.#tabAssignations;
    }
    static assign({ employe, tache, dateAssignation }) {
        Assignation.#tabAssignations.push({ employe, tache, dateAssignation });
    }

    static dropAssign(employe) {
        if (employe) {
            Assignation.#tabAssignations = Assignation.#tabAssignations.filter(
                (emp) => {
                    return emp.employe.nom !== employe.nom
                }
            );
        }
    }

    static getEmpAssign(employe) {
        console.log(`${employe} existe`)
        if (employe) {
            return Assignation.#tabAssignations
                .filter(emp => emp.employe.nom === employe.nom)
                .map(ass => {
                    return {
                        tache: ass.tache,
                        dateAssignation: ass.dateAssignation,
                    };
                });
        }
    }

    static getTacheAssign(tache) {
        if (tache) {
            Assignation.#tabAssignations = Assignation.#tabAssignations
                .filter((tsk) => tsk.tache === tache)
                .map((ass) => {
                    return {
                        employe: ass.employe
                    };
                });
        }
    }
}

