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
							title: 'Pedagog',
							page: '/provimePedagog',
						},
						{
							title: 'Student',
							page: '/orariProvimeveStudent',
						},
						{
							title: 'Salle Dite',
							page: '/',
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
