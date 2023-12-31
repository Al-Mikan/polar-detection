from datetime import date, time

from pydantic import BaseModel


class TemperatureBase(BaseModel):
    time: time
    temperature: float


class TemperatureCreate(TemperatureBase):
    date: date
    polorId: int


class TemperatureCreateResponse(TemperatureCreate):
    id: int

    class Config:
        orm_mode = True


class Temperature(TemperatureBase):
    id: int

    class Config:
        orm_mode = True
