import React, { useState } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CalendarComponent = (props: any) => {
  LocaleConfig;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene.',
      'Feb.',
      'Mar.',
      'Abr.',
      'May.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dic.',
    ],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy',
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  LocaleConfig.defaultLocale = 'es';

  const today = moment().format('YYYY-MM-DD');
  const [selected, setSelected] = useState<string>(today);

  return (
    <Calendar
      onDayLongPress={(day) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          marked: true,
          customStyles: {
            container: {
              backgroundColor: 'green',
              borderRadius: 2,
            },
            text: {
              color: 'white',
            },
          },
        },
        [today]: { selected: true, marked: true, selectedColor: '#F40009', dotColor: '#F40009' },
      }}
      onDayPress={(day: DateData) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        props.onValueChange(day.dateString, moment(day.dateString).format('DD/MM/YY'));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setSelected(day.dateString);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        props.onDaySelect && props.onDaySelect(day);
      }}
      {...props}
    />
  );
};

export default CalendarComponent;
