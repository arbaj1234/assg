import express from "express"
import { employeeCount,countrWiseCount,cityWiseCount, tenureAsPerCountry, countAsPerAge, genderrationpercity } from "../controller/emoloyeeController.js";
const employeeRouter=express.Router();

employeeRouter.get("/getCount",employeeCount)
employeeRouter.get('/getCountryWideCount',countrWiseCount)
employeeRouter.get('/cityWiseCount',cityWiseCount)
employeeRouter.get('/tenurepercountry',tenureAsPerCountry)
employeeRouter.get('/headCountPerAge',countAsPerAge)
employeeRouter.get('/genderWiseRationPerCity',genderrationpercity)
export default employeeRouter;