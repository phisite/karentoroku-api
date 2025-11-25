
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AvailabilityScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BillingScalarFieldEnum = makeEnum({
  id: 'id',
  subscriptionMonth: 'subscriptionMonth',
  subscriptionPrice: 'subscriptionPrice',
  userId: 'userId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DateOnTimeSlotScalarFieldEnum = makeEnum({
  id: 'id',
  timeSlotId: 'timeSlotId',
  dateSlotId: 'dateSlotId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DateSlotScalarFieldEnum = makeEnum({
  id: 'id',
  availabilityScheduleId: 'availabilityScheduleId',
  name: 'name',
  customerId: 'customerId',
  eventId: 'eventId',
  dayName: 'dayName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DaySlotScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EventTypeOnLocationScalarFieldEnum = makeEnum({
  id: 'id',
  eventTypeId: 'eventTypeId',
  locationId: 'locationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EventTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
  price: 'price',
  timeDuration: 'timeDuration',
  availabilityScheduleId: 'availabilityScheduleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GroupMeetingScalarFieldEnum = makeEnum({
  id: 'id',
  locationId: 'locationId',
  customerId: 'customerId',
  totalPrice: 'totalPrice',
  timezone: 'timezone',
  eventTypeId: 'eventTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LocationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TimeSlotScalarFieldEnum = makeEnum({
  id: 'id',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOnGroupMeetingScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  groupMeetingId: 'groupMeetingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  username: 'username',
  firebaseUid: 'firebaseUid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  EventType: 'EventType',
  Location: 'Location',
  EventTypeOnLocation: 'EventTypeOnLocation',
  AvailabilitySchedule: 'AvailabilitySchedule',
  DaySlot: 'DaySlot',
  DateSlot: 'DateSlot',
  DateOnTimeSlot: 'DateOnTimeSlot',
  TimeSlot: 'TimeSlot',
  Customer: 'Customer',
  Billing: 'Billing',
  GroupMeeting: 'GroupMeeting',
  UserOnGroupMeeting: 'UserOnGroupMeeting'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
