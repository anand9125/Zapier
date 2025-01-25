import express from 'express';
const app = express();

app.post("/hooks/catch/:userId/:zapId", (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    //store om db a new trigger 

    //push it on the queue (kafka/redis)
        

})