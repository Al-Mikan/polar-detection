export type polorProps = {
  id: number;
  name: string;
};

export type DetectionTimeProps = {
  id: number;
  startTime: string;
  endTime: string;
};

export type UpdateDetectionTimeProps = {
  startTime: string;
  endTime: string;
};

export type DetectionPolorProps = {
  id: number;
  polorId: number;
  date: string;
};

export type CreateDetectionPolorProps = {
  polorId: number;
  date: string;
};

export type MealProps = {
  id: number;
  time: string;
  meal: string;
  weight: number;
};

export type CreateMealProps = {
  polorId: number;
  date: string;
  time: string;
  meal: string;
  weight: number;
};

export type UpdateMealProps = {
  time: string;
  meal: string;
  weight: number;
};

export type TemperatureProps = {
  id: number;
  time: string;
  temperature: number;
};

export type CreateTemperatureProps = {
  polorId: number;
  date: string;
  time: string;
  temperature: number;
};

export type UpdateTemperatureProps = {
  time: string;
  temperature: number;
};

export type EnrichmentProps = {
  id: number;
  startTime: string;
  endTime: string;
  enrichment: string;
};

export type CreateEnrichmentProps = {
  polorId: number;
  date: string;
  startTime: string;
  endTime: string;
  enrichment: string;
};

export type UpdateEnrichmentProps = {
  startTime: string;
  endTime: string;
  enrichment: string;
};

export type EventProps = {
  id: number;
  startTime: string;
  endTime: string;
  event: string;
};

export type CreateEventProps = {
  polorId: number;
  date: string;
  startTime: string;
  endTime: string;
  event: string;
};

export type UpdateEventProps = {
  startTime: string;
  endTime: string;
  event: string;
};
