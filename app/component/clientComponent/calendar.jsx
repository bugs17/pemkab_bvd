"use client"
import React from 'react'
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react'
import {createViewMonthGrid} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { formatDateCalander } from '@/app/lib/formatDateForCalander'

const Calendar = ({instances}) => {
    const kalender = useCalendarApp({
        locale:'id-ID',
        views:[
            createViewMonthGrid()
        ],
        events: instances.map((instance) => ({
            id: instance.id,
            title: instance.judul,
            start: formatDateCalander(instance.waktuMulai),
            end: formatDateCalander(instance.waktuSelesai),
            description: instance.deskripsi
        })),
        // selectedDate: '2025-01-24',
        plugins:[
            createEventModalPlugin()
        ]

    })
  return (
    <div>
        <ScheduleXCalendar calendarApp={kalender} />
    </div>
  )
}

export default Calendar