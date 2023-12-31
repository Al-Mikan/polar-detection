from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from api.models.model import Event
import api.schemas.event as schema
from sqlalchemy import and_
from datetime import datetime,time

# get
async def get_events(date,polorId,db: AsyncSession):
    stmt = select(Event.id,  Event.startTime, Event.endTime, Event.event).where(
        and_(
            Event.date == date,
            Event.polorId == polorId
        )
    ).order_by(Event.id)

    result = await db.execute(stmt)
    events = result.fetchall()

    formatted_events = []
    for event in events:
        formatted_events.append(
            {
                "id": event.id,
                "startTime": event.startTime,
                "endTime": event.endTime,
                "event": event.event,
            }
        )
    return formatted_events

# create 
async def create_event(db: AsyncSession, event_create: schema.EventCreate):
    new_event = Event(
        polorId=event_create.polorId,
        date=event_create.date,
        startTime=event_create.startTime,
        endTime=event_create.endTime,
        event=event_create.event,
        createdAt=datetime.now(),
        updatedAt=datetime.now(),
    )
    db.add(new_event)
    await db.commit()
    await db.refresh(new_event)
    return new_event


# get by id
async def get_event_by_id(id: int,db: AsyncSession):
    stmt = select(Event).where(Event.id == id)
    result = await db.execute(stmt)
    event = result.scalar_one_or_none()
    return event

# update 
async def update_event(db: AsyncSession, event_update: schema.EventBase, original: Event):
    original.startTime = event_update.startTime
    original.endTime = event_update.endTime
    original.event = event_update.event
    original.updatedAt = datetime.now()
    db.add(original)
    await db.commit()
    await db.refresh(original)
    return original

# delete 
async def delete_event(id: int,db: AsyncSession):
    stmt = select(Event).where(Event.id == id)
    result = await db.execute(stmt)
    event = result.scalars().first()

    if event is None:
        return None

    await db.delete(event)
    await db.commit()
    return event
    

