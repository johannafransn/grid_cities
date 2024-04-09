//TODO: make use of a better algo to calculate distance this might not be 100% accurate
//Calculates the distance between 2 lat/long coordinates
export const calculateDistance = (
    { lat: lat1, lng: lon1 }: { lat: number; lng: number },
    { lat: lat2, lng: lon2 }: { lat: number; lng: number }
) => {
    const earthRadiusKm = 6371;

    const deg2rad = (deg: number) => deg * (Math.PI / 180);
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
};
