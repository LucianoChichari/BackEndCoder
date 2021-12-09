let {dbfirebase} = require("../../../../daos/firebase/firebase")


class FireBaseCart_db {

    createCart = async (req, res) => {
        try {
            const product = dbfirebase.collection("carrito");
            const id = product.doc();

            id.set({
                id: req.body.id,
                cartProduct: req.body.cartProduct,
            });
            res.send("carrito creado")
        } catch (error) {
            console.log(error)
        }
    }
    getCart = async (req, res) => {
        try {
            let response = [];
            const snapshot = await dbfirebase.collection("carrito").get();
            snapshot.forEach(doc => {
                response.push({ id: doc.id, ...doc.data()})
            })
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    deleteCart = async (req, res) => {
        try {
            const deleteCart = await dbfirebase.collection("carrito").doc(req.params.id).delete();
            res.json(deleteCart)
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = new FireBaseCart_db();