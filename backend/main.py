from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import uuid

app = FastAPI()

# In-memory storage for demo
users = {}

# Add a demo user on startup
demo_id = str(uuid.uuid4())
users[demo_id] = {
    "id": demo_id,
    "name": "Demo Seller",
    "verified_count": 5,
    "facebook_friends": 430,
    "facebook_joined": "2012",
    "instagram_followers": 210,
    "instagram_joined": "2014"
}
print(f"Demo user created with id: {demo_id}")

class UserCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    facebook_friends: Optional[int] = None
    facebook_joined: Optional[str] = None
    instagram_followers: Optional[int] = None
    instagram_joined: Optional[str] = None

class UserOut(BaseModel):
    id: str
    name: str
    verified_count: int
    facebook_friends: Optional[int] = None
    facebook_joined: Optional[str] = None
    instagram_followers: Optional[int] = None
    instagram_joined: Optional[str] = None

@app.get("/users")
def list_users():
    return list(users.values())

@app.post("/users", response_model=UserOut)
def create_user(user: UserCreate):
    user_id = str(uuid.uuid4())
    users[user_id] = user.dict()
    users[user_id]["id"] = user_id
    users[user_id]["verified_count"] = 0
    return users[user_id]

@app.get("/users/{user_id}", response_model=UserOut)
def get_user(user_id: str):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    return users[user_id]

@app.post("/verify/{user_id}")
def verify_user(user_id: str):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    users[user_id]["verified_count"] += 1
    return {"message": "User verified", "verified_count": users[user_id]["verified_count"]}
