const User=require('../models/User');

const user_index=async (req,res)=>{
    User.find().sort({ CreatedAt: -1})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send({error: err.message})
    })

};

const user_details = async(id)=>{
    user = await User.find( {id : id} )
    return user;
}

const user_create_post=async (req,res)=>{
    if( req.body.first_name && req.body.last_name && req.body.birth_day){
        const user = new User(req.body);
        await user.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            res.send({error: err.message})
        })
    }
    else{
        res.send("not all params are filled");
    }
};

module.exports={
    user_index,
    user_create_post,
    user_details
};