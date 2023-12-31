from datetime import date,time

from pydantic import BaseModel


class EnrichmentBase(BaseModel):
    startTime:time
    endTime:time
    enrichment: str


class EnrichmentCreate(EnrichmentBase):
    polorId: int
    date: date



class EnrichmentCreateResponse(EnrichmentCreate):
    id: int

    class Config:
        orm_mode = True


class Enrichment(EnrichmentBase):
    id: int

    class Config:
        orm_mode = True
