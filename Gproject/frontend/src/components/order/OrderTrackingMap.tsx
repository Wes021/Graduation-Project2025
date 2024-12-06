import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const driverLocation: [number, number] = [31.9539, 35.9106];
const deliveryLocation: [number, number] = [31.9522, 35.9334];

const truckIcon = new Icon({
  iconUrl: '/truck-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const destinationIcon = new Icon({
  iconUrl: '/destination-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function SetBoundsComponent() {
  const map = useMap();
  React.useEffect(() => {
    const bounds = [driverLocation, deliveryLocation];
    map.fitBounds(bounds);
  }, [map]);
  return null;
}

export default function OrderTrackingMap() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[31.9539, 35.9106]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={driverLocation} icon={truckIcon} />
          <Marker position={deliveryLocation} icon={destinationIcon} />
          <Polyline
            positions={[driverLocation, deliveryLocation]}
            color="#4F46E5"
            weight={5}
          />
          <SetBoundsComponent />
        </MapContainer>
      </div>

      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('order.estimatedTime')}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              15-20 {t('order.minutes')}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('order.remainingDistance')}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              5.2 {t('order.km')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}