import { getOverallHeadcount,getCountryHeadcounts, getCityHeadcounts, getAverageTenureByCountry, getEmployeeAgeGroups, getGenderRatioByCity } from "../service/employeeService.js";

const employeeCount = (req,res) => {
    const empCount=getOverallHeadcount();
    console.log(empCount)
    return res.status(200).json({count:empCount});
  };


const countrWiseCount=async(req,res)=>{
   try{
    const count=getEmployeeAgeGroups();
    res.status(200).json({count:count})
   }catch(err){
        console.log(err,'error getting emp countncountry wise')
        // throw new Error('error getting emp countncountry wise')
        res.status(500).json({success:false,message:err})
   }
}



const genderrationpercity=async(req,res)=>{
    try{
     const obj=getGenderRatioByCity();
     res.status(200).json({genderRationperCity:obj})
    }catch(err){
         console.log(err,'error getting emp ration city wise')
         // throw new Error('error getting emp countncountry wise')
         res.status(500).json({success:false,message:err})
    }
 }
 


const cityWiseCount=async(req,res)=>{
    try{
     const count=getCityHeadcounts();
     res.status(200).json({count:count})
    }catch(err){
         console.log(err,'error getting emp city wise count')
         // throw new Error('error getting emp countncountry wise')
         res.status(500).json({success:false,message:err})
    }
 }
 


 const tenureAsPerCountry=async(req,res)=>{
    try{
     const tenure=getAverageTenureByCountry();
     res.status(200).json({tenure:tenure})
    }catch(err){
         console.log(err,'error getting tenure as per coutry')
         // throw new Error('error getting emp countncountry wise')
         res.status(500).json({success:false,message:err})
    }
 }
 
 const countAsPerAge=async(req,res)=>{
    try{
     const countperAge=getEmployeeAgeGroups();
     res.status(200).json({countperAgeGroup:countperAge})
    }catch(err){
         console.log(err,'error getting details for age count')
         // throw new Error('error getting emp countncountry wise')
         res.status(500).json({success:false,message:err})
    }
 }


export {employeeCount,countrWiseCount,cityWiseCount,tenureAsPerCountry,countAsPerAge,genderrationpercity}