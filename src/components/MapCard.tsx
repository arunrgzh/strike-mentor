import Card, { CardData } from "./Card";
import { MapItem } from "../lib/types";

const MapCard = ({ map }: { map: MapItem }) => {
  const data: CardData = {
    id: map.id,
    title: map.name,
    imageUrl: map.thumbnailUrl,
    subtitle: map.region,
    details: [map.size, map.difficulty],
  };
  return <Card item={data} />;
};

export default MapCard;
