from fastapi import FastAPI
app=FastAPI()
@app.get("/getStudents")
def getStudents():
    return "get student method called"
#localhost:8000/addStudent => post
@app.post("/addStudents")
def addStudents():
    return "add students method called"
@app.put("/updateStudents")
def updateStudents():
    return "update students method called"
@app.delete("/deleteStudents")
def deleteStudents():
    return "delete students method called"