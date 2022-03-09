const db = require('./_database')

async function Update() {
    db.connect()

    const queryUpdate = "UPDATE participante SET nome = $1 WHERE id = $2"

    await db.query(queryUpdate, ['Carlos Augusto', 1])

    await db.end()

    console.log("Update OK")

}

Update()