export type ProductType = {
  id: string;
  title: string;
  coverUrl: string;
  city: {
    name: string;
  };
  retailPrice: {
    formattedValue: string;
    value: number;
  };
  reviewsAvg: number;
  reviewsNumber: number;
  topSeller: boolean;
}