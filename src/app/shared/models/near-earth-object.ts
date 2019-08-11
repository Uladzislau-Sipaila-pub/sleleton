export class NearEarthObject {
  id: string;
  name: string;
  absoluteMagnitudeH: number;
  estimatedDiameter: {
    estimatedDiameterMin: number,
    estimatedDiameterMax: number
  };
  isPotentiallyHazardousAsteroid: boolean;
  isSentryObject: boolean;
}
