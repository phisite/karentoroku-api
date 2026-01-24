import * as t from "io-ts";
import { optional, strict } from "io-ts-extra";

export const CreateUserCodec = t.type({
  name: t.string,
  username: t.string,
  idToken: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> { }

// Frontend sends days and dates separately, we combine them in the handler
export const CreateEventTypeCodec = t.type({
  name: t.string,
  description: t.string,
  price: t.number,
  timeDuration: t.number,
  userId: t.number,
  days: t.array(
    t.type({
      dayName: t.string,
    })
  ),
  dates: t.array(
    t.type({
      date: t.string,
    })
  ),
  timeSlots: t.array(
    t.type({
      startTime: t.number,
      endTime: t.number,
    })
  ),
  locations: t.array(
    t.type({
      locationName: t.string,
    })
  ),
});

// Internal interface with combined dateDaySlots for the resolver
export interface ICreateEventTypeInternal {
  name: string;
  description: string;
  price: number;
  timeDuration: number;
  userId: number;
  dateDaySlots: { dayName: string; date: string }[];
  timeSlots: { startTime: number; endTime: number }[];
  locations: { locationName: string }[];
}

export interface ICreateEventType
  extends t.TypeOf<typeof CreateEventTypeCodec> { }

export const CreateAppointmentCodec = t.type({
  organizerId: t.number,
  attendeeId: t.number,
  eventTypeId: t.number,
  startTime: t.string, // ISO string
  endTime: t.string,   // ISO string
});

export interface ICreateAppointment extends t.TypeOf<typeof CreateAppointmentCodec> { }

export const GetAppointmentsCodec = t.type({
  userId: t.number,
  role: t.union([t.literal("organizer"), t.literal("attendee"), t.literal("all")]),
});

export interface IGetAppointments extends t.TypeOf<typeof GetAppointmentsCodec> { }

