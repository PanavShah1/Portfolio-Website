Introduction 
Let's try to figure out a way to sync meal records across tablets in real-time. For the sake of centralizing the process, the server acts as a mediator between the tablets. This would be to help ensure that the records are in the same order and state at (approximately) all times (think why this is desirable). This problem implements a tiny local example, where tablets and server are represented by separate objects in the same piece of code. 

Modeling the example 
1. A tablet records a meal (in the real world, this happens when a student taps an ICard or the InstiApp QR code is scanned), and sends that update to the server. In the given code template, the tapping process is replaced by a function generating dummy but unique data. 
2. From the server, the tablet expects updates based on the data the server has aggregated from all tablets (including those from the receiving tablet itself), in the order that the server promises it to be across all the tablets in this session. 

Your task 
Your job is to implement the server class. Don't forget what the server is promising in it's behavior! Checkout the attached code to understand more and start implementing
