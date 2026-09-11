from pydantic import BaseModel , Field
from typing import Annotated

class struct(BaseModel):
    e_id : Annotated[int, Field(title = "Enter your employee ID.")]
    e_name : Annotated[str, Field(title = "Enter your employee Name.")]
    e_dept : Annotated[str, Field(title = "Enter your employee Department.")]
    e_email : Annotated[str, Field(title = "Enter your employee email.")]
    
