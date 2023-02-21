const Costs=require('../models/Costs');
const { user_details } = require('./usersController');


const cost_index = (req,res)=>{
    Costs.find().sort({createdAt: -1})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send({error: err.message})
    })
}

const cost_by_params = async(req,res)=>{
    const id = req.params.id;
    const year =req.params.year;
    const month = req.params.month;
    let finalResponse={
        'food':[],
        'health':[],
        'housing':[],
        'sport':[],
        'education':[],
        'transportation':[],  
        'other':[]
    }
    let costsList=await Costs.find({user_id: id, year:year, month:month})
    costsList.forEach((cost) =>{
        finalResponse[cost.category].push({day: cost.day, description: cost.description, sum: cost.sum})
    })
    res.send(finalResponse)

}


const cost_create_post = async(req,res)=>{
    const id = req.body.user_id
    user = await user_details(id);
    if(Object.keys(user).length >0)
    {
        if(req.body.user_id &&req.body.year && req.body.month && req.body.day && req.body.description && req.body.category && req.body.sum)
        {
            const cost = new Costs(req.body); 
            cost.save()
            .then((result)=>{
                res.send(result);
            })
            .catch((err)=>{
                res.send({error: err.message, brackets: 1})
            })
        }
        else
        {
            res.send({err:"some parameters are missing"});
        }
    }
    else{
        res.send({err: "user ID not found"})
    }
}


module.exports={
    cost_index,
    cost_by_params,
    cost_create_post
}