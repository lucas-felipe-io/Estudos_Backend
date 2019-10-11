// index(lista seção), 
// show(uma seção), 
// store(create seção), 
// update(atualizar seção), 
// destroy(delete seção)

module.exports = {
    store(req, res){
        return res.json({ message: "testando controler"} );            
    }
    
}