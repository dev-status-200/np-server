module.exports = (sequelize, DataTypes) => {
    const Tours = sequelize.define("Tours", {
        title:{ 
            type:DataTypes.STRING 
        },
        availability:{ 
            type:DataTypes.STRING 
        },
        duration:{ 
            type:DataTypes.STRING 
        },
        time_slot:{ 
            type:DataTypes.STRING 
        },
        confirmation:{ 
            type:DataTypes.STRING 
        },
        refund:{ 
            type:DataTypes.STRING 
        },
        voucher:{ 
            type:DataTypes.STRING 
        },
        lang:{ 
            type:DataTypes.STRING 
        },
        tour_detail:{
            type:DataTypes.TEXT
        },
        inclusions:{
            type:DataTypes.TEXT
        },
        why_shoulds:{
            type:DataTypes.TEXT
        },
        departure:{
            type:DataTypes.STRING,
        },
        reporting:{
            type:DataTypes.STRING,
        },
        imp_infos:{
            type:DataTypes.TEXT
        },
        policies:{
            type:DataTypes.TEXT
        },
        category:{
            type:DataTypes.STRING 
        },
        advCategory:{
            type:DataTypes.STRING 
        },
        main_image:{
            type:DataTypes.TEXT
        },
        more_images:{
            type:DataTypes.TEXT
        },
        cancellation_polices:{
            type:DataTypes.TEXT
        },
        status:{
            type:DataTypes.STRING
        },
        prevPrice:{
            type:DataTypes.STRING,
        },
        destination:{
            type:DataTypes.STRING,
        },
        city:{
            type:DataTypes.STRING,
        }
    })
    return Tours
}