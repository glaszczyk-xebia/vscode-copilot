/**
 * Domain types for artworks from The Metropolitan Museum of Art API
 */

export interface Artwork {
  readonly objectID: number;
  readonly title: string;
  readonly primaryImageSmall: string;
  readonly artistDisplayName: string;
  readonly department: string;
  readonly culture: string;
  readonly period: string;
  readonly dynasty: string;
  readonly reign: string;
  readonly portfolio: string;
  readonly artistRole: string;
  readonly artistPrefix: string;
  readonly artistDisplayBio: string;
  readonly artistSuffix: string;
  readonly artistAlphaSort: string;
  readonly artistNationality: string;
  readonly artistBeginDate: string;
  readonly artistEndDate: string;
  readonly artistGender: string;
  readonly artistWikidata_URL: string;
  readonly artistULAN_URL: string;
  readonly objectDate: string;
  readonly objectBeginDate: number;
  readonly objectEndDate: number;
  readonly medium: string;
  readonly dimensions: string;
  readonly measurementHeight: number;
  readonly measurementWidth: number;
  readonly creditLine: string;
  readonly geographyType: string;
  readonly city: string;
  readonly state: string;
  readonly county: string;
  readonly country: string;
  readonly region: string;
  readonly subregion: string;
  readonly locale: string;
  readonly locus: string;
  readonly excavation: string;
  readonly river: string;
  readonly classification: string;
  readonly rightsAndReproduction: string;
  readonly linkResource: string;
  readonly metadataDate: string;
  readonly repository: string;
  readonly objectURL: string;
  readonly tags: string[];
  readonly objectWikidata_URL: string;
  readonly isHighlight: boolean;
  readonly accessionNumber: string;
  readonly accessionYear: string;
  readonly isPublicDomain: boolean;
  readonly primaryImage: string;
  readonly constituents: Constituent[];
  readonly measurements: Measurement[];
  readonly additionalImages: string[];
  readonly GalleryNumber: string;
}

export interface ArtworkSummary {
  readonly objectID: number;
  readonly title: string;
  readonly primaryImageSmall: string;
  readonly artistDisplayName: string;
}

export interface Constituent {
  readonly constituentID: number;
  readonly role: string;
  readonly name: string;
  readonly constituentULAN_URL: string;
  readonly constituentWikidata_URL: string;
  readonly gender: string;
}

export interface Measurement {
  readonly elementName: string;
  readonly elementDescription: string;
  readonly elementMeasurements: {
    Height: number;
    Width: number;
  };
}

export interface SearchResult {
  readonly total: number;
  readonly objectIDs: number[];
}

export interface LoadingState {
  readonly isLoading: boolean;
  readonly error: string | null;
}
