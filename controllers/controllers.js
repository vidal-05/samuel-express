import data from "../config/data.js"
const controller = {
    getchien : (req,res)=>{
        res.status(200).json({
            data:data
        })
    },  
    createchien: (req,res)=>{
        const {id, name,race, age}= req.body
        data.map(chien=>{
            if(chien.id == id){
                res.status(400).json({msg:'le chien already exist'})
                return;
            }
        })
        data.push({id, name,race, age})
        res.status(201).json({msg:'Le chien a ete creer',data:data})
        
    },
    updatechien: (req,res)=>{
        const {name,race, age}= req.body
        const {id} = req.params
        if(!id || !name || !race || !age){
            res.status(400).json({msg:'invalid data provided'})
            return;
        }
        data.map(chien=>{
            if(chien.id == id){
              chien.name = name;
              chien.race = race;
              chien.age = age; 
            }
        })
        res.status(200).json({msg:'ok',data:data})
    },
    deletechien : (req,res)=>{
        const {id} = req.params
        if(!id){
            res.status(400).json({msg:'invalid data provided'})
            return;
        }
        data.map(chien=>{
            if(chien.id == id){
                data.splice(chien.id,1);
                res.status(200).json({msg:'Chien supprimer avec success',data:data})
                return
            }
        })
        res.status(400).json({msg:'Le chien n existe pas '})
        return;
    }
}
export default controller 