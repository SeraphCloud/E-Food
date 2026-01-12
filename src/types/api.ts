export interface Dish {
	id: number;
	nome: string;
	descricao: string;
	preco: number;
	porcao: string;
	foto: string;
}

export interface Restaurant {
	id: number;
	titulo: string;
	destacado: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
	cardapio: Dish[];
}

export interface DeliveryData {
	receiver: string;
	address: {
		description: string;
		city: string;
		zipCode: string;
		number: number;
		complement?: string;
	};
}

export interface CheckoutPayload {
	products: Array<{
		id: number;
		price: number;
	}>;
	delivery: DeliveryData;
	payment: {
		card: {
			name: string;
			number: string;
			code: number;
			expires: {
				month: number;
				year: number;
			};
		};
	};
}

export interface CheckoutResponse {
	orderId: string;
}
