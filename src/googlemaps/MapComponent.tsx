import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useRef, useState } from "react";
import { useUIStore, useUsersStore } from "../hooks";

export default function MapComponent(){
    
    const { isUserModalOpen } = useUIStore();
    const { activeUser } = useUsersStore();

  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>()
  const [markerCluster, setMarkerClusters] = useState<MarkerClusterer>();
  const [marker, setMarker] = useState<{lat: number, lng: number} | undefined>();

  useEffect( () => {
    if(map && !markerCluster){
        setMarker({lat: activeUser.lat, lng: activeUser.lon})
        setMarkerClusters(new MarkerClusterer({map, markers: [], }));
    }
  }, [isUserModalOpen])

  useEffect(()=>{
    if(ref.current && !map){
      setMap(new window.google.maps.Map(ref.current, {
        center: {lat: 0, lng: -0},
        zoom: 3,
      }))
    }
    if(map && !markerCluster){
      map.addListener('click', (e: google.maps.MapMouseEvent)=> {
        if(e.latLng){
          const {lat, lng} = e.latLng
          setMarker({lat: lat(), lng: lng()})
        }
      })
      setMarkerClusters(new MarkerClusterer({map, markers: [], }));
    }
  }, [map, markerCluster])
  
  useEffect(()=> {
    if(marker && markerCluster){
      markerCluster.clearMarkers();
      markerCluster.addMarker(
        new window.google.maps.Marker({
          position: {lat: marker.lat, lng: marker.lng}
        })
      )
    }
  }, [marker, markerCluster])

  return (
    <>
      <div ref={ref as any} style={{height: "180px", width: "95%"}} ></div>
    </>
  )
}