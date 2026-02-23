
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  username: string
  firebaseUid: string
  subscription: string | null
  mobileNumber: string | null
  userLink: string | null
  job: string | null
  education: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EventType
 * 
 */
export type EventType = {
  id: number
  name: string
  userId: number
  description: string
  price: number
  timeDuration: number
  availabilityScheduleId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EventTypeOnLocation
 * 
 */
export type EventTypeOnLocation = {
  id: number
  eventTypeId: number
  locationId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AvailabilitySchedule
 * 
 */
export type AvailabilitySchedule = {
  id: number
  name: string
  timezone: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DaySlot
 * 
 */
export type DaySlot = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DateSlot
 * 
 */
export type DateSlot = {
  id: number
  availabilityScheduleId: number | null
  name: Date
  custormerId: number | null
  eventId: number
  dayName: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DateOnTimeSlot
 * 
 */
export type DateOnTimeSlot = {
  id: number
  timeSlotId: number
  dateSlotId: number
  status: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TimeSlot
 * 
 */
export type TimeSlot = {
  id: number
  startTime: number
  endTime: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Billing
 * 
 */
export type Billing = {
  id: number
  subscriptionMonth: number
  subscriptionPrice: number
  userId: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model GroupMeeting
 * 
 */
export type GroupMeeting = {
  id: number
  locationId: number
  customerId: number
  totalPrice: number
  timezone: string
  eventTypeId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserOnGroupMeeting
 * 
 */
export type UserOnGroupMeeting = {
  id: number
  userId: number
  groupMeetingId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Appointment
 * 
 */
export type Appointment = {
  id: number
  organizerId: number
  attendeeId: number
  eventTypeId: number
  startTime: Date
  endTime: Date
  status: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.eventType`: Exposes CRUD operations for the **EventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypes
    * const eventTypes = await prisma.eventType.findMany()
    * ```
    */
  get eventType(): Prisma.EventTypeDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.eventTypeOnLocation`: Exposes CRUD operations for the **EventTypeOnLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypeOnLocations
    * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany()
    * ```
    */
  get eventTypeOnLocation(): Prisma.EventTypeOnLocationDelegate<GlobalReject>;

  /**
   * `prisma.availabilitySchedule`: Exposes CRUD operations for the **AvailabilitySchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySchedules
    * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
    * ```
    */
  get availabilitySchedule(): Prisma.AvailabilityScheduleDelegate<GlobalReject>;

  /**
   * `prisma.daySlot`: Exposes CRUD operations for the **DaySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DaySlots
    * const daySlots = await prisma.daySlot.findMany()
    * ```
    */
  get daySlot(): Prisma.DaySlotDelegate<GlobalReject>;

  /**
   * `prisma.dateSlot`: Exposes CRUD operations for the **DateSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateSlots
    * const dateSlots = await prisma.dateSlot.findMany()
    * ```
    */
  get dateSlot(): Prisma.DateSlotDelegate<GlobalReject>;

  /**
   * `prisma.dateOnTimeSlot`: Exposes CRUD operations for the **DateOnTimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateOnTimeSlots
    * const dateOnTimeSlots = await prisma.dateOnTimeSlot.findMany()
    * ```
    */
  get dateOnTimeSlot(): Prisma.DateOnTimeSlotDelegate<GlobalReject>;

  /**
   * `prisma.timeSlot`: Exposes CRUD operations for the **TimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlot.findMany()
    * ```
    */
  get timeSlot(): Prisma.TimeSlotDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.billing`: Exposes CRUD operations for the **Billing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billings
    * const billings = await prisma.billing.findMany()
    * ```
    */
  get billing(): Prisma.BillingDelegate<GlobalReject>;

  /**
   * `prisma.groupMeeting`: Exposes CRUD operations for the **GroupMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMeetings
    * const groupMeetings = await prisma.groupMeeting.findMany()
    * ```
    */
  get groupMeeting(): Prisma.GroupMeetingDelegate<GlobalReject>;

  /**
   * `prisma.userOnGroupMeeting`: Exposes CRUD operations for the **UserOnGroupMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnGroupMeetings
    * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany()
    * ```
    */
  get userOnGroupMeeting(): Prisma.UserOnGroupMeetingDelegate<GlobalReject>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    UserOnGroupMeeting: 'UserOnGroupMeeting',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    eventTypes: number
    billings: number
    userOnGroupMeetings: number
    appointmentsOrganized: number
    appointmentsAttending: number
  }

  export type UserCountOutputTypeSelect = {
    eventTypes?: boolean
    billings?: boolean
    userOnGroupMeetings?: boolean
    appointmentsOrganized?: boolean
    appointmentsAttending?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type EventTypeCountOutputType
   */


  export type EventTypeCountOutputType = {
    eventTypeOnLocations: number
    dateSlots: number
    groupMeetings: number
    appointments: number
  }

  export type EventTypeCountOutputTypeSelect = {
    eventTypeOnLocations?: boolean
    dateSlots?: boolean
    groupMeetings?: boolean
    appointments?: boolean
  }

  export type EventTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | EventTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeCountOutputTypeArgs)
    ? EventTypeCountOutputType 
    : S extends { select: any } & (EventTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EventTypeCountOutputType ? EventTypeCountOutputType[P] : never
  } 
      : EventTypeCountOutputType




  // Custom InputTypes

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventTypeCountOutputType
     */
    select?: EventTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    eventTypeOnLocations: number
    groupMeetings: number
  }

  export type LocationCountOutputTypeSelect = {
    eventTypeOnLocations?: boolean
    groupMeetings?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type AvailabilityScheduleCountOutputType
   */


  export type AvailabilityScheduleCountOutputType = {
    eventTypes: number
    dateSlots: number
  }

  export type AvailabilityScheduleCountOutputTypeSelect = {
    eventTypes?: boolean
    dateSlots?: boolean
  }

  export type AvailabilityScheduleCountOutputTypeGetPayload<S extends boolean | null | undefined | AvailabilityScheduleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AvailabilityScheduleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AvailabilityScheduleCountOutputTypeArgs)
    ? AvailabilityScheduleCountOutputType 
    : S extends { select: any } & (AvailabilityScheduleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AvailabilityScheduleCountOutputType ? AvailabilityScheduleCountOutputType[P] : never
  } 
      : AvailabilityScheduleCountOutputType




  // Custom InputTypes

  /**
   * AvailabilityScheduleCountOutputType without action
   */
  export type AvailabilityScheduleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AvailabilityScheduleCountOutputType
     */
    select?: AvailabilityScheduleCountOutputTypeSelect | null
  }



  /**
   * Count Type DaySlotCountOutputType
   */


  export type DaySlotCountOutputType = {
    dateSlots: number
  }

  export type DaySlotCountOutputTypeSelect = {
    dateSlots?: boolean
  }

  export type DaySlotCountOutputTypeGetPayload<S extends boolean | null | undefined | DaySlotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DaySlotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DaySlotCountOutputTypeArgs)
    ? DaySlotCountOutputType 
    : S extends { select: any } & (DaySlotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DaySlotCountOutputType ? DaySlotCountOutputType[P] : never
  } 
      : DaySlotCountOutputType




  // Custom InputTypes

  /**
   * DaySlotCountOutputType without action
   */
  export type DaySlotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DaySlotCountOutputType
     */
    select?: DaySlotCountOutputTypeSelect | null
  }



  /**
   * Count Type DateSlotCountOutputType
   */


  export type DateSlotCountOutputType = {
    dateOnTimeSlots: number
  }

  export type DateSlotCountOutputTypeSelect = {
    dateOnTimeSlots?: boolean
  }

  export type DateSlotCountOutputTypeGetPayload<S extends boolean | null | undefined | DateSlotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateSlotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DateSlotCountOutputTypeArgs)
    ? DateSlotCountOutputType 
    : S extends { select: any } & (DateSlotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DateSlotCountOutputType ? DateSlotCountOutputType[P] : never
  } 
      : DateSlotCountOutputType




  // Custom InputTypes

  /**
   * DateSlotCountOutputType without action
   */
  export type DateSlotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DateSlotCountOutputType
     */
    select?: DateSlotCountOutputTypeSelect | null
  }



  /**
   * Count Type TimeSlotCountOutputType
   */


  export type TimeSlotCountOutputType = {
    dateOnTimeSlots: number
  }

  export type TimeSlotCountOutputTypeSelect = {
    dateOnTimeSlots?: boolean
  }

  export type TimeSlotCountOutputTypeGetPayload<S extends boolean | null | undefined | TimeSlotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TimeSlotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TimeSlotCountOutputTypeArgs)
    ? TimeSlotCountOutputType 
    : S extends { select: any } & (TimeSlotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TimeSlotCountOutputType ? TimeSlotCountOutputType[P] : never
  } 
      : TimeSlotCountOutputType




  // Custom InputTypes

  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TimeSlotCountOutputType
     */
    select?: TimeSlotCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    groupMeetings: number
    dateSlots: number
  }

  export type CustomerCountOutputTypeSelect = {
    groupMeetings?: boolean
    dateSlots?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type GroupMeetingCountOutputType
   */


  export type GroupMeetingCountOutputType = {
    userOnGroupMeetings: number
  }

  export type GroupMeetingCountOutputTypeSelect = {
    userOnGroupMeetings?: boolean
  }

  export type GroupMeetingCountOutputTypeGetPayload<S extends boolean | null | undefined | GroupMeetingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GroupMeetingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GroupMeetingCountOutputTypeArgs)
    ? GroupMeetingCountOutputType 
    : S extends { select: any } & (GroupMeetingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GroupMeetingCountOutputType ? GroupMeetingCountOutputType[P] : never
  } 
      : GroupMeetingCountOutputType




  // Custom InputTypes

  /**
   * GroupMeetingCountOutputType without action
   */
  export type GroupMeetingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GroupMeetingCountOutputType
     */
    select?: GroupMeetingCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    firebaseUid: string | null
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    firebaseUid: string | null
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    firebaseUid: number
    subscription: number
    mobileNumber: number
    userLink: number
    job: number
    education: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    firebaseUid: string
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    username?: boolean
    firebaseUid?: boolean
    subscription?: boolean
    mobileNumber?: boolean
    userLink?: boolean
    job?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypes?: boolean | User$eventTypesArgs
    billings?: boolean | User$billingsArgs
    userOnGroupMeetings?: boolean | User$userOnGroupMeetingsArgs
    appointmentsOrganized?: boolean | User$appointmentsOrganizedArgs
    appointmentsAttending?: boolean | User$appointmentsAttendingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    eventTypes?: boolean | User$eventTypesArgs
    billings?: boolean | User$billingsArgs
    userOnGroupMeetings?: boolean | User$userOnGroupMeetingsArgs
    appointmentsOrganized?: boolean | User$appointmentsOrganizedArgs
    appointmentsAttending?: boolean | User$appointmentsAttendingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['include'][P]>>  :
        P extends 'billings' ? Array < BillingGetPayload<S['include'][P]>>  :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['include'][P]>>  :
        P extends 'appointmentsOrganized' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends 'appointmentsAttending' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['select'][P]>>  :
        P extends 'billings' ? Array < BillingGetPayload<S['select'][P]>>  :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['select'][P]>>  :
        P extends 'appointmentsOrganized' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends 'appointmentsAttending' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypes<T extends User$eventTypesArgs= {}>(args?: Subset<T, User$eventTypesArgs>): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>| Null>;

    billings<T extends User$billingsArgs= {}>(args?: Subset<T, User$billingsArgs>): Prisma.PrismaPromise<Array<BillingGetPayload<T>>| Null>;

    userOnGroupMeetings<T extends User$userOnGroupMeetingsArgs= {}>(args?: Subset<T, User$userOnGroupMeetingsArgs>): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>| Null>;

    appointmentsOrganized<T extends User$appointmentsOrganizedArgs= {}>(args?: Subset<T, User$appointmentsOrganizedArgs>): Prisma.PrismaPromise<Array<AppointmentGetPayload<T>>| Null>;

    appointmentsAttending<T extends User$appointmentsAttendingArgs= {}>(args?: Subset<T, User$appointmentsAttendingArgs>): Prisma.PrismaPromise<Array<AppointmentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.eventTypes
   */
  export type User$eventTypesArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    cursor?: EventTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * User.billings
   */
  export type User$billingsArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    where?: BillingWhereInput
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    cursor?: BillingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * User.userOnGroupMeetings
   */
  export type User$userOnGroupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    cursor?: UserOnGroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * User.appointmentsOrganized
   */
  export type User$appointmentsOrganizedArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * User.appointmentsAttending
   */
  export type User$appointmentsAttendingArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model EventType
   */


  export type AggregateEventType = {
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  export type EventTypeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
  }

  export type EventTypeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
  }

  export type EventTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    description: string | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    description: string | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    description: number
    price: number
    timeDuration: number
    availabilityScheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
  }

  export type EventTypeSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
  }

  export type EventTypeMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeAggregateArgs = {
    /**
     * Filter which EventType to aggregate.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypes
    **/
    _count?: true | EventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeMaxAggregateInputType
  }

  export type GetEventTypeAggregateType<T extends EventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventType[P]>
      : GetScalarType<T[P], AggregateEventType[P]>
  }




  export type EventTypeGroupByArgs = {
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithAggregationInput>
    by: EventTypeScalarFieldEnum[]
    having?: EventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeCountAggregateInputType | true
    _avg?: EventTypeAvgAggregateInputType
    _sum?: EventTypeSumAggregateInputType
    _min?: EventTypeMinAggregateInputType
    _max?: EventTypeMaxAggregateInputType
  }


  export type EventTypeGroupByOutputType = {
    id: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId: number | null
    createdAt: Date
    updatedAt: Date
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  type GetEventTypeGroupByPayload<T extends EventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeSelect = {
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    price?: boolean
    timeDuration?: boolean
    availabilityScheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    eventTypeOnLocations?: boolean | EventType$eventTypeOnLocationsArgs
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    dateSlots?: boolean | EventType$dateSlotsArgs
    groupMeetings?: boolean | EventType$groupMeetingsArgs
    appointments?: boolean | EventType$appointmentsArgs
    _count?: boolean | EventTypeCountOutputTypeArgs
  }


  export type EventTypeInclude = {
    user?: boolean | UserArgs
    eventTypeOnLocations?: boolean | EventType$eventTypeOnLocationsArgs
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    dateSlots?: boolean | EventType$dateSlotsArgs
    groupMeetings?: boolean | EventType$groupMeetingsArgs
    appointments?: boolean | EventType$appointmentsArgs
    _count?: boolean | EventTypeCountOutputTypeArgs
  }

  export type EventTypeGetPayload<S extends boolean | null | undefined | EventTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventType :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeArgs | EventTypeFindManyArgs)
    ? EventType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['include'][P]>>  :
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['include'][P]> | null :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends 'appointments' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventTypeArgs | EventTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['select'][P]>>  :
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['select'][P]> | null :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends 'appointments' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof EventType ? EventType[P] : never
  } 
      : EventType


  type EventTypeCountArgs = 
    Omit<EventTypeFindManyArgs, 'select' | 'include'> & {
      select?: EventTypeCountAggregateInputType | true
    }

  export interface EventTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one EventType that matches the filter.
     * @param {EventTypeFindUniqueArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventType'> extends True ? Prisma__EventTypeClient<EventTypeGetPayload<T>> : Prisma__EventTypeClient<EventTypeGetPayload<T> | null, null>

    /**
     * Find one EventType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventTypeFindUniqueOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventTypeFindUniqueOrThrowArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Find the first EventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventType'> extends True ? Prisma__EventTypeClient<EventTypeGetPayload<T>> : Prisma__EventTypeClient<EventTypeGetPayload<T> | null, null>

    /**
     * Find the first EventType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTypeFindFirstOrThrowArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Find zero or more EventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypes
     * const eventTypes = await prisma.eventType.findMany()
     * 
     * // Get first 10 EventTypes
     * const eventTypes = await prisma.eventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventTypeFindManyArgs>(
      args?: SelectSubset<T, EventTypeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>>

    /**
     * Create a EventType.
     * @param {EventTypeCreateArgs} args - Arguments to create a EventType.
     * @example
     * // Create one EventType
     * const EventType = await prisma.eventType.create({
     *   data: {
     *     // ... data to create a EventType
     *   }
     * })
     * 
    **/
    create<T extends EventTypeCreateArgs>(
      args: SelectSubset<T, EventTypeCreateArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Delete a EventType.
     * @param {EventTypeDeleteArgs} args - Arguments to delete one EventType.
     * @example
     * // Delete one EventType
     * const EventType = await prisma.eventType.delete({
     *   where: {
     *     // ... filter to delete one EventType
     *   }
     * })
     * 
    **/
    delete<T extends EventTypeDeleteArgs>(
      args: SelectSubset<T, EventTypeDeleteArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Update one EventType.
     * @param {EventTypeUpdateArgs} args - Arguments to update one EventType.
     * @example
     * // Update one EventType
     * const eventType = await prisma.eventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventTypeUpdateArgs>(
      args: SelectSubset<T, EventTypeUpdateArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Delete zero or more EventTypes.
     * @param {EventTypeDeleteManyArgs} args - Arguments to filter EventTypes to delete.
     * @example
     * // Delete a few EventTypes
     * const { count } = await prisma.eventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventTypeDeleteManyArgs>(
      args?: SelectSubset<T, EventTypeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventTypeUpdateManyArgs>(
      args: SelectSubset<T, EventTypeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventType.
     * @param {EventTypeUpsertArgs} args - Arguments to update or create a EventType.
     * @example
     * // Update or create a EventType
     * const eventType = await prisma.eventType.upsert({
     *   create: {
     *     // ... data to create a EventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventType we want to update
     *   }
     * })
    **/
    upsert<T extends EventTypeUpsertArgs>(
      args: SelectSubset<T, EventTypeUpsertArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Count the number of EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeCountArgs} args - Arguments to filter EventTypes to count.
     * @example
     * // Count the number of EventTypes
     * const count = await prisma.eventType.count({
     *   where: {
     *     // ... the filter for the EventTypes we want to count
     *   }
     * })
    **/
    count<T extends EventTypeCountArgs>(
      args?: Subset<T, EventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventTypeAggregateArgs>(args: Subset<T, EventTypeAggregateArgs>): Prisma.PrismaPromise<GetEventTypeAggregateType<T>>

    /**
     * Group by EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventTypeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    eventTypeOnLocations<T extends EventType$eventTypeOnLocationsArgs= {}>(args?: Subset<T, EventType$eventTypeOnLocationsArgs>): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>| Null>;

    availabilitySchedule<T extends AvailabilityScheduleArgs= {}>(args?: Subset<T, AvailabilityScheduleArgs>): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | Null>;

    dateSlots<T extends EventType$dateSlotsArgs= {}>(args?: Subset<T, EventType$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

    groupMeetings<T extends EventType$groupMeetingsArgs= {}>(args?: Subset<T, EventType$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

    appointments<T extends EventType$appointmentsArgs= {}>(args?: Subset<T, EventType$appointmentsArgs>): Prisma.PrismaPromise<Array<AppointmentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * EventType base type for findUnique actions
   */
  export type EventTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findUnique
   */
  export interface EventTypeFindUniqueArgs extends EventTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventType findUniqueOrThrow
   */
  export type EventTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType base type for findFirst actions
   */
  export type EventTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }

  /**
   * EventType findFirst
   */
  export interface EventTypeFindFirstArgs extends EventTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventType findFirstOrThrow
   */
  export type EventTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * EventType findMany
   */
  export type EventTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventTypes to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * EventType create
   */
  export type EventTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The data needed to create a EventType.
     */
    data: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
  }


  /**
   * EventType update
   */
  export type EventTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The data needed to update a EventType.
     */
    data: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
    /**
     * Choose, which EventType to update.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType updateMany
   */
  export type EventTypeUpdateManyArgs = {
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
  }


  /**
   * EventType upsert
   */
  export type EventTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The filter to search for the EventType to update in case it exists.
     */
    where: EventTypeWhereUniqueInput
    /**
     * In case the EventType found by the `where` argument doesn't exist, create a new EventType with this data.
     */
    create: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
    /**
     * In case the EventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
  }


  /**
   * EventType delete
   */
  export type EventTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter which EventType to delete.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType deleteMany
   */
  export type EventTypeDeleteManyArgs = {
    /**
     * Filter which EventTypes to delete
     */
    where?: EventTypeWhereInput
  }


  /**
   * EventType.eventTypeOnLocations
   */
  export type EventType$eventTypeOnLocationsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    cursor?: EventTypeOnLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventType.dateSlots
   */
  export type EventType$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * EventType.groupMeetings
   */
  export type EventType$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * EventType.appointments
   */
  export type EventType$appointmentsArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * EventType without action
   */
  export type EventTypeArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: LocationScalarFieldEnum[]
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypeOnLocations?: boolean | Location$eventTypeOnLocationsArgs
    groupMeetings?: boolean | Location$groupMeetingsArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type LocationInclude = {
    eventTypeOnLocations?: boolean | Location$eventTypeOnLocationsArgs
    groupMeetings?: boolean | Location$groupMeetingsArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationGetPayload<S extends boolean | null | undefined | LocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Location :
    S extends undefined ? never :
    S extends { include: any } & (LocationArgs | LocationFindManyArgs)
    ? Location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['include'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationArgs | LocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['select'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
      : Location


  type LocationCountArgs = 
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): Prisma.PrismaPromise<Array<LocationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypeOnLocations<T extends Location$eventTypeOnLocationsArgs= {}>(args?: Subset<T, Location$eventTypeOnLocationsArgs>): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>| Null>;

    groupMeetings<T extends Location$groupMeetingsArgs= {}>(args?: Subset<T, Location$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location.eventTypeOnLocations
   */
  export type Location$eventTypeOnLocationsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    cursor?: EventTypeOnLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * Location.groupMeetings
   */
  export type Location$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
  }



  /**
   * Model EventTypeOnLocation
   */


  export type AggregateEventTypeOnLocation = {
    _count: EventTypeOnLocationCountAggregateOutputType | null
    _avg: EventTypeOnLocationAvgAggregateOutputType | null
    _sum: EventTypeOnLocationSumAggregateOutputType | null
    _min: EventTypeOnLocationMinAggregateOutputType | null
    _max: EventTypeOnLocationMaxAggregateOutputType | null
  }

  export type EventTypeOnLocationAvgAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
  }

  export type EventTypeOnLocationSumAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
  }

  export type EventTypeOnLocationMinAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnLocationMaxAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnLocationCountAggregateOutputType = {
    id: number
    eventTypeId: number
    locationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeOnLocationAvgAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
  }

  export type EventTypeOnLocationSumAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
  }

  export type EventTypeOnLocationMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnLocationMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnLocationCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeOnLocationAggregateArgs = {
    /**
     * Filter which EventTypeOnLocation to aggregate.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypeOnLocations
    **/
    _count?: true | EventTypeOnLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeOnLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeOnLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeOnLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeOnLocationMaxAggregateInputType
  }

  export type GetEventTypeOnLocationAggregateType<T extends EventTypeOnLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTypeOnLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTypeOnLocation[P]>
      : GetScalarType<T[P], AggregateEventTypeOnLocation[P]>
  }




  export type EventTypeOnLocationGroupByArgs = {
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithAggregationInput>
    by: EventTypeOnLocationScalarFieldEnum[]
    having?: EventTypeOnLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeOnLocationCountAggregateInputType | true
    _avg?: EventTypeOnLocationAvgAggregateInputType
    _sum?: EventTypeOnLocationSumAggregateInputType
    _min?: EventTypeOnLocationMinAggregateInputType
    _max?: EventTypeOnLocationMaxAggregateInputType
  }


  export type EventTypeOnLocationGroupByOutputType = {
    id: number
    eventTypeId: number
    locationId: number
    createdAt: Date
    updatedAt: Date
    _count: EventTypeOnLocationCountAggregateOutputType | null
    _avg: EventTypeOnLocationAvgAggregateOutputType | null
    _sum: EventTypeOnLocationSumAggregateOutputType | null
    _min: EventTypeOnLocationMinAggregateOutputType | null
    _max: EventTypeOnLocationMaxAggregateOutputType | null
  }

  type GetEventTypeOnLocationGroupByPayload<T extends EventTypeOnLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventTypeOnLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeOnLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeOnLocationGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeOnLocationGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeOnLocationSelect = {
    id?: boolean
    eventTypeId?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean | EventTypeArgs
    location?: boolean | LocationArgs
  }


  export type EventTypeOnLocationInclude = {
    eventType?: boolean | EventTypeArgs
    location?: boolean | LocationArgs
  }

  export type EventTypeOnLocationGetPayload<S extends boolean | null | undefined | EventTypeOnLocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventTypeOnLocation :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeOnLocationArgs | EventTypeOnLocationFindManyArgs)
    ? EventTypeOnLocation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'location' ? LocationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventTypeOnLocationArgs | EventTypeOnLocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'location' ? LocationGetPayload<S['select'][P]> :  P extends keyof EventTypeOnLocation ? EventTypeOnLocation[P] : never
  } 
      : EventTypeOnLocation


  type EventTypeOnLocationCountArgs = 
    Omit<EventTypeOnLocationFindManyArgs, 'select' | 'include'> & {
      select?: EventTypeOnLocationCountAggregateInputType | true
    }

  export interface EventTypeOnLocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one EventTypeOnLocation that matches the filter.
     * @param {EventTypeOnLocationFindUniqueArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventTypeOnLocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventTypeOnLocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventTypeOnLocation'> extends True ? Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>> : Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T> | null, null>

    /**
     * Find one EventTypeOnLocation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventTypeOnLocationFindUniqueOrThrowArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventTypeOnLocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindUniqueOrThrowArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Find the first EventTypeOnLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindFirstArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventTypeOnLocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventTypeOnLocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventTypeOnLocation'> extends True ? Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>> : Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T> | null, null>

    /**
     * Find the first EventTypeOnLocation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindFirstOrThrowArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventTypeOnLocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindFirstOrThrowArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Find zero or more EventTypeOnLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypeOnLocations
     * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany()
     * 
     * // Get first 10 EventTypeOnLocations
     * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeOnLocationWithIdOnly = await prisma.eventTypeOnLocation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventTypeOnLocationFindManyArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>>

    /**
     * Create a EventTypeOnLocation.
     * @param {EventTypeOnLocationCreateArgs} args - Arguments to create a EventTypeOnLocation.
     * @example
     * // Create one EventTypeOnLocation
     * const EventTypeOnLocation = await prisma.eventTypeOnLocation.create({
     *   data: {
     *     // ... data to create a EventTypeOnLocation
     *   }
     * })
     * 
    **/
    create<T extends EventTypeOnLocationCreateArgs>(
      args: SelectSubset<T, EventTypeOnLocationCreateArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Delete a EventTypeOnLocation.
     * @param {EventTypeOnLocationDeleteArgs} args - Arguments to delete one EventTypeOnLocation.
     * @example
     * // Delete one EventTypeOnLocation
     * const EventTypeOnLocation = await prisma.eventTypeOnLocation.delete({
     *   where: {
     *     // ... filter to delete one EventTypeOnLocation
     *   }
     * })
     * 
    **/
    delete<T extends EventTypeOnLocationDeleteArgs>(
      args: SelectSubset<T, EventTypeOnLocationDeleteArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Update one EventTypeOnLocation.
     * @param {EventTypeOnLocationUpdateArgs} args - Arguments to update one EventTypeOnLocation.
     * @example
     * // Update one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventTypeOnLocationUpdateArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpdateArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Delete zero or more EventTypeOnLocations.
     * @param {EventTypeOnLocationDeleteManyArgs} args - Arguments to filter EventTypeOnLocations to delete.
     * @example
     * // Delete a few EventTypeOnLocations
     * const { count } = await prisma.eventTypeOnLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventTypeOnLocationDeleteManyArgs>(
      args?: SelectSubset<T, EventTypeOnLocationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypeOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypeOnLocations
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventTypeOnLocationUpdateManyArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventTypeOnLocation.
     * @param {EventTypeOnLocationUpsertArgs} args - Arguments to update or create a EventTypeOnLocation.
     * @example
     * // Update or create a EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.upsert({
     *   create: {
     *     // ... data to create a EventTypeOnLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTypeOnLocation we want to update
     *   }
     * })
    **/
    upsert<T extends EventTypeOnLocationUpsertArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpsertArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Count the number of EventTypeOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationCountArgs} args - Arguments to filter EventTypeOnLocations to count.
     * @example
     * // Count the number of EventTypeOnLocations
     * const count = await prisma.eventTypeOnLocation.count({
     *   where: {
     *     // ... the filter for the EventTypeOnLocations we want to count
     *   }
     * })
    **/
    count<T extends EventTypeOnLocationCountArgs>(
      args?: Subset<T, EventTypeOnLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeOnLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTypeOnLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventTypeOnLocationAggregateArgs>(args: Subset<T, EventTypeOnLocationAggregateArgs>): Prisma.PrismaPromise<GetEventTypeOnLocationAggregateType<T>>

    /**
     * Group by EventTypeOnLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventTypeOnLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeOnLocationGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeOnLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTypeOnLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeOnLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTypeOnLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventTypeOnLocationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * EventTypeOnLocation base type for findUnique actions
   */
  export type EventTypeOnLocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }

  /**
   * EventTypeOnLocation findUnique
   */
  export interface EventTypeOnLocationFindUniqueArgs extends EventTypeOnLocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnLocation findUniqueOrThrow
   */
  export type EventTypeOnLocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation base type for findFirst actions
   */
  export type EventTypeOnLocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnLocations.
     */
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }

  /**
   * EventTypeOnLocation findFirst
   */
  export interface EventTypeOnLocationFindFirstArgs extends EventTypeOnLocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnLocation findFirstOrThrow
   */
  export type EventTypeOnLocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnLocations.
     */
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventTypeOnLocation findMany
   */
  export type EventTypeOnLocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocations to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventTypeOnLocation create
   */
  export type EventTypeOnLocationCreateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The data needed to create a EventTypeOnLocation.
     */
    data: XOR<EventTypeOnLocationCreateInput, EventTypeOnLocationUncheckedCreateInput>
  }


  /**
   * EventTypeOnLocation update
   */
  export type EventTypeOnLocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The data needed to update a EventTypeOnLocation.
     */
    data: XOR<EventTypeOnLocationUpdateInput, EventTypeOnLocationUncheckedUpdateInput>
    /**
     * Choose, which EventTypeOnLocation to update.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation updateMany
   */
  export type EventTypeOnLocationUpdateManyArgs = {
    /**
     * The data used to update EventTypeOnLocations.
     */
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyInput>
    /**
     * Filter which EventTypeOnLocations to update
     */
    where?: EventTypeOnLocationWhereInput
  }


  /**
   * EventTypeOnLocation upsert
   */
  export type EventTypeOnLocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The filter to search for the EventTypeOnLocation to update in case it exists.
     */
    where: EventTypeOnLocationWhereUniqueInput
    /**
     * In case the EventTypeOnLocation found by the `where` argument doesn't exist, create a new EventTypeOnLocation with this data.
     */
    create: XOR<EventTypeOnLocationCreateInput, EventTypeOnLocationUncheckedCreateInput>
    /**
     * In case the EventTypeOnLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeOnLocationUpdateInput, EventTypeOnLocationUncheckedUpdateInput>
  }


  /**
   * EventTypeOnLocation delete
   */
  export type EventTypeOnLocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter which EventTypeOnLocation to delete.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation deleteMany
   */
  export type EventTypeOnLocationDeleteManyArgs = {
    /**
     * Filter which EventTypeOnLocations to delete
     */
    where?: EventTypeOnLocationWhereInput
  }


  /**
   * EventTypeOnLocation without action
   */
  export type EventTypeOnLocationArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
  }



  /**
   * Model AvailabilitySchedule
   */


  export type AggregateAvailabilitySchedule = {
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _avg: AvailabilityScheduleAvgAggregateOutputType | null
    _sum: AvailabilityScheduleSumAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  export type AvailabilityScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityScheduleMinAggregateOutputType = {
    id: number | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityScheduleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityScheduleCountAggregateOutputType = {
    id: number
    name: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityScheduleAvgAggregateInputType = {
    id?: true
  }

  export type AvailabilityScheduleSumAggregateInputType = {
    id?: true
  }

  export type AvailabilityScheduleMinAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityScheduleCountAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityScheduleAggregateArgs = {
    /**
     * Filter which AvailabilitySchedule to aggregate.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySchedules
    **/
    _count?: true | AvailabilityScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilityScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityScheduleMaxAggregateInputType
  }

  export type GetAvailabilityScheduleAggregateType<T extends AvailabilityScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
      : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
  }




  export type AvailabilityScheduleGroupByArgs = {
    where?: AvailabilityScheduleWhereInput
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithAggregationInput>
    by: AvailabilityScheduleScalarFieldEnum[]
    having?: AvailabilityScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityScheduleCountAggregateInputType | true
    _avg?: AvailabilityScheduleAvgAggregateInputType
    _sum?: AvailabilityScheduleSumAggregateInputType
    _min?: AvailabilityScheduleMinAggregateInputType
    _max?: AvailabilityScheduleMaxAggregateInputType
  }


  export type AvailabilityScheduleGroupByOutputType = {
    id: number
    name: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _avg: AvailabilityScheduleAvgAggregateOutputType | null
    _sum: AvailabilityScheduleSumAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  type GetAvailabilityScheduleGroupByPayload<T extends AvailabilityScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AvailabilityScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityScheduleSelect = {
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypes?: boolean | AvailabilitySchedule$eventTypesArgs
    dateSlots?: boolean | AvailabilitySchedule$dateSlotsArgs
    _count?: boolean | AvailabilityScheduleCountOutputTypeArgs
  }


  export type AvailabilityScheduleInclude = {
    eventTypes?: boolean | AvailabilitySchedule$eventTypesArgs
    dateSlots?: boolean | AvailabilitySchedule$dateSlotsArgs
    _count?: boolean | AvailabilityScheduleCountOutputTypeArgs
  }

  export type AvailabilityScheduleGetPayload<S extends boolean | null | undefined | AvailabilityScheduleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AvailabilitySchedule :
    S extends undefined ? never :
    S extends { include: any } & (AvailabilityScheduleArgs | AvailabilityScheduleFindManyArgs)
    ? AvailabilitySchedule  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['include'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? AvailabilityScheduleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AvailabilityScheduleArgs | AvailabilityScheduleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['select'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? AvailabilityScheduleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AvailabilitySchedule ? AvailabilitySchedule[P] : never
  } 
      : AvailabilitySchedule


  type AvailabilityScheduleCountArgs = 
    Omit<AvailabilityScheduleFindManyArgs, 'select' | 'include'> & {
      select?: AvailabilityScheduleCountAggregateInputType | true
    }

  export interface AvailabilityScheduleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AvailabilitySchedule that matches the filter.
     * @param {AvailabilityScheduleFindUniqueArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvailabilityScheduleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AvailabilityScheduleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AvailabilitySchedule'> extends True ? Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>> : Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | null, null>

    /**
     * Find one AvailabilitySchedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvailabilityScheduleFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvailabilityScheduleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindUniqueOrThrowArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Find the first AvailabilitySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvailabilityScheduleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AvailabilityScheduleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AvailabilitySchedule'> extends True ? Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>> : Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | null, null>

    /**
     * Find the first AvailabilitySchedule that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvailabilityScheduleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindFirstOrThrowArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Find zero or more AvailabilitySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
     * 
     * // Get first 10 AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityScheduleWithIdOnly = await prisma.availabilitySchedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvailabilityScheduleFindManyArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindManyArgs>
    ): Prisma.PrismaPromise<Array<AvailabilityScheduleGetPayload<T>>>

    /**
     * Create a AvailabilitySchedule.
     * @param {AvailabilityScheduleCreateArgs} args - Arguments to create a AvailabilitySchedule.
     * @example
     * // Create one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.create({
     *   data: {
     *     // ... data to create a AvailabilitySchedule
     *   }
     * })
     * 
    **/
    create<T extends AvailabilityScheduleCreateArgs>(
      args: SelectSubset<T, AvailabilityScheduleCreateArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Delete a AvailabilitySchedule.
     * @param {AvailabilityScheduleDeleteArgs} args - Arguments to delete one AvailabilitySchedule.
     * @example
     * // Delete one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySchedule
     *   }
     * })
     * 
    **/
    delete<T extends AvailabilityScheduleDeleteArgs>(
      args: SelectSubset<T, AvailabilityScheduleDeleteArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpdateArgs} args - Arguments to update one AvailabilitySchedule.
     * @example
     * // Update one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvailabilityScheduleUpdateArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpdateArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Delete zero or more AvailabilitySchedules.
     * @param {AvailabilityScheduleDeleteManyArgs} args - Arguments to filter AvailabilitySchedules to delete.
     * @example
     * // Delete a few AvailabilitySchedules
     * const { count } = await prisma.availabilitySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvailabilityScheduleDeleteManyArgs>(
      args?: SelectSubset<T, AvailabilityScheduleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvailabilityScheduleUpdateManyArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpsertArgs} args - Arguments to update or create a AvailabilitySchedule.
     * @example
     * // Update or create a AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySchedule we want to update
     *   }
     * })
    **/
    upsert<T extends AvailabilityScheduleUpsertArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpsertArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Count the number of AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleCountArgs} args - Arguments to filter AvailabilitySchedules to count.
     * @example
     * // Count the number of AvailabilitySchedules
     * const count = await prisma.availabilitySchedule.count({
     *   where: {
     *     // ... the filter for the AvailabilitySchedules we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityScheduleCountArgs>(
      args?: Subset<T, AvailabilityScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityScheduleAggregateArgs>(args: Subset<T, AvailabilityScheduleAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityScheduleAggregateType<T>>

    /**
     * Group by AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityScheduleGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AvailabilityScheduleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypes<T extends AvailabilitySchedule$eventTypesArgs= {}>(args?: Subset<T, AvailabilitySchedule$eventTypesArgs>): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>| Null>;

    dateSlots<T extends AvailabilitySchedule$dateSlotsArgs= {}>(args?: Subset<T, AvailabilitySchedule$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AvailabilitySchedule base type for findUnique actions
   */
  export type AvailabilityScheduleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule findUnique
   */
  export interface AvailabilityScheduleFindUniqueArgs extends AvailabilityScheduleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AvailabilitySchedule findUniqueOrThrow
   */
  export type AvailabilityScheduleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule base type for findFirst actions
   */
  export type AvailabilityScheduleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }

  /**
   * AvailabilitySchedule findFirst
   */
  export interface AvailabilityScheduleFindFirstArgs extends AvailabilityScheduleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AvailabilitySchedule findFirstOrThrow
   */
  export type AvailabilityScheduleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule findMany
   */
  export type AvailabilityScheduleFindManyArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedules to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule create
   */
  export type AvailabilityScheduleCreateArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The data needed to create a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
  }


  /**
   * AvailabilitySchedule update
   */
  export type AvailabilityScheduleUpdateArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The data needed to update a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySchedule to update.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule updateMany
   */
  export type AvailabilityScheduleUpdateManyArgs = {
    /**
     * The data used to update AvailabilitySchedules.
     */
    data: XOR<AvailabilityScheduleUpdateManyMutationInput, AvailabilityScheduleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySchedules to update
     */
    where?: AvailabilityScheduleWhereInput
  }


  /**
   * AvailabilitySchedule upsert
   */
  export type AvailabilityScheduleUpsertArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The filter to search for the AvailabilitySchedule to update in case it exists.
     */
    where: AvailabilityScheduleWhereUniqueInput
    /**
     * In case the AvailabilitySchedule found by the `where` argument doesn't exist, create a new AvailabilitySchedule with this data.
     */
    create: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
    /**
     * In case the AvailabilitySchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
  }


  /**
   * AvailabilitySchedule delete
   */
  export type AvailabilityScheduleDeleteArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter which AvailabilitySchedule to delete.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule deleteMany
   */
  export type AvailabilityScheduleDeleteManyArgs = {
    /**
     * Filter which AvailabilitySchedules to delete
     */
    where?: AvailabilityScheduleWhereInput
  }


  /**
   * AvailabilitySchedule.eventTypes
   */
  export type AvailabilitySchedule$eventTypesArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    cursor?: EventTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule.dateSlots
   */
  export type AvailabilitySchedule$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule without action
   */
  export type AvailabilityScheduleArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
  }



  /**
   * Model DaySlot
   */


  export type AggregateDaySlot = {
    _count: DaySlotCountAggregateOutputType | null
    _avg: DaySlotAvgAggregateOutputType | null
    _sum: DaySlotSumAggregateOutputType | null
    _min: DaySlotMinAggregateOutputType | null
    _max: DaySlotMaxAggregateOutputType | null
  }

  export type DaySlotAvgAggregateOutputType = {
    id: number | null
  }

  export type DaySlotSumAggregateOutputType = {
    id: number | null
  }

  export type DaySlotMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DaySlotAvgAggregateInputType = {
    id?: true
  }

  export type DaySlotSumAggregateInputType = {
    id?: true
  }

  export type DaySlotMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DaySlotAggregateArgs = {
    /**
     * Filter which DaySlot to aggregate.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DaySlots
    **/
    _count?: true | DaySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaySlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaySlotMaxAggregateInputType
  }

  export type GetDaySlotAggregateType<T extends DaySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDaySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaySlot[P]>
      : GetScalarType<T[P], AggregateDaySlot[P]>
  }




  export type DaySlotGroupByArgs = {
    where?: DaySlotWhereInput
    orderBy?: Enumerable<DaySlotOrderByWithAggregationInput>
    by: DaySlotScalarFieldEnum[]
    having?: DaySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaySlotCountAggregateInputType | true
    _avg?: DaySlotAvgAggregateInputType
    _sum?: DaySlotSumAggregateInputType
    _min?: DaySlotMinAggregateInputType
    _max?: DaySlotMaxAggregateInputType
  }


  export type DaySlotGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DaySlotCountAggregateOutputType | null
    _avg: DaySlotAvgAggregateOutputType | null
    _sum: DaySlotSumAggregateOutputType | null
    _min: DaySlotMinAggregateOutputType | null
    _max: DaySlotMaxAggregateOutputType | null
  }

  type GetDaySlotGroupByPayload<T extends DaySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DaySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaySlotGroupByOutputType[P]>
            : GetScalarType<T[P], DaySlotGroupByOutputType[P]>
        }
      >
    >


  export type DaySlotSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateSlots?: boolean | DaySlot$dateSlotsArgs
    _count?: boolean | DaySlotCountOutputTypeArgs
  }


  export type DaySlotInclude = {
    dateSlots?: boolean | DaySlot$dateSlotsArgs
    _count?: boolean | DaySlotCountOutputTypeArgs
  }

  export type DaySlotGetPayload<S extends boolean | null | undefined | DaySlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DaySlot :
    S extends undefined ? never :
    S extends { include: any } & (DaySlotArgs | DaySlotFindManyArgs)
    ? DaySlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? DaySlotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DaySlotArgs | DaySlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? DaySlotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DaySlot ? DaySlot[P] : never
  } 
      : DaySlot


  type DaySlotCountArgs = 
    Omit<DaySlotFindManyArgs, 'select' | 'include'> & {
      select?: DaySlotCountAggregateInputType | true
    }

  export interface DaySlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DaySlot that matches the filter.
     * @param {DaySlotFindUniqueArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaySlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DaySlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DaySlot'> extends True ? Prisma__DaySlotClient<DaySlotGetPayload<T>> : Prisma__DaySlotClient<DaySlotGetPayload<T> | null, null>

    /**
     * Find one DaySlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaySlotFindUniqueOrThrowArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaySlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DaySlotFindUniqueOrThrowArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Find the first DaySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindFirstArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaySlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DaySlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DaySlot'> extends True ? Prisma__DaySlotClient<DaySlotGetPayload<T>> : Prisma__DaySlotClient<DaySlotGetPayload<T> | null, null>

    /**
     * Find the first DaySlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindFirstOrThrowArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaySlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DaySlotFindFirstOrThrowArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Find zero or more DaySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DaySlots
     * const daySlots = await prisma.daySlot.findMany()
     * 
     * // Get first 10 DaySlots
     * const daySlots = await prisma.daySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daySlotWithIdOnly = await prisma.daySlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaySlotFindManyArgs>(
      args?: SelectSubset<T, DaySlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DaySlotGetPayload<T>>>

    /**
     * Create a DaySlot.
     * @param {DaySlotCreateArgs} args - Arguments to create a DaySlot.
     * @example
     * // Create one DaySlot
     * const DaySlot = await prisma.daySlot.create({
     *   data: {
     *     // ... data to create a DaySlot
     *   }
     * })
     * 
    **/
    create<T extends DaySlotCreateArgs>(
      args: SelectSubset<T, DaySlotCreateArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Delete a DaySlot.
     * @param {DaySlotDeleteArgs} args - Arguments to delete one DaySlot.
     * @example
     * // Delete one DaySlot
     * const DaySlot = await prisma.daySlot.delete({
     *   where: {
     *     // ... filter to delete one DaySlot
     *   }
     * })
     * 
    **/
    delete<T extends DaySlotDeleteArgs>(
      args: SelectSubset<T, DaySlotDeleteArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Update one DaySlot.
     * @param {DaySlotUpdateArgs} args - Arguments to update one DaySlot.
     * @example
     * // Update one DaySlot
     * const daySlot = await prisma.daySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaySlotUpdateArgs>(
      args: SelectSubset<T, DaySlotUpdateArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Delete zero or more DaySlots.
     * @param {DaySlotDeleteManyArgs} args - Arguments to filter DaySlots to delete.
     * @example
     * // Delete a few DaySlots
     * const { count } = await prisma.daySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaySlotDeleteManyArgs>(
      args?: SelectSubset<T, DaySlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DaySlots
     * const daySlot = await prisma.daySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaySlotUpdateManyArgs>(
      args: SelectSubset<T, DaySlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DaySlot.
     * @param {DaySlotUpsertArgs} args - Arguments to update or create a DaySlot.
     * @example
     * // Update or create a DaySlot
     * const daySlot = await prisma.daySlot.upsert({
     *   create: {
     *     // ... data to create a DaySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DaySlot we want to update
     *   }
     * })
    **/
    upsert<T extends DaySlotUpsertArgs>(
      args: SelectSubset<T, DaySlotUpsertArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Count the number of DaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotCountArgs} args - Arguments to filter DaySlots to count.
     * @example
     * // Count the number of DaySlots
     * const count = await prisma.daySlot.count({
     *   where: {
     *     // ... the filter for the DaySlots we want to count
     *   }
     * })
    **/
    count<T extends DaySlotCountArgs>(
      args?: Subset<T, DaySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DaySlotAggregateArgs>(args: Subset<T, DaySlotAggregateArgs>): Prisma.PrismaPromise<GetDaySlotAggregateType<T>>

    /**
     * Group by DaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DaySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaySlotGroupByArgs['orderBy'] }
        : { orderBy?: DaySlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DaySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DaySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DaySlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dateSlots<T extends DaySlot$dateSlotsArgs= {}>(args?: Subset<T, DaySlot$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DaySlot base type for findUnique actions
   */
  export type DaySlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where: DaySlotWhereUniqueInput
  }

  /**
   * DaySlot findUnique
   */
  export interface DaySlotFindUniqueArgs extends DaySlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlot findUniqueOrThrow
   */
  export type DaySlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot base type for findFirst actions
   */
  export type DaySlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlots.
     */
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }

  /**
   * DaySlot findFirst
   */
  export interface DaySlotFindFirstArgs extends DaySlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlot findFirstOrThrow
   */
  export type DaySlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlots.
     */
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }


  /**
   * DaySlot findMany
   */
  export type DaySlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlots to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }


  /**
   * DaySlot create
   */
  export type DaySlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The data needed to create a DaySlot.
     */
    data: XOR<DaySlotCreateInput, DaySlotUncheckedCreateInput>
  }


  /**
   * DaySlot update
   */
  export type DaySlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The data needed to update a DaySlot.
     */
    data: XOR<DaySlotUpdateInput, DaySlotUncheckedUpdateInput>
    /**
     * Choose, which DaySlot to update.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot updateMany
   */
  export type DaySlotUpdateManyArgs = {
    /**
     * The data used to update DaySlots.
     */
    data: XOR<DaySlotUpdateManyMutationInput, DaySlotUncheckedUpdateManyInput>
    /**
     * Filter which DaySlots to update
     */
    where?: DaySlotWhereInput
  }


  /**
   * DaySlot upsert
   */
  export type DaySlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The filter to search for the DaySlot to update in case it exists.
     */
    where: DaySlotWhereUniqueInput
    /**
     * In case the DaySlot found by the `where` argument doesn't exist, create a new DaySlot with this data.
     */
    create: XOR<DaySlotCreateInput, DaySlotUncheckedCreateInput>
    /**
     * In case the DaySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaySlotUpdateInput, DaySlotUncheckedUpdateInput>
  }


  /**
   * DaySlot delete
   */
  export type DaySlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter which DaySlot to delete.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot deleteMany
   */
  export type DaySlotDeleteManyArgs = {
    /**
     * Filter which DaySlots to delete
     */
    where?: DaySlotWhereInput
  }


  /**
   * DaySlot.dateSlots
   */
  export type DaySlot$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * DaySlot without action
   */
  export type DaySlotArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
  }



  /**
   * Model DateSlot
   */


  export type AggregateDateSlot = {
    _count: DateSlotCountAggregateOutputType | null
    _avg: DateSlotAvgAggregateOutputType | null
    _sum: DateSlotSumAggregateOutputType | null
    _min: DateSlotMinAggregateOutputType | null
    _max: DateSlotMaxAggregateOutputType | null
  }

  export type DateSlotAvgAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    custormerId: number | null
    eventId: number | null
  }

  export type DateSlotSumAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    custormerId: number | null
    eventId: number | null
  }

  export type DateSlotMinAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    name: Date | null
    custormerId: number | null
    eventId: number | null
    dayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotMaxAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    name: Date | null
    custormerId: number | null
    eventId: number | null
    dayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotCountAggregateOutputType = {
    id: number
    availabilityScheduleId: number
    name: number
    custormerId: number
    eventId: number
    dayName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DateSlotAvgAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    custormerId?: true
    eventId?: true
  }

  export type DateSlotSumAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    custormerId?: true
    eventId?: true
  }

  export type DateSlotMinAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    name?: true
    custormerId?: true
    eventId?: true
    dayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotMaxAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    name?: true
    custormerId?: true
    eventId?: true
    dayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotCountAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    name?: true
    custormerId?: true
    eventId?: true
    dayName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DateSlotAggregateArgs = {
    /**
     * Filter which DateSlot to aggregate.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateSlots
    **/
    _count?: true | DateSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateSlotMaxAggregateInputType
  }

  export type GetDateSlotAggregateType<T extends DateSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateSlot[P]>
      : GetScalarType<T[P], AggregateDateSlot[P]>
  }




  export type DateSlotGroupByArgs = {
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithAggregationInput>
    by: DateSlotScalarFieldEnum[]
    having?: DateSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateSlotCountAggregateInputType | true
    _avg?: DateSlotAvgAggregateInputType
    _sum?: DateSlotSumAggregateInputType
    _min?: DateSlotMinAggregateInputType
    _max?: DateSlotMaxAggregateInputType
  }


  export type DateSlotGroupByOutputType = {
    id: number
    availabilityScheduleId: number | null
    name: Date
    custormerId: number | null
    eventId: number
    dayName: string
    createdAt: Date
    updatedAt: Date
    _count: DateSlotCountAggregateOutputType | null
    _avg: DateSlotAvgAggregateOutputType | null
    _sum: DateSlotSumAggregateOutputType | null
    _min: DateSlotMinAggregateOutputType | null
    _max: DateSlotMaxAggregateOutputType | null
  }

  type GetDateSlotGroupByPayload<T extends DateSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DateSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateSlotGroupByOutputType[P]>
            : GetScalarType<T[P], DateSlotGroupByOutputType[P]>
        }
      >
    >


  export type DateSlotSelect = {
    id?: boolean
    availabilityScheduleId?: boolean
    name?: boolean
    custormerId?: boolean
    eventId?: boolean
    dayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    custormer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    daySlot?: boolean | DaySlotArgs
    dateOnTimeSlots?: boolean | DateSlot$dateOnTimeSlotsArgs
    _count?: boolean | DateSlotCountOutputTypeArgs
  }


  export type DateSlotInclude = {
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    custormer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    daySlot?: boolean | DaySlotArgs
    dateOnTimeSlots?: boolean | DateSlot$dateOnTimeSlotsArgs
    _count?: boolean | DateSlotCountOutputTypeArgs
  }

  export type DateSlotGetPayload<S extends boolean | null | undefined | DateSlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateSlot :
    S extends undefined ? never :
    S extends { include: any } & (DateSlotArgs | DateSlotFindManyArgs)
    ? DateSlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['include'][P]> | null :
        P extends 'custormer' ? CustomerGetPayload<S['include'][P]> | null :
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'daySlot' ? DaySlotGetPayload<S['include'][P]> :
        P extends 'dateOnTimeSlots' ? Array < DateOnTimeSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? DateSlotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DateSlotArgs | DateSlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['select'][P]> | null :
        P extends 'custormer' ? CustomerGetPayload<S['select'][P]> | null :
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'daySlot' ? DaySlotGetPayload<S['select'][P]> :
        P extends 'dateOnTimeSlots' ? Array < DateOnTimeSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? DateSlotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DateSlot ? DateSlot[P] : never
  } 
      : DateSlot


  type DateSlotCountArgs = 
    Omit<DateSlotFindManyArgs, 'select' | 'include'> & {
      select?: DateSlotCountAggregateInputType | true
    }

  export interface DateSlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DateSlot that matches the filter.
     * @param {DateSlotFindUniqueArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DateSlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DateSlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DateSlot'> extends True ? Prisma__DateSlotClient<DateSlotGetPayload<T>> : Prisma__DateSlotClient<DateSlotGetPayload<T> | null, null>

    /**
     * Find one DateSlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DateSlotFindUniqueOrThrowArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DateSlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DateSlotFindUniqueOrThrowArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Find the first DateSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindFirstArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DateSlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DateSlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DateSlot'> extends True ? Prisma__DateSlotClient<DateSlotGetPayload<T>> : Prisma__DateSlotClient<DateSlotGetPayload<T> | null, null>

    /**
     * Find the first DateSlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindFirstOrThrowArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DateSlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DateSlotFindFirstOrThrowArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Find zero or more DateSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateSlots
     * const dateSlots = await prisma.dateSlot.findMany()
     * 
     * // Get first 10 DateSlots
     * const dateSlots = await prisma.dateSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateSlotWithIdOnly = await prisma.dateSlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DateSlotFindManyArgs>(
      args?: SelectSubset<T, DateSlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>>

    /**
     * Create a DateSlot.
     * @param {DateSlotCreateArgs} args - Arguments to create a DateSlot.
     * @example
     * // Create one DateSlot
     * const DateSlot = await prisma.dateSlot.create({
     *   data: {
     *     // ... data to create a DateSlot
     *   }
     * })
     * 
    **/
    create<T extends DateSlotCreateArgs>(
      args: SelectSubset<T, DateSlotCreateArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Delete a DateSlot.
     * @param {DateSlotDeleteArgs} args - Arguments to delete one DateSlot.
     * @example
     * // Delete one DateSlot
     * const DateSlot = await prisma.dateSlot.delete({
     *   where: {
     *     // ... filter to delete one DateSlot
     *   }
     * })
     * 
    **/
    delete<T extends DateSlotDeleteArgs>(
      args: SelectSubset<T, DateSlotDeleteArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Update one DateSlot.
     * @param {DateSlotUpdateArgs} args - Arguments to update one DateSlot.
     * @example
     * // Update one DateSlot
     * const dateSlot = await prisma.dateSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DateSlotUpdateArgs>(
      args: SelectSubset<T, DateSlotUpdateArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Delete zero or more DateSlots.
     * @param {DateSlotDeleteManyArgs} args - Arguments to filter DateSlots to delete.
     * @example
     * // Delete a few DateSlots
     * const { count } = await prisma.dateSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DateSlotDeleteManyArgs>(
      args?: SelectSubset<T, DateSlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateSlots
     * const dateSlot = await prisma.dateSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DateSlotUpdateManyArgs>(
      args: SelectSubset<T, DateSlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DateSlot.
     * @param {DateSlotUpsertArgs} args - Arguments to update or create a DateSlot.
     * @example
     * // Update or create a DateSlot
     * const dateSlot = await prisma.dateSlot.upsert({
     *   create: {
     *     // ... data to create a DateSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateSlot we want to update
     *   }
     * })
    **/
    upsert<T extends DateSlotUpsertArgs>(
      args: SelectSubset<T, DateSlotUpsertArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Count the number of DateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotCountArgs} args - Arguments to filter DateSlots to count.
     * @example
     * // Count the number of DateSlots
     * const count = await prisma.dateSlot.count({
     *   where: {
     *     // ... the filter for the DateSlots we want to count
     *   }
     * })
    **/
    count<T extends DateSlotCountArgs>(
      args?: Subset<T, DateSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateSlotAggregateArgs>(args: Subset<T, DateSlotAggregateArgs>): Prisma.PrismaPromise<GetDateSlotAggregateType<T>>

    /**
     * Group by DateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateSlotGroupByArgs['orderBy'] }
        : { orderBy?: DateSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DateSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DateSlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    availabilitySchedule<T extends AvailabilityScheduleArgs= {}>(args?: Subset<T, AvailabilityScheduleArgs>): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | Null>;

    custormer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    daySlot<T extends DaySlotArgs= {}>(args?: Subset<T, DaySlotArgs>): Prisma__DaySlotClient<DaySlotGetPayload<T> | Null>;

    dateOnTimeSlots<T extends DateSlot$dateOnTimeSlotsArgs= {}>(args?: Subset<T, DateSlot$dateOnTimeSlotsArgs>): Prisma.PrismaPromise<Array<DateOnTimeSlotGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DateSlot base type for findUnique actions
   */
  export type DateSlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where: DateSlotWhereUniqueInput
  }

  /**
   * DateSlot findUnique
   */
  export interface DateSlotFindUniqueArgs extends DateSlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlot findUniqueOrThrow
   */
  export type DateSlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot base type for findFirst actions
   */
  export type DateSlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlots.
     */
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }

  /**
   * DateSlot findFirst
   */
  export interface DateSlotFindFirstArgs extends DateSlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlot findFirstOrThrow
   */
  export type DateSlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlots.
     */
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * DateSlot findMany
   */
  export type DateSlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlots to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * DateSlot create
   */
  export type DateSlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The data needed to create a DateSlot.
     */
    data: XOR<DateSlotCreateInput, DateSlotUncheckedCreateInput>
  }


  /**
   * DateSlot update
   */
  export type DateSlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The data needed to update a DateSlot.
     */
    data: XOR<DateSlotUpdateInput, DateSlotUncheckedUpdateInput>
    /**
     * Choose, which DateSlot to update.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot updateMany
   */
  export type DateSlotUpdateManyArgs = {
    /**
     * The data used to update DateSlots.
     */
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyInput>
    /**
     * Filter which DateSlots to update
     */
    where?: DateSlotWhereInput
  }


  /**
   * DateSlot upsert
   */
  export type DateSlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The filter to search for the DateSlot to update in case it exists.
     */
    where: DateSlotWhereUniqueInput
    /**
     * In case the DateSlot found by the `where` argument doesn't exist, create a new DateSlot with this data.
     */
    create: XOR<DateSlotCreateInput, DateSlotUncheckedCreateInput>
    /**
     * In case the DateSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateSlotUpdateInput, DateSlotUncheckedUpdateInput>
  }


  /**
   * DateSlot delete
   */
  export type DateSlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter which DateSlot to delete.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot deleteMany
   */
  export type DateSlotDeleteManyArgs = {
    /**
     * Filter which DateSlots to delete
     */
    where?: DateSlotWhereInput
  }


  /**
   * DateSlot.dateOnTimeSlots
   */
  export type DateSlot$dateOnTimeSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    where?: DateOnTimeSlotWhereInput
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    cursor?: DateOnTimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateOnTimeSlotScalarFieldEnum>
  }


  /**
   * DateSlot without action
   */
  export type DateSlotArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
  }



  /**
   * Model DateOnTimeSlot
   */


  export type AggregateDateOnTimeSlot = {
    _count: DateOnTimeSlotCountAggregateOutputType | null
    _avg: DateOnTimeSlotAvgAggregateOutputType | null
    _sum: DateOnTimeSlotSumAggregateOutputType | null
    _min: DateOnTimeSlotMinAggregateOutputType | null
    _max: DateOnTimeSlotMaxAggregateOutputType | null
  }

  export type DateOnTimeSlotAvgAggregateOutputType = {
    id: number | null
    timeSlotId: number | null
    dateSlotId: number | null
  }

  export type DateOnTimeSlotSumAggregateOutputType = {
    id: number | null
    timeSlotId: number | null
    dateSlotId: number | null
  }

  export type DateOnTimeSlotMinAggregateOutputType = {
    id: number | null
    timeSlotId: number | null
    dateSlotId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateOnTimeSlotMaxAggregateOutputType = {
    id: number | null
    timeSlotId: number | null
    dateSlotId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateOnTimeSlotCountAggregateOutputType = {
    id: number
    timeSlotId: number
    dateSlotId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DateOnTimeSlotAvgAggregateInputType = {
    id?: true
    timeSlotId?: true
    dateSlotId?: true
  }

  export type DateOnTimeSlotSumAggregateInputType = {
    id?: true
    timeSlotId?: true
    dateSlotId?: true
  }

  export type DateOnTimeSlotMinAggregateInputType = {
    id?: true
    timeSlotId?: true
    dateSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateOnTimeSlotMaxAggregateInputType = {
    id?: true
    timeSlotId?: true
    dateSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateOnTimeSlotCountAggregateInputType = {
    id?: true
    timeSlotId?: true
    dateSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DateOnTimeSlotAggregateArgs = {
    /**
     * Filter which DateOnTimeSlot to aggregate.
     */
    where?: DateOnTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOnTimeSlots to fetch.
     */
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateOnTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOnTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOnTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateOnTimeSlots
    **/
    _count?: true | DateOnTimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateOnTimeSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateOnTimeSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateOnTimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateOnTimeSlotMaxAggregateInputType
  }

  export type GetDateOnTimeSlotAggregateType<T extends DateOnTimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDateOnTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateOnTimeSlot[P]>
      : GetScalarType<T[P], AggregateDateOnTimeSlot[P]>
  }




  export type DateOnTimeSlotGroupByArgs = {
    where?: DateOnTimeSlotWhereInput
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithAggregationInput>
    by: DateOnTimeSlotScalarFieldEnum[]
    having?: DateOnTimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateOnTimeSlotCountAggregateInputType | true
    _avg?: DateOnTimeSlotAvgAggregateInputType
    _sum?: DateOnTimeSlotSumAggregateInputType
    _min?: DateOnTimeSlotMinAggregateInputType
    _max?: DateOnTimeSlotMaxAggregateInputType
  }


  export type DateOnTimeSlotGroupByOutputType = {
    id: number
    timeSlotId: number
    dateSlotId: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DateOnTimeSlotCountAggregateOutputType | null
    _avg: DateOnTimeSlotAvgAggregateOutputType | null
    _sum: DateOnTimeSlotSumAggregateOutputType | null
    _min: DateOnTimeSlotMinAggregateOutputType | null
    _max: DateOnTimeSlotMaxAggregateOutputType | null
  }

  type GetDateOnTimeSlotGroupByPayload<T extends DateOnTimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DateOnTimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateOnTimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateOnTimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], DateOnTimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type DateOnTimeSlotSelect = {
    id?: boolean
    timeSlotId?: boolean
    dateSlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timeSlot?: boolean | TimeSlotArgs
    dateSlot?: boolean | DateSlotArgs
  }


  export type DateOnTimeSlotInclude = {
    timeSlot?: boolean | TimeSlotArgs
    dateSlot?: boolean | DateSlotArgs
  }

  export type DateOnTimeSlotGetPayload<S extends boolean | null | undefined | DateOnTimeSlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateOnTimeSlot :
    S extends undefined ? never :
    S extends { include: any } & (DateOnTimeSlotArgs | DateOnTimeSlotFindManyArgs)
    ? DateOnTimeSlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'timeSlot' ? TimeSlotGetPayload<S['include'][P]> :
        P extends 'dateSlot' ? DateSlotGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DateOnTimeSlotArgs | DateOnTimeSlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'timeSlot' ? TimeSlotGetPayload<S['select'][P]> :
        P extends 'dateSlot' ? DateSlotGetPayload<S['select'][P]> :  P extends keyof DateOnTimeSlot ? DateOnTimeSlot[P] : never
  } 
      : DateOnTimeSlot


  type DateOnTimeSlotCountArgs = 
    Omit<DateOnTimeSlotFindManyArgs, 'select' | 'include'> & {
      select?: DateOnTimeSlotCountAggregateInputType | true
    }

  export interface DateOnTimeSlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DateOnTimeSlot that matches the filter.
     * @param {DateOnTimeSlotFindUniqueArgs} args - Arguments to find a DateOnTimeSlot
     * @example
     * // Get one DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DateOnTimeSlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DateOnTimeSlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DateOnTimeSlot'> extends True ? Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>> : Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T> | null, null>

    /**
     * Find one DateOnTimeSlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DateOnTimeSlotFindUniqueOrThrowArgs} args - Arguments to find a DateOnTimeSlot
     * @example
     * // Get one DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DateOnTimeSlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DateOnTimeSlotFindUniqueOrThrowArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Find the first DateOnTimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotFindFirstArgs} args - Arguments to find a DateOnTimeSlot
     * @example
     * // Get one DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DateOnTimeSlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DateOnTimeSlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DateOnTimeSlot'> extends True ? Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>> : Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T> | null, null>

    /**
     * Find the first DateOnTimeSlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotFindFirstOrThrowArgs} args - Arguments to find a DateOnTimeSlot
     * @example
     * // Get one DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DateOnTimeSlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DateOnTimeSlotFindFirstOrThrowArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Find zero or more DateOnTimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateOnTimeSlots
     * const dateOnTimeSlots = await prisma.dateOnTimeSlot.findMany()
     * 
     * // Get first 10 DateOnTimeSlots
     * const dateOnTimeSlots = await prisma.dateOnTimeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateOnTimeSlotWithIdOnly = await prisma.dateOnTimeSlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DateOnTimeSlotFindManyArgs>(
      args?: SelectSubset<T, DateOnTimeSlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DateOnTimeSlotGetPayload<T>>>

    /**
     * Create a DateOnTimeSlot.
     * @param {DateOnTimeSlotCreateArgs} args - Arguments to create a DateOnTimeSlot.
     * @example
     * // Create one DateOnTimeSlot
     * const DateOnTimeSlot = await prisma.dateOnTimeSlot.create({
     *   data: {
     *     // ... data to create a DateOnTimeSlot
     *   }
     * })
     * 
    **/
    create<T extends DateOnTimeSlotCreateArgs>(
      args: SelectSubset<T, DateOnTimeSlotCreateArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Delete a DateOnTimeSlot.
     * @param {DateOnTimeSlotDeleteArgs} args - Arguments to delete one DateOnTimeSlot.
     * @example
     * // Delete one DateOnTimeSlot
     * const DateOnTimeSlot = await prisma.dateOnTimeSlot.delete({
     *   where: {
     *     // ... filter to delete one DateOnTimeSlot
     *   }
     * })
     * 
    **/
    delete<T extends DateOnTimeSlotDeleteArgs>(
      args: SelectSubset<T, DateOnTimeSlotDeleteArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Update one DateOnTimeSlot.
     * @param {DateOnTimeSlotUpdateArgs} args - Arguments to update one DateOnTimeSlot.
     * @example
     * // Update one DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DateOnTimeSlotUpdateArgs>(
      args: SelectSubset<T, DateOnTimeSlotUpdateArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Delete zero or more DateOnTimeSlots.
     * @param {DateOnTimeSlotDeleteManyArgs} args - Arguments to filter DateOnTimeSlots to delete.
     * @example
     * // Delete a few DateOnTimeSlots
     * const { count } = await prisma.dateOnTimeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DateOnTimeSlotDeleteManyArgs>(
      args?: SelectSubset<T, DateOnTimeSlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateOnTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateOnTimeSlots
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DateOnTimeSlotUpdateManyArgs>(
      args: SelectSubset<T, DateOnTimeSlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DateOnTimeSlot.
     * @param {DateOnTimeSlotUpsertArgs} args - Arguments to update or create a DateOnTimeSlot.
     * @example
     * // Update or create a DateOnTimeSlot
     * const dateOnTimeSlot = await prisma.dateOnTimeSlot.upsert({
     *   create: {
     *     // ... data to create a DateOnTimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateOnTimeSlot we want to update
     *   }
     * })
    **/
    upsert<T extends DateOnTimeSlotUpsertArgs>(
      args: SelectSubset<T, DateOnTimeSlotUpsertArgs>
    ): Prisma__DateOnTimeSlotClient<DateOnTimeSlotGetPayload<T>>

    /**
     * Count the number of DateOnTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotCountArgs} args - Arguments to filter DateOnTimeSlots to count.
     * @example
     * // Count the number of DateOnTimeSlots
     * const count = await prisma.dateOnTimeSlot.count({
     *   where: {
     *     // ... the filter for the DateOnTimeSlots we want to count
     *   }
     * })
    **/
    count<T extends DateOnTimeSlotCountArgs>(
      args?: Subset<T, DateOnTimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateOnTimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateOnTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateOnTimeSlotAggregateArgs>(args: Subset<T, DateOnTimeSlotAggregateArgs>): Prisma.PrismaPromise<GetDateOnTimeSlotAggregateType<T>>

    /**
     * Group by DateOnTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOnTimeSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateOnTimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateOnTimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: DateOnTimeSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateOnTimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateOnTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DateOnTimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DateOnTimeSlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    timeSlot<T extends TimeSlotArgs= {}>(args?: Subset<T, TimeSlotArgs>): Prisma__TimeSlotClient<TimeSlotGetPayload<T> | Null>;

    dateSlot<T extends DateSlotArgs= {}>(args?: Subset<T, DateSlotArgs>): Prisma__DateSlotClient<DateSlotGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DateOnTimeSlot base type for findUnique actions
   */
  export type DateOnTimeSlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter, which DateOnTimeSlot to fetch.
     */
    where: DateOnTimeSlotWhereUniqueInput
  }

  /**
   * DateOnTimeSlot findUnique
   */
  export interface DateOnTimeSlotFindUniqueArgs extends DateOnTimeSlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateOnTimeSlot findUniqueOrThrow
   */
  export type DateOnTimeSlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter, which DateOnTimeSlot to fetch.
     */
    where: DateOnTimeSlotWhereUniqueInput
  }


  /**
   * DateOnTimeSlot base type for findFirst actions
   */
  export type DateOnTimeSlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter, which DateOnTimeSlot to fetch.
     */
    where?: DateOnTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOnTimeSlots to fetch.
     */
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateOnTimeSlots.
     */
    cursor?: DateOnTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOnTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOnTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateOnTimeSlots.
     */
    distinct?: Enumerable<DateOnTimeSlotScalarFieldEnum>
  }

  /**
   * DateOnTimeSlot findFirst
   */
  export interface DateOnTimeSlotFindFirstArgs extends DateOnTimeSlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateOnTimeSlot findFirstOrThrow
   */
  export type DateOnTimeSlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter, which DateOnTimeSlot to fetch.
     */
    where?: DateOnTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOnTimeSlots to fetch.
     */
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateOnTimeSlots.
     */
    cursor?: DateOnTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOnTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOnTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateOnTimeSlots.
     */
    distinct?: Enumerable<DateOnTimeSlotScalarFieldEnum>
  }


  /**
   * DateOnTimeSlot findMany
   */
  export type DateOnTimeSlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter, which DateOnTimeSlots to fetch.
     */
    where?: DateOnTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOnTimeSlots to fetch.
     */
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateOnTimeSlots.
     */
    cursor?: DateOnTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOnTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOnTimeSlots.
     */
    skip?: number
    distinct?: Enumerable<DateOnTimeSlotScalarFieldEnum>
  }


  /**
   * DateOnTimeSlot create
   */
  export type DateOnTimeSlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * The data needed to create a DateOnTimeSlot.
     */
    data: XOR<DateOnTimeSlotCreateInput, DateOnTimeSlotUncheckedCreateInput>
  }


  /**
   * DateOnTimeSlot update
   */
  export type DateOnTimeSlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * The data needed to update a DateOnTimeSlot.
     */
    data: XOR<DateOnTimeSlotUpdateInput, DateOnTimeSlotUncheckedUpdateInput>
    /**
     * Choose, which DateOnTimeSlot to update.
     */
    where: DateOnTimeSlotWhereUniqueInput
  }


  /**
   * DateOnTimeSlot updateMany
   */
  export type DateOnTimeSlotUpdateManyArgs = {
    /**
     * The data used to update DateOnTimeSlots.
     */
    data: XOR<DateOnTimeSlotUpdateManyMutationInput, DateOnTimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which DateOnTimeSlots to update
     */
    where?: DateOnTimeSlotWhereInput
  }


  /**
   * DateOnTimeSlot upsert
   */
  export type DateOnTimeSlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * The filter to search for the DateOnTimeSlot to update in case it exists.
     */
    where: DateOnTimeSlotWhereUniqueInput
    /**
     * In case the DateOnTimeSlot found by the `where` argument doesn't exist, create a new DateOnTimeSlot with this data.
     */
    create: XOR<DateOnTimeSlotCreateInput, DateOnTimeSlotUncheckedCreateInput>
    /**
     * In case the DateOnTimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateOnTimeSlotUpdateInput, DateOnTimeSlotUncheckedUpdateInput>
  }


  /**
   * DateOnTimeSlot delete
   */
  export type DateOnTimeSlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    /**
     * Filter which DateOnTimeSlot to delete.
     */
    where: DateOnTimeSlotWhereUniqueInput
  }


  /**
   * DateOnTimeSlot deleteMany
   */
  export type DateOnTimeSlotDeleteManyArgs = {
    /**
     * Filter which DateOnTimeSlots to delete
     */
    where?: DateOnTimeSlotWhereInput
  }


  /**
   * DateOnTimeSlot without action
   */
  export type DateOnTimeSlotArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
  }



  /**
   * Model TimeSlot
   */


  export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  export type TimeSlotAvgAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
  }

  export type TimeSlotSumAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
  }

  export type TimeSlotMinAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSlotMaxAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSlotCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeSlotAvgAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSlotSumAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSlotMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSlotMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSlotCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeSlotAggregateArgs = {
    /**
     * Filter which TimeSlot to aggregate.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: Enumerable<TimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotMaxAggregateInputType
  }

  export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlot[P]>
      : GetScalarType<T[P], AggregateTimeSlot[P]>
  }




  export type TimeSlotGroupByArgs = {
    where?: TimeSlotWhereInput
    orderBy?: Enumerable<TimeSlotOrderByWithAggregationInput>
    by: TimeSlotScalarFieldEnum[]
    having?: TimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotCountAggregateInputType | true
    _avg?: TimeSlotAvgAggregateInputType
    _sum?: TimeSlotSumAggregateInputType
    _min?: TimeSlotMinAggregateInputType
    _max?: TimeSlotMaxAggregateInputType
  }


  export type TimeSlotGroupByOutputType = {
    id: number
    startTime: number
    endTime: number
    createdAt: Date
    updatedAt: Date
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotSelect = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateOnTimeSlots?: boolean | TimeSlot$dateOnTimeSlotsArgs
    _count?: boolean | TimeSlotCountOutputTypeArgs
  }


  export type TimeSlotInclude = {
    dateOnTimeSlots?: boolean | TimeSlot$dateOnTimeSlotsArgs
    _count?: boolean | TimeSlotCountOutputTypeArgs
  }

  export type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TimeSlot :
    S extends undefined ? never :
    S extends { include: any } & (TimeSlotArgs | TimeSlotFindManyArgs)
    ? TimeSlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dateOnTimeSlots' ? Array < DateOnTimeSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? TimeSlotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TimeSlotArgs | TimeSlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dateOnTimeSlots' ? Array < DateOnTimeSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? TimeSlotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TimeSlot ? TimeSlot[P] : never
  } 
      : TimeSlot


  type TimeSlotCountArgs = 
    Omit<TimeSlotFindManyArgs, 'select' | 'include'> & {
      select?: TimeSlotCountAggregateInputType | true
    }

  export interface TimeSlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TimeSlot that matches the filter.
     * @param {TimeSlotFindUniqueArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimeSlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TimeSlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TimeSlot'> extends True ? Prisma__TimeSlotClient<TimeSlotGetPayload<T>> : Prisma__TimeSlotClient<TimeSlotGetPayload<T> | null, null>

    /**
     * Find one TimeSlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TimeSlotFindUniqueOrThrowArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Find the first TimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimeSlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TimeSlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TimeSlot'> extends True ? Prisma__TimeSlotClient<TimeSlotGetPayload<T>> : Prisma__TimeSlotClient<TimeSlotGetPayload<T> | null, null>

    /**
     * Find the first TimeSlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TimeSlotFindFirstOrThrowArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimeSlotFindManyArgs>(
      args?: SelectSubset<T, TimeSlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<TimeSlotGetPayload<T>>>

    /**
     * Create a TimeSlot.
     * @param {TimeSlotCreateArgs} args - Arguments to create a TimeSlot.
     * @example
     * // Create one TimeSlot
     * const TimeSlot = await prisma.timeSlot.create({
     *   data: {
     *     // ... data to create a TimeSlot
     *   }
     * })
     * 
    **/
    create<T extends TimeSlotCreateArgs>(
      args: SelectSubset<T, TimeSlotCreateArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Delete a TimeSlot.
     * @param {TimeSlotDeleteArgs} args - Arguments to delete one TimeSlot.
     * @example
     * // Delete one TimeSlot
     * const TimeSlot = await prisma.timeSlot.delete({
     *   where: {
     *     // ... filter to delete one TimeSlot
     *   }
     * })
     * 
    **/
    delete<T extends TimeSlotDeleteArgs>(
      args: SelectSubset<T, TimeSlotDeleteArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Update one TimeSlot.
     * @param {TimeSlotUpdateArgs} args - Arguments to update one TimeSlot.
     * @example
     * // Update one TimeSlot
     * const timeSlot = await prisma.timeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimeSlotUpdateArgs>(
      args: SelectSubset<T, TimeSlotUpdateArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimeSlotDeleteManyArgs>(
      args?: SelectSubset<T, TimeSlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimeSlotUpdateManyArgs>(
      args: SelectSubset<T, TimeSlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeSlot.
     * @param {TimeSlotUpsertArgs} args - Arguments to update or create a TimeSlot.
     * @example
     * // Update or create a TimeSlot
     * const timeSlot = await prisma.timeSlot.upsert({
     *   create: {
     *     // ... data to create a TimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlot we want to update
     *   }
     * })
    **/
    upsert<T extends TimeSlotUpsertArgs>(
      args: SelectSubset<T, TimeSlotUpsertArgs>
    ): Prisma__TimeSlotClient<TimeSlotGetPayload<T>>

    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlot.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotCountArgs>(
      args?: Subset<T, TimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeSlotAggregateArgs>(args: Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>

    /**
     * Group by TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TimeSlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dateOnTimeSlots<T extends TimeSlot$dateOnTimeSlotsArgs= {}>(args?: Subset<T, TimeSlot$dateOnTimeSlotsArgs>): Prisma.PrismaPromise<Array<DateOnTimeSlotGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TimeSlot base type for findUnique actions
   */
  export type TimeSlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findUnique
   */
  export interface TimeSlotFindUniqueArgs extends TimeSlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeSlot findUniqueOrThrow
   */
  export type TimeSlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }


  /**
   * TimeSlot base type for findFirst actions
   */
  export type TimeSlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: Enumerable<TimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: Enumerable<TimeSlotScalarFieldEnum>
  }

  /**
   * TimeSlot findFirst
   */
  export interface TimeSlotFindFirstArgs extends TimeSlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeSlot findFirstOrThrow
   */
  export type TimeSlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: Enumerable<TimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: Enumerable<TimeSlotScalarFieldEnum>
  }


  /**
   * TimeSlot findMany
   */
  export type TimeSlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: Enumerable<TimeSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: Enumerable<TimeSlotScalarFieldEnum>
  }


  /**
   * TimeSlot create
   */
  export type TimeSlotCreateArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * The data needed to create a TimeSlot.
     */
    data: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
  }


  /**
   * TimeSlot update
   */
  export type TimeSlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * The data needed to update a TimeSlot.
     */
    data: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
    /**
     * Choose, which TimeSlot to update.
     */
    where: TimeSlotWhereUniqueInput
  }


  /**
   * TimeSlot updateMany
   */
  export type TimeSlotUpdateManyArgs = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
  }


  /**
   * TimeSlot upsert
   */
  export type TimeSlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * The filter to search for the TimeSlot to update in case it exists.
     */
    where: TimeSlotWhereUniqueInput
    /**
     * In case the TimeSlot found by the `where` argument doesn't exist, create a new TimeSlot with this data.
     */
    create: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
    /**
     * In case the TimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
  }


  /**
   * TimeSlot delete
   */
  export type TimeSlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
    /**
     * Filter which TimeSlot to delete.
     */
    where: TimeSlotWhereUniqueInput
  }


  /**
   * TimeSlot deleteMany
   */
  export type TimeSlotDeleteManyArgs = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotWhereInput
  }


  /**
   * TimeSlot.dateOnTimeSlots
   */
  export type TimeSlot$dateOnTimeSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateOnTimeSlot
     */
    select?: DateOnTimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateOnTimeSlotInclude | null
    where?: DateOnTimeSlotWhereInput
    orderBy?: Enumerable<DateOnTimeSlotOrderByWithRelationInput>
    cursor?: DateOnTimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateOnTimeSlotScalarFieldEnum>
  }


  /**
   * TimeSlot without action
   */
  export type TimeSlotArgs = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSlotInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupMeetings?: boolean | Customer$groupMeetingsArgs
    dateSlots?: boolean | Customer$dateSlotsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    groupMeetings?: boolean | Customer$groupMeetingsArgs
    dateSlots?: boolean | Customer$dateSlotsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    groupMeetings<T extends Customer$groupMeetingsArgs= {}>(args?: Subset<T, Customer$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

    dateSlots<T extends Customer$dateSlotsArgs= {}>(args?: Subset<T, Customer$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.groupMeetings
   */
  export type Customer$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * Customer.dateSlots
   */
  export type Customer$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
  }



  /**
   * Model Billing
   */


  export type AggregateBilling = {
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  export type BillingAvgAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
  }

  export type BillingSumAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
  }

  export type BillingMinAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingMaxAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingCountAggregateOutputType = {
    id: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillingAvgAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
  }

  export type BillingSumAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
  }

  export type BillingMinAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingMaxAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingCountAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillingAggregateArgs = {
    /**
     * Filter which Billing to aggregate.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billings
    **/
    _count?: true | BillingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingMaxAggregateInputType
  }

  export type GetBillingAggregateType<T extends BillingAggregateArgs> = {
        [P in keyof T & keyof AggregateBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilling[P]>
      : GetScalarType<T[P], AggregateBilling[P]>
  }




  export type BillingGroupByArgs = {
    where?: BillingWhereInput
    orderBy?: Enumerable<BillingOrderByWithAggregationInput>
    by: BillingScalarFieldEnum[]
    having?: BillingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingCountAggregateInputType | true
    _avg?: BillingAvgAggregateInputType
    _sum?: BillingSumAggregateInputType
    _min?: BillingMinAggregateInputType
    _max?: BillingMaxAggregateInputType
  }


  export type BillingGroupByOutputType = {
    id: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  type GetBillingGroupByPayload<T extends BillingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BillingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingGroupByOutputType[P]>
            : GetScalarType<T[P], BillingGroupByOutputType[P]>
        }
      >
    >


  export type BillingSelect = {
    id?: boolean
    subscriptionMonth?: boolean
    subscriptionPrice?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type BillingInclude = {
    user?: boolean | UserArgs
  }

  export type BillingGetPayload<S extends boolean | null | undefined | BillingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Billing :
    S extends undefined ? never :
    S extends { include: any } & (BillingArgs | BillingFindManyArgs)
    ? Billing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BillingArgs | BillingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Billing ? Billing[P] : never
  } 
      : Billing


  type BillingCountArgs = 
    Omit<BillingFindManyArgs, 'select' | 'include'> & {
      select?: BillingCountAggregateInputType | true
    }

  export interface BillingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Billing that matches the filter.
     * @param {BillingFindUniqueArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BillingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Billing'> extends True ? Prisma__BillingClient<BillingGetPayload<T>> : Prisma__BillingClient<BillingGetPayload<T> | null, null>

    /**
     * Find one Billing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillingFindUniqueOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BillingFindUniqueOrThrowArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Find the first Billing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BillingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Billing'> extends True ? Prisma__BillingClient<BillingGetPayload<T>> : Prisma__BillingClient<BillingGetPayload<T> | null, null>

    /**
     * Find the first Billing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BillingFindFirstOrThrowArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billing.findMany()
     * 
     * // Get first 10 Billings
     * const billings = await prisma.billing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingWithIdOnly = await prisma.billing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillingFindManyArgs>(
      args?: SelectSubset<T, BillingFindManyArgs>
    ): Prisma.PrismaPromise<Array<BillingGetPayload<T>>>

    /**
     * Create a Billing.
     * @param {BillingCreateArgs} args - Arguments to create a Billing.
     * @example
     * // Create one Billing
     * const Billing = await prisma.billing.create({
     *   data: {
     *     // ... data to create a Billing
     *   }
     * })
     * 
    **/
    create<T extends BillingCreateArgs>(
      args: SelectSubset<T, BillingCreateArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Delete a Billing.
     * @param {BillingDeleteArgs} args - Arguments to delete one Billing.
     * @example
     * // Delete one Billing
     * const Billing = await prisma.billing.delete({
     *   where: {
     *     // ... filter to delete one Billing
     *   }
     * })
     * 
    **/
    delete<T extends BillingDeleteArgs>(
      args: SelectSubset<T, BillingDeleteArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Update one Billing.
     * @param {BillingUpdateArgs} args - Arguments to update one Billing.
     * @example
     * // Update one Billing
     * const billing = await prisma.billing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillingUpdateArgs>(
      args: SelectSubset<T, BillingUpdateArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Delete zero or more Billings.
     * @param {BillingDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillingDeleteManyArgs>(
      args?: SelectSubset<T, BillingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillingUpdateManyArgs>(
      args: SelectSubset<T, BillingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billing.
     * @param {BillingUpsertArgs} args - Arguments to update or create a Billing.
     * @example
     * // Update or create a Billing
     * const billing = await prisma.billing.upsert({
     *   create: {
     *     // ... data to create a Billing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billing we want to update
     *   }
     * })
    **/
    upsert<T extends BillingUpsertArgs>(
      args: SelectSubset<T, BillingUpsertArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billing.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
    **/
    count<T extends BillingCountArgs>(
      args?: Subset<T, BillingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingAggregateArgs>(args: Subset<T, BillingAggregateArgs>): Prisma.PrismaPromise<GetBillingAggregateType<T>>

    /**
     * Group by Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingGroupByArgs['orderBy'] }
        : { orderBy?: BillingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Billing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BillingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Billing base type for findUnique actions
   */
  export type BillingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing findUnique
   */
  export interface BillingFindUniqueArgs extends BillingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billing findUniqueOrThrow
   */
  export type BillingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing base type for findFirst actions
   */
  export type BillingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: Enumerable<BillingScalarFieldEnum>
  }

  /**
   * Billing findFirst
   */
  export interface BillingFindFirstArgs extends BillingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billing findFirstOrThrow
   */
  export type BillingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * Billing findMany
   */
  export type BillingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * Billing create
   */
  export type BillingCreateArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The data needed to create a Billing.
     */
    data: XOR<BillingCreateInput, BillingUncheckedCreateInput>
  }


  /**
   * Billing update
   */
  export type BillingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The data needed to update a Billing.
     */
    data: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
    /**
     * Choose, which Billing to update.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing updateMany
   */
  export type BillingUpdateManyArgs = {
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingWhereInput
  }


  /**
   * Billing upsert
   */
  export type BillingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The filter to search for the Billing to update in case it exists.
     */
    where: BillingWhereUniqueInput
    /**
     * In case the Billing found by the `where` argument doesn't exist, create a new Billing with this data.
     */
    create: XOR<BillingCreateInput, BillingUncheckedCreateInput>
    /**
     * In case the Billing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
  }


  /**
   * Billing delete
   */
  export type BillingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter which Billing to delete.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing deleteMany
   */
  export type BillingDeleteManyArgs = {
    /**
     * Filter which Billings to delete
     */
    where?: BillingWhereInput
  }


  /**
   * Billing without action
   */
  export type BillingArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
  }



  /**
   * Model GroupMeeting
   */


  export type AggregateGroupMeeting = {
    _count: GroupMeetingCountAggregateOutputType | null
    _avg: GroupMeetingAvgAggregateOutputType | null
    _sum: GroupMeetingSumAggregateOutputType | null
    _min: GroupMeetingMinAggregateOutputType | null
    _max: GroupMeetingMaxAggregateOutputType | null
  }

  export type GroupMeetingAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    eventTypeId: number | null
  }

  export type GroupMeetingSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    eventTypeId: number | null
  }

  export type GroupMeetingMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    timezone: string | null
    eventTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMeetingMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    timezone: string | null
    eventTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMeetingCountAggregateOutputType = {
    id: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: number
    eventTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMeetingAvgAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    eventTypeId?: true
  }

  export type GroupMeetingSumAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    eventTypeId?: true
  }

  export type GroupMeetingMinAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMeetingMaxAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMeetingCountAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupMeetingAggregateArgs = {
    /**
     * Filter which GroupMeeting to aggregate.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMeetings
    **/
    _count?: true | GroupMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMeetingMaxAggregateInputType
  }

  export type GetGroupMeetingAggregateType<T extends GroupMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMeeting[P]>
      : GetScalarType<T[P], AggregateGroupMeeting[P]>
  }




  export type GroupMeetingGroupByArgs = {
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithAggregationInput>
    by: GroupMeetingScalarFieldEnum[]
    having?: GroupMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMeetingCountAggregateInputType | true
    _avg?: GroupMeetingAvgAggregateInputType
    _sum?: GroupMeetingSumAggregateInputType
    _min?: GroupMeetingMinAggregateInputType
    _max?: GroupMeetingMaxAggregateInputType
  }


  export type GroupMeetingGroupByOutputType = {
    id: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt: Date
    updatedAt: Date
    _count: GroupMeetingCountAggregateOutputType | null
    _avg: GroupMeetingAvgAggregateOutputType | null
    _sum: GroupMeetingSumAggregateOutputType | null
    _min: GroupMeetingMinAggregateOutputType | null
    _max: GroupMeetingMaxAggregateOutputType | null
  }

  type GetGroupMeetingGroupByPayload<T extends GroupMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMeetingGroupByOutputType[P]>
        }
      >
    >


  export type GroupMeetingSelect = {
    id?: boolean
    locationId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    timezone?: boolean
    eventTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationArgs
    customer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    userOnGroupMeetings?: boolean | GroupMeeting$userOnGroupMeetingsArgs
    _count?: boolean | GroupMeetingCountOutputTypeArgs
  }


  export type GroupMeetingInclude = {
    location?: boolean | LocationArgs
    customer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    userOnGroupMeetings?: boolean | GroupMeeting$userOnGroupMeetingsArgs
    _count?: boolean | GroupMeetingCountOutputTypeArgs
  }

  export type GroupMeetingGetPayload<S extends boolean | null | undefined | GroupMeetingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GroupMeeting :
    S extends undefined ? never :
    S extends { include: any } & (GroupMeetingArgs | GroupMeetingFindManyArgs)
    ? GroupMeeting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? GroupMeetingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GroupMeetingArgs | GroupMeetingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['select'][P]>>  :
        P extends '_count' ? GroupMeetingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GroupMeeting ? GroupMeeting[P] : never
  } 
      : GroupMeeting


  type GroupMeetingCountArgs = 
    Omit<GroupMeetingFindManyArgs, 'select' | 'include'> & {
      select?: GroupMeetingCountAggregateInputType | true
    }

  export interface GroupMeetingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GroupMeeting that matches the filter.
     * @param {GroupMeetingFindUniqueArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMeetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupMeetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupMeeting'> extends True ? Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>> : Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | null, null>

    /**
     * Find one GroupMeeting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMeetingFindUniqueOrThrowArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMeetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GroupMeetingFindUniqueOrThrowArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Find the first GroupMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindFirstArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMeetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupMeetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupMeeting'> extends True ? Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>> : Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | null, null>

    /**
     * Find the first GroupMeeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindFirstOrThrowArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMeetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GroupMeetingFindFirstOrThrowArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Find zero or more GroupMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMeetings
     * const groupMeetings = await prisma.groupMeeting.findMany()
     * 
     * // Get first 10 GroupMeetings
     * const groupMeetings = await prisma.groupMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMeetingWithIdOnly = await prisma.groupMeeting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMeetingFindManyArgs>(
      args?: SelectSubset<T, GroupMeetingFindManyArgs>
    ): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>>

    /**
     * Create a GroupMeeting.
     * @param {GroupMeetingCreateArgs} args - Arguments to create a GroupMeeting.
     * @example
     * // Create one GroupMeeting
     * const GroupMeeting = await prisma.groupMeeting.create({
     *   data: {
     *     // ... data to create a GroupMeeting
     *   }
     * })
     * 
    **/
    create<T extends GroupMeetingCreateArgs>(
      args: SelectSubset<T, GroupMeetingCreateArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Delete a GroupMeeting.
     * @param {GroupMeetingDeleteArgs} args - Arguments to delete one GroupMeeting.
     * @example
     * // Delete one GroupMeeting
     * const GroupMeeting = await prisma.groupMeeting.delete({
     *   where: {
     *     // ... filter to delete one GroupMeeting
     *   }
     * })
     * 
    **/
    delete<T extends GroupMeetingDeleteArgs>(
      args: SelectSubset<T, GroupMeetingDeleteArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Update one GroupMeeting.
     * @param {GroupMeetingUpdateArgs} args - Arguments to update one GroupMeeting.
     * @example
     * // Update one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMeetingUpdateArgs>(
      args: SelectSubset<T, GroupMeetingUpdateArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Delete zero or more GroupMeetings.
     * @param {GroupMeetingDeleteManyArgs} args - Arguments to filter GroupMeetings to delete.
     * @example
     * // Delete a few GroupMeetings
     * const { count } = await prisma.groupMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMeetingDeleteManyArgs>(
      args?: SelectSubset<T, GroupMeetingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMeetings
     * const groupMeeting = await prisma.groupMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMeetingUpdateManyArgs>(
      args: SelectSubset<T, GroupMeetingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMeeting.
     * @param {GroupMeetingUpsertArgs} args - Arguments to update or create a GroupMeeting.
     * @example
     * // Update or create a GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.upsert({
     *   create: {
     *     // ... data to create a GroupMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMeeting we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMeetingUpsertArgs>(
      args: SelectSubset<T, GroupMeetingUpsertArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Count the number of GroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingCountArgs} args - Arguments to filter GroupMeetings to count.
     * @example
     * // Count the number of GroupMeetings
     * const count = await prisma.groupMeeting.count({
     *   where: {
     *     // ... the filter for the GroupMeetings we want to count
     *   }
     * })
    **/
    count<T extends GroupMeetingCountArgs>(
      args?: Subset<T, GroupMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMeetingAggregateArgs>(args: Subset<T, GroupMeetingAggregateArgs>): Prisma.PrismaPromise<GetGroupMeetingAggregateType<T>>

    /**
     * Group by GroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMeetingGroupByArgs['orderBy'] }
        : { orderBy?: GroupMeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupMeetingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    userOnGroupMeetings<T extends GroupMeeting$userOnGroupMeetingsArgs= {}>(args?: Subset<T, GroupMeeting$userOnGroupMeetingsArgs>): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GroupMeeting base type for findUnique actions
   */
  export type GroupMeetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where: GroupMeetingWhereUniqueInput
  }

  /**
   * GroupMeeting findUnique
   */
  export interface GroupMeetingFindUniqueArgs extends GroupMeetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMeeting findUniqueOrThrow
   */
  export type GroupMeetingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting base type for findFirst actions
   */
  export type GroupMeetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMeetings.
     */
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }

  /**
   * GroupMeeting findFirst
   */
  export interface GroupMeetingFindFirstArgs extends GroupMeetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMeeting findFirstOrThrow
   */
  export type GroupMeetingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMeetings.
     */
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting findMany
   */
  export type GroupMeetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeetings to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting create
   */
  export type GroupMeetingCreateArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The data needed to create a GroupMeeting.
     */
    data: XOR<GroupMeetingCreateInput, GroupMeetingUncheckedCreateInput>
  }


  /**
   * GroupMeeting update
   */
  export type GroupMeetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The data needed to update a GroupMeeting.
     */
    data: XOR<GroupMeetingUpdateInput, GroupMeetingUncheckedUpdateInput>
    /**
     * Choose, which GroupMeeting to update.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting updateMany
   */
  export type GroupMeetingUpdateManyArgs = {
    /**
     * The data used to update GroupMeetings.
     */
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyInput>
    /**
     * Filter which GroupMeetings to update
     */
    where?: GroupMeetingWhereInput
  }


  /**
   * GroupMeeting upsert
   */
  export type GroupMeetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The filter to search for the GroupMeeting to update in case it exists.
     */
    where: GroupMeetingWhereUniqueInput
    /**
     * In case the GroupMeeting found by the `where` argument doesn't exist, create a new GroupMeeting with this data.
     */
    create: XOR<GroupMeetingCreateInput, GroupMeetingUncheckedCreateInput>
    /**
     * In case the GroupMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMeetingUpdateInput, GroupMeetingUncheckedUpdateInput>
  }


  /**
   * GroupMeeting delete
   */
  export type GroupMeetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter which GroupMeeting to delete.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting deleteMany
   */
  export type GroupMeetingDeleteManyArgs = {
    /**
     * Filter which GroupMeetings to delete
     */
    where?: GroupMeetingWhereInput
  }


  /**
   * GroupMeeting.userOnGroupMeetings
   */
  export type GroupMeeting$userOnGroupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    cursor?: UserOnGroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting without action
   */
  export type GroupMeetingArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
  }



  /**
   * Model UserOnGroupMeeting
   */


  export type AggregateUserOnGroupMeeting = {
    _count: UserOnGroupMeetingCountAggregateOutputType | null
    _avg: UserOnGroupMeetingAvgAggregateOutputType | null
    _sum: UserOnGroupMeetingSumAggregateOutputType | null
    _min: UserOnGroupMeetingMinAggregateOutputType | null
    _max: UserOnGroupMeetingMaxAggregateOutputType | null
  }

  export type UserOnGroupMeetingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
  }

  export type UserOnGroupMeetingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
  }

  export type UserOnGroupMeetingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnGroupMeetingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnGroupMeetingCountAggregateOutputType = {
    id: number
    userId: number
    groupMeetingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserOnGroupMeetingAvgAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
  }

  export type UserOnGroupMeetingSumAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
  }

  export type UserOnGroupMeetingMinAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnGroupMeetingMaxAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnGroupMeetingCountAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserOnGroupMeetingAggregateArgs = {
    /**
     * Filter which UserOnGroupMeeting to aggregate.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnGroupMeetings
    **/
    _count?: true | UserOnGroupMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnGroupMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnGroupMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnGroupMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnGroupMeetingMaxAggregateInputType
  }

  export type GetUserOnGroupMeetingAggregateType<T extends UserOnGroupMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnGroupMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnGroupMeeting[P]>
      : GetScalarType<T[P], AggregateUserOnGroupMeeting[P]>
  }




  export type UserOnGroupMeetingGroupByArgs = {
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithAggregationInput>
    by: UserOnGroupMeetingScalarFieldEnum[]
    having?: UserOnGroupMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnGroupMeetingCountAggregateInputType | true
    _avg?: UserOnGroupMeetingAvgAggregateInputType
    _sum?: UserOnGroupMeetingSumAggregateInputType
    _min?: UserOnGroupMeetingMinAggregateInputType
    _max?: UserOnGroupMeetingMaxAggregateInputType
  }


  export type UserOnGroupMeetingGroupByOutputType = {
    id: number
    userId: number
    groupMeetingId: number
    createdAt: Date
    updatedAt: Date
    _count: UserOnGroupMeetingCountAggregateOutputType | null
    _avg: UserOnGroupMeetingAvgAggregateOutputType | null
    _sum: UserOnGroupMeetingSumAggregateOutputType | null
    _min: UserOnGroupMeetingMinAggregateOutputType | null
    _max: UserOnGroupMeetingMaxAggregateOutputType | null
  }

  type GetUserOnGroupMeetingGroupByPayload<T extends UserOnGroupMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserOnGroupMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnGroupMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnGroupMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnGroupMeetingGroupByOutputType[P]>
        }
      >
    >


  export type UserOnGroupMeetingSelect = {
    id?: boolean
    userId?: boolean
    groupMeetingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    groupMeeting?: boolean | GroupMeetingArgs
  }


  export type UserOnGroupMeetingInclude = {
    user?: boolean | UserArgs
    groupMeeting?: boolean | GroupMeetingArgs
  }

  export type UserOnGroupMeetingGetPayload<S extends boolean | null | undefined | UserOnGroupMeetingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserOnGroupMeeting :
    S extends undefined ? never :
    S extends { include: any } & (UserOnGroupMeetingArgs | UserOnGroupMeetingFindManyArgs)
    ? UserOnGroupMeeting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'groupMeeting' ? GroupMeetingGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserOnGroupMeetingArgs | UserOnGroupMeetingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'groupMeeting' ? GroupMeetingGetPayload<S['select'][P]> :  P extends keyof UserOnGroupMeeting ? UserOnGroupMeeting[P] : never
  } 
      : UserOnGroupMeeting


  type UserOnGroupMeetingCountArgs = 
    Omit<UserOnGroupMeetingFindManyArgs, 'select' | 'include'> & {
      select?: UserOnGroupMeetingCountAggregateInputType | true
    }

  export interface UserOnGroupMeetingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserOnGroupMeeting that matches the filter.
     * @param {UserOnGroupMeetingFindUniqueArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserOnGroupMeetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserOnGroupMeetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserOnGroupMeeting'> extends True ? Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>> : Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T> | null, null>

    /**
     * Find one UserOnGroupMeeting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserOnGroupMeetingFindUniqueOrThrowArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserOnGroupMeetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindUniqueOrThrowArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Find the first UserOnGroupMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindFirstArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserOnGroupMeetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserOnGroupMeetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserOnGroupMeeting'> extends True ? Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>> : Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T> | null, null>

    /**
     * Find the first UserOnGroupMeeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindFirstOrThrowArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserOnGroupMeetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindFirstOrThrowArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Find zero or more UserOnGroupMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnGroupMeetings
     * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany()
     * 
     * // Get first 10 UserOnGroupMeetings
     * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOnGroupMeetingWithIdOnly = await prisma.userOnGroupMeeting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserOnGroupMeetingFindManyArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>>

    /**
     * Create a UserOnGroupMeeting.
     * @param {UserOnGroupMeetingCreateArgs} args - Arguments to create a UserOnGroupMeeting.
     * @example
     * // Create one UserOnGroupMeeting
     * const UserOnGroupMeeting = await prisma.userOnGroupMeeting.create({
     *   data: {
     *     // ... data to create a UserOnGroupMeeting
     *   }
     * })
     * 
    **/
    create<T extends UserOnGroupMeetingCreateArgs>(
      args: SelectSubset<T, UserOnGroupMeetingCreateArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Delete a UserOnGroupMeeting.
     * @param {UserOnGroupMeetingDeleteArgs} args - Arguments to delete one UserOnGroupMeeting.
     * @example
     * // Delete one UserOnGroupMeeting
     * const UserOnGroupMeeting = await prisma.userOnGroupMeeting.delete({
     *   where: {
     *     // ... filter to delete one UserOnGroupMeeting
     *   }
     * })
     * 
    **/
    delete<T extends UserOnGroupMeetingDeleteArgs>(
      args: SelectSubset<T, UserOnGroupMeetingDeleteArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Update one UserOnGroupMeeting.
     * @param {UserOnGroupMeetingUpdateArgs} args - Arguments to update one UserOnGroupMeeting.
     * @example
     * // Update one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserOnGroupMeetingUpdateArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpdateArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Delete zero or more UserOnGroupMeetings.
     * @param {UserOnGroupMeetingDeleteManyArgs} args - Arguments to filter UserOnGroupMeetings to delete.
     * @example
     * // Delete a few UserOnGroupMeetings
     * const { count } = await prisma.userOnGroupMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserOnGroupMeetingDeleteManyArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnGroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnGroupMeetings
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserOnGroupMeetingUpdateManyArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnGroupMeeting.
     * @param {UserOnGroupMeetingUpsertArgs} args - Arguments to update or create a UserOnGroupMeeting.
     * @example
     * // Update or create a UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.upsert({
     *   create: {
     *     // ... data to create a UserOnGroupMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnGroupMeeting we want to update
     *   }
     * })
    **/
    upsert<T extends UserOnGroupMeetingUpsertArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpsertArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Count the number of UserOnGroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingCountArgs} args - Arguments to filter UserOnGroupMeetings to count.
     * @example
     * // Count the number of UserOnGroupMeetings
     * const count = await prisma.userOnGroupMeeting.count({
     *   where: {
     *     // ... the filter for the UserOnGroupMeetings we want to count
     *   }
     * })
    **/
    count<T extends UserOnGroupMeetingCountArgs>(
      args?: Subset<T, UserOnGroupMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnGroupMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnGroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnGroupMeetingAggregateArgs>(args: Subset<T, UserOnGroupMeetingAggregateArgs>): Prisma.PrismaPromise<GetUserOnGroupMeetingAggregateType<T>>

    /**
     * Group by UserOnGroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnGroupMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnGroupMeetingGroupByArgs['orderBy'] }
        : { orderBy?: UserOnGroupMeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnGroupMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnGroupMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnGroupMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserOnGroupMeetingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    groupMeeting<T extends GroupMeetingArgs= {}>(args?: Subset<T, GroupMeetingArgs>): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserOnGroupMeeting base type for findUnique actions
   */
  export type UserOnGroupMeetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }

  /**
   * UserOnGroupMeeting findUnique
   */
  export interface UserOnGroupMeetingFindUniqueArgs extends UserOnGroupMeetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnGroupMeeting findUniqueOrThrow
   */
  export type UserOnGroupMeetingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting base type for findFirst actions
   */
  export type UserOnGroupMeetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupMeetings.
     */
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }

  /**
   * UserOnGroupMeeting findFirst
   */
  export interface UserOnGroupMeetingFindFirstArgs extends UserOnGroupMeetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnGroupMeeting findFirstOrThrow
   */
  export type UserOnGroupMeetingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupMeetings.
     */
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * UserOnGroupMeeting findMany
   */
  export type UserOnGroupMeetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeetings to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * UserOnGroupMeeting create
   */
  export type UserOnGroupMeetingCreateArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The data needed to create a UserOnGroupMeeting.
     */
    data: XOR<UserOnGroupMeetingCreateInput, UserOnGroupMeetingUncheckedCreateInput>
  }


  /**
   * UserOnGroupMeeting update
   */
  export type UserOnGroupMeetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The data needed to update a UserOnGroupMeeting.
     */
    data: XOR<UserOnGroupMeetingUpdateInput, UserOnGroupMeetingUncheckedUpdateInput>
    /**
     * Choose, which UserOnGroupMeeting to update.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting updateMany
   */
  export type UserOnGroupMeetingUpdateManyArgs = {
    /**
     * The data used to update UserOnGroupMeetings.
     */
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyInput>
    /**
     * Filter which UserOnGroupMeetings to update
     */
    where?: UserOnGroupMeetingWhereInput
  }


  /**
   * UserOnGroupMeeting upsert
   */
  export type UserOnGroupMeetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The filter to search for the UserOnGroupMeeting to update in case it exists.
     */
    where: UserOnGroupMeetingWhereUniqueInput
    /**
     * In case the UserOnGroupMeeting found by the `where` argument doesn't exist, create a new UserOnGroupMeeting with this data.
     */
    create: XOR<UserOnGroupMeetingCreateInput, UserOnGroupMeetingUncheckedCreateInput>
    /**
     * In case the UserOnGroupMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnGroupMeetingUpdateInput, UserOnGroupMeetingUncheckedUpdateInput>
  }


  /**
   * UserOnGroupMeeting delete
   */
  export type UserOnGroupMeetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter which UserOnGroupMeeting to delete.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting deleteMany
   */
  export type UserOnGroupMeetingDeleteManyArgs = {
    /**
     * Filter which UserOnGroupMeetings to delete
     */
    where?: UserOnGroupMeetingWhereInput
  }


  /**
   * UserOnGroupMeeting without action
   */
  export type UserOnGroupMeetingArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
  }



  /**
   * Model Appointment
   */


  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    organizerId: number | null
    attendeeId: number | null
    eventTypeId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    organizerId: number | null
    attendeeId: number | null
    eventTypeId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    organizerId: number | null
    attendeeId: number | null
    eventTypeId: number | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    organizerId: number | null
    attendeeId: number | null
    eventTypeId: number | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    organizerId: number
    attendeeId: number
    eventTypeId: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    organizerId?: true
    attendeeId?: true
    eventTypeId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    organizerId?: true
    attendeeId?: true
    eventTypeId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    organizerId?: true
    attendeeId?: true
    eventTypeId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    organizerId?: true
    attendeeId?: true
    eventTypeId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    organizerId?: true
    attendeeId?: true
    eventTypeId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs = {
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithAggregationInput>
    by: AppointmentScalarFieldEnum[]
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }


  export type AppointmentGroupByOutputType = {
    id: number
    organizerId: number
    attendeeId: number
    eventTypeId: number
    startTime: Date
    endTime: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect = {
    id?: boolean
    organizerId?: boolean
    attendeeId?: boolean
    eventTypeId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserArgs
    attendee?: boolean | UserArgs
    eventType?: boolean | EventTypeArgs
  }


  export type AppointmentInclude = {
    organizer?: boolean | UserArgs
    attendee?: boolean | UserArgs
    eventType?: boolean | EventTypeArgs
  }

  export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Appointment :
    S extends undefined ? never :
    S extends { include: any } & (AppointmentArgs | AppointmentFindManyArgs)
    ? Appointment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'organizer' ? UserGetPayload<S['include'][P]> :
        P extends 'attendee' ? UserGetPayload<S['include'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AppointmentArgs | AppointmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'organizer' ? UserGetPayload<S['select'][P]> :
        P extends 'attendee' ? UserGetPayload<S['select'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :  P extends keyof Appointment ? Appointment[P] : never
  } 
      : Appointment


  type AppointmentCountArgs = 
    Omit<AppointmentFindManyArgs, 'select' | 'include'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppointmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Appointment'> extends True ? Prisma__AppointmentClient<AppointmentGetPayload<T>> : Prisma__AppointmentClient<AppointmentGetPayload<T> | null, null>

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindUniqueOrThrowArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppointmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Appointment'> extends True ? Prisma__AppointmentClient<AppointmentGetPayload<T>> : Prisma__AppointmentClient<AppointmentGetPayload<T> | null, null>

    /**
     * Find the first Appointment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentFindManyArgs>(
      args?: SelectSubset<T, AppointmentFindManyArgs>
    ): Prisma.PrismaPromise<Array<AppointmentGetPayload<T>>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
    **/
    create<T extends AppointmentCreateArgs>(
      args: SelectSubset<T, AppointmentCreateArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDeleteArgs>(
      args: SelectSubset<T, AppointmentDeleteArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentUpdateArgs>(
      args: SelectSubset<T, AppointmentUpdateArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDeleteManyArgs>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentUpdateManyArgs>(
      args: SelectSubset<T, AppointmentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentUpsertArgs>(
      args: SelectSubset<T, AppointmentUpsertArgs>
    ): Prisma__AppointmentClient<AppointmentGetPayload<T>>

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppointmentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    organizer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    attendee<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Appointment base type for findUnique actions
   */
  export type AppointmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUnique
   */
  export interface AppointmentFindUniqueArgs extends AppointmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment base type for findFirst actions
   */
  export type AppointmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }

  /**
   * Appointment findFirst
   */
  export interface AppointmentFindFirstArgs extends AppointmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * Appointment create
   */
  export type AppointmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }


  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }


  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }


  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }


  /**
   * Appointment without action
   */
  export type AppointmentArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppointmentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AppointmentScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    attendeeId: 'attendeeId',
    eventTypeId: 'eventTypeId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AvailabilityScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityScheduleScalarFieldEnum = (typeof AvailabilityScheduleScalarFieldEnum)[keyof typeof AvailabilityScheduleScalarFieldEnum]


  export const BillingScalarFieldEnum: {
    id: 'id',
    subscriptionMonth: 'subscriptionMonth',
    subscriptionPrice: 'subscriptionPrice',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillingScalarFieldEnum = (typeof BillingScalarFieldEnum)[keyof typeof BillingScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DateOnTimeSlotScalarFieldEnum: {
    id: 'id',
    timeSlotId: 'timeSlotId',
    dateSlotId: 'dateSlotId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DateOnTimeSlotScalarFieldEnum = (typeof DateOnTimeSlotScalarFieldEnum)[keyof typeof DateOnTimeSlotScalarFieldEnum]


  export const DateSlotScalarFieldEnum: {
    id: 'id',
    availabilityScheduleId: 'availabilityScheduleId',
    name: 'name',
    custormerId: 'custormerId',
    eventId: 'eventId',
    dayName: 'dayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DateSlotScalarFieldEnum = (typeof DateSlotScalarFieldEnum)[keyof typeof DateSlotScalarFieldEnum]


  export const DaySlotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DaySlotScalarFieldEnum = (typeof DaySlotScalarFieldEnum)[keyof typeof DaySlotScalarFieldEnum]


  export const EventTypeOnLocationScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    locationId: 'locationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeOnLocationScalarFieldEnum = (typeof EventTypeOnLocationScalarFieldEnum)[keyof typeof EventTypeOnLocationScalarFieldEnum]


  export const EventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    description: 'description',
    price: 'price',
    timeDuration: 'timeDuration',
    availabilityScheduleId: 'availabilityScheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeScalarFieldEnum = (typeof EventTypeScalarFieldEnum)[keyof typeof EventTypeScalarFieldEnum]


  export const GroupMeetingScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    customerId: 'customerId',
    totalPrice: 'totalPrice',
    timezone: 'timezone',
    eventTypeId: 'eventTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupMeetingScalarFieldEnum = (typeof GroupMeetingScalarFieldEnum)[keyof typeof GroupMeetingScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TimeSlotScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOnGroupMeetingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupMeetingId: 'groupMeetingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserOnGroupMeetingScalarFieldEnum = (typeof UserOnGroupMeetingScalarFieldEnum)[keyof typeof UserOnGroupMeetingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    firebaseUid: 'firebaseUid',
    subscription: 'subscription',
    mobileNumber: 'mobileNumber',
    userLink: 'userLink',
    job: 'job',
    education: 'education',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    username?: StringFilter | string
    firebaseUid?: StringFilter | string
    subscription?: StringNullableFilter | string | null
    mobileNumber?: StringNullableFilter | string | null
    userLink?: StringNullableFilter | string | null
    job?: StringNullableFilter | string | null
    education?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypes?: EventTypeListRelationFilter
    billings?: BillingListRelationFilter
    userOnGroupMeetings?: UserOnGroupMeetingListRelationFilter
    appointmentsOrganized?: AppointmentListRelationFilter
    appointmentsAttending?: AppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypes?: EventTypeOrderByRelationAggregateInput
    billings?: BillingOrderByRelationAggregateInput
    userOnGroupMeetings?: UserOnGroupMeetingOrderByRelationAggregateInput
    appointmentsOrganized?: AppointmentOrderByRelationAggregateInput
    appointmentsAttending?: AppointmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
    firebaseUid?: string
    mobileNumber?: string
    userLink?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    firebaseUid?: StringWithAggregatesFilter | string
    subscription?: StringNullableWithAggregatesFilter | string | null
    mobileNumber?: StringNullableWithAggregatesFilter | string | null
    userLink?: StringNullableWithAggregatesFilter | string | null
    job?: StringNullableWithAggregatesFilter | string | null
    education?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventTypeWhereInput = {
    AND?: Enumerable<EventTypeWhereInput>
    OR?: Enumerable<EventTypeWhereInput>
    NOT?: Enumerable<EventTypeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    description?: StringFilter | string
    price?: IntFilter | number
    timeDuration?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    eventTypeOnLocations?: EventTypeOnLocationListRelationFilter
    availabilitySchedule?: XOR<AvailabilityScheduleRelationFilter, AvailabilityScheduleWhereInput> | null
    dateSlots?: DateSlotListRelationFilter
    groupMeetings?: GroupMeetingListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type EventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    eventTypeOnLocations?: EventTypeOnLocationOrderByRelationAggregateInput
    availabilitySchedule?: AvailabilityScheduleOrderByWithRelationInput
    dateSlots?: DateSlotOrderByRelationAggregateInput
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type EventTypeWhereUniqueInput = {
    id?: number
    userId_name?: EventTypeUserIdNameCompoundUniqueInput
  }

  export type EventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeCountOrderByAggregateInput
    _avg?: EventTypeAvgOrderByAggregateInput
    _max?: EventTypeMaxOrderByAggregateInput
    _min?: EventTypeMinOrderByAggregateInput
    _sum?: EventTypeSumOrderByAggregateInput
  }

  export type EventTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    timeDuration?: IntWithAggregatesFilter | number
    availabilityScheduleId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypeOnLocations?: EventTypeOnLocationListRelationFilter
    groupMeetings?: GroupMeetingListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypeOnLocations?: EventTypeOnLocationOrderByRelationAggregateInput
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventTypeOnLocationWhereInput = {
    AND?: Enumerable<EventTypeOnLocationWhereInput>
    OR?: Enumerable<EventTypeOnLocationWhereInput>
    NOT?: Enumerable<EventTypeOnLocationWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    locationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type EventTypeOnLocationOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type EventTypeOnLocationWhereUniqueInput = {
    id?: number
  }

  export type EventTypeOnLocationOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeOnLocationCountOrderByAggregateInput
    _avg?: EventTypeOnLocationAvgOrderByAggregateInput
    _max?: EventTypeOnLocationMaxOrderByAggregateInput
    _min?: EventTypeOnLocationMinOrderByAggregateInput
    _sum?: EventTypeOnLocationSumOrderByAggregateInput
  }

  export type EventTypeOnLocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    eventTypeId?: IntWithAggregatesFilter | number
    locationId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AvailabilityScheduleWhereInput = {
    AND?: Enumerable<AvailabilityScheduleWhereInput>
    OR?: Enumerable<AvailabilityScheduleWhereInput>
    NOT?: Enumerable<AvailabilityScheduleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    timezone?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypes?: EventTypeListRelationFilter
    dateSlots?: DateSlotListRelationFilter
  }

  export type AvailabilityScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypes?: EventTypeOrderByRelationAggregateInput
    dateSlots?: DateSlotOrderByRelationAggregateInput
  }

  export type AvailabilityScheduleWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type AvailabilityScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityScheduleCountOrderByAggregateInput
    _avg?: AvailabilityScheduleAvgOrderByAggregateInput
    _max?: AvailabilityScheduleMaxOrderByAggregateInput
    _min?: AvailabilityScheduleMinOrderByAggregateInput
    _sum?: AvailabilityScheduleSumOrderByAggregateInput
  }

  export type AvailabilityScheduleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    OR?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    timezone?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DaySlotWhereInput = {
    AND?: Enumerable<DaySlotWhereInput>
    OR?: Enumerable<DaySlotWhereInput>
    NOT?: Enumerable<DaySlotWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dateSlots?: DateSlotListRelationFilter
  }

  export type DaySlotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateSlots?: DateSlotOrderByRelationAggregateInput
  }

  export type DaySlotWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DaySlotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DaySlotCountOrderByAggregateInput
    _avg?: DaySlotAvgOrderByAggregateInput
    _max?: DaySlotMaxOrderByAggregateInput
    _min?: DaySlotMinOrderByAggregateInput
    _sum?: DaySlotSumOrderByAggregateInput
  }

  export type DaySlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DateSlotWhereInput = {
    AND?: Enumerable<DateSlotWhereInput>
    OR?: Enumerable<DateSlotWhereInput>
    NOT?: Enumerable<DateSlotWhereInput>
    id?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    name?: DateTimeFilter | Date | string
    custormerId?: IntNullableFilter | number | null
    eventId?: IntFilter | number
    dayName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    availabilitySchedule?: XOR<AvailabilityScheduleRelationFilter, AvailabilityScheduleWhereInput> | null
    custormer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    daySlot?: XOR<DaySlotRelationFilter, DaySlotWhereInput>
    dateOnTimeSlots?: DateOnTimeSlotListRelationFilter
  }

  export type DateSlotOrderByWithRelationInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    name?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
    dayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availabilitySchedule?: AvailabilityScheduleOrderByWithRelationInput
    custormer?: CustomerOrderByWithRelationInput
    eventType?: EventTypeOrderByWithRelationInput
    daySlot?: DaySlotOrderByWithRelationInput
    dateOnTimeSlots?: DateOnTimeSlotOrderByRelationAggregateInput
  }

  export type DateSlotWhereUniqueInput = {
    id?: number
  }

  export type DateSlotOrderByWithAggregationInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    name?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
    dayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DateSlotCountOrderByAggregateInput
    _avg?: DateSlotAvgOrderByAggregateInput
    _max?: DateSlotMaxOrderByAggregateInput
    _min?: DateSlotMinOrderByAggregateInput
    _sum?: DateSlotSumOrderByAggregateInput
  }

  export type DateSlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    availabilityScheduleId?: IntNullableWithAggregatesFilter | number | null
    name?: DateTimeWithAggregatesFilter | Date | string
    custormerId?: IntNullableWithAggregatesFilter | number | null
    eventId?: IntWithAggregatesFilter | number
    dayName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DateOnTimeSlotWhereInput = {
    AND?: Enumerable<DateOnTimeSlotWhereInput>
    OR?: Enumerable<DateOnTimeSlotWhereInput>
    NOT?: Enumerable<DateOnTimeSlotWhereInput>
    id?: IntFilter | number
    timeSlotId?: IntFilter | number
    dateSlotId?: IntFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    timeSlot?: XOR<TimeSlotRelationFilter, TimeSlotWhereInput>
    dateSlot?: XOR<DateSlotRelationFilter, DateSlotWhereInput>
  }

  export type DateOnTimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeSlot?: TimeSlotOrderByWithRelationInput
    dateSlot?: DateSlotOrderByWithRelationInput
  }

  export type DateOnTimeSlotWhereUniqueInput = {
    id?: number
  }

  export type DateOnTimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DateOnTimeSlotCountOrderByAggregateInput
    _avg?: DateOnTimeSlotAvgOrderByAggregateInput
    _max?: DateOnTimeSlotMaxOrderByAggregateInput
    _min?: DateOnTimeSlotMinOrderByAggregateInput
    _sum?: DateOnTimeSlotSumOrderByAggregateInput
  }

  export type DateOnTimeSlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DateOnTimeSlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DateOnTimeSlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DateOnTimeSlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    timeSlotId?: IntWithAggregatesFilter | number
    dateSlotId?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TimeSlotWhereInput = {
    AND?: Enumerable<TimeSlotWhereInput>
    OR?: Enumerable<TimeSlotWhereInput>
    NOT?: Enumerable<TimeSlotWhereInput>
    id?: IntFilter | number
    startTime?: IntFilter | number
    endTime?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dateOnTimeSlots?: DateOnTimeSlotListRelationFilter
  }

  export type TimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateOnTimeSlots?: DateOnTimeSlotOrderByRelationAggregateInput
  }

  export type TimeSlotWhereUniqueInput = {
    id?: number
    startTime_endTime?: TimeSlotStartTimeEndTimeCompoundUniqueInput
  }

  export type TimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeSlotCountOrderByAggregateInput
    _avg?: TimeSlotAvgOrderByAggregateInput
    _max?: TimeSlotMaxOrderByAggregateInput
    _min?: TimeSlotMinOrderByAggregateInput
    _sum?: TimeSlotSumOrderByAggregateInput
  }

  export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TimeSlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<TimeSlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TimeSlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    startTime?: IntWithAggregatesFilter | number
    endTime?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    groupMeetings?: GroupMeetingListRelationFilter
    dateSlots?: DateSlotListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
    dateSlots?: DateSlotOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BillingWhereInput = {
    AND?: Enumerable<BillingWhereInput>
    OR?: Enumerable<BillingWhereInput>
    NOT?: Enumerable<BillingWhereInput>
    id?: IntFilter | number
    subscriptionMonth?: IntFilter | number
    subscriptionPrice?: IntFilter | number
    userId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BillingOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BillingWhereUniqueInput = {
    id?: number
  }

  export type BillingOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillingCountOrderByAggregateInput
    _avg?: BillingAvgOrderByAggregateInput
    _max?: BillingMaxOrderByAggregateInput
    _min?: BillingMinOrderByAggregateInput
    _sum?: BillingSumOrderByAggregateInput
  }

  export type BillingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BillingScalarWhereWithAggregatesInput>
    OR?: Enumerable<BillingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BillingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    subscriptionMonth?: IntWithAggregatesFilter | number
    subscriptionPrice?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GroupMeetingWhereInput = {
    AND?: Enumerable<GroupMeetingWhereInput>
    OR?: Enumerable<GroupMeetingWhereInput>
    NOT?: Enumerable<GroupMeetingWhereInput>
    id?: IntFilter | number
    locationId?: IntFilter | number
    customerId?: IntFilter | number
    totalPrice?: IntFilter | number
    timezone?: StringFilter | string
    eventTypeId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    userOnGroupMeetings?: UserOnGroupMeetingListRelationFilter
  }

  export type GroupMeetingOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    eventType?: EventTypeOrderByWithRelationInput
    userOnGroupMeetings?: UserOnGroupMeetingOrderByRelationAggregateInput
  }

  export type GroupMeetingWhereUniqueInput = {
    id?: number
  }

  export type GroupMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupMeetingCountOrderByAggregateInput
    _avg?: GroupMeetingAvgOrderByAggregateInput
    _max?: GroupMeetingMaxOrderByAggregateInput
    _min?: GroupMeetingMinOrderByAggregateInput
    _sum?: GroupMeetingSumOrderByAggregateInput
  }

  export type GroupMeetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    locationId?: IntWithAggregatesFilter | number
    customerId?: IntWithAggregatesFilter | number
    totalPrice?: IntWithAggregatesFilter | number
    timezone?: StringWithAggregatesFilter | string
    eventTypeId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserOnGroupMeetingWhereInput = {
    AND?: Enumerable<UserOnGroupMeetingWhereInput>
    OR?: Enumerable<UserOnGroupMeetingWhereInput>
    NOT?: Enumerable<UserOnGroupMeetingWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    groupMeetingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    groupMeeting?: XOR<GroupMeetingRelationFilter, GroupMeetingWhereInput>
  }

  export type UserOnGroupMeetingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    groupMeeting?: GroupMeetingOrderByWithRelationInput
  }

  export type UserOnGroupMeetingWhereUniqueInput = {
    id?: number
  }

  export type UserOnGroupMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserOnGroupMeetingCountOrderByAggregateInput
    _avg?: UserOnGroupMeetingAvgOrderByAggregateInput
    _max?: UserOnGroupMeetingMaxOrderByAggregateInput
    _min?: UserOnGroupMeetingMinOrderByAggregateInput
    _sum?: UserOnGroupMeetingSumOrderByAggregateInput
  }

  export type UserOnGroupMeetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    groupMeetingId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: Enumerable<AppointmentWhereInput>
    OR?: Enumerable<AppointmentWhereInput>
    NOT?: Enumerable<AppointmentWhereInput>
    id?: IntFilter | number
    organizerId?: IntFilter | number
    attendeeId?: IntFilter | number
    eventTypeId?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    organizer?: XOR<UserRelationFilter, UserWhereInput>
    attendee?: XOR<UserRelationFilter, UserWhereInput>
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
    attendee?: UserOrderByWithRelationInput
    eventType?: EventTypeOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = {
    id?: number
  }

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    organizerId?: IntWithAggregatesFilter | number
    attendeeId?: IntWithAggregatesFilter | number
    eventTypeId?: IntWithAggregatesFilter | number
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentCreateNestedManyWithoutAttendeeInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentUncheckedCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutLocationInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutLocationNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput
    location: LocationCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateInput = {
    id?: number
    eventTypeId: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
    location?: LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleCreateInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutAvailabilityScheduleInput
    dateSlots?: DateSlotCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput
    dateSlots?: DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotCreateInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    eventType: EventTypeCreateNestedOneWithoutDateSlotsInput
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateInput = {
    id?: number
    availabilityScheduleId?: number | null
    name: Date | string
    custormerId?: number | null
    eventId: number
    dayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUpdateInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: IntFieldUpdateOperationsInput | number
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUpdateManyMutationInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: IntFieldUpdateOperationsInput | number
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotCreateInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlot: TimeSlotCreateNestedOneWithoutDateOnTimeSlotsInput
    dateSlot: DateSlotCreateNestedOneWithoutDateOnTimeSlotsInput
  }

  export type DateOnTimeSlotUncheckedCreateInput = {
    id?: number
    timeSlotId: number
    dateSlotId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateOnTimeSlotUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: TimeSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput
    dateSlot?: DateSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput
  }

  export type DateOnTimeSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotCreateInput = {
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUncheckedCreateInput = {
    id?: number
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUpdateInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUpdateManyMutationInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutCustomerInput
    dateSlots?: DateSlotCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutCustomerNestedInput
    dateSlots?: DateSlotUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingCreateInput = {
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillingsInput
  }

  export type BillingUncheckedCreateInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingUpdateInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillingsNestedInput
  }

  export type BillingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUpdateManyMutationInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingCreateInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserOnGroupMeetingsInput
    groupMeeting: GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateInput = {
    id?: number
    userId: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
    groupMeeting?: GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutAppointmentsOrganizedInput
    attendee: UserCreateNestedOneWithoutAppointmentsAttendingInput
    eventType: EventTypeCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    organizerId: number
    attendeeId: number
    eventTypeId: number
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutAppointmentsOrganizedNestedInput
    attendee?: UserUpdateOneRequiredWithoutAppointmentsAttendingNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EventTypeListRelationFilter = {
    every?: EventTypeWhereInput
    some?: EventTypeWhereInput
    none?: EventTypeWhereInput
  }

  export type BillingListRelationFilter = {
    every?: BillingWhereInput
    some?: BillingWhereInput
    none?: BillingWhereInput
  }

  export type UserOnGroupMeetingListRelationFilter = {
    every?: UserOnGroupMeetingWhereInput
    some?: UserOnGroupMeetingWhereInput
    none?: UserOnGroupMeetingWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type EventTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnGroupMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventTypeOnLocationListRelationFilter = {
    every?: EventTypeOnLocationWhereInput
    some?: EventTypeOnLocationWhereInput
    none?: EventTypeOnLocationWhereInput
  }

  export type AvailabilityScheduleRelationFilter = {
    is?: AvailabilityScheduleWhereInput | null
    isNot?: AvailabilityScheduleWhereInput | null
  }

  export type DateSlotListRelationFilter = {
    every?: DateSlotWhereInput
    some?: DateSlotWhereInput
    none?: DateSlotWhereInput
  }

  export type GroupMeetingListRelationFilter = {
    every?: GroupMeetingWhereInput
    some?: GroupMeetingWhereInput
    none?: GroupMeetingWhereInput
  }

  export type EventTypeOnLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DateSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTypeUserIdNameCompoundUniqueInput = {
    userId: number
    name: string
  }

  export type EventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
  }

  export type EventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTypeRelationFilter = {
    is?: EventTypeWhereInput
    isNot?: EventTypeWhereInput
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type EventTypeOnLocationCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type EventTypeOnLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationSumOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type AvailabilityScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailabilityScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaySlotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type DaySlotRelationFilter = {
    is?: DaySlotWhereInput
    isNot?: DaySlotWhereInput
  }

  export type DateOnTimeSlotListRelationFilter = {
    every?: DateOnTimeSlotWhereInput
    some?: DateOnTimeSlotWhereInput
    none?: DateOnTimeSlotWhereInput
  }

  export type DateOnTimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DateSlotCountOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    name?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
    dayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
  }

  export type DateSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    name?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
    dayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotMinOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    name?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
    dayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotSumOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    custormerId?: SortOrder
    eventId?: SortOrder
  }

  export type TimeSlotRelationFilter = {
    is?: TimeSlotWhereInput
    isNot?: TimeSlotWhereInput
  }

  export type DateSlotRelationFilter = {
    is?: DateSlotWhereInput
    isNot?: DateSlotWhereInput
  }

  export type DateOnTimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateOnTimeSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
  }

  export type DateOnTimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateOnTimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateOnTimeSlotSumOrderByAggregateInput = {
    id?: SortOrder
    timeSlotId?: SortOrder
    dateSlotId?: SortOrder
  }

  export type TimeSlotStartTimeEndTimeCompoundUniqueInput = {
    startTime: number
    endTime: number
  }

  export type TimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSlotSumOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BillingCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
  }

  export type BillingMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingSumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
  }

  export type GroupMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    eventTypeId?: SortOrder
  }

  export type GroupMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    eventTypeId?: SortOrder
  }

  export type GroupMeetingRelationFilter = {
    is?: GroupMeetingWhereInput
    isNot?: GroupMeetingWhereInput
  }

  export type UserOnGroupMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
  }

  export type UserOnGroupMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    attendeeId?: SortOrder
    eventTypeId?: SortOrder
  }

  export type EventTypeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type BillingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<BillingWhereUniqueInput>
  }

  export type UserOnGroupMeetingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type AppointmentCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutOrganizerInput>, Enumerable<AppointmentUncheckedCreateWithoutOrganizerInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutOrganizerInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type AppointmentCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAttendeeInput>, Enumerable<AppointmentUncheckedCreateWithoutAttendeeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAttendeeInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type EventTypeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type BillingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<BillingWhereUniqueInput>
  }

  export type UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type AppointmentUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutOrganizerInput>, Enumerable<AppointmentUncheckedCreateWithoutOrganizerInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutOrganizerInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type AppointmentUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAttendeeInput>, Enumerable<AppointmentUncheckedCreateWithoutAttendeeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAttendeeInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventTypeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type BillingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BillingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<BillingWhereUniqueInput>
    disconnect?: Enumerable<BillingWhereUniqueInput>
    delete?: Enumerable<BillingWhereUniqueInput>
    connect?: Enumerable<BillingWhereUniqueInput>
    update?: Enumerable<BillingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BillingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BillingScalarWhereInput>
  }

  export type UserOnGroupMeetingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type AppointmentUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutOrganizerInput>, Enumerable<AppointmentUncheckedCreateWithoutOrganizerInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutOrganizerInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutOrganizerInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutOrganizerInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutOrganizerInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type AppointmentUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAttendeeInput>, Enumerable<AppointmentUncheckedCreateWithoutAttendeeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAttendeeInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutAttendeeInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutAttendeeInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutAttendeeInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventTypeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type BillingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BillingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<BillingWhereUniqueInput>
    disconnect?: Enumerable<BillingWhereUniqueInput>
    delete?: Enumerable<BillingWhereUniqueInput>
    connect?: Enumerable<BillingWhereUniqueInput>
    update?: Enumerable<BillingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BillingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BillingScalarWhereInput>
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutOrganizerInput>, Enumerable<AppointmentUncheckedCreateWithoutOrganizerInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutOrganizerInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutOrganizerInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutOrganizerInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutOrganizerInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutAttendeeInput>, Enumerable<AppointmentUncheckedCreateWithoutAttendeeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutAttendeeInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutAttendeeInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutAttendeeInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutAttendeeInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutEventTypesInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    connect?: UserWhereUniqueInput
  }

  export type EventTypeOnLocationCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type AvailabilityScheduleCreateNestedOneWithoutEventTypesInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutEventTypesInput
    connect?: AvailabilityScheduleWhereUniqueInput
  }

  export type DateSlotCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutEventTypeInput>, Enumerable<DateSlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type AppointmentCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutEventTypeInput>, Enumerable<AppointmentUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutEventTypeInput>, Enumerable<DateSlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type AppointmentUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutEventTypeInput>, Enumerable<AppointmentUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutEventTypeInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutEventTypesNestedInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    upsert?: UserUpsertWithoutEventTypesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
  }

  export type EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutEventTypesInput
    upsert?: AvailabilityScheduleUpsertWithoutEventTypesInput
    disconnect?: boolean
    delete?: boolean
    connect?: AvailabilityScheduleWhereUniqueInput
    update?: XOR<AvailabilityScheduleUpdateWithoutEventTypesInput, AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput>
  }

  export type DateSlotUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutEventTypeInput>, Enumerable<DateSlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type GroupMeetingUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type AppointmentUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutEventTypeInput>, Enumerable<AppointmentUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutEventTypeInput>, Enumerable<DateSlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutEventTypeInput>, Enumerable<AppointmentUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutEventTypeInput>
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type EventTypeOnLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type GroupMeetingCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type EventTypeOnLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type GroupMeetingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput = {
    create?: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEventTypeOnLocationsInput = {
    create?: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventTypeOnLocationsInput
    connect?: LocationWhereUniqueInput
  }

  export type EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput = {
    create?: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput
    upsert?: EventTypeUpsertWithoutEventTypeOnLocationsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutEventTypeOnLocationsInput, EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput>
  }

  export type LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput = {
    create?: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventTypeOnLocationsInput
    upsert?: LocationUpsertWithoutEventTypeOnLocationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutEventTypeOnLocationsInput, LocationUncheckedUpdateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type DateSlotCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type DateSlotCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutDaySlotInput>, Enumerable<DateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutDaySlotInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutDaySlotInput>, Enumerable<DateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutDaySlotInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type DateSlotUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutDaySlotInput>, Enumerable<DateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutDaySlotInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutDaySlotInput>, Enumerable<DateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutDaySlotInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput
    connect?: AvailabilityScheduleWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDateSlotsInput
    connect?: CustomerWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<EventTypeCreateWithoutDateSlotsInput, EventTypeUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutDateSlotsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type DaySlotCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutDateSlotsInput
    connect?: DaySlotWhereUniqueInput
  }

  export type DateOnTimeSlotCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutDateSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutDateSlotInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
  }

  export type DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutDateSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutDateSlotInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
  }

  export type AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput
    upsert?: AvailabilityScheduleUpsertWithoutDateSlotsInput
    disconnect?: boolean
    delete?: boolean
    connect?: AvailabilityScheduleWhereUniqueInput
    update?: XOR<AvailabilityScheduleUpdateWithoutDateSlotsInput, AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput>
  }

  export type CustomerUpdateOneWithoutDateSlotsNestedInput = {
    create?: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDateSlotsInput
    upsert?: CustomerUpsertWithoutDateSlotsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutDateSlotsInput, CustomerUncheckedUpdateWithoutDateSlotsInput>
  }

  export type EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput = {
    create?: XOR<EventTypeCreateWithoutDateSlotsInput, EventTypeUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutDateSlotsInput
    upsert?: EventTypeUpsertWithoutDateSlotsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutDateSlotsInput, EventTypeUncheckedUpdateWithoutDateSlotsInput>
  }

  export type DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput = {
    create?: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutDateSlotsInput
    upsert?: DaySlotUpsertWithoutDateSlotsInput
    connect?: DaySlotWhereUniqueInput
    update?: XOR<DaySlotUpdateWithoutDateSlotsInput, DaySlotUncheckedUpdateWithoutDateSlotsInput>
  }

  export type DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutDateSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DateOnTimeSlotUpsertWithWhereUniqueWithoutDateSlotInput>
    set?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    disconnect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    delete?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    update?: Enumerable<DateOnTimeSlotUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DateOnTimeSlotUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DateOnTimeSlotScalarWhereInput>
  }

  export type DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutDateSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DateOnTimeSlotUpsertWithWhereUniqueWithoutDateSlotInput>
    set?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    disconnect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    delete?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    update?: Enumerable<DateOnTimeSlotUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DateOnTimeSlotUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DateOnTimeSlotScalarWhereInput>
  }

  export type TimeSlotCreateNestedOneWithoutDateOnTimeSlotsInput = {
    create?: XOR<TimeSlotCreateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutDateOnTimeSlotsInput
    connect?: TimeSlotWhereUniqueInput
  }

  export type DateSlotCreateNestedOneWithoutDateOnTimeSlotsInput = {
    create?: XOR<DateSlotCreateWithoutDateOnTimeSlotsInput, DateSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutDateOnTimeSlotsInput
    connect?: DateSlotWhereUniqueInput
  }

  export type TimeSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput = {
    create?: XOR<TimeSlotCreateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutDateOnTimeSlotsInput
    upsert?: TimeSlotUpsertWithoutDateOnTimeSlotsInput
    connect?: TimeSlotWhereUniqueInput
    update?: XOR<TimeSlotUpdateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedUpdateWithoutDateOnTimeSlotsInput>
  }

  export type DateSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput = {
    create?: XOR<DateSlotCreateWithoutDateOnTimeSlotsInput, DateSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutDateOnTimeSlotsInput
    upsert?: DateSlotUpsertWithoutDateOnTimeSlotsInput
    connect?: DateSlotWhereUniqueInput
    update?: XOR<DateSlotUpdateWithoutDateOnTimeSlotsInput, DateSlotUncheckedUpdateWithoutDateOnTimeSlotsInput>
  }

  export type DateOnTimeSlotCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutTimeSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutTimeSlotInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
  }

  export type DateOnTimeSlotUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutTimeSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutTimeSlotInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
  }

  export type DateOnTimeSlotUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutTimeSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutTimeSlotInput>
    upsert?: Enumerable<DateOnTimeSlotUpsertWithWhereUniqueWithoutTimeSlotInput>
    set?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    disconnect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    delete?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    update?: Enumerable<DateOnTimeSlotUpdateWithWhereUniqueWithoutTimeSlotInput>
    updateMany?: Enumerable<DateOnTimeSlotUpdateManyWithWhereWithoutTimeSlotInput>
    deleteMany?: Enumerable<DateOnTimeSlotScalarWhereInput>
  }

  export type DateOnTimeSlotUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<Enumerable<DateOnTimeSlotCreateWithoutTimeSlotInput>, Enumerable<DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>>
    connectOrCreate?: Enumerable<DateOnTimeSlotCreateOrConnectWithoutTimeSlotInput>
    upsert?: Enumerable<DateOnTimeSlotUpsertWithWhereUniqueWithoutTimeSlotInput>
    set?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    disconnect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    delete?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    connect?: Enumerable<DateOnTimeSlotWhereUniqueInput>
    update?: Enumerable<DateOnTimeSlotUpdateWithWhereUniqueWithoutTimeSlotInput>
    updateMany?: Enumerable<DateOnTimeSlotUpdateManyWithWhereWithoutTimeSlotInput>
    deleteMany?: Enumerable<DateOnTimeSlotScalarWhereInput>
  }

  export type GroupMeetingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type DateSlotCreateNestedManyWithoutCustormerInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutCustormerInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type DateSlotUpdateManyWithoutCustormerNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutCustormerInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutCustormerInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutCustormerInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput>
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutCustormerNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutCustormerInput>
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutCustormerInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutCustormerInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutBillingsInput = {
    create?: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBillingsNestedInput = {
    create?: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingsInput
    upsert?: UserUpsertWithoutBillingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBillingsInput, UserUncheckedUpdateWithoutBillingsInput>
  }

  export type LocationCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGroupMeetingsInput
    connect?: LocationWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutGroupMeetingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutGroupMeetingsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGroupMeetingsInput
    upsert?: LocationUpsertWithoutGroupMeetingsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutGroupMeetingsInput, LocationUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutGroupMeetingsInput
    upsert?: CustomerUpsertWithoutGroupMeetingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutGroupMeetingsInput, CustomerUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutGroupMeetingsInput
    upsert?: EventTypeUpsertWithoutGroupMeetingsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutGroupMeetingsInput, EventTypeUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput>
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput>
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserOnGroupMeetingsInput = {
    create?: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnGroupMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput = {
    create?: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput
    connect?: GroupMeetingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnGroupMeetingsInput
    upsert?: UserUpsertWithoutUserOnGroupMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserOnGroupMeetingsInput, UserUncheckedUpdateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput = {
    create?: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput
    upsert?: GroupMeetingUpsertWithoutUserOnGroupMeetingsInput
    connect?: GroupMeetingWhereUniqueInput
    update?: XOR<GroupMeetingUpdateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsOrganizedInput = {
    create?: XOR<UserCreateWithoutAppointmentsOrganizedInput, UserUncheckedCreateWithoutAppointmentsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsOrganizedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAttendingInput = {
    create?: XOR<UserCreateWithoutAppointmentsAttendingInput, UserUncheckedCreateWithoutAppointmentsAttendingInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAttendingInput
    connect?: UserWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<EventTypeCreateWithoutAppointmentsInput, EventTypeUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutAppointmentsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAppointmentsOrganizedNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsOrganizedInput, UserUncheckedCreateWithoutAppointmentsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsOrganizedInput
    upsert?: UserUpsertWithoutAppointmentsOrganizedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppointmentsOrganizedInput, UserUncheckedUpdateWithoutAppointmentsOrganizedInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAttendingNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAttendingInput, UserUncheckedCreateWithoutAppointmentsAttendingInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAttendingInput
    upsert?: UserUpsertWithoutAppointmentsAttendingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppointmentsAttendingInput, UserUncheckedUpdateWithoutAppointmentsAttendingInput>
  }

  export type EventTypeUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<EventTypeCreateWithoutAppointmentsInput, EventTypeUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutAppointmentsInput
    upsert?: EventTypeUpsertWithoutAppointmentsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutAppointmentsInput, EventTypeUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type EventTypeCreateWithoutUserInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type BillingCreateWithoutUserInput = {
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingUncheckedCreateWithoutUserInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingCreateOrConnectWithoutUserInput = {
    where: BillingWhereUniqueInput
    create: XOR<BillingCreateWithoutUserInput, BillingUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupMeetingCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeeting: GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateWithoutUserInput = {
    id?: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingCreateOrConnectWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    create: XOR<UserOnGroupMeetingCreateWithoutUserInput, UserOnGroupMeetingUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateWithoutOrganizerInput = {
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendee: UserCreateNestedOneWithoutAppointmentsAttendingInput
    eventType: EventTypeCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutOrganizerInput = {
    id?: number
    attendeeId: number
    eventTypeId: number
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutOrganizerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutOrganizerInput, AppointmentUncheckedCreateWithoutOrganizerInput>
  }

  export type AppointmentCreateWithoutAttendeeInput = {
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutAppointmentsOrganizedInput
    eventType: EventTypeCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutAttendeeInput = {
    id?: number
    organizerId: number
    eventTypeId: number
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutAttendeeInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAttendeeInput, AppointmentUncheckedCreateWithoutAttendeeInput>
  }

  export type EventTypeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    update: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type EventTypeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    data: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
  }

  export type EventTypeUpdateManyWithWhereWithoutUserInput = {
    where: EventTypeScalarWhereInput
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyWithoutEventTypesInput>
  }

  export type EventTypeScalarWhereInput = {
    AND?: Enumerable<EventTypeScalarWhereInput>
    OR?: Enumerable<EventTypeScalarWhereInput>
    NOT?: Enumerable<EventTypeScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    description?: StringFilter | string
    price?: IntFilter | number
    timeDuration?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BillingUpsertWithWhereUniqueWithoutUserInput = {
    where: BillingWhereUniqueInput
    update: XOR<BillingUpdateWithoutUserInput, BillingUncheckedUpdateWithoutUserInput>
    create: XOR<BillingCreateWithoutUserInput, BillingUncheckedCreateWithoutUserInput>
  }

  export type BillingUpdateWithWhereUniqueWithoutUserInput = {
    where: BillingWhereUniqueInput
    data: XOR<BillingUpdateWithoutUserInput, BillingUncheckedUpdateWithoutUserInput>
  }

  export type BillingUpdateManyWithWhereWithoutUserInput = {
    where: BillingScalarWhereInput
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyWithoutBillingsInput>
  }

  export type BillingScalarWhereInput = {
    AND?: Enumerable<BillingScalarWhereInput>
    OR?: Enumerable<BillingScalarWhereInput>
    NOT?: Enumerable<BillingScalarWhereInput>
    id?: IntFilter | number
    subscriptionMonth?: IntFilter | number
    subscriptionPrice?: IntFilter | number
    userId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    update: XOR<UserOnGroupMeetingUpdateWithoutUserInput, UserOnGroupMeetingUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnGroupMeetingCreateWithoutUserInput, UserOnGroupMeetingUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    data: XOR<UserOnGroupMeetingUpdateWithoutUserInput, UserOnGroupMeetingUncheckedUpdateWithoutUserInput>
  }

  export type UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput = {
    where: UserOnGroupMeetingScalarWhereInput
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput>
  }

  export type UserOnGroupMeetingScalarWhereInput = {
    AND?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    OR?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    NOT?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    groupMeetingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutOrganizerInput, AppointmentUncheckedUpdateWithoutOrganizerInput>
    create: XOR<AppointmentCreateWithoutOrganizerInput, AppointmentUncheckedCreateWithoutOrganizerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutOrganizerInput, AppointmentUncheckedUpdateWithoutOrganizerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutOrganizerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsOrganizedInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: Enumerable<AppointmentScalarWhereInput>
    OR?: Enumerable<AppointmentScalarWhereInput>
    NOT?: Enumerable<AppointmentScalarWhereInput>
    id?: IntFilter | number
    organizerId?: IntFilter | number
    attendeeId?: IntFilter | number
    eventTypeId?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutAttendeeInput, AppointmentUncheckedUpdateWithoutAttendeeInput>
    create: XOR<AppointmentCreateWithoutAttendeeInput, AppointmentUncheckedCreateWithoutAttendeeInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutAttendeeInput, AppointmentUncheckedUpdateWithoutAttendeeInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutAttendeeInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsAttendingInput>
  }

  export type UserCreateWithoutEventTypesInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentCreateNestedManyWithoutAttendeeInput
  }

  export type UserUncheckedCreateWithoutEventTypesInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentUncheckedCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type UserCreateOrConnectWithoutEventTypesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
  }

  export type EventTypeOnLocationCreateWithoutEventTypeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateWithoutEventTypeInput = {
    id?: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationCreateOrConnectWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    create: XOR<EventTypeOnLocationCreateWithoutEventTypeInput, EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>
  }

  export type AvailabilityScheduleCreateWithoutEventTypesInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutEventTypesInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleCreateOrConnectWithoutEventTypesInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
  }

  export type DateSlotCreateWithoutEventTypeInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutEventTypeInput = {
    id?: number
    availabilityScheduleId?: number | null
    name: Date | string
    custormerId?: number | null
    dayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutEventTypeInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutEventTypeInput, DateSlotUncheckedCreateWithoutEventTypeInput>
  }

  export type GroupMeetingCreateWithoutEventTypeInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutEventTypeInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutEventTypeInput, GroupMeetingUncheckedCreateWithoutEventTypeInput>
  }

  export type AppointmentCreateWithoutEventTypeInput = {
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutAppointmentsOrganizedInput
    attendee: UserCreateNestedOneWithoutAppointmentsAttendingInput
  }

  export type AppointmentUncheckedCreateWithoutEventTypeInput = {
    id?: number
    organizerId: number
    attendeeId: number
    startTime: Date | string
    endTime: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutEventTypeInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutEventTypeInput, AppointmentUncheckedCreateWithoutEventTypeInput>
  }

  export type UserUpsertWithoutEventTypesInput = {
    update: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
  }

  export type UserUpdateWithoutEventTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUncheckedUpdateWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    update: XOR<EventTypeOnLocationUpdateWithoutEventTypeInput, EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput>
    create: XOR<EventTypeOnLocationCreateWithoutEventTypeInput, EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>
  }

  export type EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    data: XOR<EventTypeOnLocationUpdateWithoutEventTypeInput, EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput>
  }

  export type EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput = {
    where: EventTypeOnLocationScalarWhereInput
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeOnLocationScalarWhereInput = {
    AND?: Enumerable<EventTypeOnLocationScalarWhereInput>
    OR?: Enumerable<EventTypeOnLocationScalarWhereInput>
    NOT?: Enumerable<EventTypeOnLocationScalarWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    locationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AvailabilityScheduleUpsertWithoutEventTypesInput = {
    update: XOR<AvailabilityScheduleUpdateWithoutEventTypesInput, AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput>
    create: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
  }

  export type AvailabilityScheduleUpdateWithoutEventTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type DateSlotUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutEventTypeInput, DateSlotUncheckedUpdateWithoutEventTypeInput>
    create: XOR<DateSlotCreateWithoutEventTypeInput, DateSlotUncheckedCreateWithoutEventTypeInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutEventTypeInput, DateSlotUncheckedUpdateWithoutEventTypeInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutEventTypeInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type DateSlotScalarWhereInput = {
    AND?: Enumerable<DateSlotScalarWhereInput>
    OR?: Enumerable<DateSlotScalarWhereInput>
    NOT?: Enumerable<DateSlotScalarWhereInput>
    id?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    name?: DateTimeFilter | Date | string
    custormerId?: IntNullableFilter | number | null
    eventId?: IntFilter | number
    dayName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutEventTypeInput, GroupMeetingUncheckedUpdateWithoutEventTypeInput>
    create: XOR<GroupMeetingCreateWithoutEventTypeInput, GroupMeetingUncheckedCreateWithoutEventTypeInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutEventTypeInput, GroupMeetingUncheckedUpdateWithoutEventTypeInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutEventTypeInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type GroupMeetingScalarWhereInput = {
    AND?: Enumerable<GroupMeetingScalarWhereInput>
    OR?: Enumerable<GroupMeetingScalarWhereInput>
    NOT?: Enumerable<GroupMeetingScalarWhereInput>
    id?: IntFilter | number
    locationId?: IntFilter | number
    customerId?: IntFilter | number
    totalPrice?: IntFilter | number
    timezone?: StringFilter | string
    eventTypeId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutEventTypeInput, AppointmentUncheckedUpdateWithoutEventTypeInput>
    create: XOR<AppointmentCreateWithoutEventTypeInput, AppointmentUncheckedCreateWithoutEventTypeInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutEventTypeInput, AppointmentUncheckedUpdateWithoutEventTypeInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutEventTypeInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsInput>
  }

  export type EventTypeOnLocationCreateWithoutLocationInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateWithoutLocationInput = {
    id?: number
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationCreateOrConnectWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    create: XOR<EventTypeOnLocationCreateWithoutLocationInput, EventTypeOnLocationUncheckedCreateWithoutLocationInput>
  }

  export type GroupMeetingCreateWithoutLocationInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutLocationInput = {
    id?: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutLocationInput, GroupMeetingUncheckedCreateWithoutLocationInput>
  }

  export type EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    update: XOR<EventTypeOnLocationUpdateWithoutLocationInput, EventTypeOnLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<EventTypeOnLocationCreateWithoutLocationInput, EventTypeOnLocationUncheckedCreateWithoutLocationInput>
  }

  export type EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    data: XOR<EventTypeOnLocationUpdateWithoutLocationInput, EventTypeOnLocationUncheckedUpdateWithoutLocationInput>
  }

  export type EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput = {
    where: EventTypeOnLocationScalarWhereInput
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput>
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutLocationInput, GroupMeetingUncheckedUpdateWithoutLocationInput>
    create: XOR<GroupMeetingCreateWithoutLocationInput, GroupMeetingUncheckedCreateWithoutLocationInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutLocationInput, GroupMeetingUncheckedUpdateWithoutLocationInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutLocationInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type EventTypeCreateWithoutEventTypeOnLocationsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type LocationCreateWithoutEventTypeOnLocationsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutEventTypeOnLocationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutEventTypeOnLocationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeUpsertWithoutEventTypeOnLocationsInput = {
    update: XOR<EventTypeUpdateWithoutEventTypeOnLocationsInput, EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput>
    create: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeUpdateWithoutEventTypeOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type LocationUpsertWithoutEventTypeOnLocationsInput = {
    update: XOR<LocationUpdateWithoutEventTypeOnLocationsInput, LocationUncheckedUpdateWithoutEventTypeOnLocationsInput>
    create: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type LocationUpdateWithoutEventTypeOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type EventTypeCreateWithoutAvailabilityScheduleInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutAvailabilityScheduleInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutAvailabilityScheduleInput, EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotCreateWithoutAvailabilityScheduleInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    eventType: EventTypeCreateNestedOneWithoutDateSlotsInput
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutAvailabilityScheduleInput = {
    id?: number
    name: Date | string
    custormerId?: number | null
    eventId: number
    dayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutAvailabilityScheduleInput, DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    update: XOR<EventTypeUpdateWithoutAvailabilityScheduleInput, EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput>
    create: XOR<EventTypeCreateWithoutAvailabilityScheduleInput, EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    data: XOR<EventTypeUpdateWithoutAvailabilityScheduleInput, EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput = {
    where: EventTypeScalarWhereInput
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyWithoutEventTypesInput>
  }

  export type DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutAvailabilityScheduleInput, DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput>
    create: XOR<DateSlotCreateWithoutAvailabilityScheduleInput, DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutAvailabilityScheduleInput, DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type DateSlotCreateWithoutDaySlotInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    eventType: EventTypeCreateNestedOneWithoutDateSlotsInput
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutDaySlotInput = {
    id?: number
    availabilityScheduleId?: number | null
    name: Date | string
    custormerId?: number | null
    eventId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutDaySlotInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutDaySlotInput, DateSlotUncheckedCreateWithoutDaySlotInput>
  }

  export type DateSlotUpsertWithWhereUniqueWithoutDaySlotInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutDaySlotInput, DateSlotUncheckedUpdateWithoutDaySlotInput>
    create: XOR<DateSlotCreateWithoutDaySlotInput, DateSlotUncheckedCreateWithoutDaySlotInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutDaySlotInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutDaySlotInput, DateSlotUncheckedUpdateWithoutDaySlotInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutDaySlotInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type AvailabilityScheduleCreateWithoutDateSlotsInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
  }

  export type CustomerCreateWithoutDateSlotsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDateSlotsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
  }

  export type EventTypeCreateWithoutDateSlotsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutDateSlotsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutDateSlotsInput, EventTypeUncheckedCreateWithoutDateSlotsInput>
  }

  export type DaySlotCreateWithoutDateSlotsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotCreateOrConnectWithoutDateSlotsInput = {
    where: DaySlotWhereUniqueInput
    create: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
  }

  export type DateOnTimeSlotCreateWithoutDateSlotInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlot: TimeSlotCreateNestedOneWithoutDateOnTimeSlotsInput
  }

  export type DateOnTimeSlotUncheckedCreateWithoutDateSlotInput = {
    id?: number
    timeSlotId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateOnTimeSlotCreateOrConnectWithoutDateSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    create: XOR<DateOnTimeSlotCreateWithoutDateSlotInput, DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>
  }

  export type AvailabilityScheduleUpsertWithoutDateSlotsInput = {
    update: XOR<AvailabilityScheduleUpdateWithoutDateSlotsInput, AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
  }

  export type AvailabilityScheduleUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type CustomerUpsertWithoutDateSlotsInput = {
    update: XOR<CustomerUpdateWithoutDateSlotsInput, CustomerUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
  }

  export type CustomerUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type EventTypeUpsertWithoutDateSlotsInput = {
    update: XOR<EventTypeUpdateWithoutDateSlotsInput, EventTypeUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<EventTypeCreateWithoutDateSlotsInput, EventTypeUncheckedCreateWithoutDateSlotsInput>
  }

  export type EventTypeUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type DaySlotUpsertWithoutDateSlotsInput = {
    update: XOR<DaySlotUpdateWithoutDateSlotsInput, DaySlotUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
  }

  export type DaySlotUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotUpsertWithWhereUniqueWithoutDateSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    update: XOR<DateOnTimeSlotUpdateWithoutDateSlotInput, DateOnTimeSlotUncheckedUpdateWithoutDateSlotInput>
    create: XOR<DateOnTimeSlotCreateWithoutDateSlotInput, DateOnTimeSlotUncheckedCreateWithoutDateSlotInput>
  }

  export type DateOnTimeSlotUpdateWithWhereUniqueWithoutDateSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    data: XOR<DateOnTimeSlotUpdateWithoutDateSlotInput, DateOnTimeSlotUncheckedUpdateWithoutDateSlotInput>
  }

  export type DateOnTimeSlotUpdateManyWithWhereWithoutDateSlotInput = {
    where: DateOnTimeSlotScalarWhereInput
    data: XOR<DateOnTimeSlotUpdateManyMutationInput, DateOnTimeSlotUncheckedUpdateManyWithoutDateOnTimeSlotsInput>
  }

  export type DateOnTimeSlotScalarWhereInput = {
    AND?: Enumerable<DateOnTimeSlotScalarWhereInput>
    OR?: Enumerable<DateOnTimeSlotScalarWhereInput>
    NOT?: Enumerable<DateOnTimeSlotScalarWhereInput>
    id?: IntFilter | number
    timeSlotId?: IntFilter | number
    dateSlotId?: IntFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TimeSlotCreateWithoutDateOnTimeSlotsInput = {
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSlotUncheckedCreateWithoutDateOnTimeSlotsInput = {
    id?: number
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSlotCreateOrConnectWithoutDateOnTimeSlotsInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
  }

  export type DateSlotCreateWithoutDateOnTimeSlotsInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    eventType: EventTypeCreateNestedOneWithoutDateSlotsInput
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
  }

  export type DateSlotUncheckedCreateWithoutDateOnTimeSlotsInput = {
    id?: number
    availabilityScheduleId?: number | null
    name: Date | string
    custormerId?: number | null
    eventId: number
    dayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotCreateOrConnectWithoutDateOnTimeSlotsInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutDateOnTimeSlotsInput, DateSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
  }

  export type TimeSlotUpsertWithoutDateOnTimeSlotsInput = {
    update: XOR<TimeSlotUpdateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedUpdateWithoutDateOnTimeSlotsInput>
    create: XOR<TimeSlotCreateWithoutDateOnTimeSlotsInput, TimeSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
  }

  export type TimeSlotUpdateWithoutDateOnTimeSlotsInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotUncheckedUpdateWithoutDateOnTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotUpsertWithoutDateOnTimeSlotsInput = {
    update: XOR<DateSlotUpdateWithoutDateOnTimeSlotsInput, DateSlotUncheckedUpdateWithoutDateOnTimeSlotsInput>
    create: XOR<DateSlotCreateWithoutDateOnTimeSlotsInput, DateSlotUncheckedCreateWithoutDateOnTimeSlotsInput>
  }

  export type DateSlotUpdateWithoutDateOnTimeSlotsInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutDateOnTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: IntFieldUpdateOperationsInput | number
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotCreateWithoutTimeSlotInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlot: DateSlotCreateNestedOneWithoutDateOnTimeSlotsInput
  }

  export type DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput = {
    id?: number
    dateSlotId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateOnTimeSlotCreateOrConnectWithoutTimeSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    create: XOR<DateOnTimeSlotCreateWithoutTimeSlotInput, DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>
  }

  export type DateOnTimeSlotUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    update: XOR<DateOnTimeSlotUpdateWithoutTimeSlotInput, DateOnTimeSlotUncheckedUpdateWithoutTimeSlotInput>
    create: XOR<DateOnTimeSlotCreateWithoutTimeSlotInput, DateOnTimeSlotUncheckedCreateWithoutTimeSlotInput>
  }

  export type DateOnTimeSlotUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: DateOnTimeSlotWhereUniqueInput
    data: XOR<DateOnTimeSlotUpdateWithoutTimeSlotInput, DateOnTimeSlotUncheckedUpdateWithoutTimeSlotInput>
  }

  export type DateOnTimeSlotUpdateManyWithWhereWithoutTimeSlotInput = {
    where: DateOnTimeSlotScalarWhereInput
    data: XOR<DateOnTimeSlotUpdateManyMutationInput, DateOnTimeSlotUncheckedUpdateManyWithoutDateOnTimeSlotsInput>
  }

  export type GroupMeetingCreateWithoutCustomerInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutCustomerInput = {
    id?: number
    locationId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutCustomerInput, GroupMeetingUncheckedCreateWithoutCustomerInput>
  }

  export type DateSlotCreateWithoutCustormerInput = {
    name: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    eventType: EventTypeCreateNestedOneWithoutDateSlotsInput
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
    dateOnTimeSlots?: DateOnTimeSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutCustormerInput = {
    id?: number
    availabilityScheduleId?: number | null
    name: Date | string
    eventId: number
    dayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutCustormerInput, DateSlotUncheckedCreateWithoutCustormerInput>
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutCustomerInput, GroupMeetingUncheckedUpdateWithoutCustomerInput>
    create: XOR<GroupMeetingCreateWithoutCustomerInput, GroupMeetingUncheckedCreateWithoutCustomerInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutCustomerInput, GroupMeetingUncheckedUpdateWithoutCustomerInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutCustomerInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type DateSlotUpsertWithWhereUniqueWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutCustormerInput, DateSlotUncheckedUpdateWithoutCustormerInput>
    create: XOR<DateSlotCreateWithoutCustormerInput, DateSlotUncheckedCreateWithoutCustormerInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutCustormerInput, DateSlotUncheckedUpdateWithoutCustormerInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutCustormerInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type UserCreateWithoutBillingsInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentCreateNestedManyWithoutAttendeeInput
  }

  export type UserUncheckedCreateWithoutBillingsInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentUncheckedCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type UserCreateOrConnectWithoutBillingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
  }

  export type UserUpsertWithoutBillingsInput = {
    update: XOR<UserUpdateWithoutBillingsInput, UserUncheckedUpdateWithoutBillingsInput>
    create: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
  }

  export type UserUpdateWithoutBillingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUncheckedUpdateWithoutBillingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type LocationCreateWithoutGroupMeetingsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutGroupMeetingsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type CustomerCreateWithoutGroupMeetingsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutCustormerInput
  }

  export type CustomerCreateOrConnectWithoutGroupMeetingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type EventTypeCreateWithoutGroupMeetingsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutGroupMeetingsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type UserOnGroupMeetingCreateWithoutGroupMeetingInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    create: XOR<UserOnGroupMeetingCreateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>
  }

  export type LocationUpsertWithoutGroupMeetingsInput = {
    update: XOR<LocationUpdateWithoutGroupMeetingsInput, LocationUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type LocationUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type CustomerUpsertWithoutGroupMeetingsInput = {
    update: XOR<CustomerUpdateWithoutGroupMeetingsInput, CustomerUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type CustomerUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutCustormerNestedInput
  }

  export type EventTypeUpsertWithoutGroupMeetingsInput = {
    update: XOR<EventTypeUpdateWithoutGroupMeetingsInput, EventTypeUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type EventTypeUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    update: XOR<UserOnGroupMeetingUpdateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput>
    create: XOR<UserOnGroupMeetingCreateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>
  }

  export type UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    data: XOR<UserOnGroupMeetingUpdateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput>
  }

  export type UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingScalarWhereInput
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput>
  }

  export type UserCreateWithoutUserOnGroupMeetingsInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentCreateNestedManyWithoutAttendeeInput
  }

  export type UserUncheckedCreateWithoutUserOnGroupMeetingsInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentUncheckedCreateNestedManyWithoutOrganizerInput
    appointmentsAttending?: AppointmentUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type UserCreateOrConnectWithoutUserOnGroupMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingCreateWithoutUserOnGroupMeetingsInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
  }

  export type GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type UserUpsertWithoutUserOnGroupMeetingsInput = {
    update: XOR<UserUpdateWithoutUserOnGroupMeetingsInput, UserUncheckedUpdateWithoutUserOnGroupMeetingsInput>
    create: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type UserUpdateWithoutUserOnGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput
    appointmentsAttending?: AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type GroupMeetingUpsertWithoutUserOnGroupMeetingsInput = {
    update: XOR<GroupMeetingUpdateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput>
    create: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingUpdateWithoutUserOnGroupMeetingsInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAppointmentsOrganizedInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
    appointmentsAttending?: AppointmentCreateNestedManyWithoutAttendeeInput
  }

  export type UserUncheckedCreateWithoutAppointmentsOrganizedInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
    appointmentsAttending?: AppointmentUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type UserCreateOrConnectWithoutAppointmentsOrganizedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsOrganizedInput, UserUncheckedCreateWithoutAppointmentsOrganizedInput>
  }

  export type UserCreateWithoutAppointmentsAttendingInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAttendingInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
    appointmentsOrganized?: AppointmentUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAttendingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAttendingInput, UserUncheckedCreateWithoutAppointmentsAttendingInput>
  }

  export type EventTypeCreateWithoutAppointmentsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    dateSlots?: DateSlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutAppointmentsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutAppointmentsInput, EventTypeUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsOrganizedInput = {
    update: XOR<UserUpdateWithoutAppointmentsOrganizedInput, UserUncheckedUpdateWithoutAppointmentsOrganizedInput>
    create: XOR<UserCreateWithoutAppointmentsOrganizedInput, UserUncheckedCreateWithoutAppointmentsOrganizedInput>
  }

  export type UserUpdateWithoutAppointmentsOrganizedInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
    appointmentsAttending?: AppointmentUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsOrganizedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsAttending?: AppointmentUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type UserUpsertWithoutAppointmentsAttendingInput = {
    update: XOR<UserUpdateWithoutAppointmentsAttendingInput, UserUncheckedUpdateWithoutAppointmentsAttendingInput>
    create: XOR<UserCreateWithoutAppointmentsAttendingInput, UserUncheckedCreateWithoutAppointmentsAttendingInput>
  }

  export type UserUpdateWithoutAppointmentsAttendingInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
    appointmentsOrganized?: AppointmentUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type EventTypeUpsertWithoutAppointmentsInput = {
    update: XOR<EventTypeUpdateWithoutAppointmentsInput, EventTypeUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<EventTypeCreateWithoutAppointmentsInput, EventTypeUncheckedCreateWithoutAppointmentsInput>
  }

  export type EventTypeUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateManyWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUpdateWithoutUserInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyWithoutBillingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeeting?: GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutOrganizerInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendee?: UserUpdateOneRequiredWithoutAppointmentsAttendingNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsOrganizedInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutAttendeeInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutAppointmentsOrganizedNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutAttendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUpdateWithoutEventTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotUpdateWithoutEventTypeInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateManyWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUpdateWithoutEventTypeInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutEventTypeInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutAppointmentsOrganizedNestedInput
    attendee?: UserUpdateOneRequiredWithoutAppointmentsAttendingNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    attendeeId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUpdateWithoutLocationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUpdateWithoutLocationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type EventTypeUpdateWithoutAvailabilityScheduleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type DateSlotUpdateWithoutAvailabilityScheduleInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: IntFieldUpdateOperationsInput | number
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUpdateWithoutDaySlotInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutDaySlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateOnTimeSlotUpdateWithoutDateSlotInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: TimeSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput
  }

  export type DateOnTimeSlotUncheckedUpdateWithoutDateSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotUncheckedUpdateManyWithoutDateOnTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOnTimeSlotUpdateWithoutTimeSlotInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlot?: DateSlotUpdateOneRequiredWithoutDateOnTimeSlotsNestedInput
  }

  export type DateOnTimeSlotUncheckedUpdateWithoutTimeSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUpdateWithoutCustomerInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type DateSlotUpdateWithoutCustormerInput = {
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutDateSlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
    dateOnTimeSlots?: DateOnTimeSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutCustormerInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
    dayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOnTimeSlots?: DateOnTimeSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type UserOnGroupMeetingUpdateWithoutGroupMeetingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}