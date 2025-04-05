
declare module '@mapbox/mapbox-gl-geocoder' {
  import { Map, IControl, MapboxOptions } from 'mapbox-gl';

  export interface GeocoderOptions {
    accessToken?: string;
    mapboxgl?: any;
    marker?: boolean | any;
    flyTo?: boolean | { duration?: number; easing?: (t: number) => number };
    proximity?: { longitude: number; latitude: number };
    trackProximity?: boolean;
    collapsed?: boolean;
    clearAndBlurOnEsc?: boolean;
    clearOnBlur?: boolean;
    bbox?: [number, number, number, number];
    countries?: string;
    types?: string;
    minLength?: number;
    limit?: number;
    language?: string;
    filter?: (feature: any) => boolean;
    localGeocoder?: (query: string) => any[];
    externalGeocoder?: (query: string) => Promise<any>;
    enableEventLogging?: boolean;
    reverseMode?: 'distance' | 'score';
    reverseGeocode?: boolean;
    zoom?: number;
    placeholder?: string;
    render?: (feature: any) => string;
    getItemValue?: (feature: any) => string;
    mode?: 'mapbox.places' | 'mapbox.places-permanent';
    localGeocoderOnly?: boolean;
    autocomplete?: boolean;
    fuzzyMatch?: boolean;
    routing?: boolean;
    worldview?: string;
  }

  export default class MapboxGeocoder implements IControl {
    constructor(options?: GeocoderOptions);

    addTo(map: Map): this;
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): this;
    _removeMarker(): void;
    _onKeyDown(e: KeyboardEvent): void;
    clear(options?: { silent: boolean }): this;
    clearOnBlur(options?: { silent: boolean }): this;
    query(searchInput: string): this;
    setInput(searchInput: string): this;
    setProximity(proximity: { longitude: number; latitude: number } | null): this;
    getProximity(): { longitude: number; latitude: number } | null;
    setRenderFunction(fn: (feature: any) => string): this;
    setLanguage(language: string): this;
    getLanguage(): string;
    getZoom(): number;
    setZoom(zoom: number): this;
    getFlyTo(): boolean | { duration?: number; easing?: (t: number) => number };
    setFlyTo(flyTo: boolean | { duration?: number; easing?: (t: number) => number }): this;
    getBbox(): [number, number, number, number] | null;
    setBbox(bbox: [number, number, number, number] | null): this;
    getCountries(): string | null;
    setCountries(countries: string | null): this;
    getTypes(): string | null;
    setTypes(types: string | null): this;
    getMinLength(): number;
    setMinLength(minLength: number): this;
    getLimit(): number;
    setLimit(limit: number): this;
    getFilter(): ((feature: any) => boolean) | null;
    setFilter(filter: ((feature: any) => boolean) | null): this;
    setOrigin(origin: string): this;
    getOrigin(): string;
    on(type: string, fn: (event?: any) => void): this;
    off(type: string, fn: (event?: any) => void): this;
  }
}
