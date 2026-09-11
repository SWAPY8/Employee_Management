from fastapi import FastAPI
from Routes.Employee_Routes import router

app = FastAPI()

app.include_router(router)

@app.get("/")
def welcome():
    return {"Welcome! Welcome! Welcome! "}