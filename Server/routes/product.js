const express = require("express");
const router = express.Router();



router.get("/product",  async (req, res) => {
  try {
    
      const products = [{id:"1",name:"Hopup",description:"HOPPUP AirDoze S40 Earbuds with 13MM Drivers, 40H Playt...",price:"698",image:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/j/4/airdoze-s40-earbuds-with-13mm-drivers-40h-playtime-rage-mode-enc-original-imagrzkxqwnxn9ac.jpeg?q=70&crop=false"},{id:"2",name:"Boat",description:"Boult X45 with Quad Mic ENC, 40H Playtime, 45ms Ultra L...",price:"1198",image:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/y/z/1/-original-imagz63m9vnwnuzz.jpeg?q=70&crop=false"},{id:"3",name:"oneplus",description:"OnePlus Nord Buds 2 Earbuds with 25dB Active Noise Canc...",price:"9998",image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/0/v/m/nord-buds-2-oneplus-original-imagnwf7sgjetqwg.jpeg?q=70"},{id:"4",name:"Hopup",description:"HOPPUP AirDoze S40 Earbuds with 13MM Drivers, 40H Playt...",price:"698",image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/6/b/l/-original-imagtyp3bdgnwyby.jpeg?q=70"},{id:"5",name:"realme",description:"realme Buds T110 with AI ENC for calls, upto 38 hours o...",price:"6398",image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/y/f/-original-imahy3uqgtzmdsge.jpeg?q=70"},{id:"6",name:"Hopup",description:"HOPPUP AirDoze S40 Earbuds with 13MM Drivers, 40H Playt...",price:"698",image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/g/y/-original-imagty9bgxm4nbw3.jpeg?q=70"}]
    res.json({ products});
  } catch (error) {
    res.status(500).send("Internal Server error occured");
  }
});

router.get("/getpost", async (req, res) => {
  try {
    const resp = await Posts.find({});

    res.json(resp);
  } catch (error) {
    res.status(500).send("Internal Server error occured");
  }
});



module.exports = router;
