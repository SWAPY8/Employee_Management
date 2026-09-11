from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("MONGO_URL")
Connectionstr = MongoClient(url)

database = Connectionstr["Employee_DB"]

employee_collection = database["Employee_Collection"]


