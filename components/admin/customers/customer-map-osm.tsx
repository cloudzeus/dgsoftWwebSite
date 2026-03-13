"use client"

import * as React from "react"
import type { Map, Marker } from "leaflet"
import { MapPin } from "lucide-react"

/** OpenStreetMap tile layer uses the openstreetmap-carto style (tile.openstreetmap.org). */
const OSM_TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
const OSM_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

type CustomerMapOSMProps = {
  lat: number
  lng: number
  name?: string | null
  address?: string | null
}

/** Interactive map with OpenStreetMap Carto tiles and a marker. Leaflet is loaded only on client. */
export function CustomerMapOSM({ lat, lng, name, address }: CustomerMapOSMProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const mapRef = React.useRef<Map | null>(null)
  const markerRef = React.useRef<Marker | null>(null)
  const [ready, setReady] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return

    let mounted = true
    setError(null)

    const init = async () => {
      try {
        const L = (await import("leaflet")).default
        await import("leaflet/dist/leaflet.css")

        // Abort if effect was cleaned up (e.g. React Strict Mode) to avoid "Map container is already initialized"
        if (!mounted) return

        // Fix default marker icon in Next.js (webpack breaks default paths)
        const DefaultIcon = L.icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
        L.Marker.prototype.options.icon = DefaultIcon

        if (!mounted || !containerRef.current) return

        const map = L.map(containerRef.current, {
          center: [lat, lng],
          zoom: 15,
          scrollWheelZoom: true,
        })
        mapRef.current = map

        L.tileLayer(OSM_TILE_URL, {
          attribution: OSM_ATTRIBUTION,
          maxZoom: 19,
        }).addTo(map)

        const marker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            [name, address].filter(Boolean).join(" — ") || `${lat.toFixed(5)}, ${lng.toFixed(5)}`
          )
        markerRef.current = marker

        if (mounted) setReady(true)
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to load map"
        if (mounted) setError(msg)
      }
    }

    init()
    return () => {
      mounted = false
      if (markerRef.current) {
        markerRef.current.remove()
        markerRef.current = null
      }
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [lat, lng, name, address])

  if (error) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-xl border shadow-sm p-6 text-center">
        <MapPin className="w-8 h-8 mx-auto text-zinc-400 mb-2" />
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Map could not be loaded</p>
        <p className="text-[10px] text-zinc-400 mt-1">{error}</p>
        <a
          href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=15`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-primary underline"
        >
          Open in OpenStreetMap
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border overflow-hidden shadow-sm">
      <div
        ref={containerRef}
        className="w-full h-[250px] bg-zinc-100 dark:bg-zinc-800 [&_.leaflet-container]:rounded-b-xl [&_.leaflet-container]:!h-full"
        style={{ opacity: ready ? 1 : 0.6 }}
      />
      {(address ?? name) && (
        <p className="px-3 py-2 text-[10px] text-zinc-500 border-t bg-zinc-50 dark:bg-zinc-900/50">
          {[address, name].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  )
}
