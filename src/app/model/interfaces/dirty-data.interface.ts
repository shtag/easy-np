export interface DataField {
  Телефон?: string;
  Фамилия?: string;
  Имя?: string;
  Город?: string;
  Почта?: string;
  Почтомат?: string;
  Цена?: string;
  Наложка?: string;
}

export type Categories = 'Телефон' | 'Фамилия' | 'Имя' | 'Город' | 'Почта' | 'Почтомат' | 'Цена' | 'Наложка'

export type Data = DataField[]