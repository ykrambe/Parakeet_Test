import type { FlightSeat, TypeSeat } from "@prisma/client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"]
  const SEAT_CODE = [ "A", "B", "C", "D", "E"]
  const seats: {
    seatNumber: string, type: TypeSeat, flightId: string
  }[] = []

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: `${seat}${i}`,
          type: className as TypeSeat,
          flightId
        })
      }
    }
  }

  return seats;
}

export const dateFormat = (date: Date|string|undefined|null, format: string = 'DD MMM YYY HH:mm') => {
  if (!date) {
    return ""
  }

  const dateFormat = dayjs(date).format(format)
  return dateFormat
}

export const rupiahFormat = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value)
}

export const mappingSeats = (seats: FlightSeat[]) => {  
  const totalSeatEconomy = seats.filter((item:any) => item.type === "ECONOMY").length
  const totalSeatBussiness = seats.filter((item:any) => item.type === "BUSINESS").length
  const totalSeatFirst = seats.filter((item:any) => item.type === "FIRST").length

  const economy = seats.filter((item:any) => item.type === "ECONOMY" && item.isBooked).length
  const bussiness = seats.filter((item:any) => item.type === "BUSINESS" && item.isBooked).length
  const first = seats.filter((item:any) => item.type === "FIRST" && item.isBooked).length

  return {
    economy, bussiness, first, totalSeatEconomy, totalSeatBussiness, totalSeatFirst
  }

}