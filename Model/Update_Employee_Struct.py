from pydantic import BaseModel , Field
from typing import Annotated, Optional

class update_struct(BaseModel):
    e_name : Annotated [Optional[str], Field(title = "Enter your employee Name.")] = None
    e_dept : Annotated [Optional[str], Field(title = "Enter your employee Department.")] = None
    e_email : Annotated[Optional[str], Field(title = "Enter your employee email.")] = None