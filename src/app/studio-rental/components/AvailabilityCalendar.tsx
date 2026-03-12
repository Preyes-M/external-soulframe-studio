'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

export default function AvailabilityCalendar() {
  const [currentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Mock booked dates (in real app, fetch from API)
  const bookedDates = [5, 12, 18, 25]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth)
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const handleDateClick = (day: number) => {
    if (!bookedDates.includes(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
    }
  }

  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">{monthName}</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-muted rounded" />
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-error/20 rounded" />
            <span className="text-muted-foreground">Booked</span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={`day_${day}`} className="text-center text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
        {[...Array(firstDay)].map((_, i) => (
          <div key={`empty_${i}`} />
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1
          const isBooked = bookedDates.includes(day)
          const isSelected =
            selectedDate?.getDate() === day &&
            selectedDate?.getMonth() === currentMonth.getMonth()

          return (
            <button
              key={`date_${day}`}
              onClick={() => handleDateClick(day)}
              disabled={isBooked}
              className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                isBooked
                  ? 'bg-error/20 text-muted-foreground cursor-not-allowed'
                  : isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-primary/10 rounded-xl">
          <p className="text-sm text-foreground mb-2">
            Selected: {selectedDate.toLocaleDateString('en-IN', { dateStyle: 'long' })}
          </p>
          <a
            href={`https://wa.me/919731741573?text=I'd like to book the studio on ${selectedDate.toLocaleDateString('en-IN')}`}
            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            <span>Book via WhatsApp</span>
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      )}
    </div>
  )
}