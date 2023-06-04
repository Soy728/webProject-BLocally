import numeral from 'numeral';

export function formatPrice(value: number) {
	if (value < 0) {
		return `-`;
	}
	return `${numeral(value).format('0,00')}`;
}
