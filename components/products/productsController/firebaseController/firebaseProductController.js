let {dbfirebase} = require("../../../../daos/firebase/firebase")


class FireBase_db {

    createCol = async (req, res) => {
        try {
            const product = dbfirebase.collection("productos");
            const id = product.doc();

            id.set({
                title: req.body.title,
                price: req.body.price,
                thumbnail: req.body.thumbnail
            });
            res.send("Producto creado")
        } catch (error) {
            console.log(error)
        }
    }
    getProd = async (req, res) => {
        try {
            let response = [];
            const snapshot = await dbfirebase.collection("productos").get();
            snapshot.forEach(doc => {
                response.push({ id: doc.id, ...doc.data()})
            })
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
    updateProd = async (req, res) => {
        try {
            //Para modificar incluir id en el json (postman)
            const newProd = await dbfirebase.collection("productos").doc(req.body.id).set(req.body)
            res.json(newProd)
        } catch (error) {
            console.log(error)
        }
    }
    deleteProd = async (req, res) => {
        try {
             //Para eliminar incluir id en el json (postman)
            const deleteProd = await dbfirebase.collection("productos").doc(req.body.id).delete();
            res.json(deleteProd)
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = new FireBase_db();