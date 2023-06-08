import numeral from 'numeral';
import _ from 'lodash';
import moment from 'moment';
import type { Moment } from 'moment';

type DateType = number | string | Date | Moment | undefined;
export function formatPrice(value: number) {
	if (value < 0) {
		return `-`;
	}
	return `${numeral(value).format('0,00')}`;
}

export function formatDate(value: string) {
	if (_.isEmpty(value)) {
		return `-`;
	}
	const date = new Date(value);
	return date.toLocaleString();
}

export function dateDH(value: DateType) {
	return moment(value).format('YYYY년 MM월 DD일');
}
