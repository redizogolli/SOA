export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Orari Provimeve',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/',
					bullet: 'dot',
					submenu: [
						{
							title: 'Salle Dite',
							page: '/',
						},
						{
							title: 'Pedagog',
							page: '/provimePedagog',
						},
						{
							title: 'Student',
							page: '/orariProvimeveStudent',
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
