from fastapi import APIRouter
from Controller.Employee_Controller import (
    get_employee,
    create_employee,
    update_employee,
    delete_employee
    )
from Model.Update_Employee_Struct import update_struct
from Database.Employee_DB import employee_collection
from Model.Create_Employee_Struct import struct

router = APIRouter()

@router.get("/all_employee")
def get_all_employees():
    return get_employee()

@router.post("/add_employee")
def create_emp(employee:struct):
    return create_employee(employee)

@router.put("/edit_emp/{e_id}")
def update_emp(e_id : int, employee_update:update_struct):
    return update_employee(e_id ,employee_update)
    
@router.delete("/delete_emp/{e_id}")
def delete_emp(e_id: int):
    return delete_employee(e_id)

    
    


