const { Op } = require("sequelize");
const { Tours } = require("../models");

exports.createTour = async (req, res) => {

  try {
    const result = await Tours.create({
        title:req.body.name,
        city:req.body.city,
        tour_detail:req.body.desc,
        main_image:req.body.image
    })
    res.json({ 
        status: "success", 
        result: result
    });
  } catch (error) {
    res.status(400).json({ status: "error" });
  }
};

exports.mostPopulartrips = async (req, res) => {
    try {
      const result = await Tours.findAll()
      res.json({ 
          status: "success", 
          result: result
      });
    } catch (error) {
      res.status(400).json({ status: "error" });
    }
  };