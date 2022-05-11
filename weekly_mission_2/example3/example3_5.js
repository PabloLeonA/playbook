console.log("Ejemplo 5 :Atributos con valores por default")

class PullRequest{
    constructor (repo,title,lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dataCreated = new Date() // esto sirve para guardar la fecha actual en la que se instancia el objeto
    }
    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dataCreated}`
    }
    }
    console.log("Ejemplo 5  atributos con valores por default")
    const myPR1 = new PullRequest ("Launchx","Mi Primer PR",100)
    console.log(myPR1.getInfo)