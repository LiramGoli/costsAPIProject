const Developer=require('../models/Developers');

const developer_index = async (req,res)=>{
    Developer.find().sort({createdAt: -1})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send({error: err.message})
    })
}

const developer_create_post = async(req,res)=>{
    if(req.body.first_name && req.body.last_name && req.body.email)
    {    
        const developer=new Developer(req.body);
        developer.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            res.send({error: err.message})
        })
    }

}

module.exports ={
    developer_index,
    developer_create_post
}