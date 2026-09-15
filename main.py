from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Routes.Employee_Routes import router

app = FastAPI(title="Employee Management System API")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def welcome():
    return {"message": "Welcome to Employee Management API"}
