"use client"
import React from 'react'
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react'
import {createViewMonthGrid} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'

const Calendar = () => {
    const kalender = useCalendarApp({
        locale:'id-ID',
        views:[
            createViewMonthGrid()
        ],
        events:[
            {
                id: 1,
                title: "Penyerahan SK",
                start: '2025-01-24 00:00',
                end: '2025-01-26 00:00',
                description: "Penyerahan SK kepada cpns angkatan 2024"
            }
        ],
        selectedDate: '2025-01-24',
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