from Model.Create_Employee_Struct import struct
from Model.Update_Employee_Struct import update_struct
from Database.Employee_DB import employee_collection

def get_employee():
    all_data = list(employee_collection.find({}, {"_id" : 0}))  
    return all_data 

def create_employee(employee:struct):
    s_id = employee.e_id
    s_name = employee.e_name
    s_dept = employee.e_dept
    s_email = employee.e_email
    
    sdict = {
        "e_id" : s_id ,
        "e_name" : s_name,
        "e_dept" : s_dept,
        "e_email" : s_email
    }
    
    employee_collection.insert_one(sdict)

    return   {"message":"employee Created!!!"}

def update_employee(e_id : int, employee_update:struct):
    updated_data = employee_update.model_dump(
        exclude_none = True 
    )    
    
    e_data = employee_collection.find_one({"e_id" : e_id })
    if e_data is None:
        return {"No such employee Exist..."}
    else:
        employee_collection.update_one(
            {"e_id":e_id},
            {"$set":updated_data}
        )
    return {"message":"Employee details updated successfully!!!" }

def delete_employee(e_id:int):
    result = employee_collection.delete_one(
        {"e_id": e_id}
    )

    if result.deleted_count == 0:
        return {
            "message": "No such employee found"
        }

    return {
        "message": "Employee deleted successfully !!!"
    }
        
        
    

