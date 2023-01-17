import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components.css';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
registerLocale('es', es);

export const SelectDay = ({ dateSelected, setDateSelected }) => {
	/* 	armar una bd de mesas { cant_pers_nro: 1, cant_pers: UNO:, cant_mesas: 2 } y asi sucesivamente
		armar una bd de horarios no disponibles { dia: fecha(), hora: '20:00', mesa: 'uno' }
		luego de guardar una reserva debemos actualizar la bd de disponibilidad de forma asincrona
			-buscamos por dia, horario y cant_pers si trae igual o mas reservas que la bd de mesas atributo cant_mesas, 
			 guardamos en horarios no disponibles { dia: fecha(), hora: '20:00', mesa: 'uno'}
			-buscamos por dia en horarios no disponibles y  los actualizamos en dias no disponibles
		para marcar la disponibilidad de mesas traemos de la bd de mesas un array con todas las key (o sea las mesas que existen)
		seleccionamos la mesa
		para marcar los dias no disponibles buscamos en la bd por el dia y mesa los que tienen 3 o mas reservas
		(mandamos un array con los dias al front)
		seteamos los dias disponibles usando las funciones creadas
		seleccionamos el dia
		para marcar las horas no disponibles hacemos una peticion con el dia y la mesa selecionada y traemos un array con las horas 
		reservadas de la base de datos horarios no disponibles
		seteamos las horas no disponibles
		seleccionamos la hora
		lo deguardar la reserva ya esta hecho, faltaria crear las bd faltantes y actualizarlas tras cada reserva

		en la bd ver como conecto una con la otra
		puedo quitar de select hour lo de asignarle la hora ya que  ejecuto a cierta hora un comando 
		que pasa a historico los que estan en esa hora
*/

	// van a venir con la hora seteada asi que los debemos recorrer y setear la hora en 0 para comparar
	// se puede hacer dentro de filter todas las llamadas a las funciones para que sea ams entendible
	const addDays = (date, days) => {
		date.setDate(date.getDate() + days);
		return date;
	};
	const setCeroHours = date => {
		date.setHours(0, 0, 0, 0);
		return date;
	};
	const filter = date => {
		return !diasNoDsponibles.includes(date.getTime());
		// sacar la negacion si usamos dias disponibles
	};
	const diasNoDsponibles = [
		setCeroHours(addDays(new Date(), 4)).getTime(),
		setCeroHours(addDays(new Date(), 5)).getTime(),
		setCeroHours(addDays(new Date(), 6)).getTime(),
		setCeroHours(addDays(new Date(), 7)).getTime(),
	];

	return (
		<div className='select-container'>
			<DatePicker
				locale={es}
				selected={dateSelected}
				onChange={date => setDateSelected(date)}
				placeholderText='Selecciona una fecha disponible'
				strictParsing
				includeDateIntervals={[
					{ start: new Date(), end: addDays(new Date(), 60) },
				]}
				filterDate={filter}
			/>
		</div>
	);
};

SelectDay.propTypes = {
	dateSelected: PropTypes.any,
	setDateSelected: PropTypes.any,
};
