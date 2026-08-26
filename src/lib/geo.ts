export type LatLon = { lat: number; lon: number };
export type Compass8 = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

const COMPASS_POINTS: Compass8[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;

// Initial (forward) great-circle bearing from `from` to `to`, in degrees
// clockwise from north (0 = N, 90 = E, 180 = S, 270 = W).
export function initialBearing(from: LatLon, to: LatLon): number {
  const phi1 = toRad(from.lat);
  const phi2 = toRad(to.lat);
  const deltaLambda = toRad(to.lon - from.lon);

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  const theta = Math.atan2(y, x);

  return (toDeg(theta) + 360) % 360;
}

// Snaps a bearing in degrees to the nearest of 8 compass points.
export function toCompass8(deg: number): Compass8 {
  const normalized = ((deg % 360) + 360) % 360;
  const index = Math.round(normalized / 45) % 8;
  return COMPASS_POINTS[index];
}

// Arithmetic mean of a set of points. Good enough for the small, regional
// clusters this game deals with; not a true geodesic centroid.
export function centroid(points: LatLon[]): LatLon {
  const lat = points.reduce((sum, p) => sum + p.lat, 0) / points.length;
  const lon = points.reduce((sum, p) => sum + p.lon, 0) / points.length;
  return { lat, lon };
}
