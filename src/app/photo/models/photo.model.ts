export interface Photo {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  asset_type: string
  user: User
  exif: Exif
  location: Location
  meta: Meta
  public_domain: boolean
  tags: Tag[]
  views: number
  downloads: number
  topics: any[]
  related_collections: RelatedCollections
}

export interface AlternativeSlugs {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  "3d-renders": N3dRenders
  wallpapers: Wallpapers
}

export interface N3dRenders {
  status: string
}

export interface Wallpapers {
  status: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: string
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

export interface Exif {
  make: any
  model: any
  name: any
  exposure_time: any
  aperture: any
  focal_length: any
  iso: any
}

export interface Location {
  name: any
  city: any
  country: any
  position: Position
}

export interface Position {
  latitude: any
  longitude: any
}

export interface Meta {
  index: boolean
}

export interface Tag {
  type: string
  title: string
}

export interface RelatedCollections {
  total: number
  type: string
  results: Result[]
}

export interface Result {
  id: string
  title: string
  description?: string
  published_at: string
  last_collected_at: string
  updated_at: string
  featured: boolean
  total_photos: number
  private: boolean
  share_key: string
  links: Links3
  user: User2
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

export interface Links3 {
  self: string
  html: string
  photos: string
  related: string
}

export interface User2 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: string
  bio: string
  location: string
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface Links4 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username: string
  portfolio_url: string
  twitter_username: any
  paypal_email: any
}

export interface CoverPhoto {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs2
  created_at: string
  updated_at: string
  promoted_at?: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description?: string
  breadcrumbs: any[]
  urls: Urls2
  links: Links5
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions2
  asset_type: string
  user: User3
}

export interface AlternativeSlugs2 {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

export interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links5 {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions2 {}

export interface User3 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url: string
  bio: string
  location: string
  links: Links6
  profile_image: ProfileImage3
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social3
}

export interface Links6 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following?: string
  followers?: string
}

export interface ProfileImage3 {
  small: string
  medium: string
  large: string
}

export interface Social3 {
  instagram_username: string
  portfolio_url: string
  twitter_username?: string
  paypal_email: any
}

export interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  asset_type: string
  urls: Urls3
}

export interface Urls3 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
