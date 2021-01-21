export type ProductType = {
  id: string;
  title: string;
  coverImageUrl: string;
  city: {
    name: string;
  };
  retailPrice: {
    formattedValue: string;
    formattedIsoValue: string;
    value: number;
  };
  reviewsAvg: number;
  reviewsNumber: number;
  topSeller: boolean;
}